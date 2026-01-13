# 🎯 Instalación Paso a Paso (Windows)

## Prerrequisitos

### 1. Node.js
¿Ya tienes Node.js instalado?
```powershell
node --version
```

Si no:
1. Ve a https://nodejs.org/
2. Descarga la versión LTS
3. Ejecuta el instalador
4. Reinicia la terminal

### 2. Verificar npm
```powershell
npm --version
```

## Instalación del Proyecto

### Paso 1: Abrir PowerShell
1. Presiona `Win + X`
2. Selecciona "Windows PowerShell"

### Paso 2: Navegar a la carpeta
```powershell
cd "C:\Users\EdWiN\Desktop\aureeliooooo"
```

### Paso 3: Instalar Expo CLI (Global)
```powershell
npm install -g expo-cli
```

Espera a que termine... ⏳

### Paso 4: Verificar Expo CLI
```powershell
expo --version
```

Deberías ver algo como: `6.x.x`

### Paso 5: Instalar Dependencias del Proyecto
```powershell
npm install
```

Esto puede tomar 2-5 minutos... ☕

### Paso 6: Iniciar el Servidor
```powershell
npm start
```

Verás:
```
› Metro waiting on exp://192.168.x.x:19000
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)
```

## Ejecutar en tu Dispositivo

### Opción 1: Teléfono Android

1. **Instala Expo Go**
   - Abre Google Play Store
   - Busca "Expo Go"
   - Instala la app

2. **Escanea el QR**
   - Abre Expo Go
   - Toca "Scan QR Code"
   - Apunta a la pantalla de tu PC

3. **Espera la carga**
   - Primera vez: 30-60 segundos
   - Actualizaciones: 5-10 segundos

### Opción 2: iPhone

1. **Instala Expo Go**
   - Abre App Store
   - Busca "Expo Go"
   - Instala la app

2. **Escanea el QR**
   - Abre la app Cámara nativa
   - Apunta al QR en tu PC
   - Toca la notificación que aparece

3. **Espera la carga**
   - Primera vez: 30-60 segundos
   - Actualizaciones: 5-10 segundos

### Opción 3: Emulador Android (Avanzado)

**Requisitos:**
- Android Studio instalado
- Emulador configurado

**Comandos:**
```powershell
npm run android
```

## Solución de Problemas Comunes

### ❌ Error: "Cannot find module"
```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### ❌ Error: "expo: command not found"
```powershell
npm install -g expo-cli
```

Luego reinicia la terminal.

### ❌ No puedo escanear el QR
**Problema:** Tu teléfono y PC no están en la misma red WiFi

**Solución:**
```powershell
# Detén el servidor (Ctrl + C)
# Reinicia en modo túnel:
npm start -- --tunnel
```

### ❌ Error: "Port 19000 already in use"
**Problema:** Ya hay otro proceso usando el puerto

**Solución:**
```powershell
# Encuentra el proceso:
Get-Process -Name "node"

# Mátalo:
Stop-Process -Name "node" -Force

# Reinicia:
npm start
```

### ❌ La app no se actualiza en el teléfono
**Solución:**
1. Sacude el dispositivo
2. Presiona "Reload"

O en la terminal:
```powershell
# Presiona 'r' para reload
```

### ❌ Errores de caché
```powershell
npm start -- -c
```

### ❌ Permisos denegados (Windows)
```powershell
# Ejecuta como Administrador:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## Verificación de Instalación Correcta

### Checklist:
- [ ] Node.js instalado (v14+)
- [ ] npm instalado
- [ ] Expo CLI instalado globalmente
- [ ] Dependencias instaladas (node_modules/ existe)
- [ ] Servidor corriendo (muestra QR)
- [ ] Expo Go instalado en el teléfono
- [ ] App cargando en el dispositivo

### Comandos de verificación:
```powershell
# Verificar Node
node --version
# Debe mostrar: v14.x.x o superior

# Verificar npm
npm --version
# Debe mostrar: 6.x.x o superior

# Verificar Expo
expo --version
# Debe mostrar: 6.x.x o superior

# Verificar estructura
Get-ChildItem
# Debe mostrar: App.js, package.json, src/, etc.

# Verificar node_modules
Test-Path node_modules
# Debe mostrar: True
```

## Flujo Completo (Resumen)

```
1. Instalar Node.js
   ↓
2. Abrir PowerShell
   ↓
3. cd a la carpeta del proyecto
   ↓
4. npm install -g expo-cli
   ↓
5. npm install
   ↓
6. npm start
   ↓
7. Escanear QR con Expo Go
   ↓
8. ¡App funcionando! 🎉
```

## Tiempo Estimado

- **Primera vez:** 15-20 minutos
- **Instalación de dependencias:** 3-5 minutos
- **Inicio del servidor:** 30 segundos
- **Carga inicial en dispositivo:** 30-60 segundos
- **Recargas posteriores:** 5-10 segundos

## Comandos Útiles Durante el Desarrollo

### En la terminal con el servidor corriendo:

```
r - Reload app
d - Open DevTools
m - Toggle menu
j - Open debugger
c - Clear console
q - Quit
```

### Detener el servidor:
```
Ctrl + C
```

## Próximos Pasos Después de la Instalación

1. **Explorar la app en tu teléfono:**
   - Navega por todas las pestañas
   - Prueba agregar productos al carrito
   - Intenta agendar una cita

2. **Hacer cambios:**
   - Abre `src/data/mockData.js`
   - Modifica un precio
   - Guarda el archivo
   - Observa cómo se actualiza automáticamente

3. **Personalizar:**
   - Lee `EXTENSIONES.md` para ideas
   - Modifica colores en los estilos
   - Agrega nuevos productos

## Recursos de Ayuda

- **Documentación oficial:** https://docs.expo.dev/
- **Comunidad:** https://forums.expo.dev/
- **Discord:** https://chat.expo.dev/
- **Stack Overflow:** Tag `expo` o `react-native`

## Contacto de Emergencia

Si nada funciona:
1. Lee el archivo `README.md`
2. Revisa `QUICK_START.md`
3. Consulta `COMANDOS_WINDOWS.md`
4. Busca el error en Google
5. Pregunta en la comunidad de Expo

---

**¡Buena suerte con tu proyecto! 🚀**

Si llegaste hasta aquí y todo funciona, ¡felicidades! Ya tienes una app funcional de React Native.
