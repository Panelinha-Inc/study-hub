import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity, Switch } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import userImg from '../../assets/user.png'

import styles from './styles';

export default function CreateGroup() {

    const navigation = useNavigation();
    const route = useRoute();

    const user = route.params.user;
    const [valueName, onChangeName] = useState('');
    const [valueLocalization, onChangeLocalization] = useState('');
    const [valueBio, onChangeBio] = useState('');
    const [switchValue, setSwitchValue] = useState(false);

    const toggleSwitch = (value) => {
        //To handle switch toggle
        setSwitchValue(value);
        //State changes according to switch
    };

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

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <SimpleLineIcons name="arrow-left" size={28} color="#00BFF3" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>
                    Criar grupo
                </Text>
                <Image style={{ width: 30, height: 30, borderRadius: 25 }} />
            </View>
            <View>
                {image ? <Image source={{ uri: image.uri }} style={styles.groupImage} /> : <Image source={userImg} style={styles.groupImage} />}

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
                <View style={styles.switchContainer}>
                    <Text style={styles.textSwitch}>Tornar grupo privado: </Text>

                    <Switch style={styles.switchButton}
                        onValueChange={toggleSwitch}
                        value={switchValue}
                    />
                </View>


                <TouchableOpacity onPress={() => navigation.navigate('AreaInteresseGrupo', {
                    'groupData': {
                        user,
                        valueName,
                        valueLocalization,
                        valueBio,
                        image,
                        switchValue,
                    }
                })} style={styles.button}>
                    <SimpleLineIcons name="arrow-right" size={28} color="#f2f2f2" style={{ alignSelf: 'center', marginRight: 15 }} />
                    <Text style={styles.buttonText}>Avançar</Text>
                </TouchableOpacity>


            </View>
        </View>
    )
}