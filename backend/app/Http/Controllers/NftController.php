<?php

namespace App\Http\Controllers;

use App\Models\Nft;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class NftController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(): JsonResponse
    {
        $nfts = Nft::where('status', 1)
            ->paginate(5, ['*'])
            ->withQueryString()
            ->toArray();

        $nfts['data'] = self::encryptByKey($nfts['data']);
        return response()->json([
            ...$nfts,
            "status" => true,
            "message" => ""
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        $requestData = self::decryptByKey($request->all(), ['collection_id', 'payment_token_id', 'network_id']);
        $validator = Validator::make($requestData, [
            'title' => 'required|max:255',
            'token_id' => 'required|numeric',
            'item_id' => 'required|unique:nfts,item_id',
            'description' => 'required|max:255',
            'price' => 'required|numeric',
            'metadata' => 'required|string',
            'asset' => 'required|string',
            'method' => ['required', Rule::in(self::NFT_METHODS)],
            'asset_type' => ['required', Rule::in(['audio', 'video', 'image'])],
            'asset_banner' => Rule::requiredIf($request->asset_type == "video" || $request->asset_type == "audio"),
            'collection_id' => 'required|exists:collections,id',
            'payment_token_id' => 'required|exists:payment_tokens,id',
            'network_id' => 'required|exists:ens_networks,id',
            'transaction' => 'required|array'
        ]);
 
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
                "message" => $validator->errors()->first()
            ], 401);
        }

        $nft = new Nft;
        $nft->title = $request->title;
        $nft->token_id = $request->token_id;
        $nft->item_id = $request->item_id;
        $nft->description = $request->description;
        $nft->price = $request->price;
        $nft->method = $request->method;
        $nft->metadata = $request->metadata;
        $nft->asset = $request->asset;
        $nft->asset_type = $request->asset_type;
        $nft->asset_banner = $request->asset_banner;
        $nft->owner_id = Auth::user()->id;
        $nft->collection_id = $requestData['collection_id'];
        $nft->payment_token_id = $requestData['payment_token_id'];
        $nft->ens_network_id = $requestData['network_id'];
        $nft->royalties = $request->royalties;
        $nft->number_of_copies = $request->number_of_copies > 0 ? $request->number_of_copies : 0;
        $nft->unlock_once_purchased = $request->unlock_once_purchased == 1 ? 1 : 0;
        $nft->created_by = Auth::user()->id;
        $nft->updated_by = Auth::user()->id;
        if($nft->save()) {

            return response()->json([
                'status' => true,
                "message" => "",
                "data" => self::encryptByKey($nft, ["id", "collection_id", "payment_token_id", "network_id"])
            ]);
        } else {
            $message = "Collection not created!";
            return response()->json([
                'status' => false,
                'errors' => [$message],
                "message" => $message
            ], 401);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id): JsonResponse
    {
        $nft = Nft::where('status', 1)->where('id', $id)->first();

        return response()->json([
            "status" => $nft ? true : false,
            "message" => $nft ? "" : "Nft data not found!",
            "data" => $nft
        ], $nft ? 200 : 404);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
