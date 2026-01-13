# Carpeta de Assets

Esta carpeta contiene los recursos gráficos de la aplicación.

## Archivos necesarios para Expo:

- **icon.png** - Icono de la aplicación (1024x1024px)
- **splash.png** - Pantalla de carga (1242x2436px)
- **adaptive-icon.png** - Icono adaptable para Android (1024x1024px)
- **favicon.png** - Favicon para web (48x48px)

## Generación de Assets

Puedes usar herramientas online para generar estos assets:

1. **Icon Kitchen** - https://icon.kitchen/
2. **App Icon Generator** - https://appicon.co/
3. **Expo Asset Generator** - https://github.com/expo/expo-cli

## Formato de Imágenes

### icon.png
- Tamaño: 1024x1024 píxeles
- Formato: PNG con transparencia
- Uso: Icono de la app en tiendas y dispositivos

### splash.png
- Tamaño: 1242x2436 píxeles (iPhone 11 Pro Max)
- Formato: PNG
- Uso: Pantalla de carga al iniciar la app

### adaptive-icon.png
- Tamaño: 1024x1024 píxeles
- Formato: PNG con transparencia
- Área segura: 432x432 píxeles en el centro
- Uso: Icono adaptable de Android

### favicon.png
- Tamaño: 48x48 píxeles
- Formato: PNG
- Uso: Favicon para versión web

## Crear Assets Temporales

Mientras no tengas diseños profesionales, puedes:

1. Usar emojis grandes (🍎)
2. Crear imágenes simples con colores sólidos
3. Usar generadores online gratuitos

## Recomendaciones de Diseño

- **Icono**: Simple, reconocible, sin texto pequeño
- **Colores**: Consistentes con la marca
- **Splash**: Fondo blanco o color corporativo con logo centrado
- **Contraste**: Visible tanto en modo claro como oscuro

## Nota

Los archivos en esta carpeta son referencias por `app.json`. Si cambias los nombres, actualiza las rutas en la configuración.
