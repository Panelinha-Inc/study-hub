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

    testList: {
        marginTop: 15
    },

    groupBox: {
        padding: 10,
        left: 4.27,
        marginRight: 4.27,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },

    groupTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#8E8E93',
        textAlign: 'center'
    },

    viewImg: {
        padding: 3
    },

    interestingAreasBoxe: {
        padding: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    interestingAreasText: {
        fontSize: 8,
        textAlign: 'center',
        margin: 5,
        backgroundColor: '#8E8E93',
        color: '#FFF',
        padding: 2,
        borderRadius: 10,
    }
});