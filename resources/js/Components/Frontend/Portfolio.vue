<script setup>
import Projects from './Projects.vue';
defineProps({
  skills: Object,
  projects: Object,
});
</script>
<template>
  <section
    id="portfolio"
    class="section bg-light-primary dark:bg-dark-primary min-h-[500px]"
  >
    <div
      class="container mx-auto"
      v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :visible="{
        opacity: 1,
        y: 0,
      }"
    >
      <div class="flex flex-col items-center text-center">
        <h2 class="section-title">Meus últimos trabalhos</h2>
        <p class="subtitle">
          Aqui estãos os meus últimos projetos desenvolvidos
        </p>
      </div>
    </div>
    <Projects :skills="skills" :projects="projects" />
  </section>
</template>
