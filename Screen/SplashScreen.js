// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image
} from 'react-native';

import rudderClient from '@rudderstack/rudder-sdk-react-native';
import clevertap from "@rudderstack/rudder-integration-clevertap-react-native";

const config = {
  dataPlaneUrl : "https://clevertapof.dataplane.rudderstack.com", 
  logLevel: 3,
  trackAppLifecycleEvents: true,
  withFactories: [clevertap]
};
rudderClient.setup("2BC2W2MqaJRrbMNS6GUvn8XTLOP", config); 
import AsyncStorage from '@react-native-community/async-storage';
rudderClient.track("Splash Screen");
const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('user_id').then((value) =>
        navigation.replace(
          value === null ? 'Auth' : 'DrawerNavigationRoutes'
        ),
      );
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
          source={{
            uri: 'https://c8.alamy.com/comp/2E3MXNB/young-teenager-girl-in-bicycle-anime-character-in-the-road-vector-illustration-design-2E3MXNB.jpg',
          }}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffdab9',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});