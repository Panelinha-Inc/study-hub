import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import HamburguerMenu from './pages/HamburguerMenu';
import ProfileMenu from './pages/ProfileMenu';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            
            <AppStack.Navigator screenOptions={{headerShown: false}}>

                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="HamburguerMenu" component={HamburguerMenu} />
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="SignUp" component={SignUp} />
                <AppStack.Screen name="ProfileMenu" component={ProfileMenu} />

            </AppStack.Navigator>

        </NavigationContainer>
    );
}