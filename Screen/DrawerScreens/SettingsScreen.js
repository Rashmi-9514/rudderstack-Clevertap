// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import rudderClient from '@rudderstack/rudder-sdk-react-native';
import clevertap from "@rudderstack/rudder-integration-clevertap-react-native";
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
const config = {
  dataPlaneUrl : "https://clevertapof.dataplane.rudderstack.com", 
  logLevel: 3,
  trackAppLifecycleEvents: true,
  withFactories: [clevertap]
};
rudderClient.setup("2BC2W2MqaJRrbMNS6GUvn8XTLOP", config); 
// rudderClient.track("Settings Screen");
const SettingsScreen = () => {

  useFocusEffect(
    React.useCallback(() => {
      alert('Settings Screen was focused');
      rudderClient.track("Settings Screen");
      console.log("Settings Screen");
      // Do something when the screen is focused
      return () => {
        alert('Settings Screen was unfocused');
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, []) );
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Example React Native
            {'\n\n'}
            This is the Settings Screen
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          Example{'\n'}React Native
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
             © rashmi@clevertap
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;