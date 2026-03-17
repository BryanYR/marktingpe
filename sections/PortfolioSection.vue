<script setup lang="ts">
const portfolioItems = [
  {
    title: 'E-commerce Fashion Brand',
    category: 'E-commerce',
    description: 'Incremento del 250% en ventas online mediante estrategia integral de marketing.',
    metrics: ['+250% Ventas', '+180% Tráfico', '+95% Conversión'],
    image: '/images/portfolio-1.jpg',
  },
  {
    title: 'SaaS Tech Startup',
    category: 'Tecnología',
    description: 'Lanzamiento exitoso con 1,000 usuarios en el primer mes mediante campañas digitales.',
    metrics: ['1K Usuarios', '+300% ROI', '50K Impresiones'],
    image: '/images/portfolio-2.jpg',
  },
  {
    title: 'Restaurant Chain',
    category: 'Restaurantes',
    description: 'Revitalización de marca y aumento de reservas en un 180% con marketing local.',
    metrics: ['+180% Reservas', '+220% Engagement', '15K Seguidores'],
    image: '/images/portfolio-3.jpg',
  },
]
</script>

<template>
  <UiSectionContainer id="portfolio" class-name="bg-gray-50">
    <UiSectionHeading
      title="Casos de Éxito"
      subtitle="Resultados reales de nuestras estrategias de marketing"
    />

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div
        v-for="(item, index) in portfolioItems"
        :key="index"
        class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
      >
        <!-- Image Placeholder -->
        <div class="relative h-56 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
          <Icon name="heroicons:photo" class="w-20 h-20 text-primary/30" />
          <div class="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors"></div>
        </div>

        <!-- Content -->
        <div class="p-6 space-y-4">
          <UiBadge variant="primary" size="sm">{{ item.category }}</UiBadge>
          
          <h3 class="text-xl font-semibold">{{ item.title }}</h3>
          
          <p class="text-gray-600">{{ item.description }}</p>

          <!-- Metrics -->
          <div class="flex flex-wrap gap-2 pt-2">
            <UiBadge
              v-for="(metric, idx) in item.metrics"
              :key="idx"
              variant="secondary"
              size="sm"
            >
              {{ metric }}
            </UiBadge>
          </div>
        </div>
      </div>
    </div>
  </UiSectionContainer>
</template>
