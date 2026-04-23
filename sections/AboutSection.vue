<script setup lang="ts">
const { scrollToSection } = useScrollToSection()
const features = [
  {
    icon: 'heroicons:light-bulb',
    title: 'Metodología de Excelencia',
    description: 'Nuestros procesos y estándares están alineados a la mejora continua y atención a los detalles.',
  },
  {
    icon: 'heroicons:chart-bar',
    title: 'Resultados Medibles',
    description: 'Estrategias basadas en datos con métricas claras y reportes transparentes.',
  },
  {
    icon: 'heroicons:users',
    title: 'Equipo Especializado',
    description: 'Profesionales especializados en cada área del marketing digital.',
  },
]
</script>

<template>
  <UiSectionContainer id="about" class-name="bg-gray-50">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Content -->
      <div class="space-y-6">
        <UiBadge variant="primary">Nosotros</UiBadge>
        
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
          Transformamos ideas en resultados medibles
        </h2>
        
        <p class="text-lg text-gray-600 leading-relaxed">
          Agencia especializada en construir y posicionar marcas que se distinguen por su propuesta de valor, comunicación estratégica y excelencia en cada detalle.
        </p>

        <div class="pt-4">
          <UiAppButton variant="primary" size="lg" @click="scrollToSection('contact')">
            Conoce Más
          </UiAppButton>
        </div>
      </div>

      <!-- Features -->
      <div class="space-y-6">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="flex gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <div class="flex-shrink-0">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon :name="feature.icon" class="w-6 h-6 text-primary" />
            </div>
          </div>
          <div class="space-y-2">
            <h3 class="text-xl font-semibold">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </UiSectionContainer>
</template>
