<?php

namespace App\Models;

use App\Traits\EncryptTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Collection extends Model
{
    use HasFactory, EncryptTrait;

    /**
     * Get the category with the colletion.
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Get the payment token with the colletion.
     */
    public function paymentToken()
    {
        return $this->belongsTo(PaymentToken::class, "payment_token_id");
    }

    /**
     * Get the ens network with the colletion.
     */
    public function network()
    {
        return $this->belongsTo(EnsNetwork::class, "ens_network_id");
    }
}
