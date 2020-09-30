import { StyleSheet } from 'react-native';
import Constantes from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constantes.statusBarHeight + 20,
        backgroundColor: '#FFF'
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    inputs: {
        marginTop: '5%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#f2f2f2',
        borderColor: "#f2f2f2",
        paddingLeft: 10
    },

    profileImage: {
        width: 90,
        height: 90,
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: '10%',
    },

    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: 'center',
        backgroundColor: "#002E45",
        marginTop: '10%',
        padding: 10,
        borderRadius: 10,
        height: 40,
        width: 150
    },

    buttonText: {
        color: "#F2F2F2",
        fontSize: 20
    }
});