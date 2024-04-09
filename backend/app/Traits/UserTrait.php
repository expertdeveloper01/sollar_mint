<?php

namespace App\Traits;

use App\Models\EnsNetwork;
use App\Models\User;
use App\Models\UserEnsNetwork;

trait UserTrait
{

    protected function userUpdate($id, $data = []): Array
    {
        $message = "Something went wrong!";
        $data = collect($data);
        $user = User::find($id);
        if(!$user) {
            $message = "User not found!";
        } else {
            $data = $data->only([
                "name", "email", "address", "username", "description", "ens_network_id",
                "role_id", "theme", "image", "banner", "email_verified_at", "status"
            ]);
            if($data->isNotEmpty()) {
                foreach ($data->all() as $key => $value) {
                    $user->{$key} = $value;
                }
                if($user->save()) {
                    return [
                        "status" => true,
                        "message" => "User data updated successfully!",
                        "data" => $user
                    ];
                }
                $message = "User data not updated successfully!";
            } else {
                $message = "Input data not found!";
            }
        }
        return [
            "status" => false,
            "message" => $message,
            "data" => false
        ];
    }

    protected function validateEnsNetwork($values = [], $columns = ["id"])
    {
        $ensNetwork = new EnsNetwork;
        if(gettype($columns) !== "array") {
            $columns = [$columns];
        }
        foreach ($columns as $key => $column) {
            if($column) {
                $ensNetwork->where($column, $values[$key] ?: (gettype($values) !== "array" ? $values : ""));
            }
        }
        return $ensNetwork->first();

    }

    protected function getUserEnsNetwork($userId, $values = [], $columns = ["id"], $signer)
    {
        // Check user is exist or not
        $user = User::find($userId);
        if(!$user) {
            return [
                "status" => false,
                "message" => "Invalid user!"
            ];
        }

        // Check ens network is exist or not
        $ensNetwork = $this->validateEnsNetwork($values, $columns);
        if(!$ensNetwork) {            
            return [
                "status" => false,
                "message" => "Invalid ens network!"
            ];
        }

        // Check user ens network is exist or not
        $userEnsNetwork = UserEnsNetwork::where("user_id", $user->id)->where('ens_network_id', $ensNetwork->id)->first();
        if(!$userEnsNetwork) {
            $userEnsNetwork = new UserEnsNetwork;
            $userEnsNetwork->signer = $signer;
            $userEnsNetwork->ens_network_id = $ensNetwork->id;
            $userEnsNetwork->user_id = $user->id;
            if(!$userEnsNetwork->save()) {
                return [
                    "status" => false,
                    "message" => "User ens network data not inserted!"
                ];
            } 
        }
        return [
            "status" => true,
            "message" => "",
            "data" => $userEnsNetwork
        ];
    }    

}
