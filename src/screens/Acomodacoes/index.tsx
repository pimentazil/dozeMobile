import React, { useState } from 'react';
import { View, Text, Image, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '@/src/components/Footer/footer';
import HeaderHotel from '@/src/components/HeaderHotel/headerhotel';

export default function Acomodacoes() {
    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false);
    const [isAdmin, setIsAdmin] = useState(true);
    const [suites, setSuites] = useState([
        { id: 1, titulo: 'Suite Luxo', caminhoFoto1: 'https://finger.ind.br/wp-content/uploads/2023/01/5-dicas-de-decoracao-para-renovar-as-energias-neste-novo-ano-4-1024x683.jpg' },
        { id: 2, titulo: 'Suite Standard', caminhoFoto1: 'https://finger.ind.br/wp-content/uploads/2023/01/post-thumbnail-0df4a04c7e8d2ff4ea770e579d66979a-1170x685.jpeg' },
        { id: 3, titulo: 'Suite Familiar', caminhoFoto1: 'https://i.pinimg.com/736x/a9/a4/31/a9a431d47472c12d737011199ba8cae2.jpg' },
        { id: 4, titulo: 'Suite Master', caminhoFoto1: 'https://i.pinimg.com/736x/c0/32/9e/c0329e29b24381c93a6cbe9ebeab3935.jpg' },
    ]);



    function handleRegisterClick() {
        setShowModal(true);
    }

    function handleCloseModal() {
        setShowModal(false);
    }

    return (
        <ScrollView contentContainerStyle={styles.gallery}>
            <View style={styles.container}>
                <HeaderHotel/>
                <View style={styles.header}>
                    <Text style={styles.title}>Nossas Acomodações</Text>
                </View>
                <Text style={styles.description}>
                    O hotel dispõe de amplos apartamentos e chalés totalmente equipados, para melhor acomodar os seus hóspedes, oferecendo maior conforto, privacidade e integração total à natureza.
                </Text>
                {suites.map((suite) => (
                    <View key={suite.id} style={styles.galleryItem}>
                        <Image source={{ uri: suite.caminhoFoto1 }} style={styles.image} />
                        <View style={styles.info}>
                            <Text style={styles.roomName}>{suite.titulo}</Text>
                            <TouchableOpacity  style={styles.button}>
                                <Text style={styles.buttonText}>Saiba Mais</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                ))}
                <Footer />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: '500',
        color: '#333',
        textAlign: 'center',
    },
    description: {
        textAlign: 'center',
        marginBottom: 20,
        color: '#555',
    },
    gallery: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    galleryItem: {
        width: '100%',
        marginBottom: 20,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginBottom: 10,
    },
    info: {
        alignItems: 'center',
    },
    roomName: {
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    button: {
        backgroundColor: '#1E90FF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginBottom: 5,
        width: '50%'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    btnDelete: {
        backgroundColor: '#E57373',
    },
});
