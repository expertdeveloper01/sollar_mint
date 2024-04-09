<?php

namespace Database\Seeders;

use App\Models\EnsNetwork;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EnsNetworkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        EnsNetwork::insert([
            [
                "name" => "Ethereum",
                "hex" => "0x1",
                "decimal" => 1,
                "slug" => "homestead",
                "token" => "ETH",
                "is_testnet" => 0,
                "scan_url" => "https://etherscan.io/",
                "rpc_url" => "https://eth.llamarpc.com",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Goerli",
                "hex" => "0x5",
                "decimal" => 5,
                "slug" => "goerli",
                "token" => "ETH",
                "is_testnet" => 1,
                "scan_url" => "https://goerli.etherscan.io/",
                "rpc_url" => "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Sepolia",
                "hex" => "0xaa36a7",
                "decimal" => 11155111,
                "slug" => "sepolia",
                "token" => "ETH",
                "is_testnet" => 1,
                "scan_url" => "https://sepolia.etherscan.io/",
                "rpc_url" => "https://rpc.sepolia.org",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Polygon",
                "hex" => "0x89",
                "decimal" => 137,
                "slug" => "matic",
                "token" => "MATIC",
                "is_testnet" => 0,
                "scan_url" => "https://polygonscan.com/",
                "rpc_url" => "https://polygon.llamarpc.com",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Polygon Mumbai",
                "hex" => "0x13881",
                "decimal" => 80001,
                "slug" => "maticmum",
                "token" => "MATIC",
                "is_testnet" => 1,
                "scan_url" => "https://mumbai.polygonscan.com/",
                "rpc_url" => "https://matic-testnet-archive-rpc.bwarelabs.com",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "BNB Smart Chain",
                "hex" => "0x13881",
                "decimal" => 56,
                "slug" => "bsc",
                "token" => "BNB",
                "is_testnet" => 0,
                "scan_url" => "https://bscscan.com/",
                "rpc_url" => "https://bsc-dataseed.binance.org/",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Binance Smart Chain Testnet",
                "hex" => "0x13881",
                "decimal" => 97,
                "slug" => "bsc-testnet",
                "token" => "BNB",
                "is_testnet" => 1,
                "scan_url" => "https://testnet.bscscan.com/",
                "rpc_url" => "https://data-seed-prebsc-1-s1.binance.org:8545/",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Arbitrum One",
                "hex" => "0xA4B1",
                "decimal" => 42161,
                "slug" => "arbitrum",
                "token" => "ETH",
                "is_testnet" => 0,
                "scan_url" => "https://arbiscan.io/",
                "rpc_url" => "https://arb1.arbitrum.io/rpc/",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Arbitrum Goerli",
                "hex" => "0x66EED",
                "decimal" => 421613,
                "slug" => "arbitrum-goerli",
                "token" => "ETH",
                "is_testnet" => 1,
                "scan_url" => "https://goerli.arbiscan.io/",
                "rpc_url" => "https://goerli-rollup.arbitrum.io/rpc/",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Avalanche",
                "hex" => "0xA86A",
                "decimal" => 43114,
                "slug" => "avalanche",
                "token" => "AVAX",
                "is_testnet" => 0,
                "scan_url" => "https://snowtrace.io/",
                "rpc_url" => "https://api.avax.network/ext/bc/C/rpc/",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Avalanche Fuji",
                "hex" => "0xA869",
                "decimal" => 43113,
                "slug" => "avalanche-fuji",
                "token" => "AVAX",
                "is_testnet" => 1,
                "scan_url" => "https://testnet.snowtrace.io/",
                "rpc_url" => "https://api.avax-test.network/ext/bc/C/rpc/",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Fantom",
                "hex" => "0xFA",
                "decimal" => 250,
                "slug" => "fantom",
                "token" => "FTM",
                "is_testnet" => 0,
                "scan_url" => "https://ftmscan.com/",
                "rpc_url" => "https://rpc.ankr.com/fantom/",
                "created_at" => now(),
                "updated_at" => now()
            ],
            [
                "name" => "Fantom Testnet",
                "hex" => "0xFA2",
                "decimal" => 4002,
                "slug" => "fantom-testnet",
                "token" => "FTM",
                "is_testnet" => 1,
                "scan_url" => "https://testnet.ftmscan.com",
                "rpc_url" => "https://rpc.testnet.fantom.network/",
                "created_at" => now(),
                "updated_at" => now()
            ]
        ]);
    }
}
