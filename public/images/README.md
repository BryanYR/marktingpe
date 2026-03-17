# Imágenes del Portfolio

Esta carpeta debe contener las imágenes de los casos de éxito mostrados en la sección de Portfolio.

## Imágenes Requeridas

- `portfolio-1.jpg` - Imagen para el caso de E-commerce Fashion Brand
- `portfolio-2.jpg` - Imagen para el caso de SaaS Tech Startup
- `portfolio-3.jpg` - Imagen para el caso de Restaurant Chain

## Especificaciones Recomendadas

- **Formato**: JPG o WebP
- **Dimensiones**: 800x600px (4:3) o 1200x800px
- **Tamaño**: Menos de 500KB por imagen
- **Optimización**: Las imágenes deben estar optimizadas para web

## Placeholder Actual

Actualmente, las secciones de portfolio muestran un placeholder con un ícono. Una vez que agregues tus imágenes reales, se mostrarán automáticamente.

## Optimización de Imágenes

Para optimizar tus imágenes antes de subirlas, puedes usar:

- [TinyPNG](https://tinypng.com/) - Para comprimir imágenes
- [Squoosh](https://squoosh.app/) - Para convertir y optimizar
- [ImageOptim](https://imageoptim.com/) - Aplicación de escritorio (Mac)

## Uso en el Código

Las imágenes se referencian en `constants/portfolio.ts`:

```typescript
{
  title: 'E-commerce Fashion Brand',
  category: 'E-commerce',
  // ...
  image: '/images/portfolio-1.jpg', // Referencia a la imagen
}
```

Para cambiar las imágenes, simplemente reemplaza los archivos en esta carpeta manteniendo los mismos nombres, o actualiza las rutas en el archivo de constantes.
