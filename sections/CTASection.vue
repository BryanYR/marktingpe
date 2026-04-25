<script setup lang="ts">
const { scrollToSection } = useScrollToSection()
</script>

<template>
  <UiSectionContainer class-name="bg-primary text-white">
    <div class="text-center space-y-8 max-w-4xl mx-auto">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
        ¿Listo para Transformar tu Marca?
      </h2>
      
      <p class="text-xl md:text-2xl text-white/80">
        Comienza hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos de marketing
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
        <UiAppButton
          variant="secondary"
          size="lg"
          @click="scrollToSection('contact')"
        >
          Solicita una Consulta Gratis
        </UiAppButton>
        <UiAppButton
          variant="outline"
          size="lg"
          class="border-white text-white hover:bg-white hover:!text-primary"
          @click="scrollToSection('portfolio')"
        >
          Ver Trabajos Destacados
        </UiAppButton>
      </div>
    </div>
  </UiSectionContainer>
</template>
