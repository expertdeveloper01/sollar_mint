<?php

namespace App\Traits;

use Illuminate\Support\Str;
use kornrunner\Keccak;
use Elliptic\EC;
// use Illuminate\Http\Request;

trait Web3Trait
{
    private $signerTimestamp = "signer-timestamp";

    public function signature()
    {
        // Generate some random nonce
        $timestamp = now();

        // Save in session
        session()->put($this->signerTimestamp, $timestamp);

        // Create message with nonce
        return $this->getSignatureMessage($timestamp);
    }

    public static function verifySignature($message, $signature, $address): array
    {
        $hash = Keccak::hash(sprintf("\x19Ethereum Signed Message:\n%s%s", strlen($message), $message), 256);

        $sign = [
            "r" => substr($signature, 2, 64),
            "s" => substr($signature, 66, 64)
        ];

        $recId = ord(hex2bin(substr($signature, 130, 2))) - 27;

        if ($recId !== ($recId & 1)) {
            return [
                "status" => false,
                "message" => "Invalid hex!"
            ];
        }

        $publicKey = (new EC('secp256k1'))->recoverPubKey($hash, $sign, $recId);

        if (
            (string)Str::of($address)->after('0x')->lower() !=
            substr(Keccak::hash(substr(hex2bin($publicKey->encode('hex')), 1), 256), 24)
        ) {
            return [
                "status" => false,
                "message" => "Invalid signature!"
            ];
        }

        return [
            "status" => true,
            "message" => ""
        ];;
    }

    public function validAddress(string $address)
    {
        if ($this->matchesPattern($address)) {
            return $this->isAllSameCaps($address) ?: $this->isValidChecksum($address);
        }

        return false;
    }

    protected function matchesPattern(string $address): int
    {
        return preg_match('/^(0x)?[0-9a-f]{'.$this->charLength.'}$/i', $address);
    }

    protected function isAllSameCaps(string $address): bool
    {
        return preg_match('/^(0x)?[0-9a-f]{'.$this->charLength.'}$/', $address) || preg_match('/^(0x)?[0-9A-F]{'.$this->charLength.'}$/', $address);
    }

    protected function isValidChecksum($address)
    {
        $address = str_replace('0x', '', $address);
        $hash = $this->keccak->hash(strtolower($address), 256);

        for ($i = 0; $i < $this->charLength; $i++) {
            if (ctype_alpha($address[$i])) {
                // Each uppercase letter should correlate with a first bit of 1 in the hash char with the same index,
                // and each lowercase letter with a 0 bit.
                $charInt = intval($hash[$i], 16);

                if ((ctype_upper($address[$i]) && $charInt <= 7) || (ctype_lower($address[$i]) && $charInt > 7)) {
                    return false;
                }
            }
        }

        return true;
    }

    private function getSignatureMessage($timestamp)
    {
        return __("I want to login on Sollar Mint at :timestamp. I accept the Sollar Mint Terms of Service :privacy_policy_url and I am at least 13 years old.", [
            "timestamp" => $timestamp,
            "privacy_policy_url" => env("FRONTEND_URL") . "/privacy-policy",
        ]);
    }
}
