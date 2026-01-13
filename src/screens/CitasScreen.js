import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Platform,
  Alert,
  SafeAreaView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CitasScreen = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    modelo: '',
    servicio: '',
    comentarios: '',
  });

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleTimeChange = (event, selectedTime) => {
    setShowTimePicker(Platform.OS === 'ios');
    if (selectedTime) {
      setTime(selectedTime);
    }
  };

  const handleSubmit = () => {
    if (!formData.nombre || !formData.telefono || !formData.modelo || !formData.servicio) {
      Alert.alert('Error', 'Por favor completa todos los campos obligatorios');
      return;
    }

    Alert.alert(
      '¡Cita Agendada!',
      `Tu cita ha sido registrada para ${date.toLocaleDateString()} a las ${time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}.\n\nTe contactaremos pronto para confirmar.`,
      [
        {
          text: 'OK',
          onPress: () => {
            // Reset form
            setFormData({
              nombre: '',
              telefono: '',
              email: '',
              modelo: '',
              servicio: '',
              comentarios: '',
            });
            setDate(new Date());
            setTime(new Date());
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Agendar Cita</Text>
          <Text style={styles.headerSubtitle}>Reserva tu hora de reparación</Text>
        </View>

        <View style={styles.form}>
          {/* Información Personal */}
          <Text style={styles.sectionTitle}>Información Personal</Text>

          <Text style={styles.label}>Nombre completo *</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu nombre"
            value={formData.nombre}
            onChangeText={(text) => setFormData({ ...formData, nombre: text })}
          />

          <Text style={styles.label}>Teléfono *</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: +1234567890"
            value={formData.telefono}
            onChangeText={(text) => setFormData({ ...formData, telefono: text })}
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="tu@email.com"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Detalles del Servicio */}
          <Text style={styles.sectionTitle}>Detalles del Servicio</Text>

          <Text style={styles.label}>Modelo de iPhone *</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: iPhone 14 Pro"
            value={formData.modelo}
            onChangeText={(text) => setFormData({ ...formData, modelo: text })}
          />

          <Text style={styles.label}>Servicio requerido *</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: Cambio de pantalla"
            value={formData.servicio}
            onChangeText={(text) => setFormData({ ...formData, servicio: text })}
          />

          <Text style={styles.label}>Comentarios adicionales</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Describe el problema o comentarios adicionales"
            value={formData.comentarios}
            onChangeText={(text) => setFormData({ ...formData, comentarios: text })}
            multiline
            numberOfLines={4}
          />

          {/* Fecha y Hora */}
          <Text style={styles.sectionTitle}>Fecha y Hora</Text>

          <Text style={styles.label}>Fecha preferida</Text>
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={styles.dateButtonText}>
              📅 {date.toLocaleDateString('es-ES', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={handleDateChange}
              minimumDate={new Date()}
            />
          )}

          <Text style={styles.label}>Hora preferida</Text>
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShowTimePicker(true)}
          >
            <Text style={styles.dateButtonText}>
              ⏰ {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
          </TouchableOpacity>

          {showTimePicker && (
            <DateTimePicker
              value={time}
              mode="time"
              display="default"
              onChange={handleTimeChange}
            />
          )}

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Confirmar Cita</Text>
          </TouchableOpacity>

          <Text style={styles.disclaimer}>
            * Campos obligatorios. Te contactaremos para confirmar la disponibilidad.
          </Text>
        </View>
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
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  form: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
    marginTop: 16,
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
    color: '#1a1a1a',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  dateButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 14,
  },
  dateButtonText: {
    fontSize: 15,
    color: '#1a1a1a',
  },
  submitButton: {
    backgroundColor: '#34C759',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 12,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  disclaimer: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default CitasScreen;
