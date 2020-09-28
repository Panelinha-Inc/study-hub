import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
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
const firebaseConfig = {
  apiKey: "AIzaSyDFHM734VoVlYtzS4r-wK7AEjrao9RiSxo",
  authDomain: "studyhub-9f612.firebaseapp.com",
  databaseURL: "https://studyhub-9f612.firebaseio.com",
  projectId: "studyhub-9f612",
  storageBucket: "studyhub-9f612.appspot.com",
  messagingSenderId: "394051859603",
  appId: "1:394051859603:web:c3ad7e57f1a57b596ec966",
  measurementId: "G-V3XLTH03D0"
};
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

  const auth = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
      console.log('successfully logged in!');
      // TODO: Adicionar ao navigate informações necessárias sobre o usuário para as outras telas
      navigation.navigate('Home', { user });
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
  }

  // Lembrar de mudar o botão pra goBack()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('HamburguerMenu')}>
          <SimpleLineIcons name="arrow-left" size={28} color="#00BFF3" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Login</Text>
        <Image style={{ width: 30, height: 30, borderRadius: 25 }} />
      </View>
      <View>
        {/* TODO: Usar a logo do projeto */}
        <Image source={logo} style={styles.logoImage} />

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
        <View styles={styles.containerButton}>
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