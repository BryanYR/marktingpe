<script setup lang="ts">
const steps = [
  {
    number: '01',
    title: 'Análisis',
    description: 'Estudiamos tu negocio, competencia y audiencia para crear una estrategia sólida.',
    icon: 'heroicons:chart-bar-square',
  },
  {
    number: '02',
    title: 'Estrategia',
    description: 'Diseñamos un plan personalizado con objetivos claros y métricas de éxito.',
    icon: 'heroicons:light-bulb',
  },
  {
    number: '03',
    title: 'Ejecución',
    description: 'Implementamos las campañas con precisión y atención al detalle.',
    icon: 'heroicons:rocket-launch',
  },
  {
    number: '04',
    title: 'Optimización',
    description: 'Monitoreamos resultados y ajustamos la estrategia para maximizar el ROI.',
    icon: 'heroicons:arrow-trending-up',
  },
]
</script>

<template>
  <UiSectionContainer id="methodology">
    <UiSectionHeading
      title="Nuestra Metodología"
      subtitle="Un proceso probado que garantiza resultados consistentes"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="relative"
      >

        <!-- Step Card -->
        <div class="relative z-10 space-y-4 text-center lg:text-left">
          <div class="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary border-4 border-white shadow-lg">
            <Icon :name="step.icon" class="w-10 h-10 text-white" />
          </div>

          <div class="space-y-2">
            <div class="text-4xl font-bold text-primary/20">{{ step.number }}</div>
            <h3 class="text-xl font-semibold">{{ step.title }}</h3>
            <p class="text-gray-600">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Process Flow for Mobile -->
    <div class="lg:hidden mt-12 space-y-6">
      <div
        v-for="(step, index) in steps"
        :key="`mobile-${index}`"
        class="flex gap-4 p-6 bg-gray-50 rounded-xl"
      >
        <div class="flex-shrink-0">
          <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon :name="step.icon" class="w-8 h-8 text-primary" />
          </div>
        </div>
        <div class="space-y-2">
          <UiBadge variant="primary" size="sm">{{ step.number }}</UiBadge>
          <h3 class="text-lg font-semibold">{{ step.title }}</h3>
          <p class="text-gray-600 text-sm">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </UiSectionContainer>
</template>
