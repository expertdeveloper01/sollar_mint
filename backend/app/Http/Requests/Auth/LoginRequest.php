<?php

namespace App\Http\Requests\Auth;

use App\Models\User;
use App\Rules\ValidWalletAddress;
use App\Traits\UserTrait;
use Illuminate\Auth\Events\Lockout;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use App\Traits\Web3Trait;

class LoginRequest extends FormRequest
{
    use Web3Trait, UserTrait;

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            "address" => ["string", "exists:users,address", new ValidWalletAddress],
            "connector.id" => "required|string",
            "connector.name" => "required|string",
            "connector.chain.id" => "required",
            "connector.chain.name" => "required|string",
            "connector.chain.network" => "required|string",
            "signer" => "required|string"
        ];
    }

    /**
     * Get the validation message that apply to the request.
     *
     */
    public function messages(): array
    {
        return [
            "connector.id.required" => "Connector id must be required",
            "connector.id.string" => "Connector id must be numeric value",
            "connector.name.required" => "Connector name must be required",
            "connector.name.string" => "Connector name must be string",
            "connector.chain.id.required" => "Connector chain id must be required",
            "connector.chain.id.numeric" => "Connector chain id must be numeric value",
            "connector.chain.name.required" => "Connector chain name must be required",
            "connector.chain.name.string" => "Connector chain name must be string",
            "connector.chain.network.required" => "Connector network must be required",
            "connector.chain.network.string" => "Connector network must be string"
        ];
    }

    /**
     * Attempt to authenticate the request's credentials.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function authenticate(): void
    {
        $this->ensureIsNotRateLimited();

        $user = User::where('address', $this->address)->where('status', 1)->first();
        if (!$user) {
            RateLimiter::hit($this->throttleKey());

            throw ValidationException::withMessages([
                'address' => __('auth.failed'),
            ]);
        }

        // Get timestamp from session
        $timestamp = $this->session()->get($this->signerTimestamp);

        // Get current user timestamp
        $message = $this->getSignatureMessage($timestamp);

        // verify current user signature
        $varified = $this->verifySignature($message, $this->signer, $this->address);
        if (!$varified['status']) {
            throw ValidationException::withMessages([
                'signer' => __('auth.failed'),
            ]);
        }
        $connector = $this->connector;
        $chain = $connector['chain'];
        $userEnsNetworkRes = $this->getUserEnsNetwork(
            $user->id,
            [$chain['id'], $chain['network']],
            ["decimal", "slug"],
            $this->signer
        );
        if(!$userEnsNetworkRes['status']) {
            throw ValidationException::withMessages([
                'message' => $userEnsNetworkRes['message'],
            ]);
        }
        $userEnsNetwork = $userEnsNetworkRes['data'];
        $updateUserRes = $this->userUpdate($user->id, [
            "ens_network_id" => $userEnsNetwork->id
        ]);
        if(!$updateUserRes['status']) {
            throw ValidationException::withMessages([
                'message' => $updateUserRes['message'],
            ]);
        }

        // Set authenticated data
        Auth::login($updateUserRes['data']);

        RateLimiter::clear($this->throttleKey());
    }

    /**
     * Ensure the login request is not rate limited.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function ensureIsNotRateLimited(): void
    {
        if (!RateLimiter::tooManyAttempts($this->throttleKey(), 5)) {
            return;
        }

        event(new Lockout($this));

        $seconds = RateLimiter::availableIn($this->throttleKey());

        throw ValidationException::withMessages([
            'address' => trans('auth.throttle', [
                'seconds' => $seconds,
                'minutes' => ceil($seconds / 60),
            ]),
        ]);
    }

    /**
     * Get the rate limiting throttle key for the request.
     */
    public function throttleKey(): string
    {
        return Str::transliterate(Str::lower($this->input('address')) . '|' . $this->ip());
    }
}
