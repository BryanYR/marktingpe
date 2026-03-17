<script setup lang="ts">
import { tv } from 'tailwind-variants'

const button = tv({
  base: 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  variants: {
    variant: {
      primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary',
      secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white focus:ring-primary',
      outline: 'bg-transparent text-dark border-2 border-dark hover:bg-dark hover:text-white focus:ring-dark',
    },
    size: {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
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
  as?: 'button' | 'a'
  href?: string
  target?: string
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  as: 'button',
  variant: 'primary',
  size: 'md',
  disabled: false,
  href: undefined,
  target: undefined,
})
</script>

<template>
  <component
    :is="as"
    :href="href"
    :target="target"
    :disabled="disabled"
    :class="button({ variant, size })"
  >
    <slot />
  </component>
</template>
