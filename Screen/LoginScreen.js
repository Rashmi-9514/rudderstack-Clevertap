// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import rudderClient from '@rudderstack/rudder-sdk-react-native';
import clevertap from "@rudderstack/rudder-integration-clevertap-react-native";
const CleverTap = require('clevertap-react-native');


const config = {
  dataPlaneUrl : "https://clevertapof.dataplane.rudderstack.com", 
  logLevel: 3,
  trackAppLifecycleEvents: true,
  recordScreenViews:true,
  withFactories: [clevertap]
};
rudderClient.setup("2BC2W2MqaJRrbMNS6GUvn8XTLOP", config); 

import Loader from './Components/Loader';

const LoginScreen = ({navigation}) => {
  
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userID, setUserID] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();
  useFocusEffect(
    React.useCallback(() => {
      alert('Screen was focused');
      rudderClient.track("Login Screen");
      console.log("Login Screen");
      // Do something when the screen is focused
      return () => {
        alert('Screen was unfocused');
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );
  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    else{
          
       
           rudderClient.identify(userID, {
            'Email': userEmail, 
             'Identity':userID,

          })
          rudderClient.track("User Login");
       
      }

      navigation.replace('DrawerNavigationRoutes'); 
     CleverTap.getCleverTapID((err, res) => {
            console.log('CleverTapID after login', res, err);
           // alert(`CleverTapID: \n ${res}`);
          });
    }

  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Image
                 source={{
                    uri: 'https://c8.alamy.com/comp/2E3MXNB/young-teenager-girl-in-bicycle-anime-character-in-the-road-vector-illustration-design-2E3MXNB.jpg',
                  }}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) =>
                  setUserEmail(UserEmail)
                }
                placeholder="Enter Email" //dummy@abc.com
                placeholderTextColor="#8365db"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(userID) =>
                  setUserID(userID)
                }
                placeholder="Enter ID" //dummy@abc.com
                placeholderTextColor="#8365db"
                autoCapitalize="none"
                keyboardType="name-phone-pad"
                returnKeyType="next"
                onSubmitEditing={Keyboard.dismiss}
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
                }
                placeholder="Enter Password" //12345
                placeholderTextColor="#8365db"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
              New Here ? Register
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f8ad9d',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: '#ea3636',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});