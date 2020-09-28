import React, { useState } from 'react';
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import { Feather, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Dialog, {
    DialogTitle,
    DialogContent,
    DialogFooter,
    DialogButton
  } from 'react-native-popup-dialog';

import styles from './styles';

export default function ProfileMenu() {

    const navigation = useNavigation();

      const [state, setState] = useState(false);

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', marginBottom: 20}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name = "arrow-left" size = {28} color = "#00BFF3"/>
                </TouchableOpacity>
                <Text style={[styles.text, {fontWeight: 'bold', fontSize: 20}]}>Perfil</Text>
            </View>

            <View>
                <TouchableOpacity style={styles.viewOptions} onPress={() => navigation.navigate("EditProfile")}>
                    <Feather name = "edit" size = {28} color = "#000" style={styles.icon}/>
                    <Text style={styles.text}>Editar perfil</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.separator}/>

            <View>
                <TouchableOpacity style={styles.viewOptions} onPress={() => {
                    setState(true);
                }}>
                    <AntDesign name = "poweroff" size = {28} color = "#000" style={styles.icon}/>
                    <Text style={styles.text}>Desativar conta</Text>
                </TouchableOpacity>
            </View>

            <Dialog
                onDismiss={() => {
                    setState(false);
                }}
                width={0.9}
                visible={state}
                rounded
                actionsBordered
                dialogTitle={
                    <DialogTitle
                    title="Tem certeza que deseja desativar sua conta?"
                    style={{
                        backgroundColor: '#F7F7F8',
                    }}
                    hasTitleBar={false}
                    align="left"
                    />
                }
                footer={
                    <DialogFooter>
                    <DialogButton
                        text="CANCELAR"
                        bordered
                        onPress={() => {
                        setState(false);
                        }}
                        key="button-1"
                        style={{color: "#000"}}
                    />
                    <DialogButton
                        text="SIM"
                        bordered
                        onPress={() => {
                        setState(false);
                        }}
                        key="button-2"
                    />
                    </DialogFooter>
                }>
                <DialogContent
                    style={{
                    backgroundColor: '#F7F7F8',
                    }}>
                    <Text style={{textAlign: "center"}}>Você perderá a conexão com todos os seus grupos :(</Text>
                </DialogContent>
            </Dialog>
        </View>
    )
}