import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    // Inicializar Resend dentro de la función para evitar errores durante el build
    const resend = new Resend(process.env.RESEND_API_KEY)
    const body = await request.json()
    const { nombre, email, telefono, tipoEvento, fechaEvento, numeroPersonas, mensaje } = body

    // Validar campos requeridos
    if (!nombre || !email || !telefono) {
      return NextResponse.json(
        { error: 'Los campos nombre, email y teléfono son requeridos' },
        { status: 400 }
      )
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'El formato del email no es válido' },
        { status: 400 }
      )
    }

    // Crear el contenido del email
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          Nueva Consulta de Catering - H&H Catering
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-top: 0;">Información del Cliente:</h3>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
        </div>

        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-top: 0;">Detalles del Evento:</h3>
          <p><strong>Tipo de Evento:</strong> ${tipoEvento || 'No especificado'}</p>
          <p><strong>Fecha del Evento:</strong> ${fechaEvento || 'No especificada'}</p>
          <p><strong>Número de Personas:</strong> ${numeroPersonas || 'No especificado'}</p>
        </div>

        ${mensaje ? `
        <div style="background-color: #fefce8; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-top: 0;">Mensaje Adicional:</h3>
          <p style="white-space: pre-wrap;">${mensaje}</p>
        </div>
        ` : ''}

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 14px;">
            Este mensaje fue enviado desde el formulario de contacto de H&H Catering.
          </p>
        </div>
      </div>
    `

                // Enviar el email
                const { data, error } = await resend.emails.send({
                  from: 'H&H Catering <onboarding@resend.dev>',
                  to: ['cateringhh77@gmail.com'],
                  subject: `Nueva Consulta de Catering - ${nombre}`,
                  html: emailContent,
                  replyTo: email,
                })

    if (error) {
      console.error('Error enviando email:', error)
      return NextResponse.json(
        { error: 'Error interno del servidor al enviar el email' },
        { status: 500 }
      )
    }

    console.log('Email enviado exitosamente:', data)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email enviado exitosamente',
        id: data?.id 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error en API send-email:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
