<?php

namespace Database\Seeders;

use App\Models\BlogTag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BlogTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        BlogTag::insert([
            [
                "name" => "Art",
                "description" => "Art tag for the blog",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Application",
                "description" => "Application tag for the blog",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Design",
                "description" => "Design tag for the blog",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Entertainment",
                "description" => "Entertainment tag for the blog",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Memes",
                "description" => "Memes tag for the blog",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Crypto",
                "description" => "Crypto tag for the blog",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Music",
                "description" => "Music tag for the blog",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Print",
                "description" => "Print tag for the blog",
                "created_at" => now(),
                "updated_at" => now()
            ]
        ]);
    }
}
