<script setup lang="ts">
const services = [
  {
    icon: 'heroicons:megaphone',
    title: 'Marketing Digital',
    description: 'Estrategias integrales de marketing digital para aumentar tu presencia online y generar más conversiones.',
  },
  {
    icon: 'heroicons:device-phone-mobile',
    title: 'Redes Sociales',
    description: 'Gestión profesional de redes sociales para construir comunidades engaged y aumentar tu alcance.',
  },
  {
    icon: 'heroicons:magnifying-glass',
    title: 'SEO & SEM',
    description: 'Optimización para motores de búsqueda y campañas pagadas para mejorar tu visibilidad online.',
  },
  {
    icon: 'heroicons:pencil-square',
    title: 'Content Marketing',
    description: 'Creación de contenido relevante y valioso que atrae, convierte y fideliza a tu audiencia.',
  },
  {
    icon: 'heroicons:envelope',
    title: 'Email Marketing',
    description: 'Campañas de email marketing automatizadas que nutren leads y mejoran la retención de clientes.',
  },
  {
    icon: 'heroicons:presentation-chart-line',
    title: 'Analytics & Reports',
    description: 'Análisis profundo de datos y reportes detallados para optimizar tu estrategia continuamente.',
  },
]
</script>

<template>
  <UiSectionContainer id="services">
    <UiSectionHeading
      title="Nuestros Servicios"
      subtitle="Soluciones de marketing digital diseñadas para impulsar tu negocio"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="group p-8 bg-white rounded-xl border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all duration-300"
      >
        <div class="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
          <Icon :name="service.icon" class="w-7 h-7 text-primary group-hover:text-white transition-colors" />
        </div>
        
        <h3 class="text-xl font-semibold mb-3">{{ service.title }}</h3>
        <p class="text-gray-600 leading-relaxed">{{ service.description }}</p>
      </div>
    </div>
  </UiSectionContainer>
</template>
