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
        Schema::create('ens_networks', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string("hex", 10);
            $table->integer('decimal');
            $table->string('slug', 150);
            $table->string('token', 10);
            $table->boolean("is_testnet")->default(false);
            $table->string('scan_url');
            $table->string('rpc_url');
            $table->boolean("status")->default(true);
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
        Schema::dropIfExists('ens_networks');
    }
};
