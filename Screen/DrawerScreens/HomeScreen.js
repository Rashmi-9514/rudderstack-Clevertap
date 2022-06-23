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
//rudderClient.track("Home Screen");
const HomeScreen = () => {
 
  useFocusEffect(
    React.useCallback(() => {
      alert('Home Screen was focused');
      rudderClient.track("Home Screen");
      console.log("Home Screen");
      // Do something when the screen is focused
      return () => {
        alert('Home Screen was unfocused');
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
              color: '#36454F'
            }}>
            Home Screen
            {'\n\n'}
           
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: '#36454F',
          }}>
         
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

export default HomeScreen;