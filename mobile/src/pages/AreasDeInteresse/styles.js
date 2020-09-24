import { StyleSheet } from 'react-native';
import Constantes from 'expo-constants';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constantes.statusBarHeight + 20,
        backgroundColor: '#FFF'
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
    checkboxContainer: {
        flexDirection: "row",
    },
    testList: {
        marginTop: 0,
        maxHeight: 400,
    },
    text: {
        fontWeight: 'bold',
        textAlign: "center",
    },
    butao: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: 'center',
        backgroundColor: "#002E45",
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        height: 40,
        width: 150
    },
    buttonText: {
        color: "#F2F2F2",
        fontSize: 20
    },
    interestingAreasText: {
        fontSize: 20,
        width: 50,
        height: 50,
        textAlign: 'center',
        marginTop: 20,
        textAlignVertical: "center",
        margin: 5,
        backgroundColor: 'rgba(196,196,196,0.3)',
        color: '#8e8e93',
        padding: 2,
        borderRadius: 50,
    }
})