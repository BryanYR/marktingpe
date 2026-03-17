# Guía de Instalación y Ejecución

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** o **yarn** o **pnpm**

## Instalación

### 1. Navegar al Directorio del Proyecto

```bash
cd marketing_web
```

### 2. Instalar Dependencias

Elige tu gestor de paquetes preferido:

**Con npm:**
```bash
npm install
```

**Con yarn:**
```bash
yarn install
```

**Con pnpm:**
```bash
pnpm install
```

### 3. Configurar Variables de Entorno

1. El archivo `.env` ya está creado en la raíz del proyecto
2. Abre `.env` y agrega tu API key de Resend:

```env
RESEND_API_KEY=re_tuApiKeyAqui
```

**Nota**: Si no tienes una API key de Resend, el formulario funcionará en modo desarrollo (ver [RESEND_SETUP.md](RESEND_SETUP.md))

## Ejecución

### Modo Desarrollo

Inicia el servidor de desarrollo (con hot-reload):

```bash
npm run dev
```

El sitio estará disponible en: [http://localhost:3000](http://localhost:3000)

### Compilar para Producción

```bash
npm run build
```

### Vista Previa de Producción

Después de compilar, puedes previsualizar la versión de producción:

```bash
npm run preview
```

### Generar Sitio Estático

Si prefieres generar un sitio estático (sin servidor):

```bash
npm run generate
```

Los archivos generados estarán en el directorio `.output/public/`

## Estructura del Proyecto

```
marketing_web/
├── assets/           # Archivos CSS y recursos
├── components/       # Componentes Vue reutilizables
│   ├── ui/          # Componentes de UI base
│   ├── SiteHeader.vue
│   └── SiteFooter.vue
├── composables/     # Composables de Vue
├── constants/       # Datos estáticos (servicios, portfolio)
├── pages/           # Páginas de la aplicación
├── plugins/         # Plugins de Nuxt (Pinia, Toast)
├── public/          # Archivos estáticos públicos
├── sections/        # Secciones de la landing page
├── server/          # API backend (Resend email)
├── types/           # Definiciones de TypeScript
└── nuxt.config.ts   # Configuración de Nuxt
```

## Personalización

### Colores

Los colores principales están definidos en `tailwind.config.js`:

```javascript
colors: {
  primary: '#132335',  // Azul oscuro
  dark: '#000000',     // Negro
  light: '#FFFFFF',    // Blanco
}
```

### Contenido

- **Servicios**: Edita `constants/services.ts`
- **Portfolio**: Edita `constants/portfolio.ts`
- **Secciones**: Edita los archivos en `sections/`

### Agregar Imágenes

1. Coloca tus imágenes en `public/images/`
2. Actualiza las rutas en `constants/portfolio.ts`

### Email de Contacto

Para cambiar el email de destino, edita `server/api/contact.post.ts`:

```typescript
to: ['tumail@ejemplo.com'],
```

## Solución de Problemas

### Error: "Cannot find module"

Asegúrate de haber ejecutado `npm install` correctamente.

### El servidor no inicia

1. Verifica que Node.js esté instalado: `node --version`
2. Elimina `node_modules` y `.nuxt` y reinstala: 
   ```bash
   rm -rf node_modules .nuxt
   npm install
   ```

### Los estilos no se aplican

El proyecto usa Tailwind CSS. Si los estilos no aparecen:
1. Verifica que `assets/css/main.css` exista
2. Reinicia el servidor de desarrollo

### El formulario no envía emails

Ver [RESEND_SETUP.md](RESEND_SETUP.md) para configuración detallada de Resend.

## Despliegue

Este proyecto puede desplegarse en:

- **Vercel** (recomendado para Nuxt)
- **Netlify**
- **Cloudflare Pages**
- **Cualquier hosting Node.js**

### Variables de Entorno en Producción

No olvides agregar `RESEND_API_KEY` en las variables de entorno de tu plataforma de hosting.

## Soporte

Para más información sobre Nuxt:
- [Documentación de Nuxt](https://nuxt.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Resend Docs](https://resend.com/docs)
