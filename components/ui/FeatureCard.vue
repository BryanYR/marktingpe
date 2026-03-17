<script setup lang="ts">
interface Props {
  icon?: string
  title: string
  description: string
  variant?: 'default' | 'bordered' | 'elevated'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})

const variantClasses = {
  default: 'bg-white',
  bordered: 'bg-white border-2 border-gray-100 hover:border-primary',
  elevated: 'bg-white shadow-md hover:shadow-xl',
}
</script>

<template>
  <div
    :class="[
      'p-6 rounded-xl transition-all duration-300',
      variantClasses[variant],
    ]"
  >
    <div v-if="icon" class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
      <Icon :name="icon" class="w-6 h-6 text-primary" />
    </div>
    
    <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
    
    <div v-if="$slots.default" class="mt-4">
      <slot />
    </div>
  </div>
</template>
