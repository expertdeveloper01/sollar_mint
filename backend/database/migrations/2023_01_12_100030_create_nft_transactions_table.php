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
        Schema::create('nft_transactions', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('hash');
            $table->string('to')->nullable();
            $table->string('from');
            $table->string('contract_address');
            $table->integer('index');
            $table->bigInteger('gas_used');
            $table->longText('logs_bloom');
            $table->string('block_hash');
            $table->longText('logs');
            $table->bigInteger('block_number');
            $table->integer('confirmations');
            $table->bigInteger('cumulative_gas_used');
            $table->bigInteger('effective_gas_price');
            $table->longText('events');
            $table->foreignId('nft_id')->constrained()->onDelete('cascade');
            $table->foreignId('created_by')->constrained('users')->onDelete('cascade');
            $table->boolean('status')->default(true);
            $table->boolean('byzantium')->default(false);
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
        Schema::dropIfExists('nft_transactions');
    }
};
