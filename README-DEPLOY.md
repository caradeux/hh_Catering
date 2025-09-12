# H&H Catering - Sitio Web

Sitio web para el servicio de catering gourmet H&H, especializado en eventos y matrimonios.

## 🚀 Despliegue en Coolify

### Opción 1: Despliegue desde GitHub

1. Conecta tu repositorio de GitHub a Coolify
2. Selecciona este repositorio
3. Coolify detectará automáticamente el Dockerfile
4. Configura las variables de entorno si es necesario
5. Despliega la aplicación

### Opción 2: Despliegue con Docker Compose

```bash
# Construir y ejecutar con Docker Compose
docker-compose up --build

# Ejecutar en segundo plano
docker-compose up -d --build
```

### Opción 3: Despliegue manual con Docker

```bash
# Construir la imagen
docker build -t hh-catering .

# Ejecutar el contenedor
docker run -p 3000:3000 hh-catering
```

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
npm install --legacy-peer-deps

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en modo producción
npm start
```

## 📋 Configuración

### Variables de Entorno

- `NODE_ENV`: Entorno de ejecución (production/development)
- `PORT`: Puerto del servidor (por defecto: 3000)
- `HOSTNAME`: Hostname del servidor (por defecto: 0.0.0.0)

### Características

- ✅ Next.js 14 con App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Componentes UI personalizados
- ✅ Diseño responsive
- ✅ Optimizado para SEO
- ✅ Imágenes optimizadas
- ✅ Formulario de contacto funcional
- ✅ Integración con WhatsApp

## 🐳 Docker

El proyecto incluye:

- `Dockerfile`: Configuración multi-stage para producción
- `docker-compose.yml`: Configuración para desarrollo y despliegue
- `.dockerignore`: Archivos excluidos del build

### Características del Dockerfile

- Imagen base: Node.js 18 Alpine
- Build multi-stage para optimización
- Usuario no-root para seguridad
- Output standalone de Next.js
- Health check incluido

## 📱 Contacto

- **Teléfono**: +56 9 1234 5678
- **Email**: contacto@hhcatering.cl
- **WhatsApp**: Disponible en el sitio web

## 🎯 Servicios

- Catering Gourmet Premium
- Eventos Corporativos
- Matrimonios y Celebraciones
- Canapés Artesanales
- Tapaditos Especiales
- Brochetas Gourmet
- Empanadas de Cóctel
- Pizzetas Artesanales
- Pastelería Gourmet
