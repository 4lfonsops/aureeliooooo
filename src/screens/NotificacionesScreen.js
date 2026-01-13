// NotificacionesScreen.js - Pantalla opcional para mostrar notificaciones
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const NotificacionesScreen = () => {
  const notificaciones = [
    {
      id: '1',
      tipo: 'reparacion',
      titulo: 'Reparación completada',
      mensaje: 'Tu iPhone 14 Pro está listo para recoger',
      fecha: '2026-01-12T10:30:00',
      leido: false,
    },
    {
      id: '2',
      tipo: 'pedido',
      titulo: 'Pedido en camino',
      mensaje: 'Tu pedido #1234 será entregado hoy',
      fecha: '2026-01-11T15:20:00',
      leido: false,
    },
    {
      id: '3',
      tipo: 'cita',
      titulo: 'Recordatorio de cita',
      mensaje: 'Tu cita es mañana a las 14:00',
      fecha: '2026-01-10T09:00:00',
      leido: true,
    },
    {
      id: '4',
      tipo: 'promo',
      titulo: '¡Oferta especial!',
      mensaje: '20% de descuento en cristales templados',
      fecha: '2026-01-09T12:00:00',
      leido: true,
    },
  ];

  const getIconForType = (tipo) => {
    switch (tipo) {
      case 'reparacion': return '🔧';
      case 'pedido': return '📦';
      case 'cita': return '📅';
      case 'promo': return '🎉';
      default: return '🔔';
    }
  };

  const formatFecha = (fecha) => {
    const date = new Date(fecha);
    const now = new Date();
    const diff = now - date;
    const hours = Math.floor(diff / 3600000);
    
    if (hours < 1) return 'Hace menos de una hora';
    if (hours < 24) return `Hace ${hours} hora${hours > 1 ? 's' : ''}`;
    
    const days = Math.floor(hours / 24);
    if (days < 7) return `Hace ${days} día${days > 1 ? 's' : ''}`;
    
    return date.toLocaleDateString('es-ES', { 
      day: 'numeric', 
      month: 'short' 
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notificaciones</Text>
        <TouchableOpacity>
          <Text style={styles.markAllRead}>Marcar todas como leídas</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {notificaciones.map((notif) => (
          <TouchableOpacity
            key={notif.id}
            style={[
              styles.notificationCard,
              !notif.leido && styles.notificationUnread,
            ]}
          >
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>{getIconForType(notif.tipo)}</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.titulo}>{notif.titulo}</Text>
              <Text style={styles.mensaje} numberOfLines={2}>
                {notif.mensaje}
              </Text>
              <Text style={styles.fecha}>{formatFecha(notif.fecha)}</Text>
            </View>
            {!notif.leido && <View style={styles.unreadDot} />}
          </TouchableOpacity>
        ))}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  markAllRead: {
    fontSize: 13,
    color: '#007AFF',
    fontWeight: '600',
  },
  notificationCard: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 16,
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  notificationUnread: {
    backgroundColor: '#f0f7ff',
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 24,
  },
  contentContainer: {
    flex: 1,
  },
  titulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  mensaje: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
  },
  fecha: {
    fontSize: 12,
    color: '#999',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#007AFF',
    marginLeft: 8,
    alignSelf: 'center',
  },
  bottomSpacer: {
    height: 20,
  },
});

export default NotificacionesScreen;
