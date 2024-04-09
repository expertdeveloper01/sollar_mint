<?php

namespace Database\Seeders;

use App\Models\Category;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::insert([
            [
                "name" => "Art",
                "slug" => "art",
                "description" => "Art category description.",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Collectibles",
                "slug" => "collectibles",
                "description" => "Collectibles category description.",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Memes",
                "slug" => "memes",
                "description" => "Memes category description.",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Sports",
                "slug" => "sports",
                "description" => "Sports category description.",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Games",
                "slug" => "games",
                "description" => "Games category description.",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Music",
                "slug" => "music",
                "description" => "Music category description.",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Video",
                "slug" => "video",
                "description" => "Video category description.",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Photography",
                "slug" => "photography",
                "description" => "Photography category description.",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Album",
                "slug" => "album",
                "description" => "Album category description.",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Others",
                "slug" => "others",
                "description" => "Others category description.",
                "created_at" => now(),
                "updated_at" => now()
            ]
        ]);
    }
}
