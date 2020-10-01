import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import SelectMultiple from 'react-native-select-multiple'
import { SimpleLineIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay'
import api from '../../services/api';

// import { Feather, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function AreaInteresse() {

  const [state, setState] = useState({ selectedAreas: [] });
  const navigate = useNavigation();
  const route = useRoute();

  const user = route.params.user;
  const from = route.params.from;
  const username = route.params.valueName;
  const email = route.params.valueEmail;
  const bio = route.params.valueBio;
  const locate = route.params.valueLocalization;
  const password = route.params.valuePass;
  const photoBase64 = route.params.image;

  const [spinner, setSpinner] = useState(false);

  const onSelectionsChange = (selectedAreas) => {
    setState({ selectedAreas })
  }

  const data = [
    { value: 2384, label: "Python" },
    { value: 23845, label: "Machine Learning" },
    { value: 2314, label: "Deep Learning" },
    { value: 23823, label: "Data Science" },
    { value: 23134, label: "Redes de Computadores" },
    { value: 2313456464, label: "IoT" },
    { value: 233454, label: "Engenharia de Software" },
    { value: 231456, label: "Banco de Dados" },
    { value: 234564564, label: "Blockchain" },
    { value: 2364, label: "Algoritmos e Estruturas de Dados" },
    { value: 2334234, label: "Programação Web" },
    { value: 2312, label: "Programação Funcional" },
    { value: 231254643, label: "Circuitos Digitais" },
  ]

  async function pressedButao() {
    var areasDeInteresse = [];
    state.selectedAreas.forEach((element) => {
      areasDeInteresse.push(element.value);
    })
    if (areasDeInteresse.length > 5) {
      ToastAndroid.showWithGravity("Escolha no máximo 5 opções!", ToastAndroid.LONG, ToastAndroid.BOTTOM);
    } else if (areasDeInteresse.length < 1) {
      ToastAndroid.showWithGravity("Escolha no mínimo 1 opção!", ToastAndroid.LONG, ToastAndroid.BOTTOM);
    } else {
      setSpinner(true);
      let response = null;
      if (from == 'SignUp') {
        response = await createUser(areasDeInteresse);
        // Enviando apenas o UUID do user
        navigate.navigate('Home', { "user": response.data });
      } else if (from == 'editProfile') {
        response = await updateUser(areasDeInteresse);
        navigate.navigate('Home', { "user": user });
      }
      console.log('Response: ', response);
      setSpinner(false);
    }
  }

  const createUser = async (areasDeInteresse) => {
    try {
      console.log(areasDeInteresse);
      const response = await api.post('createUser', {
        username,
        password,
        email,
        bio,
        locate,
        areasDeInteresse,
        photoBase64
      });
      console.log(response);
      return response;
    } catch (err) {
      console.log("Erro ao criar user.");
      console.log(err);
    }
  };

  const updateUser = async (areasDeInteresse) => {
    const data = {
      username,
      bio,
      locate,
      areasDeInteresse,
      photoBase64
    };

    try {
      console.log(user);
      const response = await api.post('updateUser', data, {
        headers: {
          uid: user
        }
      });
      return response;
    } catch (err) {
      console.log("Erro ao atualizar os dados.");
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>

      <Spinner
        visible={spinner}
        textContent={''}
        textStyle={styles.spinnerTextStyle}
      />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigate.goBack()}>
          <SimpleLineIcons name="arrow-left" size={28} color="#00BFF3" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Áreas de interesse</Text>
      </View>

      <View>
        <Text style={[styles.text, { fontSize: 20 }]}>Informe suas áreas de interesse:</Text>
        <Text style={[styles.text, { fontSize: 14 }]}>(No mínimo 1 e no máximo 5)</Text>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.interestingAreasText}>{state.selectedAreas.length}/5</Text>
      </View>
      <SelectMultiple
        items={data}
        style={styles.testList}
        selectedItems={state.selectedAreas}
        onSelectionsChange={onSelectionsChange} />

      <TouchableOpacity onPress={pressedButao} style={styles.butao}>
        <FontAwesome name="save" size={28} color="#f2f2f2" style={{ alignSelf: 'center', marginRight: 15 }} />
        <Text style={styles.buttonText}>Concluir</Text>
      </TouchableOpacity>

    </View>
  )

  // OBS: No botão de concluir, a função pode mudar dependendo da tela que navegou para as áreas de interesse
  //      Isso porque, caso tenha vindo da tela de cadastro, a função é uma. Caso venha da tela de editar, é outra.
}