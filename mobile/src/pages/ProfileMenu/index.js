import React from 'react';
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import { Feather, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function ProfileMenu() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', marginBottom: 20}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name = "arrow-left" size = {28} color = "#00BFF3"/>
                </TouchableOpacity>
                <Text style={[styles.text, {fontWeight: 'bold', fontSize: 20}]}>Perfil</Text>
            </View>

            <View>
                <TouchableOpacity style={styles.viewOptions} onPress={() => {}}>
                    <Feather name = "edit" size = {28} color = "#000" style={styles.icon}/>
                    <Text style={styles.text}>Editar perfil</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.separator}/>

            <View>
                <TouchableOpacity style={styles.viewOptions} onPress={() => {}}>
                    <AntDesign name = "poweroff" size = {28} color = "#000" style={styles.icon}/>
                    <Text style={styles.text}>Desativar conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}