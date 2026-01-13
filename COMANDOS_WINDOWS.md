# 💻 Comandos para Windows PowerShell

## Instalación y Ejecución

### 1. Verificar Node.js
```powershell
node --version
npm --version
```

### 2. Instalar Expo CLI (si no está instalado)
```powershell
npm install -g expo-cli
```

### 3. Navegar a la carpeta del proyecto
```powershell
cd "C:\Users\EdWiN\Desktop\aureeliooooo"
```

### 4. Instalar dependencias
```powershell
npm install
```

### 5. Iniciar el proyecto
```powershell
npm start
```

## Comandos Alternativos

### Limpiar caché y reiniciar
```powershell
npm start -- -c
```

### Ejecutar en modo túnel (si hay problemas de red)
```powershell
npm start -- --tunnel
```

### Abrir en Android
```powershell
npm run android
```

### Abrir en navegador (modo web)
```powershell
npm run web
```

## Solución de Problemas

### Limpiar todo y reinstalar
```powershell
# Eliminar node_modules
Remove-Item -Recurse -Force node_modules

# Eliminar package-lock.json
Remove-Item package-lock.json

# Reinstalar
npm install

# Iniciar con caché limpia
npm start -- -c
```

### Si hay errores de permisos
```powershell
# Ejecutar PowerShell como Administrador y ejecutar:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Ver versión de Expo
```powershell
expo --version
```

### Actualizar Expo CLI
```powershell
npm install -g expo-cli@latest
```

## Atajos del Teclado en la Terminal

Cuando el servidor está corriendo, puedes usar:

- `r` - Recargar la aplicación
- `m` - Abrir menú de desarrollo
- `d` - Abrir DevTools
- `shift + d` - Abrir DevTools en una nueva ventana
- `j` - Abrir debugger
- `w` - Abrir en navegador web
- `a` - Abrir en emulador Android
- `i` - Abrir en simulador iOS
- `q` - Cerrar el servidor

## Gestión de Paquetes

### Ver dependencias instaladas
```powershell
npm list --depth=0
```

### Instalar nueva dependencia
```powershell
npm install nombre-paquete
```

### Desinstalar dependencia
```powershell
npm uninstall nombre-paquete
```

### Actualizar dependencias
```powershell
npm update
```

## Verificar Estado del Proyecto

### Ver estructura de carpetas
```powershell
tree /F
```

### Buscar archivos específicos
```powershell
Get-ChildItem -Recurse -Filter "*.js" | Select-Object FullName
```

## Variables de Entorno (si las necesitas)

### Crear archivo .env
```powershell
New-Item .env
```

### Editar archivo .env
```powershell
notepad .env
```

## Git (Control de Versiones)

### Inicializar repositorio
```powershell
git init
```

### Ver estado
```powershell
git status
```

### Agregar archivos
```powershell
git add .
```

### Commit
```powershell
git commit -m "Mensaje del commit"
```

### Ver historial
```powershell
git log --oneline
```

## Información del Sistema

### Ver espacio en disco
```powershell
Get-PSDrive C | Select-Object Used,Free
```

### Ver procesos de Node
```powershell
Get-Process node
```

### Matar proceso de Node (si es necesario)
```powershell
Stop-Process -Name "node" -Force
```

## Notas Importantes

1. **Siempre ejecuta los comandos desde la carpeta del proyecto**
2. **Si ves errores de EPERM, cierra VS Code y otras apps que puedan estar usando los archivos**
3. **Para paths con espacios, usa comillas: `cd "C:\ruta con espacios"`**
4. **PowerShell distingue entre mayúsculas y minúsculas en algunos contextos**

## Verificación Completa del Entorno

```powershell
# Script de verificación
Write-Host "Verificando Node.js..." -ForegroundColor Green
node --version

Write-Host "Verificando npm..." -ForegroundColor Green
npm --version

Write-Host "Verificando Expo CLI..." -ForegroundColor Green
expo --version

Write-Host "Ubicación actual:" -ForegroundColor Green
Get-Location

Write-Host "Archivos en el directorio:" -ForegroundColor Green
Get-ChildItem | Select-Object Name
```

## Productividad

### Alias útiles (agregar al perfil de PowerShell)
```powershell
# Ver perfil
notepad $PROFILE

# Agregar estos alias:
Set-Alias start 'npm start'
Set-Alias clean 'npm start -- -c'

function Clean-Install {
    Remove-Item -Recurse -Force node_modules
    Remove-Item package-lock.json
    npm install
}
```

---

**¡Todo listo para desarrollar! 🚀**
