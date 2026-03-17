<script setup lang="ts">
const portfolioItems = [
  {
    title: 'Date',
    category: 'E-commerce',
    description: 'Incremento del 250% en ventas online mediante estrategia integral de marketing.',
    metrics: ['+250% Ventas', '+180% Tráfico', '+95% Conversión'],
    image: '/images/date.webp',
  },
  {
    title: 'Educa',
    category: 'Tecnología',
    description: 'Lanzamiento exitoso con 1,000 usuarios en el primer mes mediante campañas digitales.',
    metrics: ['1K Usuarios', '+300% ROI', '50K Impresiones'],
    image: '/images/educa.webp',
  },
  {
    title: 'Godesh',
    category: 'Restaurantes',
    description: 'Revitalización de marca y aumento de reservas en un 180% con marketing local.',
    metrics: ['+180% Reservas', '+220% Engagement', '15K Seguidores'],
    image: '/images/godesh.webp',
  },
  {
    title: 'Inmus',
    category: 'Inmobiliaria',
    description: 'Estrategia digital que generó un aumento del 200% en leads calificados.',
    metrics: ['+200% Leads', '+150% CTR', '25K Visitas'],
    image: '/images/inmus.webp',
  },
  {
    title: 'Medik',
    category: 'Salud',
    description: 'Campaña de branding que posicionó la marca como líder en su sector.',
    metrics: ['+300% Awareness', '+120% Consultas', '40K Alcance'],
    image: '/images/medik.webp',
  },
  {
    title: 'PeopleOS',
    category: 'Software',
    description: 'Lanzamiento de producto con estrategia omnicanal que superó objetivos en 180%.',
    metrics: ['+180% objetivo', '2K Registros', '+250% ROI'],
    image: '/images/peopleOs.png',
  },
  {
    title: 'PYC',
    category: 'Servicios',
    description: 'Transformación digital que incrementó la presencia online en un 300%.',
    metrics: ['+300% Online', '+200% Engagement', '30K Usuarios'],
    image: '/images/pyc.webp',
  },
  {
    title: 'Stanza',
    category: 'Retail',
    description: 'Estrategia de contenido que generó un crecimiento sostenido del 220%.',
    metrics: ['+220% Ventas', '+180% Tráfico', '35K Seguidores'],
    image: '/images/stanza.webp',
  },
  {
    title: 'Tehno',
    category: 'Tecnología',
    description: 'Campaña de performance marketing con ROI excepcional del 400%.',
    metrics: ['+400% ROI', '+280% Conversiones', '50K Clics'],
    image: '/images/tehno.webp',
  },
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
