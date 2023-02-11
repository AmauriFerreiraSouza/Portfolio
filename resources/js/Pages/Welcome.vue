<script setup>
import { Head, Link } from '@inertiajs/vue3';
import FrontendLayout from '@/Layouts/Frontend.vue';
import Hero from '@/Components/Frontend/Hero.vue';
import Promote from '@/Components/Frontend/Promote.vue';
import About from '@/Components/Frontend/About.vue';
</script>

<template>
    <Head title="Bem vindo a o meu" />
    <FrontendLayout>
        <!-- Hero primary -->
        <Hero/>
        <!-- Promote tail--500 -->
        <Promote/>
        <!-- About secondary -->
        <About/>
        <!-- Skills tail-100 -->
        <!-- Portfólio primary -->
        <!-- Services secondary -->
        <!-- Contatct primary -->
    </FrontendLayout>
</template>
