<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  align: 'center',
})

const alignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}
</script>

<template>
  <div :class="['mb-12 md:mb-16', alignClasses[align]]">
    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-lg md:text-xl text-gray-600 max-w-3xl" :class="{ 'mx-auto': align === 'center' }">
      {{ subtitle }}
    </p>
  </div>
</template>
