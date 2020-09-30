import React, { useState, useEffect } from 'react';
import {View, TextInput, Text, Image, TouchableOpacity, Switch} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import userImg from '../../assets/user.png'

import styles from './styles';

export default function CreateGroup() {
    
    const navigation = useNavigation();

    const [switchValue, setSwitchValue] = useState(false);

    const toggleSwitch = (value) => {
        //To handle switch toggle
        setSwitchValue(value);
        //State changes according to switch
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <SimpleLineIcons name = "arrow-left" size = {28} color = "#00BFF3" />
                </TouchableOpacity> 
                <Text style={styles.headerTitle}>
                    Criar grupo
                </Text>
                <Image style={{width: 30, height: 30, borderRadius: 25}}/>
            </View>
            <View>
                <Image source={userImg} style={styles.groupImage}/>

                <TouchableOpacity>
                    <FontAwesome name = "camera" size = {30} color = "#002E45" style={{alignSelf: 'center', marginTop: -20, marginLeft: 60}} />
                </TouchableOpacity>
                
                <TextInput
                    style={styles.inputs}
                    autoCompleteType='name'
                    textContentType='name'
                    placeholder='Nome'
                />

                <TextInput
                    style={styles.inputs}
                    placeholder='Localização'
                />

                <TextInput
                    style={styles.inputs}
                    placeholder='Bio'
                />
                <View style={styles.switchContainer}>
                    <Text style={styles.textSwitch}>Tornar grupo privado: </Text>

                    <Switch style={styles.switchButton}
                        onValueChange={toggleSwitch}
                        value={switchValue}
                    />
                </View>
                

                <TouchableOpacity onPress={() => navigation.navigate('AreaInteresse')} style={styles.button}>
                    <SimpleLineIcons name = "arrow-right" size = {28} color = "#f2f2f2" style={{alignSelf: 'center', marginRight: 15}} />
                    <Text style={styles.buttonText}>Avançar</Text>
                </TouchableOpacity>

                
            </View>
        </View>
    )
}