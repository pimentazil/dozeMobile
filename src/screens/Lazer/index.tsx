import Footer from '@/src/components/Footer/footer';
import HeaderHotel from '@/src/components/HeaderHotel/headerhotel';
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Lazer() {
    return (
        <ScrollView style={styles.container}>
            <HeaderHotel/>
            <View style={styles.header}>
                <Text style={styles.title}>Lazer e Diversão</Text>
            </View>
            <Text style={styles.description}>
                O Hotel Gordão é uma excelente opção para quem deseja relaxar, sem abrir mão do conforto, tranquilidade e comodidade.
            </Text>

            <View style={styles.section}>
                <View style={styles.info}>
                    <Text style={styles.sectionTitle}>Piscinas e Bar Molhado</Text>
                    <Text style={styles.sectionText}>
                        Contamos com uma piscina com borda infinita, uma piscina infanto-juvenil e um bar molhado.
                    </Text>
                </View>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://lirp.cdn-website.com/e65641d9/dms3rep/multi/opt/_FCH9575PipaLagoa18+%28Copy%29-1920w.jpg' }}
                />
            </View>

            <View style={styles.section}>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://lirp.cdn-website.com/e65641d9/dms3rep/multi/opt/_FCH0468PipaLagoa18-1920w.jpg' }}
                />
                <View style={styles.info}>
                    <Text style={styles.sectionTitle}>Espaço Kids e AquaPark</Text>
                    <Text style={styles.sectionText}>
                        Pensando na comodidade e diversão de toda a família, o Hotel Gordão também oferece estrutura completa de lazer e entretenimento para seus pequenos hóspedes.
                    </Text>
                </View>
            </View>

            <View style={styles.section}>
                <View style={styles.info}>
                    <Text style={styles.sectionTitle}>Academia</Text>
                    <Text style={styles.sectionText}>
                        Você não precisa deixar de lado sua saúde. Temos uma academia completa para que você possa continuar se cuidando.
                    </Text>
                </View>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://lirp.cdn-website.com/e65641d9/dms3rep/multi/opt/Paradise+Pictures-5-1920w.jpg' }}
                />
            </View>

            <View style={styles.section}>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://t3.ftcdn.net/jpg/06/74/55/84/360_F_674558408_ru2tOBRcNzOSju5YlKiEQZCQ6ez52qp9.jpg' }}
                />
                <View style={styles.info}>
                    <Text style={styles.sectionTitle}>Sunset com DJ</Text>
                    <Text style={styles.sectionText}>
                        Um espaço cheio de diversão e música para você curtir um momento único e cheio de boas energias.
                    </Text>
                </View>
            </View>
            <Footer />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    header: {
        alignItems: 'center',
        marginTop: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
    },
    icon: {
        fontSize: 30,
        color: '#333',
        marginTop: 10,
    },
    description: {
        textAlign: 'center',
        fontSize: 16,
        color: '#666',
        marginVertical: 10,
        marginHorizontal: 20,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    info: {
        flex: 1,
        paddingRight: 10,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    sectionText: {
        fontSize: 16,
        color: '#666',
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
        margin: 20
    },
});
