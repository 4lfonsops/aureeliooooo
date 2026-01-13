# 🚀 Guía de Inicio Rápido

## Pasos para ejecutar la aplicación

### 1. Instalación de Dependencias

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

Este comando instalará todas las dependencias necesarias:
- React Native
- Expo
- React Navigation
- Componentes de UI

### 2. Iniciar el Servidor de Desarrollo

```bash
npm start
```

o también:

```bash
expo start
```

Esto abrirá Expo DevTools en tu navegador con un código QR.

### 3. Ejecutar en tu Dispositivo Móvil

#### Opción A: Usando Expo Go (Recomendado para pruebas rápidas)

1. **Instala Expo Go en tu teléfono**:
   - iPhone: [App Store](https://apps.apple.com/app/expo-go/id982107779)
   - Android: [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. **Escanea el código QR**:
   - iOS: Usa la app de Cámara nativa
   - Android: Usa el escáner dentro de Expo Go

3. **Espera a que cargue**: La app se compilará y abrirá en tu dispositivo

#### Opción B: Usando Emulador/Simulador

**Para Android:**
```bash
npm run android
```
(Requiere Android Studio y emulador configurado)

**Para iOS (solo Mac):**
```bash
npm run ios
```
(Requiere Xcode instalado)

### 4. Desarrollo en Vivo

Cualquier cambio que hagas en el código se reflejará automáticamente en tu dispositivo gracias a Hot Reloading.

## 🔍 Solución Rápida de Problemas

### No puedo escanear el código QR
- Asegúrate de que tu teléfono y computadora están en la misma red WiFi
- Prueba con: `expo start --tunnel`

### Errores de "Cannot find module"
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### La app no se actualiza
- Sacude el dispositivo y presiona "Reload"
- O presiona `r` en la terminal

### Errores de caché
```bash
expo start -c
```

## 📂 Archivos Principales a Revisar

1. **App.js** - Configuración de navegación
2. **src/screens/** - Todas las pantallas
3. **src/data/mockData.js** - Datos de ejemplo (modifícalos aquí)
4. **src/context/CartContext.js** - Lógica del carrito

## 🎨 Personalización Rápida

### Cambiar datos de contacto:
```javascript
// src/data/mockData.js
export const contactoData = {
  telefono: '+TU_NUMERO',
  whatsapp: '+TU_WHATSAPP',
  // ...
};
```

### Agregar más productos:
```javascript
// src/data/mockData.js
export const accesoriosData = [
  {
    id: 'a11',
    nombre: 'Tu Producto',
    categoria: 'Categoria',
    precio: 25,
    descripcion: 'Descripción del producto',
    disponible: true,
    imagen: '📱'
  },
  // ...
];
```

### Modificar colores:
Busca `StyleSheet.create` en cualquier archivo y modifica los colores en hexadecimal.

## 📱 Estructura de Navegación

```
App (NavigationContainer)
└── Stack Navigator
    └── Tab Navigator (Main)
        ├── 🏠 Inicio
        ├── 🔧 Reparaciones
        ├── 🛍️ Accesorios
        ├── 📅 Citas
        └── 🛒 Carrito
```

## 🧪 Probar Funcionalidades

1. **Carrito de Compras**:
   - Ve a "Accesorios"
   - Presiona "Agregar" en cualquier producto
   - Ve al "Carrito" (verás el contador actualizado)

2. **Agendar Cita**:
   - Ve a "Citas"
   - Llena el formulario
   - Selecciona fecha y hora
   - Presiona "Confirmar Cita"

3. **Ver Reparaciones**:
   - Ve a "Reparaciones"
   - Selecciona un modelo de iPhone
   - Explora los servicios disponibles

## 📞 Funciones de Contacto

Los botones de WhatsApp y llamadas funcionan en dispositivos reales pero no en emuladores.

Modifica los números en `src/data/mockData.js` antes de publicar.

## 🎯 Siguientes Pasos

- [ ] Personaliza los datos mock con tu información
- [ ] Ajusta los colores a tu marca
- [ ] Agrega imágenes reales en la carpeta assets/
- [ ] Configura las notificaciones push (opcional)
- [ ] Integra con un backend real

## 💡 Tips Útiles

- Usa `console.log()` para debug
- Presiona `m` en la terminal para abrir el menú de desarrollo
- Presiona `j` para abrir el debugger
- Revisa los logs en la terminal para errores

## 📚 Recursos Adicionales

- [Documentación de Expo](https://docs.expo.dev/)
- [React Navigation Docs](https://reactnavigation.org/)
- [React Native Docs](https://reactnative.dev/)

---

**¡Listo para comenzar! 🚀**

Si tienes algún problema, revisa la sección de solución de problemas en el README.md principal.
