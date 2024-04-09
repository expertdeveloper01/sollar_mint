<?php
use Illuminate\Support\Str;

if (!function_exists('first_character')) {
    function first_character($string)
    {
        $new_str = "";
        $array = Str::of($string)->explode(" ");
        foreach ($array as $value) {
            $value = preg_replace('/[^A-Za-z0-9. -]/', '', $value);
            $new_str .= Str::of($value[0])->upper();
        }
        return $new_str;
    }
}