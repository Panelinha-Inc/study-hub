import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

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
}