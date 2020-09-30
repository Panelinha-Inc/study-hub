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
        marginTop: 30,
        height: 40,
        color: '#8e8e93',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#f2f2f2',
        borderColor: "#f2f2f2",
        paddingLeft: 10
    },

    groupImage: {
        width: 90,
        height: 90,
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: 20,
    },

    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: 'center',
        backgroundColor: "#002E45",
        marginTop: 120,
        padding: 10,
        borderRadius: 10,
        height: 40,
        width: 150
    },

    buttonText: {
        color: "#F2F2F2",
        fontSize: 20
    },

    switchContainer: {
        flexDirection: 'row'
    },
    
    textSwitch: {
        height: 22,
        width: 199,
        left: 5,
        marginTop: 20,
        fontSize: 17,
        fontStyle: 'normal',
        color: "#8e8e93",
        fontWeight: "400",
        lineHeight: 22,
        letterSpacing: -0.4099999964237213,
        textAlign: 'left'
    },

    switchButton: {
        top: 12,
        left: 73
    }
});