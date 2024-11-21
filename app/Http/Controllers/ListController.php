<?php

namespace App\Http\Controllers;

use App\Models\ListDrink;
use Illuminate\Http\Request;
use Inertia\Inertia;

class   ListController extends Controller
{
    //

    public function index()
    {

        $lists = ListDrink::all();
        return Inertia::render('List/Index',[
            'lists' => $lists
        ]);
    }

    public function create(Request $request)
    {

        $list = $request->list;


        $listProduct = new ListDrink();
        $listProduct->name = $list;
        $listProduct->save();
        return redirect()->back();
    }

    public function destroy($id)
    {
        $list = ListDrink::find($id);
        $list->delete();
        return redirect()->back();
    }

}
