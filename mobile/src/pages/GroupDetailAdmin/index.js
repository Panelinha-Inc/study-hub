import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import userImg from '../../assets/user.png';

import styles from './styles';

export default function GroupDetailAdmin() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <SimpleLineIcons name="arrow-left" size={28} color="#00BFF3" />
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.headerTitle}>
                        DS Obviamente '-'
                    </Text>
                </View>
            </View>
            
            <View>
                <Image source={userImg} style={styles.profileImage} />
                <Text style={styles.text}>Descrição: Vamos juntos aprender Data Science S2.</Text>
                <Text style={styles.text}>Áreas: DS, ML, Estatística, Python.</Text>
                <Text style={styles.text}>Geo-localização: -12.5869; -11.493.</Text>
            </View>

            <View>
                <Text style={[styles.text, {fontWeight: 'bold', textAlign: 'center', marginTop: '5%'}]}>Participantes:</Text>

                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    style={styles.flatList}
                    keyExtractor={incident => String(incident)}
                    renderItem={() => (
                        <View>
                            <View style={styles.containerPart}>
                                <View style={styles.viewImg}>
                                    <Image source={userImg} style={{ width: 40, height: 40, borderRadius: 25 }} />
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={styles.groupTitle}>
                                        Vitória Carvalho
                                    </Text>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {}}>
                                        <FontAwesome name="trash" size={24} color="#002E45" style={{ alignSelf: 'center', marginTop: '50%'}} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.separator} />
                        </View>
                )} />

                <View style={styles.containerButton}>
                    <TouchableOpacity onPress={() => {}} style={styles.button}>
                        <FontAwesome name="trash" size={22} color="#f2f2f2" style={{ alignSelf: 'center', marginRight: 10 }} />
                        <Text style={styles.buttonText}>Apagar grupo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {}} style={styles.button}>
                        <AntDesign name="message1" size={22} color="#f2f2f2" style={{ alignSelf: 'center', marginRight: 10 }} />
                        <Text style={styles.buttonText}>Entrar no chat</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}