import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import SelectMultiple from 'react-native-select-multiple'
import { FontAwesome } from '@expo/vector-icons';
// import { Feather, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function AreaInteresse() {
  const [state, setState] = useState({ selectedAreas: [] })

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

  function pressedButao() {
    var lista = [];
    state.selectedAreas.forEach((element) => {
      lista.push(element.value);
    })
    if (lista.length > 5) {
      ToastAndroid.showWithGravity("Escolha no máximo 5 opções!", ToastAndroid.LONG, ToastAndroid.BOTTOM);
    } else if (lista.length < 1) {
      ToastAndroid.showWithGravity("Escolha no mínimo 1 opção!", ToastAndroid.LONG, ToastAndroid.BOTTOM);
    } else {
      console.log(lista);
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.text, { fontSize: 20 }]}>Áreas de interesse</Text>
        <Text style={[styles.text, { fontSize: 20 }]}>Informe suas áreas de interesse:</Text>
        <Text style={[styles.text, { fontSize: 14 }]}>No mínimo 1 e no máximo 5</Text>
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
}