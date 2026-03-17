<script setup lang="ts">
import { tv } from 'tailwind-variants'

const badge = tv({
  base: 'inline-flex items-center rounded-full font-medium',
  variants: {
    variant: {
      primary: 'bg-primary/10 text-primary',
      secondary: 'bg-gray-100 text-gray-700',
      outline: 'border-2 border-primary text-primary',
    },
    size: {
      sm: 'px-2 py-1 text-xs',
      md: 'px-3 py-1 text-sm',
      lg: 'px-4 py-2 text-base',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

interface Props {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
})
</script>

<template>
  <span :class="badge({ variant, size })">
    <slot />
  </span>
</template>
