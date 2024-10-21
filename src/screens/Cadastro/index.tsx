import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';

export default function Register() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crie sua conta</Text>

            <TextInput
                style={styles.input}
                placeholder='Nome completo*'
            />
            <TextInput
                style={styles.input}
                placeholder='Email*'
                keyboardType='email-address'
            />
            <TextInput
                style={styles.input}
                placeholder='Senha*'
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder='CPF*'
                keyboardType='numeric'
            />
            <TextInput
                style={styles.input}
                placeholder='Telefone*'
                keyboardType='phone-pad'
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => console.log("Cadastro")}
            >
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>

            <Text style={styles.disclaimer}>
                Esse site é protegido por reCAPTCHA e as
                <Text style={styles.link}> Políticas de Privacidade</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    disclaimer: {
        fontSize: 12,
        marginTop: 20,
        textAlign: 'center',
    },
    link: {
        color: '#007bff',
        textDecorationLine: 'underline',
    },
});
