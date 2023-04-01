<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class GalleryController extends Controller
{
    public function index()
    {
        return response()->json('Gallery Index');
    }

    public function store(Request $request)
    {
        try {
            $response = [];
            $validator = Validator::make(
                $request->all(),
                [
                    'categories_id' => 'required',
                    'foto' => 'required',
                    'foto.*' => 'required|image|mimes:jpg,jpeg,png,gif,svg',
                ]
            );

            if ($validator->fails()) {
                return response()->json(["status" => "failed", "message" => "Validation Error", "errors" => $validator->errors()], Response::HTTP_UNPROCESSABLE_ENTITY);
            }

            if ($request->has('foto')) {
                foreach ($request->file('foto') as $images) {
                    $filename = Str::random(20) . "." . $images->getClientOriginalExtension();
                    $images->storeAs('public/uploads/', $filename);

                    Gallery::create([
                        'categories_id' => $request->categories_id,
                        'foto' => $filename
                    ]);
                }
                $response["status"] = "success";
                $response["message"] = "Image Success Uploaded";
            } else {
                $response["status"] = "Error";
                $response["message"] = "Image Failed to Upload";
            }
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
        try {
            $gallery = Gallery::findOrFail($id);
            $response = [$gallery];
            return response()->json($response, Response::HTTP_OK);
        } catch (QueryException $e) {
            $error = [
                'error' => $e->getMessage()
            ];
            return response()->json($error, Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $response = [];
            $validator = Validator::make(
                $request->all(),
                [
                    'categories_id' => 'required',
                    'foto' => 'required',
                    'foto.*' => 'required|image|mimes:jpg,jpeg,png,gif,svg',
                ]
            );

            if ($validator->fails()) {
                return response()->json(["status" => "failed", "message" => "Validation Error", "errors" => $validator->errors()], Response::HTTP_UNPROCESSABLE_ENTITY);
            }
            $gallery = Gallery::findOrFail($id);

            if ($request->has('foto')) {
                foreach ($request->file('foto') as $images) {
                    $filename = Str::random(20) . "." . $images->getClientOriginalExtension();
                    Storage::disk('local')->delete('public/uploads/' . $gallery->foto);
                    $images->storeAs('public/uploads/', $filename);

                    $gallery->update([
                        'categories_id' => $request->categories_id,
                        'foto' => $filename
                    ]);
                }
                $response["status"] = "success";
                $response["message"] = "Image Success Uploaded";
            } else {
                $response["status"] = "Error";
                $response["message"] = "Image Failed to Upload";
            }
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
        try {
            $gallery = Gallery::findOrFail($id);
            Storage::disk('local')->delete('public/uploads/' . $gallery->foto);
            $gallery->delete();
            $response["status"] = "success";
            $response["message"] = "Image Success Deleted";

        } catch (QueryException $e) {
            $error = [
                'error' => $e->getMessage()
            ];
            return response()->json($error, Response::HTTP_UNPROCESSABLE_ENTITY);
        }
        return response()->json($response);
    }
}
