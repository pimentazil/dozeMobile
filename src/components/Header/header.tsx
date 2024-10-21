// Header.tsx  
import React, { useState } from 'react';  
import { View, Text, TouchableOpacity } from 'react-native';  
import { MaterialCommunityIcons } from '@expo/vector-icons';  
import { styles } from './styles';  
import { useNavigation } from '@react-navigation/native';  
import { StackNavigationProp } from '@react-navigation/stack';  

type RootStackParamList = {  
    Login: undefined;  
    Start: undefined;  
};  

type NavigationProps = StackNavigationProp<RootStackParamList>;  

export function Header() {  
    const [isMenuOpen, setMenuOpen] = useState(false);  
    const navigation = useNavigation<NavigationProps>();  

    const toggleMenu = () => {  
        setMenuOpen(prevState => !prevState);  
    };  

    return (  
        <View style={styles.headerContainer}>  
            <Text style={styles.title}>Big Hotel</Text>  

            <TouchableOpacity onPress={toggleMenu} style={styles.hamburger}>  
                <MaterialCommunityIcons name="menu" size={28} color="black" />  
            </TouchableOpacity>  

            {isMenuOpen && (  
                <View style={styles.menu}>  
                    <TouchableOpacity>  
                        <Text style={styles.menuItem}>Início</Text>  
                    </TouchableOpacity>  
                    <Text style={styles.menuItem}>Quem Somos</Text>  
                    <Text style={styles.menuItem}>Promoções</Text>  
                    <TouchableOpacity   
                        style={styles.button}   
                        onPress={() => {  
                            console.log("Navegando para Login...");  
                            navigation.navigate('Login');  
                        }}>  
                        <Text style={styles.buttonText} onPress={() => navigation.navigate('Login')}>Fazer Login</Text>  
                    </TouchableOpacity>  
                </View>  
            )}  
        </View>  
    );  
}