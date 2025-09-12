# Configuración de Variables de Entorno para H&H Catering

## Variables Requeridas para el Envío de Correos

### RESEND_API_KEY
- **Descripción**: API Key de Resend para el envío de correos electrónicos
- **Obtener**: Ve a [Resend API Keys](https://resend.com/api-keys) y crea una nueva API key
- **Formato**: `re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
- **Ubicación en Coolify**: 
  - Ve a tu aplicación en Coolify
  - Sección "Environment Variables"
  - Agrega: `RESEND_API_KEY` = `tu_api_key_aqui`

### Configuración en Coolify

1. **Accede a tu aplicación** en el panel de Coolify
2. **Ve a "Environment Variables"**
3. **Agrega las siguientes variables**:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Verificación del Dominio en Resend

Para que los correos se envíen correctamente, necesitas:

1. **Verificar tu dominio** en Resend:
   - Ve a [Resend Domains](https://resend.com/domains)
   - Agrega `hhcatering.cl`
   - Configura los registros DNS requeridos

2. **Configurar el email de origen**:
   - El código usa `noreply@hhcatering.cl` como email de origen
   - Asegúrate de que este dominio esté verificado en Resend

### Troubleshooting

#### Error: "Invalid API key"
- Verifica que la API key esté correctamente configurada en Coolify
- Asegúrate de que la API key tenga permisos de envío

#### Error: "Domain not verified"
- Verifica que `hhcatering.cl` esté agregado y verificado en Resend
- Revisa que los registros DNS estén configurados correctamente

#### Error: "Rate limit exceeded"
- Resend tiene límites de envío según tu plan
- Verifica tu plan actual en Resend

### Testing

Para probar el envío de correos:

1. **Despliega los cambios** en Coolify
2. **Llena el formulario de contacto** en el sitio web
3. **Verifica** que recibas el correo en `cateringhh77@gmail.com`
4. **Revisa los logs** en Coolify si hay errores
