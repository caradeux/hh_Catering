import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nombre, email, telefono, tipoEvento, fechaEvento, numeroPersonas, mensaje } = body

    // Validar campos requeridos
    if (!nombre || !email || !tipoEvento || !numeroPersonas) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Inicializar Resend solo en runtime
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: 'H&H Catering <onboarding@resend.dev>',
      to: ['cateringhh77@gmail.com'],
      subject: `Nueva consulta de catering - ${nombre}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nueva Consulta - H&H Catering</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          
          <!-- Header con logo y branding -->
          <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 30px 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 1px;">
              🍽️ H&H Catering
            </h1>
            <p style="color: #e0e7ff; margin: 8px 0 0 0; font-size: 16px; font-weight: 300;">
              Catering Gourmet Premium
            </p>
          </div>

          <!-- Contenido principal -->
          <div style="max-width: 600px; margin: 0 auto; background-color: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            
            <!-- Título principal -->
            <div style="padding: 40px 30px 20px 30px; text-align: center; border-bottom: 3px solid #f1f5f9;">
              <h2 style="color: #1e293b; margin: 0; font-size: 24px; font-weight: 600;">
                📋 Nueva Consulta de Cliente
              </h2>
              <p style="color: #64748b; margin: 10px 0 0 0; font-size: 16px;">
                Se ha recibido una nueva solicitud de cotización
              </p>
            </div>

            <!-- Información del cliente -->
            <div style="padding: 30px; background-color: #f8fafc; margin: 0;">
              <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <div style="width: 4px; height: 30px; background: linear-gradient(135deg, #2563eb, #1d4ed8); border-radius: 2px; margin-right: 15px;"></div>
                <h3 style="color: #1e293b; margin: 0; font-size: 20px; font-weight: 600;">
                  👤 Información del Cliente
                </h3>
              </div>
              
              <div style="background-color: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
                <div style="display: grid; gap: 15px;">
                  <div style="display: flex; align-items: center;">
                    <span style="background-color: #dbeafe; color: #1e40af; padding: 8px 12px; border-radius: 8px; font-weight: 600; font-size: 14px; min-width: 80px; text-align: center;">Nombre</span>
                    <span style="margin-left: 15px; color: #374151; font-size: 16px; font-weight: 500;">${nombre}</span>
                  </div>
                  <div style="display: flex; align-items: center;">
                    <span style="background-color: #dbeafe; color: #1e40af; padding: 8px 12px; border-radius: 8px; font-weight: 600; font-size: 14px; min-width: 80px; text-align: center;">Email</span>
                    <span style="margin-left: 15px; color: #374151; font-size: 16px; font-weight: 500;">${email}</span>
                  </div>
                  <div style="display: flex; align-items: center;">
                    <span style="background-color: #dbeafe; color: #1e40af; padding: 8px 12px; border-radius: 8px; font-weight: 600; font-size: 14px; min-width: 80px; text-align: center;">Teléfono</span>
                    <span style="margin-left: 15px; color: #374151; font-size: 16px; font-weight: 500;">${telefono || 'No proporcionado'}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Detalles del evento -->
            <div style="padding: 30px; background-color: white;">
              <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <div style="width: 4px; height: 30px; background: linear-gradient(135deg, #059669, #047857); border-radius: 2px; margin-right: 15px;"></div>
                <h3 style="color: #1e293b; margin: 0; font-size: 20px; font-weight: 600;">
                  🎉 Detalles del Evento
                </h3>
              </div>
              
              <div style="background-color: #f0fdf4; padding: 25px; border-radius: 12px; border-left: 4px solid #059669;">
                <div style="display: grid; gap: 15px;">
                  <div style="display: flex; align-items: center;">
                    <span style="background-color: #dcfce7; color: #166534; padding: 8px 12px; border-radius: 8px; font-weight: 600; font-size: 14px; min-width: 100px; text-align: center;">Tipo</span>
                    <span style="margin-left: 15px; color: #374151; font-size: 16px; font-weight: 500; text-transform: capitalize;">${tipoEvento}</span>
                  </div>
                  <div style="display: flex; align-items: center;">
                    <span style="background-color: #dcfce7; color: #166534; padding: 8px 12px; border-radius: 8px; font-weight: 600; font-size: 14px; min-width: 100px; text-align: center;">Fecha</span>
                    <span style="margin-left: 15px; color: #374151; font-size: 16px; font-weight: 500;">${fechaEvento || 'Por definir'}</span>
                  </div>
                  <div style="display: flex; align-items: center;">
                    <span style="background-color: #dcfce7; color: #166534; padding: 8px 12px; border-radius: 8px; font-weight: 600; font-size: 14px; min-width: 100px; text-align: center;">Personas</span>
                    <span style="margin-left: 15px; color: #374151; font-size: 16px; font-weight: 500;">${numeroPersonas} invitados</span>
                  </div>
                </div>
              </div>
            </div>

            ${mensaje ? `
            <!-- Mensaje adicional -->
            <div style="padding: 30px; background-color: #fefce8; margin: 0;">
              <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <div style="width: 4px; height: 30px; background: linear-gradient(135deg, #d97706, #b45309); border-radius: 2px; margin-right: 15px;"></div>
                <h3 style="color: #1e293b; margin: 0; font-size: 20px; font-weight: 600;">
                  💬 Mensaje Adicional
                </h3>
              </div>
              
              <div style="background-color: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); border-left: 4px solid #d97706;">
                <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0; white-space: pre-wrap; font-style: italic;">"${mensaje}"</p>
              </div>
            </div>
            ` : ''}

            <!-- Footer con información de contacto -->
            <div style="background-color: #1e293b; padding: 30px; text-align: center;">
              <h4 style="color: white; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
                📞 Información de Contacto
              </h4>
              <div style="display: flex; justify-content: center; gap: 30px; margin-bottom: 20px; flex-wrap: wrap;">
                <div style="text-align: center;">
                  <div style="color: #94a3b8; font-size: 14px; margin-bottom: 5px;">Teléfono</div>
                  <div style="color: white; font-size: 16px; font-weight: 600;">+56 9 9072 2315</div>
                </div>
                <div style="text-align: center;">
                  <div style="color: #94a3b8; font-size: 14px; margin-bottom: 5px;">WhatsApp</div>
                  <div style="color: white; font-size: 16px; font-weight: 600;">+56 9 9072 2315</div>
                </div>
                <div style="text-align: center;">
                  <div style="color: #94a3b8; font-size: 14px; margin-bottom: 5px;">Email</div>
                  <div style="color: white; font-size: 16px; font-weight: 600;">cateringhh77@gmail.com</div>
                </div>
              </div>
              
              <div style="border-top: 1px solid #334155; padding-top: 20px; margin-top: 20px;">
                <p style="color: #94a3b8; font-size: 14px; margin: 0 0 10px 0;">
                  📧 Este mensaje fue enviado automáticamente desde el formulario de contacto
                </p>
                <p style="color: #94a3b8; font-size: 14px; margin: 0;">
                  📅 ${new Date().toLocaleString('es-CL', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    if (error) {
      console.error('Error enviando email con Resend:', error)
      return NextResponse.json(
        { error: 'Error enviando el email' },
        { status: 500 }
      )
    }

    console.log('Email enviado exitosamente:', data)

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error procesando consulta:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
