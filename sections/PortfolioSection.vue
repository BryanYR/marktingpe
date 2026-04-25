<script setup lang="ts">
const portfolioItems = [
  {
    title: 'A2',
    category: 'E-commerce',
    description: '',
    metrics: [],
    image: '/images/a2-group.webp',
  },
  {
    title: 'MarketTv',
    category: 'Entretenimiento',
    description: '',
    metrics: [],
    image: '/images/market-tv.webp',
  },
  {
    title: 'Skyriss',
    category: 'Trading',
    description: '',
    metrics: [],
    image: '/images/skyriss.webp',
  },
  {
    title: 'Surevia',
    category: 'Cadena de Suministro',
    description: '',
    metrics: [],
    image: '/images/surevia.webp',
  },
   {
    title: 'R&G Espinosa',
    category: 'Ajustadores Internacionales',
    description: '',
    metrics: [],
    image: '/images/ryg.webp',
  },
  // {
  //   title: 'Date',
  //   category: 'E-commerce',
  //   description: '',
  //   metrics: [],
  //   image: '/images/date.webp',
  // },
  // {
  //   title: 'Educa',
  //   category: 'Tecnología',
  //   description: '',
  //   metrics: [],
  //   image: '/images/educa.webp',
  // },
  {
    title: 'Godesh',
    category: 'Restaurantes',
    description: '',
    metrics: [],
    image: '/images/godesh.webp',
  },
  // {
  //   title: 'Inmus',
  //   category: 'Inmobiliaria',
  //   description: '',
  //   metrics: [],
  //   image: '/images/inmus.webp',
  // },
  {
    title: 'PeopleOS',
    category: 'Software',
    description: '',
    metrics: [],
    image: '/images/people-os.webp',
  },
  {
    title: 'Stanza',
    category: 'Retail',
    description: '',
    metrics: [],
    image: '/images/stanza.webp',
  },
  // {
  //   title: 'Tehno',
  //   category: 'Tecnología',
  //   description: '.',
  //   metrics: [''],
  //   image: '/images/tehno.webp',
  // },
]
</script>

<template>
  <UiSectionContainer id="portfolio" class-name="bg-gray-50">
    <UiSectionHeading
      title="Trabajo Destacado"
      subtitle="Resultados reales de nuestras estrategias de marketing"
    />

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div
        v-for="(item, index) in portfolioItems"
        :key="index"
        class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
      >
        <!-- Image -->
        <div class="relative h-56 overflow-hidden bg-gray-100">
          <img 
            :src="item.image" 
            :alt="item.title" 
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
