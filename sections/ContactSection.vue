<script setup lang="ts">
import { SOCIAL_LINKS } from '~/constants/social'

const toast = useToastNotification()

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

const formData = reactive<FormData>({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
})

const isSubmitting = ref(false)
const errors = reactive<Partial<FormData>>({})

const validateForm = (): boolean => {
  // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
  Object.keys(errors).forEach((key) => delete errors[key as keyof FormData])

  if (!formData.email.trim()) {
    errors.email = 'El email es requerido'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'El email no es válido'
  }

  if (!formData.message.trim()) {
    errors.message = 'El mensaje es requerido'
  }

  return Object.keys(errors).length === 0
}

const handleSubmit = async () => {
  if (!validateForm()) {
    toast.error('Por favor, completa todos los campos requeridos')
    return
  }

  isSubmitting.value = true

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: formData,
    })

    toast.success('¡Mensaje enviado correctamente! Te contactaremos pronto.')

    // Reset form
    Object.keys(formData).forEach((key) => {
      formData[key as keyof FormData] = ''
    })
  } catch (error) {
    console.error('Error al enviar el formulario:', error)
    toast.error(
      'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.',
    )
  } finally {
    isSubmitting.value = false
  }
}

const contactInfo = [
  {
    icon: 'heroicons:envelope',
    title: 'Email',
    value: 'team@markting.pe',
    href: 'mailto:team@markting.pe',
  },
  {
    icon: 'heroicons:phone',
    title: 'Teléfono',
    value: '+51 982 200 817',
    href: 'tel:+51982200817',
  },
  {
    icon: 'heroicons:map-pin',
    title: 'Ubicación',
    value: 'San Isidro, Lima - Perú',
    href: '#',
  },
]
</script>

<template>
  <UiSectionContainer id="contact" class-name="bg-gray-50">
    <UiSectionHeading
      title="Hablemos de tu Proyecto"
      subtitle="Estamos listos para ayudarte a alcanzar tus objetivos"
    />

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Contact Form -->
      <div class="bg-white rounded-xl shadow-lg p-8">
        <form @submit.prevent="handleSubmit" class="flex flex-col h-full">
          <!-- Email y Empresa en fila -->
          <div class="grid grid-cols-1 gap-6 mb-6">
            <!-- Email -->
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Email <span class="text-red-500">*</span>
              </label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                :class="[
                  'w-full px-4 py-3 rounded-lg border-2 transition-colors',
                  errors.email
                    ? 'border-red-500'
                    : 'border-gray-200 focus:border-primary',
                ]"
                placeholder="tu@email.com"
              />
              <p v-if="errors.email" class="mt-1 text-sm text-red-500">
                {{ errors.email }}
              </p>
            </div>

            <!-- Company -->
            <div>
              <label
                for="company"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Empresa
              </label>
              <input
                id="company"
                v-model="formData.company"
                type="text"
                class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary transition-colors"
                placeholder="Nombre de tu empresa"
              />
            </div>
          </div>

          <!-- Message -->
          <div class="mb-6 flex-1">
            <label
              for="message"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              Mensaje <span class="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              v-model="formData.message"
              rows="6"
              :class="[
                'w-full h-full min-h-[160px] px-4 py-3 rounded-lg border-2 transition-colors resize-none',
                errors.message
                  ? 'border-red-500'
                  : 'border-gray-200 focus:border-primary',
              ]"
              placeholder="Cuéntanos sobre tu proyecto..."
            ></textarea>
            <p v-if="errors.message" class="mt-1 text-sm text-red-500">
              {{ errors.message }}
            </p>
          </div>

          <div class="pt-10">
            <!-- Submit Button -->
            <UiAppButton
              type="submit"
              variant="primary"
              size="lg"
              :disabled="isSubmitting"
              class="w-full"
            >
              <span v-if="!isSubmitting">Enviar Mensaje</span>
              <span v-else class="flex items-center justify-center gap-2">
                <Icon name="eos-icons:loading" class="w-5 h-5 animate-spin" />
                Enviando...
              </span>
            </UiAppButton>
          </div>
        </form>
      </div>

      <!-- Contact Info -->
      <div class="space-y-8">
        <div class="space-y-6">
          <h3 class="text-2xl font-semibold">Información de Contacto</h3>
          <p class="text-gray-600">
            Estamos aquí para responder todas tus preguntas y ayudarte a
            comenzar tu próximo proyecto exitoso.
          </p>
        </div>

        <!-- Contact Cards -->
        <div class="space-y-4">
          <a
            v-for="(info, index) in contactInfo"
            :key="index"
            :href="info.href"
            class="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
          >
            <div
              class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all"
            >
              <Icon
                :name="info.icon"
                class="w-6 h-6 text-primary group-hover:text-white transition-colors"
              />
            </div>
            <div>
              <p class="text-sm text-gray-500 mb-1">{{ info.title }}</p>
              <p class="font-medium text-gray-900">{{ info.value }}</p>
            </div>
          </a>
        </div>

        <!-- Social Links -->
        <div class="pt-6">
          <h4 class="text-lg font-semibold mb-4">Síguenos</h4>
          <div class="flex gap-4">
            <a
              v-for="social in SOCIAL_LINKS"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.name"
              class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all group"
            >
              <Icon
                :name="social.icon"
                class="w-6 h-6 text-primary group-hover:text-white transition-colors"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </UiSectionContainer>
</template>
