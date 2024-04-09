<?php

namespace App\Models;

use App\Traits\EncryptTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserEnsNetwork extends Model
{
    use HasFactory, EncryptTrait;
}
