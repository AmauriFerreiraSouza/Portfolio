<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

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
}
