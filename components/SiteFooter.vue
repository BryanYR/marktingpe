<script setup lang="ts">
import { SOCIAL_LINKS } from '~/constants/social'

const { scrollToSection } = useScrollToSection()

const currentYear = new Date().getFullYear()

const navigation = {
  company: [
    { name: 'Nosotros', id: 'about' },
    { name: 'Servicios', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Metodología', id: 'methodology' },
  ],
}
</script>

<template>
  <footer class="bg-primary text-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <!-- Brand -->
        <div class="space-y-4">
          <h3 class="text-2xl">
            <span class="font-bold">Mark</span><span class="font-normal">ting</span><span class="font-normal text-white/80">.pe</span>
          </h3>
          <p class="text-white/70 text-sm">
            Transformamos ideas en resultados. Agencia de marketing digital especializada en estrategias innovadoras.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
          <ul class="space-y-2">
            <li v-for="item in navigation.company" :key="item.id">
              <button
                @click="scrollToSection(item.id)"
                class="text-white/70 hover:text-white transition-colors text-sm"
              >
                {{ item.name }}
              </button>
            </li>
          </ul>
        </div>

        <!-- Contact & Social -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Contacto</h4>
          <div class="space-y-3 mb-6">
            <p class="text-white/70 text-sm flex items-center gap-2">
              <Icon name="heroicons:envelope" class="w-5 h-5" />
              team@markting.pe
            </p>
          </div>
          <div class="flex gap-4">
            <a
              v-for="item in SOCIAL_LINKS"
              :key="item.name"
              :href="item.href"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white/70 hover:text-white transition-colors"
              :aria-label="item.name"
            >
              <Icon :name="item.icon" class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
        <p>&copy; {{ currentYear }} Markting.pe . Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>
