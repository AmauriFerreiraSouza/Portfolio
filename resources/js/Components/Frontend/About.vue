<template>
    <section id="about" class="section bg-light-secondary dark:bg-dark-secondary">
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
        <div class="flex flex-col xl:flex-row gap-24">
          <img
            class="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src="http://localhost:8000/img/about.jpg"
            alt="about"
          />
          <div
            class="
              flex flex-col
              items-center
              text-center
              lg:items-start lg:text-left
            "
          >
            <div class="flex flex-col">
              <h2 class="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
                Sobre Mim
              </h2>
              <P class="mb-4 text-accent">Desenvolvedor Web Freelance</P>
              <hr class="mb-8 opacity-90 dark:opacity-5" />
              <p class="mb-8">
                Formado pela ETEC no curso de Desenvovimento de Sistema.
                Após o termino me dediquei a trabalhar como freelance e junto de mais três amigos criamos a MazalTi especializa no desenvolvimento de soluções web. Nosso primeiro sistema foi para segurança do trabalho chamado TST Online, onde as empresas cadastravam seus funcionários e assim poderiam facilmente emitir documentos como, PPRA, PCMSO, LTCAT entre outros.
                Também trabalhei por 2 anos e meio na 77SEG uma insurtech desenvolvedora de ferramentas digitais para venda de seguros e assistência onde auxíliava no desenvolvimento e manutenção das plataformas.
                <br />
                <br />
                Hoje trabalho atualmente como freelance e procuro uma oportunidade no mercado para mostrar o que sei e aprender mais.
              </p>
            </div>
            <a href="#contact" class="btn btn-md bg-accent text-light-tail-100">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>
