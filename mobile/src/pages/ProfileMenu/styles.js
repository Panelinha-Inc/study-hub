import { StyleSheet } from 'react-native';
import Constantes from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constantes.statusBarHeight + 20,
        backgroundColor: '#FFF'
    },

    icon: {
        backgroundColor: '#00BFF3',
        width: 50,
        height: 50,
        borderRadius: 25,
        padding: 10,
        alignContent: 'center',
        left: 4.27
    },

    viewOptions: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },

    text: {
        marginLeft: 20,
        fontSize: 18,
    },

    separator: {
        borderBottomColor: 'rgba(0, 0, 0, 0.12)',
        borderBottomWidth: 1,
        marginTop: 15
    }
});