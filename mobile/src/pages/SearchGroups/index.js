import React from 'react';
import {View, TextInput, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import { FontAwesome, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';

import userImg from '../../assets/user.png';

export default function SearchGroups() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <SimpleLineIcons name = "arrow-left" size = {28} color = "#00BFF3" />
                </TouchableOpacity> 
                <Text style={styles.headerTitle}>
                    Buscar Grupo
                </Text>
                <Image style={{width: 30, height: 30, borderRadius: 25}}/>
            </View>
            <View style={styles.searchInput}>
                <TextInput
                    style={styles.inputs}
                    //onChangeText={"DS obvi"}
                    value={"DS obvi"}
                    autoCompleteType='name'
                    textContentType='name'
                    placeholder='Buscar'
                />
                <TouchableOpacity>
                    <FontAwesome style={styles.searchIcon} name="search" size={18} color="#8e8e93" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={[1, 2, 3, 4]}
                style={styles.testList}
                keyExtractor={incident => String(incident)}
                renderItem={() => (
                    <View>
                        <TouchableOpacity style={styles.groupBox} onPress={() => navigation.navigate('GroupDetailMember')}>
                            <View style={styles.viewImg}>
                                <Image source={userImg} style={{ width: 50, height: 50, borderRadius: 25 }} />
                            </View>
                            <View>
                                <Text style={styles.groupTitle}>
                                    DS obviamente '-'
                                </Text>
                                <View style={styles.interestingAreasBoxe}>
                                    <Text style={styles.interestingAreasText}>Python</Text>
                                    <Text style={styles.interestingAreasText}>Data Science</Text>
                                    <Text style={styles.interestingAreasText}>Machine Learning</Text>
                                    <Text style={styles.interestingAreasText}>Deep Learning</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
            )} />
        </View>
    )
}