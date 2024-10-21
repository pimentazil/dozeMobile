import React, { useEffect } from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '@/src/components/Footer/footer';
import HeaderHotel from '@/src/components/HeaderHotel/headerhotel';

const Hotel = () => {
    // const navigation = useNavigation();

    // useEffect(() => {
    //     if (!window.localStorage.getItem('usr_token')) navigation.navigate('/');
    //     if (!window.localStorage.getItem('usr_codigo')) navigation.navigate('/');
    //     if (!window.localStorage.getItem('usr_tipo')) navigation.navigate('/');
    //     if (!window.localStorage.getItem('usr_nome')) navigation.navigate('/');
    // }, []);

    return (
        <ScrollView>
            <HeaderHotel />
            <View style={styles.backgroundHotel}>
                <ImageBackground source={require('../../images/hotel.jpeg')} style={styles.backgroundImageHotel}>
                    <Text style={styles.hotelTitle}><Text style={styles.highlight}>Conheça</Text> o Big Hotel!{'\n'}O melhor hotel para se Hospedar.</Text>
                </ImageBackground>
            </View>

            <View style={styles.content}>
                <Text style={styles.contentTitle}>A <Text style={styles.highlight}>melhor</Text> vista do Big Hotel...</Text>
                <Text style={styles.contentText}>
                    O Pipa Lagoa Hotel está localizado em frente à lagoa de Guaraíras,
                    próximo da praia há 990 metros chamada praia de Tibau do Sul e há apenas 07 minutos de carro do centro da
                    vila de Pipa passando por 06 belas praias. {'\n\n'}
                    O hotel foi idealizado para oferecer conforto, privacidade, lazer e sofisticação aos seus hóspedes,
                    além de estar integrado a uma paisagem natural exuberante, onde você pode desfrutar de uma vista única.
                    {'\n\n'}
                    Com grande área verde, espaço para crianças, academia, salão de eventos, parque aquático com piscina infantil e aquapark;
                    piscina infanto-juvenil; jacuzzi, piscina com borda infinita, bar molhado e hidromassagem,
                    o Pipa Lagoa é uma excelente opção para quem deseja relaxar, sem abrir mão do conforto, tranquilidade e comodidade.
                    {'\n\n'}
                    Além dos tipos de acomodações, nossos hóspedes podem escolher a vista que querem apreciar: jardim, piscina e/ou lagoa.
                    {'\n\n'}
                    Para você e sua família desfrutarem de um momento relax, o nosso SPA oferece várias opções de massagem...
                </Text>
            </View>

            <View style={styles.apresentacao}>
                <TouchableOpacity style={styles.acomodacoes}>
                    <ImageBackground source={require('../../images/acomodacoes.jpg')} style={styles.acomodacoesImage}>
                        <Text style={styles.acomodacoesTitle}>Acomodações</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.acomodacoes} >
                    <ImageBackground source={require('../../images/lazer.jpeg')} style={styles.acomodacoesImage}>
                        <Text style={styles.acomodacoesTitle}>Lazer</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.acomodacoes} >
                    <ImageBackground source={require('../../images/gastronomia.jpg')} style={styles.acomodacoesImage}>
                        <Text style={styles.acomodacoesTitle}>Gastronomia</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            <Footer />
        </ScrollView>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    backgroundHotel: {
        height: 500,
        justifyContent: 'center',
    },
    backgroundImageHotel: {
        width: '120%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        opacity: 0.8,
    },
    hotelTitle: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: '60%'
    },
    highlight: {
        color: 'rgb(0, 149, 246)',
    },
    content: {
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    contentTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#6c757d',
        textAlign: 'center',
        marginBottom: 20,
    },
    contentText: {
        color: '#6c757d',
        fontSize: 16,
        lineHeight: 22,
        textAlign: 'justify',
    },
    apresentacao: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 20,
        paddingVertical: 40,
    },
    acomodacoes: {
        width: width * 0.8,
        height: 300,
        marginVertical: 10,
    },
    acomodacoesImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        borderRadius: 10,
        overflow: 'hidden',
    },
    acomodacoesTitle: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        paddingVertical: 10,
    },
});

export default Hotel;
