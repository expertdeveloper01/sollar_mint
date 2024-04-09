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
        Schema::create('collections', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('token', 50);
            $table->string('address')->unique();
            $table->string('description')->nullable();
            $table->string('banner');
            $table->string('cover');
            $table->foreignId('category_id')->constrained()->onDelete('cascade');
            $table->foreignId('payment_token_id')->constrained()->onDelete('cascade');
            $table->foreignId('ens_network_id')->constrained()->onDelete('cascade');
            $table->boolean('status')->default(true)->comment('0 => Draft, 1 => Publish, 2 => Delete');
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
        Schema::dropIfExists('collections');
    }
};
