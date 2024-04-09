<?php

namespace Database\Seeders;

use App\Models\Role;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::insert([
            [
                'name' => "Admin",
                "description" => "First person of the website with whole permission.",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                'name' => "Artist",
                "description" => "Artist has the permission to create item and sell.",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                'name' => "User",
                "description" => "Simple user of the website, not enough permissions.",
                "created_at" => now(),
                "updated_at" => now()
            ]
        ]);
    }
}
