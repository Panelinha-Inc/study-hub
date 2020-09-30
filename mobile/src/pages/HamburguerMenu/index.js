import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { Feather, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

export default function Menu() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" size={28} color="#00BFF3" />
                </TouchableOpacity>
                <Text style={[styles.text, { fontWeight: 'bold', fontSize: 20 }]}>StudyHub</Text>
            </View>

            <View>
                <TouchableOpacity style={styles.viewOptions} onPress={() => navigation.navigate('ProfileMenu')}>
                    <SimpleLineIcons name="user" size={28} color="#000" style={styles.icon} />
                    <Text style={styles.text}>Perfil</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.separator} />

            <View>
                <TouchableOpacity style={styles.viewOptions} onPress={() => {navigation.navigate('SearchGroups')}}>
                    <Feather name="search" size={28} color="#000" style={styles.icon} />
                    <Text style={styles.text}>Buscar grupos</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.separator} />

            <View>
                <TouchableOpacity style={styles.viewOptions} onPress={() => { }}>
                    <AntDesign name="team" size={28} color="#000" style={styles.icon} />
                    <Text style={styles.text}>Ver grupos recomendados</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.separator} />

            <View>
                <TouchableOpacity style={styles.viewOptions} onPress={() => {navigation.navigate('CreateGroup')}}>
                    <AntDesign name="addusergroup" size={28} color="#000" style={styles.icon} />
                    <Text style={styles.text}>Criar grupo</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.separator} />

            <View>
                <TouchableOpacity style={styles.viewOptions} onPress={() => {  }}>
                    <Feather name="edit" size={28} color="#000" style={styles.icon} />
                    <Text style={styles.text}>Editar grupo</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.separator} />

            <View>
                <TouchableOpacity style={styles.viewOptions} onPress={() => { }}>
                    <AntDesign name="logout" size={28} color="#000" style={styles.icon} />
                    <Text style={styles.text}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}