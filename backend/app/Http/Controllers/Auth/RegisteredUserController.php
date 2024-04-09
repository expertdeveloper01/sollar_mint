<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Rules\ValidWalletAddress;
use App\Traits\UserTrait;
use App\Traits\Web3Trait;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class RegisteredUserController extends Controller
{
    use Web3Trait, UserTrait;

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): Response
    {
        $validator = Validator::make($request->all(), [
            "address" => ["string", "unique:users,address", new ValidWalletAddress],
            "connector.id" => "required|string",
            "connector.name" => "required|string",
            "connector.chain.id" => "required",
            "connector.chain.name" => "required|string",
            "connector.chain.network" => "required|string",
            "email" => "email|unique:users",
            "name" => "required|string",
            "signer" => "required|string"
        ], [
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
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
                "message" => $validator->errors()->first()
            ], 401);
        }
        $connector = $request->connector;
        $chain = $connector['chain'];

        $ensNetwork = $this->validateEnsNetwork(
            [$chain['id'], $chain['network']],
            ["decimal", "slug"],
        );
        if (!$ensNetwork) {
            $message = "Invalid connector chain id and network!";
            return response()->json([
                'status' => false,
                'errors' => [$message],
                "message" => $message
            ], 401);
        }
        $user = new User;
        $user->name = Str::squish($request->name);
        $user->email = $request->email;
        $user->address = $request->address;
        $user->username = Str::of($request->name)->lower()->before(' ')->append(now()->timestamp)->squish();
        $user->ens_network_id = $ensNetwork->id;
        $user->role_id = 3;
        if ($user->save()) {
            $this->getUserEnsNetwork(
                $user->id,
                [$chain['id'], $chain['network']],
                ["decimal", "slug"],
                $request->signer
            );
            // if (!$userEnsNetwork['status']) {
            //     return response()->json([
            //         'status' => false,
            //         'errors' => [$userEnsNetwork['message']],
            //         "message" => $userEnsNetwork['message']
            //     ], 401);
            // }
            event(new Registered($user));

            Auth::login($user);

            return response()->noContent();
        } else {
            return response()->json([
                'status' => false,
                'errors' => [],
                "message" => "User not created!"
            ], 500);
        }
    }
}
