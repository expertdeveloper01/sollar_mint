<?php

// use Illuminate\Http\Request;

use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;

// Controllers
use App\Http\Controllers\NftController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CollectionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group(['middleware' => 'auth:sanctum'], function () {

    Route::get('/user', [UserController::class, 'loginUser']);
    Route::apiResources([
        'collections' => CollectionController::class,
        'nfts' => NftController::class,
    ]);

    
});

// public routes
Route::get('/user/{value}/{type}', [UserController::class, 'userExist']);
Route::get("/get-sign-message", [UserController::class, 'getSignMessage']);
Route::get('categories', [CategoryController::class, "index"]);

