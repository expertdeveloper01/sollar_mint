<?php

namespace App\Traits;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Contracts\Encryption\EncryptException;

trait EncryptTrait
{
    private static $encryption_method = "AES-256-CBC";
    private static $secret_key = 'sdjfhsjkhievu54y47836578348fy384by5883579439n5g';
    private static $secret_iv = 'jhbuiryet9ettttttttt9843547835493v98437nc982437';
    private static $algo = "sha256";

    public static function encrypt(string $string)
    {
        try {
            return Crypt::encrypt($string);
        } catch (EncryptException $e) {
            return $string;
        }
    }

    public static function decrypt(string $string)
    {
        try {
            return Crypt::decrypt($string);
        } catch (DecryptException $e) {
            return $string;
        }
    }

    public static function encode($value)
    {
        if (!$value) return "";
        $passphrase = hash(self::$algo, self::$secret_key);

        // iv - encrypt method AES-256-CBC expects 16 bytes - else you will get a warning
        $iv = substr(hash(self::$algo, self::$secret_iv), 0, 16);
        return base64_encode(openssl_encrypt($value, self::$encryption_method, $passphrase, 0, $iv));
    }

    public static function decode($value)
    {
        if (!$value) return "";
        $passphrase = hash(self::$algo, self::$secret_key);

        // iv - encrypt method AES-256-CBC expects 16 bytes - else you will get a warning
        $iv = substr(hash(self::$algo, self::$secret_iv), 0, 16);
        return openssl_decrypt(base64_decode($value), self::$encryption_method, $passphrase, 0, $iv);
    }

    public static function encryptByKey($data, $key = 'id', $encrypt = false)
    {
        $keys = [];

        if (gettype($key) === "string") {
            $keys = [$key];
        } elseif (gettype($key) === "array") {
            $keys = $key;
        }
        $keys = array_filter($keys);
        if (!count($keys)) return $data;

        if (in_array(gettype($data), ["object", "array"]) || $data instanceof Collection) {
            $data = collect($data);
        } else {
            if ($encrypt) return self::encode($data);
            return $data;
        }
        return $data->map(function($value, $k) use ($keys) {
            return self::encryptByKey($value, $keys, in_array($k, $keys));
        });
    }

    public static function decryptByKey($data, $key = 'id', $encrypt = false)
    {
        $keys = [];

        if (gettype($key) === "string") {
            $keys = [$key];
        } elseif (gettype($key) === "array") {
            $keys = $key;
        }
        $keys = array_filter($keys);
        if (!count($keys)) return $data;

        if (in_array(gettype($data), ["object", "array"]) || $data instanceof Collection) {
            $data = collect($data);
        } else {
            if ($encrypt) return self::decode($data);
            return $data;
        }
        return $data->map(function($value, $k) use ($keys) {
            return self::encryptByKey($value, $keys, in_array($k, $keys));
        });
    }
}
