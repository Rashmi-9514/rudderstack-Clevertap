// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Text, Alert, Image, StyleSheet, Button } from 'react-native';


import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import AsyncStorage from '@react-native-community/async-storage';
//Rudderstack code
import rudderClient from '@rudderstack/rudder-sdk-react-native';
import clevertap from "@rudderstack/rudder-integration-clevertap-react-native";

const config = {
  dataPlaneUrl : "https://clevertapof.dataplane.rudderstack.com", 
  logLevel: 3,
  trackAppLifecycleEvents: true,
  withFactories: [clevertap]
};
rudderClient.setup("2BC2W2MqaJRrbMNS6GUvn8XTLOP", config); 




const CustomSidebarMenu = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#f6f6f6',
            marginBottom: 20,
            color: '#36454F',
          }}
        >
          <View>
            <Text>Rashmi</Text>
            <Text>rashmi@clevertap.com</Text>
          </View>
          <Image
            source={{
              uri: 'https://c8.alamy.com/comp/2E3MXNB/young-teenager-girl-in-bicycle-anime-character-in-the-road-vector-illustration-design-2E3MXNB.jpg',
            }}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
        </View>
     
          <DrawerItemList {...props} />
   
        
      
      
        <DrawerItem
          label={({color}) => 
            <Text style={{color: '#36454F'}}>
              Logout
            </Text>
          }
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              'Logout',
              'Are you sure? You want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {
                    AsyncStorage.clear();
                    rudderClient.track("User Logout");
                    props.navigation.replace('Auth');
                   
                  },
                },
              ],
              {cancelable: false},
            );
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#307ecc',
    paddingTop: 40,
    color: '#36454F',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#307ecc',
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
});