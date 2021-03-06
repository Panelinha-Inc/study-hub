import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay'

import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton
} from 'react-native-popup-dialog';

import logo from '../../assets/logo.png'

import styles from './styles';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = require('../../../key.json');

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function Login() {

  const navigation = useNavigation();

  const [valueEmail, onChangeEmail] = useState('');
  const [valuePass, onChangePass] = useState('');
  const [state, setState] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [spinner, setSpinner] = useState(false);

  const auth = async (email, password) => {
    setSpinner(true);
    await firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
      console.log('successfully logged in!');
      //console.log(`User uid: ${user.user.uid}`);
      // TODO: Adicionar ao navigate informações necessárias sobre o usuário para as outras telas
      navigation.navigate('Home', { 'user': user.user.uid });
    })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);

        // TODO: Trocar mensagens de erro do firebase por mensagens em português
        if (errorCode == 'auth/wrong-password') {
          // The password is invalid or the user does not have a password
          setErrorMessage(errorMessage);
          setState(true);
          console.log(errorMessage);
        } else if (errorCode == 'auth/invalid-email') {
          // Thrown if the email address is not valid
          setErrorMessage(errorMessage);
          setState(true);
          console.log(errorMessage);
        } else if (errorCode == 'auth/user-disabled') {
          // Thrown if the user corresponding to the given email has been disabled
          setErrorMessage(errorMessage);
          setState(true);
          console.log(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
          // Thrown if there is no user corresponding to the given email
          setErrorMessage(errorMessage);
          setState(true);
          console.log(errorMessage);
        }
      });
    setSpinner(false);
  };

  // Lembrar de mudar o botão pra goBack()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Login</Text>
      </View>
      <View>
        {/* TODO: Usar a logo do projeto */}
        <Image source={logo} style={styles.logoImage} />

        <Spinner
          visible={spinner}
          textContent={''}
          textStyle={styles.spinnerTextStyle}
        />

        <TextInput
          style={styles.inputs}
          onChangeText={text => onChangeEmail(text)}
          value={valueEmail}
          autoCompleteType='email'
          textContentType='emailAddress'
          placeholder='Email'
          keyboardType='email-address'
        />
        <TextInput
          style={styles.inputs}
          onChangeText={text => onChangePass(text)}
          value={valuePass}
          autoCompleteType='password'
          placeholder='Senha'
          secureTextEntry={true}
        />

        {/* TODO: Dar um jeito de fazer os botões obedecerem kkk */}
        <View style={styles.containerButton}>
          <TouchableOpacity onPress={() => auth(valueEmail, valuePass)} style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.button}>
            <Text style={styles.buttonText}>Criar conta</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Dialog
        onDismiss={() => {
          setState(false);
        }}
        width={0.9}
        visible={state}
        rounded
        actionsBordered
        dialogTitle={
          <DialogTitle
            title="Mensagem de erro"
            style={{
              backgroundColor: '#F7F7F8',
              alignSelf: 'center'
            }}
            hasTitleBar={false}
            align="left"
          />
        }
        footer={
          <DialogFooter>
            <DialogButton
              text="Continuar"
              bordered
              onPress={() => {
                setState(false);
              }}
              key="button-1"
              style={{ color: "#000" }}
            />
          </DialogFooter>
        }>
        <DialogContent
          style={{
            backgroundColor: '#F7F7F8',
          }}>
          <Text style={{ textAlign: "center" }}>{errorMessage}</Text>
        </DialogContent>
      </Dialog>
    </View>
  )
}