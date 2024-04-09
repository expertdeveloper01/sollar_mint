<?php

namespace App\Http\Controllers;

use App\Traits\EncryptTrait;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests, EncryptTrait;

    public const NFT_METHODS = ['fixed_price', 'open_for_bids'];
}
