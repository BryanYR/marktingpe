# Guía de Personalización

Esta guía te ayudará a personalizar el sitio web para adaptarlo a tu marca y necesidades.

## Información de la Empresa

### Logo y Nombre

El logo/nombre de la empresa está en `components/SiteHeader.vue` y `components/SiteFooter.vue`:

```vue
<button class="text-2xl font-bold text-primary">
  Marketing<span class="text-dark">Agency</span>
</button>
```

Reemplaza "Marketing" y "Agency" con el nombre de tu empresa.

### Información de Contacto

En `components/SiteFooter.vue`, actualiza:

```vue
<p class="text-white/70 text-sm flex items-center gap-2">
  <Icon name="heroicons:envelope" class="w-5 h-5" />
  bjyepez15@gmail.com  <!-- Cambia esto -->
</p>
```

Y en `sections/ContactSection.vue`:

```typescript
const contactInfo = [
  {
    icon: 'heroicons:envelope',
    title: 'Email',
    value: 'tumail@empresa.com', // Cambia esto
    href: 'mailto:tumail@empresa.com',
  },
  // ... más información de contacto
]
```

## Contenido de las Secciones

### Hero Section

Edita `sections/HeroSection.vue`:

- **Título principal**: Línea 12-14
- **Subtítulo**: Línea 16-18
- **Estadísticas**: Líneas 31-56

### Nosotros (About)

Edita `sections/AboutSection.vue`:

- **Título**: Línea 22-24
- **Descripción**: Líneas 26-33
- **Características**: Array `features` en líneas 3-18

### Servicios

Los servicios se definen en `constants/services.ts`:

```typescript
export const services: Service[] = [
  {
    icon: 'heroicons:megaphone', // Icono de Iconify
    title: 'Tu Servicio',
    description: 'Descripción de tu servicio...',
  },
  // Agrega más servicios aquí
]
```

**Nota sobre iconos**: Busca iconos en [Iconify](https://icon-sets.iconify.design/)

### Portfolio

Los casos de éxito se definen en `constants/portfolio.ts`:

```typescript
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Nombre del Proyecto',
    category: 'Categoría',
    description: 'Descripción breve...',
    metrics: ['+250% Métrica', '1K Usuarios'],
    image: '/images/portfolio-1.jpg', // Ruta de la imagen
  },
]
```

### Metodología

Edita `sections/MethodologySection.vue`, array `steps`:

```typescript
const steps = [
  {
    number: '01',
    title: 'Paso 1',
    description: 'Descripción del paso...',
    icon: 'heroicons:chart-bar-square',
  },
  // Más pasos...
]
```

## Colores y Diseño

### Paleta de Colores

Los colores se definen en `tailwind.config.js`:

```javascript
colors: {
  primary: '#132335',  // Color principal
  dark: '#000000',     // Color oscuro
  light: '#FFFFFF',    // Color claro
}
```

Para cambiar la paleta:

1. Actualiza los valores en `tailwind.config.js`
2. Los cambios se aplicarán automáticamente en todo el sitio

### Tipografía

La fuente por defecto es **Inter**. Para cambiar:

1. Actualiza `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['TuFuente', 'system-ui', 'sans-serif'],
}
```

2. Importa la fuente en `assets/css/main.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=TuFuente:wght@400;500;600;700&display=swap');
```

## Redes Sociales

Actualiza los enlaces de redes sociales en `components/SiteFooter.vue`:

```typescript
const navigation = {
  social: [
    { name: 'Facebook', icon: 'mdi:facebook', href: 'https://facebook.com/tupagina' },
    { name: 'Instagram', icon: 'mdi:instagram', href: 'https://instagram.com/tuperfil' },
    { name: 'LinkedIn', icon: 'mdi:linkedin', href: 'https://linkedin.com/company/tuempresa' },
    { name: 'Twitter', icon: 'mdi:twitter', href: 'https://twitter.com/tuperfil' },
  ],
}
```

## Navegación

Para agregar o modificar enlaces de navegación, edita `components/SiteHeader.vue`:

```typescript
const navigation = [
  { name: 'Inicio', id: 'hero' },
  { name: 'Nosotros', id: 'about' },
  { name: 'Servicios', id: 'services' },
  { name: 'Portfolio', id: 'portfolio' },
  { name: 'Metodología', id: 'methodology' },
  { name: 'Contacto', id: 'contact' },
  // Agrega más aquí
]
```

**Importante**: El `id` debe coincidir con el `id` de la sección correspondiente.

## Metadatos SEO

Actualiza los metadatos en `nuxt.config.ts`:

```typescript
app: {
  head: {
    title: 'Tu Empresa - Descripción',
    meta: [
      {
        name: 'description',
        content: 'Descripción de tu empresa para SEO...',
      },
    ],
  },
}
```

## Formulario de Contacto

### Campos del Formulario

Para agregar o modificar campos, edita `sections/ContactSection.vue`.

Ejemplo de agregar un campo:

```vue
<div>
  <label for="nuevoCampo" class="block text-sm font-medium text-gray-700 mb-2">
    Nuevo Campo
  </label>
  <input
    id="nuevoCampo"
    v-model="formData.nuevoCampo"
    type="text"
    class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary"
  />
</div>
```

### Email HTML Template

Para personalizar el email que se envía, edita `server/api/contact.post.ts`:

```typescript
html: `
  <!DOCTYPE html>
  <html>
    <!-- Tu template HTML aquí -->
  </html>
`
```

## Animaciones

El proyecto usa animaciones CSS simples. Para agregar más:

1. Define la animación en el componente:
```vue
<style scoped>
@keyframes tu-animacion {
  from { /* estado inicial */ }
  to { /* estado final */ }
}

.clase-animada {
  animation: tu-animacion 1s ease-out;
}
</style>
```

## Imágenes y Assets

### Imágenes de Portfolio

Coloca tus imágenes en `public/images/` y actualiza las rutas en `constants/portfolio.ts`.

### Favicon

Reemplaza `public/favicon.ico` con tu propio favicon.

### Otros Assets

Coloca cualquier imagen, video o archivo en `public/` y referéncialo con `/nombre-archivo.ext`.

## Agregar Nuevas Secciones

1. Crea un nuevo archivo en `sections/`, por ejemplo `TestimonialsSection.vue`
2. Importa y agrega la sección en `pages/index.vue`:

```vue
<template>
  <div class="min-h-screen bg-white">
    <SiteHeader />
    
    <main>
      <HeroSection />
      <!-- Otras secciones -->
      <TestimonialsSection /> <!-- Nueva sección -->
      <ContactSection />
    </main>

    <SiteFooter />
  </div>
</template>
```

3. Agrega el enlace de navegación si es necesario

## Modo de Mantenimiento

Para agregar una página de mantenimiento, crea `pages/maintenance.vue` y redirige en `middleware/`.

## Analytics

Para agregar Google Analytics u otro sistema:

1. Instala el módulo correspondiente
2. Configúralo en `nuxt.config.ts`

Ejemplo con Google Analytics:

```bash
npm install @nuxtjs/google-gtag
```

```typescript
// nuxt.config.ts
modules: [
  '@nuxtjs/google-gtag',
],

'google-gtag': {
  id: 'G-TU_ID_AQUI',
}
```

## ¿Necesitas Ayuda?

- Consulta la [documentación de Nuxt](https://nuxt.com/docs)
- Revisa los [ejemplos de Tailwind](https://tailwindcss.com/docs)
- Busca iconos en [Iconify](https://icon-sets.iconify.design/)

¡Personaliza el sitio y hazlo tuyo! 🚀
