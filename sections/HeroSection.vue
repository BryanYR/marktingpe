<script setup lang="ts">
const { scrollToSection } = useScrollToSection()
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-dark text-white pt-20">
    <div class="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
    
    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
      <div class="space-y-8 animate-fade-in">
        <UiBadge variant="outline" size="lg" class="bg-white/10 text-white border-white/30 uppercase hover:bg-white/20 transition-colors">
          Markting.pe
        </UiBadge>

        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
          Transformamos Ideas en
          <span class="block text-white/90 mt-2">Resultados Medibles</span>
        </h1>

        <p class="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
          Estrategias de marketing innovadoras que impulsan tu marca y generan crecimiento real
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <UiAppButton
            variant="secondary"
            size="lg"
            @click="scrollToSection('contact')"
          >
            Comienza Ahora
          </UiAppButton>
          <UiAppButton
            variant="outline"
            size="lg"
            class="border-white text-white hover:bg-white hover:!text-primary"
            @click="scrollToSection('services')"
          >
            Ver Servicios
          </UiAppButton>
        </div>

      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <Icon name="heroicons:chevron-down" class="w-8 h-8 text-white/60" />
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>
