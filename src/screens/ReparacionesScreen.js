import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { reparacionesData } from '../data/mockData';
import ServiceCard from '../components/ServiceCard';

const ReparacionesScreen = ({ navigation }) => {
  const [selectedModel, setSelectedModel] = useState(reparacionesData[0]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Servicios de Reparación</Text>
        <Text style={styles.headerSubtitle}>Selecciona tu modelo de iPhone</Text>
      </View>

      {/* Model Selector */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.modelSelector}
        contentContainerStyle={styles.modelSelectorContent}
      >
        {reparacionesData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.modelButton,
              selectedModel.id === item.id && styles.modelButtonActive,
            ]}
            onPress={() => setSelectedModel(item)}
          >
            <Text
              style={[
                styles.modelButtonText,
                selectedModel.id === item.id && styles.modelButtonTextActive,
              ]}
            >
              {item.modelo}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Services List */}
      <ScrollView style={styles.servicesList} showsVerticalScrollIndicator={false}>
        <Text style={styles.servicesTitle}>Servicios disponibles</Text>
        {selectedModel.servicios.map((servicio) => (
          <ServiceCard
            key={servicio.id}
            servicio={servicio}
            modelo={selectedModel.modelo}
            onPress={() => navigation.navigate('Citas')}
          />
        ))}
        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* CTA Button */}
      <View style={styles.ctaContainer}>
        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => navigation.navigate('Citas')}
        >
          <Text style={styles.ctaButtonText}>Agendar Cita de Reparación</Text>
        </TouchableOpacity>
      </View>
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
  modelSelector: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  modelSelectorContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 10,
  },
  modelButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
  },
  modelButtonActive: {
    backgroundColor: '#007AFF',
  },
  modelButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  modelButtonTextActive: {
    color: '#fff',
  },
  servicesList: {
    flex: 1,
    paddingTop: 16,
  },
  servicesTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginHorizontal: 16,
    marginBottom: 12,
  },
  bottomSpacer: {
    height: 20,
  },
  ctaContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  ctaButton: {
    backgroundColor: '#34C759',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default ReparacionesScreen;
