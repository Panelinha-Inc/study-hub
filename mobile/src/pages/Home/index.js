import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../services/api';

import userImg from '../../assets/user.png'

import styles from './styles';

export default function Home() {

    const navigation = useNavigation();
    const route = useRoute();

    const user = route.params.user;
    //console.log(user);

    const [isStart, setIsStart] = useState(true);

    const [image, setImage] = useState(null);

    const getUserData = async () => {
        setIsStart(false);
        try {
            const data = await api.post('getUserData', { 'uid': user }, {
                headers: {
                    uid: user
                }
            });
            console.log('Chegou');
            setImage('data:image/png;base64,' + data.data.photoBase64);
            console.log('Home Photo: ', image);
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
                <TouchableOpacity onPress={() => navigation.navigate('HamburguerMenu', { user })}>
                    <SimpleLineIcons name="menu" size={28} color="#00BFF3" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>
                    StudyHub
                </Text>
                {image ? <Image source={{ uri: image }} style={{ width: 50, height: 50, borderRadius: 25 }} /> : <Image source={userImg} style={{ width: 50, height: 50, borderRadius: 25 }} />}
            </View>

            <Text style={{ marginTop: 50, fontWeight: 'bold', left: 4.3, fontSize: 18 }}>Grupos:</Text>

            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                style={styles.testList}
                keyExtractor={incident => String(incident)}
                renderItem={() => (
                    <View>
                        <TouchableOpacity style={styles.groupBox}>
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
    );
};

/*export default function Home() {

    navigation = useNavigation();

    return (
        <View>
            <View style={{ height: 200, justifyContent: 'space-between' }}>
                <Button
                title="Login"
                onPress={() => navigation.navigate('Login')}
                />
                <Button
                title="SignUp"
                onPress={() => navigation.navigate('SignUp')}
                />
                <Button
                title="Home"
                onPress={() => navigation.navigate('Home')}
                />
            </View>
        </View>
    )
}*/