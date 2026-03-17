<script setup lang="ts">
interface Props {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  maxWidth: 'xl',
})

const maxWidthClasses = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full',
}
</script>

<template>
  <section :class="['w-full py-16 md:py-24', className]">
    <div :class="['mx-auto px-4 sm:px-6 lg:px-8', maxWidthClasses[maxWidth]]">
      <slot />
    </div>
  </section>
</template>
