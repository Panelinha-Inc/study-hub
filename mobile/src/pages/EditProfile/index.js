import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../services/api';

import userImg from '../../assets/user.png'

import styles from './styles';

export default function EditProfile() {

  const navigation = useNavigation();
  const route = useRoute();

  const user = route.params.user;
  //console.log(`uid in edit profile ${user}`);

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
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const [valueName, onChangeName] = useState('');
  const [valueLocalization, onChangeLocalization] = useState('');
  const [valueBio, onChangeBio] = useState('');
  const [isStart, setIsStart] = useState(true);

  const getUserData = async () => {
    setIsStart(false);
    try {
      const data = await api.post('getUserData', { 'uid': user }, {
        headers: {
          uid: user
        }
      });
      console.log('Alo');
      onChangeLocalization(data.data.locate);
      onChangeBio(data.data.bio);
      setImage('data:image/png;base64,' + data.data.photoBase64);
    } catch (err) {
      console.log("Erro ao coletar informações do usuário.");
      console.log(err);
    }
  };
  if (isStart) {
    getUserData();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SimpleLineIcons name="arrow-left" size={28} color="#00BFF3" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          Editar perfil
                </Text>
        <Image style={{ width: 30, height: 30, borderRadius: 25 }} />
      </View>
      <View>
        {image ? <Image source={{ uri: image }} style={styles.profileImage} /> : <Image source={userImg} style={styles.profileImage} />}

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

        <TouchableOpacity onPress={() => navigation.navigate('AreaInteresse', {
          'from': 'editProfile',
          user,
          valueName,
          valueLocalization,
          valueBio,
          image
        })} style={styles.button}>
          <SimpleLineIcons name="arrow-right" size={28} color="#f2f2f2" style={{ alignSelf: 'center', marginRight: 15 }} />
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}