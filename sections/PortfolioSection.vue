<script setup lang="ts">
import { portfolioItems } from '~/constants/portfolio'
import type { PortfolioItem } from '~/types'

const selectedItem = ref<PortfolioItem | null>(null)
const galleryOpen = ref(false)

const openGallery = (item: PortfolioItem) => {
  selectedItem.value = item
  galleryOpen.value = true
}

const closeGallery = () => {
  galleryOpen.value = false
}
</script>

<template>
  <UiSectionContainer id="portfolio" class-name="bg-gray-50">
    <UiSectionHeading
      title="Marcas que confiaron en nosotros"
      subtitle="Diseño y gestión de redes sociales"
    />

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <button
        v-for="(item, index) in portfolioItems"
        :key="index"
        class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 text-left cursor-pointer"
        @click="openGallery(item)"
      >
        <!-- Image -->
        <div class="relative h-56 overflow-hidden bg-gray-100">
          <img
            :src="item.images[0]"
            :alt="item.title"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-5">
            <span class="text-white text-sm font-medium flex items-center gap-1.5">
              <Icon name="heroicons:photo" class="w-4 h-4" />
              Ver galería ({{ item.images.length }})
            </span>
          </div>
        </div>

        <!-- Content -->
        <div class="p-6 space-y-2">
          <UiBadge variant="primary" size="sm">{{ item.category }}</UiBadge>
          <h3 class="text-xl font-semibold">{{ item.title }}</h3>
        </div>
      </button>
    </div>

    <PortfolioGallery
      :item="selectedItem"
      :open="galleryOpen"
      @close="closeGallery"
    />
  </UiSectionContainer>
</template>
