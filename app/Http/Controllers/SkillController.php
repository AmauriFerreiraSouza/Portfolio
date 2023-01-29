<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class SkillController extends Controller
{
    public function index()
    {
        return Inertia::render('Skills/Index');
    }

    public function create()
    {
        return Inertia::render('Skills/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'image'=> ['required'],
            'name' => ['required','min:3'],

        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image')->store('skills');
            Skill::create([
                'name' => $request->name,
                'image' => $image
            ]);

            return Redirect::route('skills.index');
        }

        return Redirect::back();
    }
}
