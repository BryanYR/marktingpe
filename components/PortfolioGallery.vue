<script setup lang="ts">
import type { PortfolioItem } from '~/types'

const props = defineProps<{
  item: PortfolioItem | null
  open: boolean
}>()

const emit = defineEmits<{ close: [] }>()

const currentIndex = ref(0)
const thumbnailsRef = ref<HTMLElement | null>(null)

watch(
  () => props.open,
  (val) => {
    currentIndex.value = 0
    document.body.style.overflow = val ? 'hidden' : ''
  },
)

const prev = () => {
  if (!props.item) return
  currentIndex.value =
    (currentIndex.value - 1 + props.item.images.length) % props.item.images.length
  scrollThumbnail()
}

const next = () => {
  if (!props.item) return
  currentIndex.value = (currentIndex.value + 1) % props.item.images.length
  scrollThumbnail()
}

const selectIndex = (index: number) => {
  currentIndex.value = index
  scrollThumbnail()
}

const scrollThumbnail = () => {
  nextTick(() => {
    const container = thumbnailsRef.value
    if (!container) return
    const thumb = container.children[currentIndex.value] as HTMLElement
    if (thumb) thumb.scrollIntoView({ inline: 'center', behavior: 'smooth', block: 'nearest' })
  })
}

const onKeydown = (e: KeyboardEvent) => {
  if (!props.open) return
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open && item"
        class="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-sm"
        @click.self="emit('close')"
      >
        <!-- Header -->
        <div class="flex items-center justify-between px-6 py-4 flex-shrink-0">
          <div class="flex items-center gap-3">
            <h2 class="text-white text-xl font-semibold">{{ item.title }}</h2>
            <span class="text-xs text-white/50 bg-white/10 px-2 py-1 rounded-full">
              {{ item.category }}
            </span>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-white/40 text-sm">
              {{ currentIndex + 1 }} / {{ item.images.length }}
            </span>
            <button
              class="text-white/60 hover:text-white transition-colors p-1"
              aria-label="Cerrar galería"
              @click="emit('close')"
            >
              <Icon name="heroicons:x-mark" class="w-6 h-6" />
            </button>
          </div>
        </div>

        <!-- Main image -->
        <div class="relative flex-1 flex items-center justify-center px-16 min-h-0">
          <button
            class="absolute left-4 text-white/60 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all"
            aria-label="Imagen anterior"
            @click="prev"
          >
            <Icon name="heroicons:chevron-left" class="w-7 h-7" />
          </button>

          <Transition
            enter-active-class="transition-opacity duration-200"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-150"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
            mode="out-in"
          >
            <img
              :key="currentIndex"
              :src="item.images[currentIndex]"
              :alt="`${item.title} - imagen ${currentIndex + 1}`"
              class="max-h-full max-w-full object-contain rounded-lg select-none"
            />
          </Transition>

          <button
            class="absolute right-4 text-white/60 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all"
            aria-label="Imagen siguiente"
            @click="next"
          >
            <Icon name="heroicons:chevron-right" class="w-7 h-7" />
          </button>
        </div>

        <!-- Thumbnails strip -->
        <div class="flex-shrink-0 px-6 py-4">
          <div
            ref="thumbnailsRef"
            class="flex gap-2 overflow-x-auto pb-1 scrollbar-hide justify-center"
          >
            <button
              v-for="(img, index) in item.images"
              :key="index"
              class="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all"
              :class="
                index === currentIndex
                  ? 'ring-2 ring-white opacity-100 scale-105'
                  : 'opacity-40 hover:opacity-70'
              "
              :aria-label="`Ver imagen ${index + 1}`"
              @click="selectIndex(index)"
            >
              <img
                :src="img"
                :alt="`${item.title} thumbnail ${index + 1}`"
                class="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.scrollbar-hide {
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
