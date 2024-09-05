// navigation/BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import FeatureScreen from '../screens/FeatureScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'CurrencyDetection':
              iconName = 'cash-outline';
              break;
            case 'TextReading':
              iconName = 'reader-outline';
              break;
            case 'ObjectIdentification':
              iconName = 'search-outline';
              break;
            case 'SpatialDescription':
              iconName = 'globe-outline';
              break;
            case 'FacialRecognition':
              iconName = 'camera-outline';
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="CurrencyDetection">
        {props => <FeatureScreen {...props} feature="currency_detection" />}
      </Tab.Screen>
      <Tab.Screen name="TextReading">
        {props => <FeatureScreen {...props} feature="text_reading" />}
      </Tab.Screen>
      <Tab.Screen name="ObjectIdentification">
        {props => <FeatureScreen {...props} feature="object_identification" />}
      </Tab.Screen>
      <Tab.Screen name="SpatialDescription">
        {props => <FeatureScreen {...props} feature="spatial_description" />}
      </Tab.Screen>
      <Tab.Screen name="FacialRecognition">
        {props => <FeatureScreen {...props} feature="facial_recognition" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
