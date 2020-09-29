import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton
} from 'react-native-popup-dialog';

import userImg from '../../assets/user.png'

import styles from './styles';

export default function SignUp() {

  const navigation = useNavigation();

  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
      quality: 0,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result);
    }
  };

  const signUp = async () => {
    const response = await api.post('checkEmailExists', { "email": valueEmail });
    if (response.data.exist == false) {
      if (!valueName) {
        setErrorMessage('Preencha o campo de nome.');
        setState(true);
      } else if (!valueEmail) {
        setErrorMessage('Preencha o campo de email.');
        setState(true);
      } else if (!valuePass) {
        setErrorMessage('Preencha os campos de senha.');
        setState(true);
      } else if (valuePass === valuePass2) {
        if (image) {
          navigation.navigate('AreaInteresse', {
            "from": "SignUp",
            valueName,
            valueEmail,
            valueBio,
            valueLocalization,
            valuePass,
            "image": image.base64
          });
        } else {
          navigation.navigate('AreaInteresse', {
            "from": "SignUp",
            valueName,
            valueEmail,
            valueBio,
            valueLocalization,
            valuePass,
            "image": ""
          });
        }
      } else {
        setErrorMessage('Senhas incompatíveis.');
        setState(true);
      }
    } else {
      setErrorMessage('Este email já está em uso.');
      setState(true);
    }

  };

  const [state, setState] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const [valueName, onChangeName] = useState('');
  const [valueEmail, onChangeEmail] = useState('');
  const [valueLocalization, onChangeLocalization] = useState('');
  const [valueBio, onChangeBio] = useState('');
  const [valuePass, onChangePass] = useState('');
  const [valuePass2, onChangePass2] = useState('');

  // Lembrar de mudar o botão pra goBack()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SimpleLineIcons name="arrow-left" size={28} color="#00BFF3" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          Cadastro
                </Text>
        <Image style={{ width: 30, height: 30, borderRadius: 25 }} />
      </View>
      <View>
        {image ? <Image source={{ uri: image.uri }} style={styles.profileImage} /> : <Image source={userImg} style={styles.profileImage} />}

        <TouchableOpacity onPress={pickImage}>
          <FontAwesome name="camera" size={30} color="#002E45" style={{ alignSelf: 'center', marginTop: -20, marginLeft: 60 }} />
        </TouchableOpacity>

        <TextInput
          style={styles.inputs}
          onChangeText={text => onChangeName(text)}
          value={valueName}
          autoCompleteType='name'
          textContentType='name'
          placeholder='Nome'
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
          onChangeText={text => onChangeLocalization(text)}
          value={valueLocalization}
          placeholder='Localização'
        />
        <TextInput
          style={styles.inputs}
          onChangeText={text => onChangeBio(text)}
          value={valueBio}
          placeholder='Bio'
        />
        <TextInput
          style={styles.inputs}
          onChangeText={text => onChangePass(text)}
          value={valuePass}
          autoCompleteType='password'
          placeholder='Senha'
          secureTextEntry={true}
        />
        <TextInput
          style={styles.inputs}
          onChangeText={text => onChangePass2(text)}
          value={valuePass2}
          autoCompleteType='password'
          placeholder='Confirmar senha'
          secureTextEntry={true}
        />

        <TouchableOpacity onPress={ signUp } style={styles.button}>
          <SimpleLineIcons name="arrow-right" size={28} color="#f2f2f2" style={{ alignSelf: 'center', marginRight: 15 }} />
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>
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