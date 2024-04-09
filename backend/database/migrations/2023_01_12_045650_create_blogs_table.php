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
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->longText('description');
            $table->string('banner');
            $table->foreignId('blog_tag_id')->constrained()->onDelete('cascade');
            $table->boolean('status')->default(false)->comment('0 => Draft, 1 => Publish, 2 => Delete');
            $table->foreignId("created_by")->constrained("users")->onDelete("cascade")->onUpdate("cascade");
            $table->foreignId("updated_by")->constrained("users")->onDelete("cascade")->onUpdate("cascade");
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
        Schema::dropIfExists('blogs');
    }
};
