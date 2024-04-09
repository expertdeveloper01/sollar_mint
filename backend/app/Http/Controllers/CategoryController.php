<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Traits\EncryptTrait;
// use Illuminate\Http\Request;

class CategoryController extends Controller
{
    use EncryptTrait;

    public function index()
    {
        $categories = Category::where("status", 1)->get();  
        return response()->json([
            "status" => true,
            "message" => "",
            "data" => self::encryptByKey($categories)
        ]);
    }
}
