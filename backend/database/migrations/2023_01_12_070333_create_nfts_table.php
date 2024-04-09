<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nfts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->bigInteger('token_id');
            $table->bigInteger('item_id')->unique();
            $table->string('description');
            $table->decimal("price", 8, 4);
            $table->boolean('method')->default(false)->comment('1 => Fixed price, 2 => Open for bids');
            $table->string('metadata');
            $table->string('asset');
            $table->string('asset_type', 50);
            $table->string('asset_banner')->nullable();
            $table->foreignId('owner_id')->constrained("users")->onDelete('cascade');
            $table->foreignId('collection_id')->constrained()->onDelete('cascade');
            $table->foreignId('payment_token_id')->constrained()->onDelete('cascade');
            $table->foreignId('ens_network_id')->constrained()->onDelete('cascade');
            $table->tinyInteger('royalties')->default(0)->comment("In percentage");
            $table->tinyInteger('number_of_copies')->default(0)->comment("Copy of the nft item");
            $table->boolean('unlock_once_purchased')->default(false);
            $table->boolean('on_sale')->default(false)->comment("0 => not on sale, 1 => on sale");
            $table->rememberToken();
            $table->boolean("status")->default(true)->comment('0 => Draft, 1 => Publish, 2 => Delete');
            $table->foreignId('created_by')->constrained("users")->onDelete('cascade');
            $table->foreignId('updated_by')->constrained("users")->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('nfts');
    }
};
