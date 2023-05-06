<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class CategoryController extends Controller
{
    public function index()
    {
        return response()->json('Categories Index');
    }

    public function store(Request $request)
    {
        try {
            $response = [];
            $validator = Validator::make(
                $request->all(),
                [
                    'categories_name' => 'required',
                ]
            );

            if ($validator->fails()) {
                return response()->json(["status" => "failed", "message" => "Validation Error", "errors" => $validator->errors()], Response::HTTP_UNPROCESSABLE_ENTITY);
            }
            Category::create([
                'categories_name' => $request->categories_name,
            ]);
            $response["status"] = "success";
            $response["message"] = "Category Success Added!";
        } catch (QueryException $e) {
            $error = [
                'error' => $e->getMessage()
            ];
            return response()->json($error, Response::HTTP_UNPROCESSABLE_ENTITY);
        }
        return response()->json($response, Response::HTTP_CREATED);
    }

    public function show($id)
    {
        // try {
        //     $gallery = Gallery::findOrFail($id);
        //     $response = [$gallery];
        //     return response()->json($response, Response::HTTP_OK);
        // } catch (QueryException $e) {
        //     $error = [
        //         'error' => $e->getMessage()
        //     ];
        //     return response()->json($error, Response::HTTP_UNPROCESSABLE_ENTITY);
        // }
    }

    public function update(Request $request, $id)
    {
        try {
            $response = [];
            $validator = Validator::make(
                $request->all(),
                [
                    'categories_name' => 'required',
                ]
            );

            if ($validator->fails()) {
                return response()->json(["status" => "failed", "message" => "Validation Error", "errors" => $validator->errors()], Response::HTTP_UNPROCESSABLE_ENTITY);
            }
            $category = Category::findOrFail($id);
                    $category->update([
                        'categories_name' => $request->categories_name,
                    ]);
                $response["status"] = "success";
                $response["message"] = "Category Success Updated";
           
        } catch (QueryException $e) {
            $error = [
                'error' => $e->getMessage()
            ];
            return response()->json($error, Response::HTTP_UNPROCESSABLE_ENTITY);
        }
        return response()->json($response);
    }
    public function destroy($id)
    {
        // try {
        //     $gallery = Gallery::findOrFail($id);
        //     Storage::disk('local')->delete('public/uploads/' . $gallery->foto);
        //     $gallery->delete();
        //     $response["status"] = "success";
        //     $response["message"] = "Image Success Deleted";
        // } catch (QueryException $e) {
        //     $error = [
        //         'error' => $e->getMessage()
        //     ];
        //     return response()->json($error, Response::HTTP_UNPROCESSABLE_ENTITY);
        // }
        // return response()->json($response);
    }
}
