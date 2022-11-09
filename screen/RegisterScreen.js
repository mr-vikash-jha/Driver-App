// #6 Email Authentication using Firebase Authentication in React Native App
// https://aboutreact.com/react-native-firebase-authentication/

// Import React and Component
import React, {useState, createRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import auth from '@react-native-firebase/auth';

const RegisterScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userBike, setUserBike] = useState('');
  const [errortext, setErrortext] = useState('');

  const emailInputRef = createRef();
  const passwordInputRef = createRef();
  const nameInputRef = createRef();
  const bikeNumberInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext('');
    if (!userName) return alert('Please fill Name');
    if (!userEmail) return alert('Please fill Email');
    if (!userPassword) return alert('Please fill Address');
    if (!userBike) return alert('Pleade fill Bike Number');

    auth()
      .createUserWithEmailAndPassword(userEmail, userPassword)
      .then(user => {
        console.log('Registration Successful. Please Login to proceed');
        console.log(user);
        if (user) {
          auth()
            .currentUser.updateProfile({
              displayName: userName,
              photoURL: 'https://aboutreact.com/profile.png',
            })
            .then(() => navigation.replace('HomeScreen'))
            .catch(error => {
              alert(error);
              console.error(error);
            });
        }
      })
      .catch(error => {
        console.log(error);
        if (error.code === 'auth/email-already-in-use') {
          setErrortext('That email address is already in use!');
        } else {
          setErrortext(error.message);
        }
      });
  };

  return (
    <SafeAreaView
      style={{
        display: 'flex',
        backgroundColor: '#307ecc',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        <View style={styles.registerScreen}>
          <View style={{alignItems: 'center', marginTop: 10, marginBottom: 12}}>
            <Text
              style={{
                color: 'black',
                fontWeight: '500',
                fontSize: 24,
              }}>
              Register
            </Text>
          </View>
          <KeyboardAvoidingView enabled>
            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserName => setUserName(UserName)}
                underlineColorAndroid="#f000"
                placeholder="Enter Name"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                returnKeyType="next"
                onSubmitEditing={() =>
                  nameInputRef.current && nameInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserEmail => setUserEmail(UserEmail)}
                underlineColorAndroid="#f000"
                placeholder="Enter Email"
                placeholderTextColor="#8b9cb5"
                keyboardType="email-address"
                ref={emailInputRef}
                returnKeyType="next"
                onSubmitEditing={() =>
                  emailInputRef.current && emailInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={userBike => setUserBike(userBike)}
                underlineColorAndroid="#f000"
                placeholder="Enter Bike Number"
                placeholderTextColor="#8b9cb5"
                keyboardType="sentences"
                ref={bikeNumberInputRef}
                returnKeyType="next"
                onSubmitEditing={() =>
                  bikeNumberInputRef.current &&
                  bikeNumberInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                underlineColorAndroid="#f000"
                placeholder="Enter Password"
                placeholderTextColor="#8b9cb5"
                ref={passwordInputRef}
                returnKeyType="next"
                secureTextEntry={true}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}> {errortext} </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitButton}>
              <Text style={styles.buttonTextStyle}>REGISTER</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('LoginScreen')}>
              Already registered ? Login
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  registerScreen: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 12,
  },
  sectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#13ab8f',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 4,
    marginLeft: 25,
    marginRight: 25,
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
    color: 'black',
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    // borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: '#2a2e2d',
    textAlign: 'center',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
    marginBottom: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
