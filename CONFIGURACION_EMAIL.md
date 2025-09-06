# H&H Catering - Configuración del Formulario de Contacto con Resend

## Configuración del Email con Resend

Para que el formulario de contacto funcione correctamente, necesitas configurar Resend, un servicio moderno y gratuito para enviar emails.

### 1. Crear cuenta en Resend

1. Ve a https://resend.com/
2. Haz clic en **"Sign Up"**
3. Regístrate con tu email (puedes usar `cateringhh77@gmail.com`)
4. Verifica tu email

### 2. Obtener API Key

1. Una vez logueado, ve a **"API Keys"** en el menú lateral
2. Haz clic en **"Create API Key"**
3. Dale un nombre: "H&H Catering"
4. Selecciona el scope: **"Send emails"**
5. Haz clic en **"Create"**
6. **Copia la API Key** que aparece (empieza con `re_`)

### 3. Configurar archivo .env.local

Crea un archivo `.env.local` en la raíz del proyecto con:

```
RESEND_API_KEY=tu_api_key_de_resend_aqui
```

**Ejemplo:**
```
RESEND_API_KEY=re_1234567890abcdef
```

### 4. Información de Contacto Actualizada

- **Teléfono:** +56 9 9072 2315
- **WhatsApp:** +56 9 9072 2315
- **Email de destino:** cateringhh77@gmail.com (donde llegan los mensajes)

### 5. Funcionalidades Implementadas

✅ Información de contacto actualizada
✅ Formulario de contacto funcional
✅ Envío de correos desde Resend a cateringhh77@gmail.com
✅ Integración con WhatsApp
✅ Validación de formulario
✅ Mensajes de confirmación
✅ Formato HTML profesional con emojis

### 6. Ventajas de usar Resend

- ✅ **Gratuito** hasta 3,000 emails/mes
- ✅ **Muy confiable** y rápido
- ✅ **Fácil configuración** con API Key
- ✅ **Excelente deliverability** (llegan a inbox)
- ✅ **Sin configuración compleja** de SMTP
- ✅ **Soporte técnico** excelente
- ✅ **Moderno** y mantenido activamente

### 7. Estructura del Email

El formulario envía un email con:
- Información del cliente (nombre, email, teléfono)
- Detalles del evento (tipo, fecha, número de personas)
- Mensaje adicional del cliente
- Formato HTML profesional con colores, emojis y diseño

### 8. Próximos Pasos

1. **Crear cuenta en Resend:** https://resend.com/
2. **Obtener API Key:** Desde el dashboard de Resend
3. **Actualizar .env.local:** Con tu API Key real
4. **Probar formulario:** Verificar que los emails lleguen a cateringhh77@gmail.com

### 9. Solución de Problemas

**Si no llegan los emails:**
- Verifica que la API Key sea correcta
- Revisa la carpeta de spam en cateringhh77@gmail.com
- Asegúrate de que la API Key empiece con `re_`
- Verifica que la cuenta de Resend esté verificada

**Si hay errores de API:**
- Regenera la API Key en Resend
- Verifica que no haya espacios extra en `.env.local`
- Asegúrate de que la API Key tenga permisos de "Send emails"

### 10. Límites de Resend

- **Gratuito:** 3,000 emails/mes
- **Sin límite de dominio:** Puedes enviar desde cualquier dominio
- **Sin límite de destinatarios:** Puedes enviar a cualquier email
- **Sin restricciones de contenido:** Puedes enviar cualquier tipo de email
