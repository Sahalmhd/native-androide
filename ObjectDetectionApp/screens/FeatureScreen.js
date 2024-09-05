import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const FeatureScreen = ({ route }) => {
  // Extract the feature from route.params if it exists
  const feature = route.params?.feature || 'Feature Not Found';

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>
          {feature.replace('_', ' ').toUpperCase()}
        </Text>
        <Text style={styles.description}>
          This is where the {feature.replace('_', ' ')} functionality will be implemented.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default FeatureScreen;
