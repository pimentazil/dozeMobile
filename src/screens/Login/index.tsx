import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Hotel: undefined;
    Cadastro: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
    // const [email, setEmail] = useState('');  
    // const [senha, setSenha] = useState('');  
    // const [isLoading, setIsLoading] = useState(false);  
    const navigation = useNavigation<LoginScreenNavigationProp>();

    const handleLogin = () => {
        navigation.navigate('Hotel'); // Navegar diretamente para a tela "Hotel"
    };

    const handleRegister = () => {
        navigation.navigate('Cadastro');
    };
    // const handleLogin = async () => {  
    //     setIsLoading(true);  
    //     try {  
    //         const response = await api.post('Autenticacao', { email, senha }); 

    //         const { token, codigo, nome, tipo, unidade } = response.data;  
    //         api.defaults.headers.authorization = `Bearer ${token}`; 

    //         await AsyncStorage.setItem('usr_token', token);  
    //         await AsyncStorage.setItem('usr_codigo', codigo);  
    //         await AsyncStorage.setItem('usr_nome', nome);  
    //         await AsyncStorage.setItem('usr_tipo', tipo);  
    //         await AsyncStorage.setItem('usr_unidade', unidade);  

    //         navigation.navigate('Home'); 
    //     } catch (error) {  
    //         ToastAndroid.show('Email ou senha inválidos!', ToastAndroid.SHORT); 
    //     } finally {  
    //         setIsLoading(false);  
    //     }  
    // };  

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Entrar na minha conta</Text>

            <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
            // value={email}  
            // onChangeText={setEmail}  
            />

            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                secureTextEntry
            // value={senha}  
            // onChangeText={setSenha}  
            />

            <TouchableOpacity>
                <Text style={styles.link}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleRegister}>
                <Text style={styles.link}>Cadastre-se</Text>
            </TouchableOpacity>

           
            <TouchableOpacity style={styles.button} onPress={handleLogin} >
                {/* {isLoading ? ( */}
                    {/* <ActivityIndicator size="small" color="#fff" /> */}
                {/* ) : ( */}
                    <Text style={styles.buttonText}>Entrar</Text>
                {/* )} */}
            </TouchableOpacity>

            <Text style={styles.recaptchaText}>
                Esse site é protegido por reCAPTCHA e as
                <Text style={styles.privacyLink}> Políticas de Privacidade</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 40,
        textAlign: 'center',
        color: '#000',
    },
    input: {
        height: 50,
        backgroundColor: '#f1f1f1',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    link: {
        fontSize: 14,
        color: '#007BFF',
        textDecorationLine: 'underline',
        marginBottom: 20,
        alignSelf: 'flex-start',
    },
    button: {
        height: 50,
        backgroundColor: '#007BFF',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    recaptchaText: {
        fontSize: 12,
        textAlign: 'center',
        color: '#000',
    },
    privacyLink: {
        color: '#007BFF',
        textDecorationLine: 'underline',
    },
});  
