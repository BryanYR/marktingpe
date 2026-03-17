<template>
  <div :class="rootClass" aria-hidden="true">
    <div :class="railClass" :style="{}" :data-y="yClass">
      <div class="relative w-[200%]">
        <div :style="trackStyle" :class="trackClass">
          <div :class="[lineClass, sizeClass, weightClass, colorClass, trackingClass]">
            <span v-for="(w, i) in line" :key="`a-${i}`">{{ w }}</span>
          </div>
          <div :class="[lineClass, sizeClass, weightClass, colorClass, trackingClass]">
            <span v-for="(w, i) in line" :key="`b-${i}`">{{ w }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { marqueeRoot, marqueeRail, marqueeTrack, marqueeLine } from './MarqueeText.style'
const props = withDefaults(
  defineProps<{
    words: string[]
    separator?: string
    durationMs?: number
    sizeClass?: string
    weightClass?: string
    colorClass?: string
    trackingClass?: string
    opacityClass?: string
    yClass?: string
  }>(),
  {
    separator: '   •   ',
    durationMs: 45000,
    sizeClass: 'text-6xl sm:text-8xl lg:text-9xl',
    weightClass: 'font-bold',
    colorClass: 'text-slate-900',
    trackingClass: 'tracking-tight',
    opacityClass: 'opacity-10',
    yClass: 'top-6 sm:top-10',
  }
)

const line = computed(() => {
  if (!props.words?.length) return []
  // Repeat to fill
  const unit = props.words.join(props.separator)
  // Split by separator again for uniform spans
  const repeated = new Array(6).fill(unit).join(props.separator)
  return repeated.split(props.separator)
})

const trackStyle = computed(
  () =>
    ({
      '--marquee-duration': `${props.durationMs}ms`,
    } as Record<string, string>)
)

const rootClass = computed(() => marqueeRoot())
const railClass = computed(() => [marqueeRail(), props.yClass].filter(Boolean).join(' '))
const trackClass = computed(() => [marqueeTrack(), props.opacityClass].filter(Boolean).join(' '))
const lineClass = computed(() => marqueeLine())
</script>

<style scoped>
@keyframes marquee-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
.marquee-track {
  animation: marquee-left var(--marquee-duration) linear infinite;
}
</style>
