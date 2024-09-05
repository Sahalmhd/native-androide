// navigation/CustomDrawerContent.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomDrawerContent = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Menu</Text>
      </View>
      <View style={styles.drawerItems}>
        <TouchableOpacity style={styles.link} onPress={() => props.navigation.navigate('Home')}>
          <Text style={styles.linkText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => props.navigation.navigate('CurrencyDetection')}>
          <Text style={styles.linkText}>Currency Detection</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => props.navigation.navigate('TextReading')}>
          <Text style={styles.linkText}>Text Reading</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => props.navigation.navigate('ObjectIdentification')}>
          <Text style={styles.linkText}>Object Identification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => props.navigation.navigate('SpatialDescription')}>
          <Text style={styles.linkText}>Spatial Description</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link} onPress={() => props.navigation.navigate('FacialRecognition')}>
          <Text style={styles.linkText}>Facial Recognition</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Light grey background
  },
  header: {
    backgroundColor: '#ffffff', // White background for header
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Light grey border
    alignItems: 'center',
    paddingTop: 50, // Adjust this value to align the header further down
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', // Dark grey text color
  },
  drawerItems: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  link: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Light grey border between items
  },
  linkText: {
    fontSize: 18,
    color: '#333', // Dark grey text color
  },
});

export default CustomDrawerContent;
 