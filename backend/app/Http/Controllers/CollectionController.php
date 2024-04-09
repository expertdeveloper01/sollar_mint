<?php

namespace App\Http\Controllers;

use App\Models\Collection;
use App\Rules\ValidWalletAddress;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class CollectionController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(): JsonResponse
    {
        $collections = Collection::where('status', 1)
            ->with(['category', 'paymentToken', 'network'])
            ->paginate(5, ['*'])
            ->withQueryString()
            ->toArray();

        $collections['data'] = self::encryptByKey($collections['data']);
        return response()->json([
            ...$collections,
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
        $requestData = self::decryptByKey($request->all(), ['category_id', 'payment_token_id', 'network_id']);
        $validator = Validator::make($requestData, [
            'name' => 'required|max:255',
            "address" => ["required", "unique|collections,address", new ValidWalletAddress],
            'description' => 'required|max:255',
            'banner' => 'required|string',
            'cover' => 'required|string',
            'category_id' => 'required|exists:categories,id',
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

        $collection = new Collection;
        $collection->name = $request->name;
        $collection->token = first_character($request->name);
        $collection->address = $request->address;
        $collection->description = $request->description;
        $collection->banner = $request->banner;
        $collection->cover = $request->cover;
        $collection->category_id = $requestData['category_id'];
        $collection->payment_token_id = $requestData['payment_token_id'];
        $collection->ens_network_id = $requestData['network_id'];
        if($collection->save()) {

            return response()->json([
                'status' => true,
                "message" => "",
                "data" => self::encryptByKey($collection, ["id", "category_id", "payment_token_id", "network_id"])
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
        $collection = Collection::where('status', 1)
            ->with(['category', 'paymentToken', 'network'])
            ->where('id', $id)
            ->first();
        $data = self::encryptByKey($collection);
        if($collection) {
            unset($data['category_id']);
            unset($data['payment_token_id']);
            unset($data['ens_network_id']);
        }

        return response()->json([
            "status" => $collection ? true : false,
            "message" => $collection ? "" : "Collection data not found!",
            "data" => $data
        ], $collection ? 200 : 404);
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
