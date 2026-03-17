<script setup lang="ts">
const { isOpen, toggleMenu, closeMenu } = useMobileMenu()
const { scrollToSection } = useScrollToSection()

const navigation = [
  { name: 'Inicio', id: 'hero' },
  { name: 'Nosotros', id: 'about' },
  { name: 'Servicios', id: 'services' },
  { name: 'Portfolio', id: 'portfolio' },
  { name: 'Metodología', id: 'methodology' },
  { name: 'Contacto', id: 'contact' },
]

const handleNavClick = (sectionId: string) => {
  closeMenu()
  scrollToSection(sectionId)
}

const isScrolled = ref(false)

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 10
  }
  window.addEventListener('scroll', handleScroll)
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent backdrop-blur-sm',
    ]"
  >
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <button
            class="text-2xl font-bold   transition-colors"
            :class="isScrolled ? 'text-gray-700' : 'text-white hover:text-white/80'"
            @click="handleNavClick('hero')"
          >
            Markting.pe
          </button>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex md:items-center md:space-x-8">
          <button
            v-for="item in navigation"
            :key="item.id"
            class="transition-colors font-medium"
            :class="isScrolled ? 'text-gray-700' : 'text-white hover:text-white/80'"
            @click="handleNavClick(item.id)"
          >
            {{ item.name }}
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            class="inline-flex items-center justify-center rounded-md p-2  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            :class="isScrolled ? 'text-gray-700' : 'text-white hover:text-white/80'"
            @click="toggleMenu"
          >
            <span class="sr-only">Abrir menú</span>
            <Icon v-if="!isOpen" name="heroicons:bars-3" class="h-6 w-6" />
            <Icon v-else name="heroicons:x-mark" class="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-show="isOpen" class="md:hidden  border-t" :class="isScrolled ? 'bg-white': 'bg-primary'">
        <div class="space-y-1 px-4 pb-3 pt-2">
          <button
            v-for="item in navigation"
            :key="item.id"
            class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700  y transition-colors"
            :class="isScrolled ? 'text-gray-700 hover:bg-primary hover:text-white' : 'text-white  hover:bg-gray-100 hover:text-primary'"
            @click="handleNavClick(item.id)"
          >
            {{ item.name }}
          </button>
        </div>
      </div>
    </Transition>
  </header>
</template>
