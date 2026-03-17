# Configuración de Resend para Email

## ¿Qué es Resend?

Resend es un servicio moderno de envío de emails diseñado para desarrolladores. Ofrece una API simple y confiable para enviar correos electrónicos transaccionales.

## Pasos para Configurar Resend

### 1. Crear una Cuenta en Resend

1. Visita [https://resend.com](https://resend.com)
2. Regístrate con tu email
3. Verifica tu cuenta

### 2. Obtener tu API Key

1. Inicia sesión en tu dashboard de Resend
2. Ve a "API Keys" en el menú lateral
3. Haz clic en "Create API Key"
4. Dale un nombre descriptivo (ej: "Marketing Web Production")
5. Copia la API key generada

### 3. Configurar el Proyecto

1. Abre el archivo `.env` en la raíz del proyecto
2. Pega tu API key:
   ```
   RESEND_API_KEY=re_tuApiKeyAqui
   ```
3. Guarda el archivo

### 4. Verificar tu Dominio (Opcional pero Recomendado)

Para enviar emails desde tu propio dominio en lugar de `onboarding@resend.dev`:

1. En el dashboard de Resend, ve a "Domains"
2. Haz clic en "Add Domain"
3. Ingresa tu dominio (ej: `tuempresa.com`)
4. Sigue las instrucciones para agregar los registros DNS
5. Espera la verificación (puede tomar hasta 48 horas)

### 5. Actualizar el Email de Envío

Una vez verificado tu dominio, actualiza el archivo `server/api/contact.post.ts`:

```typescript
from: 'Marketing Agency <contacto@tudominio.com>', // Cambia esto
to: ['bjyepez15@gmail.com'], // Tu email de destino
```

## Plan Gratuito de Resend

El plan gratuito de Resend incluye:
- 100 emails por día
- 3,000 emails por mes
- 1 dominio verificado
- API completa

Perfecto para proyectos pequeños y medianos.

## Modo de Desarrollo

Si no configuras la API key, el formulario funcionará en modo desarrollo:
- Los datos se mostrarán en la consola del servidor
- No se enviará ningún email real
- El formulario mostrará un mensaje de éxito simulado

Esto es útil para probar el formulario sin gastar tu cuota de emails.

## Solución de Problemas

### Error: "Servicio de email no configurado"

- Verifica que el archivo `.env` existe y contiene `RESEND_API_KEY`
- Asegúrate de reiniciar el servidor después de agregar la variable de entorno

### Error: "Email inválido"

- Verifica que el email en el campo `from` sea válido
- Si usas un dominio personalizado, asegúrate de que esté verificado

### Los emails no llegan

- Revisa la carpeta de spam
- Verifica que el email de destino en `server/api/contact.post.ts` sea correcto
- Revisa los logs en el dashboard de Resend

## Recursos Adicionales

- [Documentación de Resend](https://resend.com/docs)
- [API Reference](https://resend.com/docs/api-reference)
- [Ejemplos de Nuxt](https://resend.com/docs/send-with-nuxt)
