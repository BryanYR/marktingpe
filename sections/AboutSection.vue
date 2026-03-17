<script setup lang="ts">
const { scrollToSection } = useScrollToSection()
const features = [
  {
    icon: 'heroicons:light-bulb',
    title: 'Innovación Constante',
    description: 'Siempre a la vanguardia de las últimas tendencias y tecnologías del marketing digital.',
  },
  {
    icon: 'heroicons:chart-bar',
    title: 'Resultados Medibles',
    description: 'Estrategias basadas en datos con métricas claras y reportes transparentes.',
  },
  {
    icon: 'heroicons:users',
    title: 'Equipo Experto',
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
          Somos tu Aliado Estratégico en Marketing Digital
        </h2>
        
        <p class="text-lg text-gray-600 leading-relaxed">
          Nos especializamos en crear estrategias de marketing 
          personalizadas que conectan marcas con sus audiencias de manera auténtica y efectiva.
        </p>
        
        <p class="text-lg text-gray-600 leading-relaxed">
          Nuestro enfoque combina creatividad, análisis de datos y tecnología para entregar 
          campañas que no solo se ven bien, sino que generan resultados reales y medibles.
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
