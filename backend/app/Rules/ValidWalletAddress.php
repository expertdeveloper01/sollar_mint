<?php

namespace App\Rules;

use App\Traits\Web3Trait;
use kornrunner\Keccak;
use Illuminate\Contracts\Validation\Rule;

class ValidWalletAddress implements Rule
{
    use Web3Trait;
    
    /**
     * @var Keccak
     */
    protected $keccak;

    /**
     * @var number
     */
    protected $charLength;

    public function __construct($length = 40)
    {
        $this->keccak = new Keccak;
        $this->charLength = $length;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return $this->validAddress($value);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The :attribute must be a valid address.';
    }

    
}
