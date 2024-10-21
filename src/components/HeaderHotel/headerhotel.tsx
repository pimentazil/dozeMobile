import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Para o ícone do menu
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Hotel: undefined;
    Login: undefined;
    Acomodacoes: undefined;
    Lazer: undefined;
    Gastronomia: undefined;
    Contatos: undefined;
    MinhaConta: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function HeaderHotel() {
    const [isMenuOpen, setMenuOpen] = useState(false); // Estado para controlar a visibilidade do menu
    const [tipousuario, setTipoUsuario] = useState(0);
    const navigation = useNavigation<NavigationProp>();

    // Função para alternar o menu
    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Hotel')}>
                <Text style={styles.title}>Big Hotel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleMenu} style={styles.hamburger}>
                <MaterialCommunityIcons name="menu" size={28} color="black" />
            </TouchableOpacity>

            {isMenuOpen && (
                <View style={styles.menu}>
                    <TouchableOpacity onPress={() => navigation.navigate('Hotel')}>
                        <Text style={styles.menuItem}>O Hotel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Acomodacoes')}>
                        <Text style={styles.menuItem}>Acomodações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Lazer')}>
                        <Text style={styles.menuItem}>Lazer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Gastronomia')}>
                        <Text style={styles.menuItem}>Gastronomia</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Contatos')}>
                        <Text style={styles.menuItem}>Contatos</Text>
                    </TouchableOpacity>
                    {tipousuario === 1 && <Text style={styles.adminLabel}>Administrativo*</Text>}
                    <View style={styles.user}>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('MinhaConta')} style={styles.button}>
                            <Text style={styles.buttonText}>Minha Conta</Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
                            <Text style={styles.buttonText}>Sair</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
}
