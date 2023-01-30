<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Skill;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class ProjectController extends Controller
{
    public function index()
    {
        return Inertia::render('Projects/Index');
    }

    public function create()
    {
        $skills = Skill::all();//retorna todas as skills
        return Inertia::render('Projects/Create', compact('skills'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'image'=> ['required'],
            'name' => ['required','min:3'],
            'skill_id' => ['required'],

        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image')->store('projects');
            Project::create([
                'skill_id' => $request->skill_id,
                'name' => $request->name,
                'image' => $image,
                'project_url' => $request->project_url
            ]);

            return Redirect::route('projects.index');
        }

        return Redirect::back();
    }
}
