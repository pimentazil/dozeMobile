import { Button, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backgroundHome: {
        height: 300,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '120%',
        height: '100%',
        opacity: 0.8,
    },
    mainHeader: {
        fontSize: 32,
        color: '#fff',
        fontWeight: '700',
        zIndex: 1,
    },
    highlight: {
        color: '#1E90FF',
    },
    quemSomos: {
        padding: 20,
        backgroundColor: '#ffffff1a',
        alignItems: 'center',
    },
    quemSomosSubtitle: {
        fontSize: 16,
        color: '#6c757d',
        textAlign: 'justify',
        marginBottom: 10,
        backgroundColor: '#f8f9fa',
        borderRadius: 10,
        padding: 20,
        fontWeight: 'bold'
    },
    quemSomosTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'rgb(7, 127, 207)',
        marginVertical: 10,
        borderWidth: 2,
        padding: 10,
    },
    quemSomosText: {
        fontSize: 16,
        color: '#6c757d',
        textAlign: 'justify',
        lineHeight: 24,
        backgroundColor: '#f8f9fa',
        borderRadius: 10,
        padding: 20,
        marginTop: 15,
        fontWeight: 'bold'
    },
    cadastro: {
        padding: 20,
        alignItems: 'center',
    },
    cadastroTitle: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 20,
        textAlign: 'center',
    },
    cadastroBold: {
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderColor: '#ddd',
        borderBottomWidth: 2,
        fontSize: 16,
    },
    button: {
        width: '100%',
        backgroundColor: 'rgb(0, 149, 246)',
        cursor: 'pointer',
        marginTop: 10
    }
});
