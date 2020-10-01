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
        marginTop: 40,
        height: 40,
        color: '#8e8e93',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#f2f2f2',
        borderColor: "#f2f2f2",
        paddingLeft: 11,
        paddingRight: 218
    },

    searchInput: {
        flexDirection: 'row'
    },

    searchIcon: {
        marginTop: 40,
        borderRadius: 10,
        //left: 220,
        backgroundColor: '#f2f2f2',
        borderColor: "#f2f2f2",
        padding: 11,
        height: 40
    },

    groupBox: {
        top: 20,
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
})