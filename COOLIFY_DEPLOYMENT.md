# Coolify Configuration para H&H Catering

## Variables de Entorno Requeridas

Configura estas variables en tu instancia de Coolify:

### 1. RESEND_API_KEY
- **Valor**: Tu API Key de Resend
- **Descripción**: Clave para el servicio de correos Resend
- **Obtener en**: https://resend.com/api-keys

### 2. NODE_ENV
- **Valor**: production
- **Descripción**: Entorno de producción

### 3. PORT
- **Valor**: 3000
- **Descripción**: Puerto de la aplicación

## Configuración del Dominio

1. **Dominio personalizado**: Configura tu dominio en Coolify
2. **SSL**: Activa SSL automático
3. **Proxy**: Configura nginx como proxy

## Configuración de Build

- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Node Version**: 18.x

## Configuración de Docker

El proyecto incluye:
- ✅ Dockerfile optimizado para Next.js
- ✅ .dockerignore configurado
- ✅ next.config.mjs con output standalone

## Pasos para Despliegue

1. Conectar repositorio GitHub en Coolify
2. Configurar variables de entorno
3. Configurar dominio personalizado
4. Desplegar aplicación
5. Probar funcionalidad del formulario

## Verificación Post-Despliegue

- [ ] Aplicación carga correctamente
- [ ] Formulario de contacto funciona
- [ ] Emails se envían correctamente
- [ ] WhatsApp link funciona
- [ ] Responsive design funciona
