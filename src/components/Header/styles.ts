import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        zIndex: 2, 
        marginTop: 15
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    hamburger: {
        padding: 10,
        zIndex: 3, 
    },
    menu: {
        position: 'absolute',
        top: 60,
        right: 15,
        width: 180, 
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        zIndex: 4, 
    },
    menuItem: {
        padding: 10,
        fontSize: 16,
        color: 'black',
        margin: 5
    },
    button: {
        backgroundColor: 'rgb(0, 149, 246)',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    secondaryButton: {     
        
    },
    secondaryButtonText: {
        color: 'white',
    },
});
