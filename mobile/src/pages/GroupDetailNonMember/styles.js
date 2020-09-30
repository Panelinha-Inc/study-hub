import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#FFF',
        left: 4.27,
        marginRight: 4.27
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: '10%',
        marginBottom: '7%'
    },

    text: {
        color: '#8E8E93',
        fontSize: 16,
        marginBottom: '3%'
    },

    flatList: {
        height: '34%'
    },

    viewImg: {
        padding: 3
    },

    groupTitle: {
        padding: 3,
        fontSize: 16,
        padding: 10,
        justifyContent: 'space-between',
        color: '#8E8E93',
    },

    containerPart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '1%',
        marginTop: '1%'
    },

    containerButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: 'center',
        backgroundColor: "#002E45",
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        height: 40,
        width: 200
    },

    buttonText: {
        color: "#F2F2F2",
        fontSize: 16
    },

    separator: {
        borderBottomColor: 'rgba(0, 0, 0, 0.12)',
        borderBottomWidth: 1,
    }

})