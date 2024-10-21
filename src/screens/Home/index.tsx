import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Button, ScrollView, Image } from 'react-native';
import { styles } from './styles';
import { Header } from '@/src/components/Header/header';
import Footer from '@/src/components/Footer/footer';

export default function Start() {
    return (
        <ScrollView style={styles.container}>
            <Header />
            <View style={styles.backgroundHome}>
                <Image source={require('../../images/fundo.png')} style={styles.backgroundImage} />
                <Text style={styles.mainHeader}>
                    <Text style={styles.highlight}>Encontre</Text> o melhor quarto para se hospedar.
                </Text>
            </View>

            <View style={styles.quemSomos}>
                <Text style={styles.quemSomosSubtitle}>
                    Nosso legado é construído não pelo que acumulamos para nós mesmos, mas pelo que
                    compartilhamos com os outros, deixando marcas eternas nas vidas que tocamos.
                </Text>
                {/* <Text style={styles.quemSomosTitle}>QUEM SOMOS</Text>
                <Text style={styles.quemSomosText}>
                    Big Hotel é fruto da imaginação e da
                    criatividade de um grupo dedicado de estudantes do ensino médio,
                    todos apaixonados por inovação e comprometidos em criar uma experiência única.
                    Inspirados por nossa especialização em informática, resolvemos transformar nosso amor
                    pela tecnologia em um projeto fictício que une conforto, modernidade e atendimento de excelência.
                    A ideia surgiu da vontade de proporcionar uma estadia inesquecível para nossos hóspedes,
                    oferecendo um espaço onde a inovação encontra o aconchego. Nosso hotel é mais que um simples local de descanso;
                    é um refúgio onde cada detalhe foi pensado para oferecer o máximo de comodidade e bem-estar.
                </Text> */}
            </View>
            <View style={styles.cadastro}>
                <Text style={styles.cadastroTitle}>
                    CADASTRE-SE E RECEBA NOSSAS <Text style={styles.cadastroBold}>PROMOÇÕES EXCLUSIVAS!</Text>
                </Text>
                <TextInput placeholder="Nome Completo" style={styles.input} />
                <TextInput placeholder="E-mail" keyboardType="email-address" style={styles.input} />
                <TouchableOpacity style={styles.button}>
                <Button title="Enviar"/>
                </TouchableOpacity>
            </View>
            <Footer />
        </ScrollView>
    );
}

