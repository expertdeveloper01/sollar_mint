<?php

namespace App\Http\Controllers;

use App\Helpers\SMHelper;
use App\Models\User;
use App\Traits\UserTrait;
use App\Traits\Web3Trait;
use Illuminate\Http\Request;

class UserController extends Controller
{
    use Web3Trait, UserTrait;

    public function userExist($value, $type)
    {
        $user = User::where($type, $value)->where('status', 1)->first();
        $status = 200;
        if($user) {
            $data = [
                "status" => true,
                "message" => "User is already exist!"
            ];
        } else {
            $data = [
                "status" => false,
                "message" => "User not found!"
            ];
            $status = 404;
        }
        return response()->json($data, $status);
    }
    
    public function getSignMessage()
    {
        return $this->signature();
    }

    public function loginUser(Request $request)
    {
        $requestUser = $request->user();
        $user = User::where('id', SMHelper::decrypt($requestUser->id))
            ->with(['chain', "role"])
            ->first();
        
        $data = SMHelper::encryptByKey($user, ['id', 'ens_network_id', "role_id"]);
        unset($data['role_id']);
        unset($data['ens_network_id']);
        return $data;
    }

}
