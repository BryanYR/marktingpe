# Marketing Web

Landing page minimalista para agencia de marketing digital.

## Stack Tecnológico

- **Framework**: Nuxt 3
- **Estilos**: Tailwind CSS
- **State Management**: Pinia
- **Notificaciones**: Vue Toastification
- **Sliders**: Swiper
- **Email**: Resend

## Paleta de Colores

- Negro: #000000
- Blanco: #FFFFFF
- Azul Oscuro: #132335

## Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo en http://localhost:3000
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## Configuración de Email

Para configurar el envío de emails:

1. Obtener API Key de Resend (https://resend.com)
2. Crear archivo `.env` en la raíz del proyecto
3. Agregar: `RESEND_API_KEY=tu_api_key_aqui`

## Secciones

- Header con navegación
- Banner Hero
- Nosotros (Quiénes Somos)
- CTA (Call to Action)
- Servicios
- Portfolio
- Metodología
- Formulario de Contacto
- Footer
