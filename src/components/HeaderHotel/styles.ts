import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        zIndex: 2, 
        marginTop: 15
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    hamburger: {
        padding: 10,
    },
    menu: {
        position: 'absolute',
        top: 50, 
        right: 10, 
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5, // Para Android
    },
    menuItem: {
        padding: 10,
        fontSize: 16,
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        marginLeft: 10,
        padding: 10,
        backgroundColor: 'rgb(0, 149, 246)',
        borderRadius: 5,
        margin: 10,
        width: '70%'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    adminLabel: {
        color: 'red',
        fontWeight: 'bold',
    },
});