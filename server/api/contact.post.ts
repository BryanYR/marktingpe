import { Resend } from 'resend'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
}

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<ContactFormData>(event)

    // Validar datos requeridos
    if (!body.name || !body.email || !body.message) {
      throw createError({
        statusCode: 400,
        message: 'Faltan campos requeridos',
      })
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      throw createError({
        statusCode: 400,
        message: 'Email inválido',
      })
    }

    const config = useRuntimeConfig()

    // Verificar si la API key está configurada
    if (!config.resendApiKey) {
      console.warn('RESEND_API_KEY no está configurada. Email no enviado.')
      
      // En desarrollo, simular éxito
      if (process.env.NODE_ENV === 'development') {
        console.log('Datos del formulario (modo desarrollo):', body)
        return {
          success: true,
          message: 'Formulario recibido (modo desarrollo - email no enviado)',
        }
      }

      throw createError({
        statusCode: 500,
        message: 'Servicio de email no configurado',
      })
    }

    const resend = new Resend(config.resendApiKey)

    // Enviar email
    const { data, error } = await resend.emails.send({
      from: 'Marketing Agency <onboarding@resend.dev>', // Cambiar por tu dominio verificado
      to: ['bjyepez15@gmail.com'],
      subject: `Nuevo mensaje de contacto: ${body.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #132335; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #132335; margin-bottom: 5px; }
              .value { background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #132335; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">Nuevo Mensaje de Contacto</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Nombre:</div>
                  <div class="value">${body.name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${body.email}">${body.email}</a></div>
                </div>
                ${body.phone ? `
                <div class="field">
                  <div class="label">Teléfono:</div>
                  <div class="value">${body.phone}</div>
                </div>
                ` : ''}
                ${body.company ? `
                <div class="field">
                  <div class="label">Empresa:</div>
                  <div class="value">${body.company}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Mensaje:</div>
                  <div class="value">${body.message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error('Error enviando email:', error)
      throw createError({
        statusCode: 500,
        message: 'Error al enviar el email',
      })
    }

    return {
      success: true,
      message: 'Email enviado correctamente',
      id: data?.id,
    }
  } catch (error: any) {
    console.error('Error en el endpoint de contacto:', error)
    
    if (error.statusCode) {
      throw error
    }

    throw createError({
      statusCode: 500,
      message: 'Error interno del servidor',
    })
  }
})
