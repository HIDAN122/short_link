<?php

namespace App\Http\Controllers;

use App\Http\Requests\LinkRequest;

class LinkController extends Controller
{
    public function shortLink(LinkRequest $request)
    {
        $data = $request->validated();

        $url = \Bitly::getUrl($data['link']);

        return response()->json([
           'url' => $url
        ]);
    }

}
