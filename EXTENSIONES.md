# 🔧 Guía de Extensión y Personalización

## Agregar Nueva Pantalla

### 1. Crear el archivo de la pantalla

```javascript
// src/screens/NuevaPantallaScreen.js
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const NuevaPantallaScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mi Nueva Pantalla</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
  },
});

export default NuevaPantallaScreen;
```

### 2. Importar y agregar al navegador

```javascript
// App.js
import NuevaPantallaScreen from './src/screens/NuevaPantallaScreen';

// Dentro del Tab.Navigator:
<Tab.Screen
  name="NuevaPantalla"
  component={NuevaPantallaScreen}
  options={{
    tabBarIcon: ({ color, size }) => (
      <Text style={{ fontSize: size }}>✨</Text>
    ),
  }}
/>
```

## Agregar Nuevos Productos

### En mockData.js

```javascript
export const accesoriosData = [
  // ... productos existentes
  {
    id: 'a11', // ID único
    nombre: 'Power Bank 20000mAh',
    categoria: 'Cargadores',
    precio: 45,
    descripcion: 'Batería portátil de alta capacidad con carga rápida',
    disponible: true,
    imagen: '🔋'
  },
];
```

## Agregar Modelos de iPhone

```javascript
export const reparacionesData = [
  // ... modelos existentes
  {
    id: '6',
    modelo: 'iPhone 15 Pro Max',
    servicios: [
      { id: 's21', nombre: 'Pantalla', precio: 450, tiempo: '2-3 horas' },
      { id: 's22', nombre: 'Batería', precio: 150, tiempo: '45 min' },
      // ... más servicios
    ]
  },
];
```

## Crear Componente Personalizado

### Ejemplo: Tarjeta de Oferta Especial

```javascript
// src/components/PromoCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PromoCard = ({ titulo, descuento, descripcion, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{descuento}% OFF</Text>
      </View>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.descripcion}>{descripcion}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  badge: {
    backgroundColor: '#FF3B30',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  badgeText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },
  titulo: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  descripcion: {
    fontSize: 14,
    color: '#666',
  },
});

export default PromoCard;
```

## Agregar Context para Favoritos

```javascript
// src/context/FavoritesContext.js
import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites debe usarse dentro de FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (item) => {
    if (!favorites.find(fav => fav.id === item.id)) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFavorite = (itemId) => {
    setFavorites(favorites.filter(fav => fav.id !== itemId));
  };

  const isFavorite = (itemId) => {
    return favorites.some(fav => fav.id === itemId);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
```

## Integrar con API Backend

### Ejemplo de llamada a API

```javascript
// src/services/api.js
const API_URL = 'https://tu-api.com';

export const fetchReparaciones = async () => {
  try {
    const response = await fetch(`${API_URL}/reparaciones`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching reparaciones:', error);
    throw error;
  }
};

export const createCita = async (citaData) => {
  try {
    const response = await fetch(`${API_URL}/citas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(citaData),
    });
    return await response.json();
  } catch (error) {
    console.error('Error creating cita:', error);
    throw error;
  }
};
```

### Usar en un componente

```javascript
import { useEffect, useState } from 'react';
import { fetchReparaciones } from '../services/api';

const ReparacionesScreen = () => {
  const [reparaciones, setReparaciones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadReparaciones();
  }, []);

  const loadReparaciones = async () => {
    try {
      const data = await fetchReparaciones();
      setReparaciones(data);
    } catch (error) {
      Alert.alert('Error', 'No se pudieron cargar las reparaciones');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#007AFF" />;
  }

  // ... resto del componente
};
```

## Agregar Búsqueda

```javascript
const [searchQuery, setSearchQuery] = useState('');

const filteredProducts = accesoriosData.filter(product =>
  product.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
  product.descripcion.toLowerCase().includes(searchQuery.toLowerCase())
);

// En el render:
<TextInput
  style={styles.searchInput}
  placeholder="Buscar productos..."
  value={searchQuery}
  onChangeText={setSearchQuery}
/>
```

## Agregar Animaciones

```javascript
import { Animated } from 'react-native';

const fadeAnim = useRef(new Animated.Value(0)).current;

useEffect(() => {
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 500,
    useNativeDriver: true,
  }).start();
}, []);

return (
  <Animated.View style={{ opacity: fadeAnim }}>
    {/* Contenido */}
  </Animated.View>
);
```

## Agregar Almacenamiento Local (AsyncStorage)

### Instalación
```bash
expo install @react-native-async-storage/async-storage
```

### Uso
```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

// Guardar
const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving data:', error);
  }
};

// Leer
const loadData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error loading data:', error);
    return null;
  }
};
```

## Agregar Notificaciones Push

### Instalación
```bash
expo install expo-notifications
```

### Configuración básica
```javascript
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

// Programar notificación
const schedulePushNotification = async () => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Recordatorio",
      body: 'Tu cita es en 1 hora',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 3600 },
  });
};
```

## Temas y Colores Dinámicos

```javascript
// src/theme/colors.js
export const colors = {
  primary: '#007AFF',
  secondary: '#34C759',
  danger: '#FF3B30',
  warning: '#FF9500',
  background: '#f8f9fa',
  white: '#ffffff',
  black: '#1a1a1a',
  gray: {
    100: '#f5f5f5',
    200: '#e0e0e0',
    300: '#d0d0d0',
    400: '#999',
    500: '#666',
  },
};

// Usar en componentes
import { colors } from '../theme/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
  },
});
```

## Validación de Formularios

```javascript
const validateForm = () => {
  const errors = {};
  
  if (!formData.nombre.trim()) {
    errors.nombre = 'El nombre es requerido';
  }
  
  if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    errors.email = 'Email inválido';
  }
  
  if (!formData.telefono.match(/^\+?[1-9]\d{1,14}$/)) {
    errors.telefono = 'Teléfono inválido';
  }
  
  return errors;
};
```

## Navegación Programática

```javascript
// Desde props
navigation.navigate('Carrito');

// Con parámetros
navigation.navigate('DetalleProducto', { productId: '123' });

// Volver atrás
navigation.goBack();

// Resetear el stack
navigation.reset({
  index: 0,
  routes: [{ name: 'Inicio' }],
});
```

---

**¡Explora y personaliza la app a tu gusto! 🚀**
