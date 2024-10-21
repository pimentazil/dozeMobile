import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import HeaderHotel from '@/src/components/HeaderHotel/headerhotel';
import Footer from '@/src/components/Footer/footer';

const images = [
    'https://lirp.cdn-website.com/e65641d9/dms3rep/multi/opt/IMG_7628-1920w.jpg',
    'https://irp.cdn-website.com/e65641d9/dms3rep/multi/MAM_7650.jpg',
    'https://www.pacoteshyatt.com.br/wp-content/uploads/2020/02/alta-gastronomia-do-rio-de-janeiro-2.png',
    'https://static.wixstatic.com/media/4a22e9_6e12430baef14c0f9be1cfb7534e1d55~mv2.jpg',
    'https://static.pmweb.com.br/_007fLfp6Zu2BxLU2E8XHF--Bbc=/https://letsimage.s3.sa-east-1.amazonaws.com/editor/ritzhoteis/pt/lagoa/1652472477502-sururu-01.jpg',
    'https://lirp.cdn-website.com/e65641d9/dms3rep/multi/opt/bf46314a-cc9e-42f2-8498-668ef9fdd4a4-d4d401c8-1920w.jpg',
    'https://lirp.cdn-website.com/e65641d9/dms3rep/multi/opt/97135836-c107-42aa-9e1d-d4fedd7afd43-8f4e8c72-1920w.jpg',
    'https://lirp.cdn-website.com/e65641d9/dms3rep/multi/opt/_FCH4745PipaLagoa.05.2016+%28Copy%29+%28Copy%29-1920w.jpg',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/83/87/32/pipa-lagoa-hotel.jpg?w=700&h=-1&s=1',
    'https://images.trvl-media.com/lodging/4000000/3900000/3894000/3893922/9704c0ff.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
    'https://images.trvl-media.com/lodging/4000000/3900000/3894000/3893922/131106b2.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
    'https://images.trvl-media.com/lodging/4000000/3900000/3894000/3893922/55c81533.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
    'https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2023/11/21/4b94351aa13e4f8ab00d6db32d7b14fb_Novilho__Morilles.jpg',
    'https://conteudo.imguol.com.br/blogs/99/files/2015/07/116.jpg',
    'https://conteudo.imguol.com.br/blogs/99/files/2015/07/212.jpg',
    'https://estacaomarupiara.com.br/wp-content/uploads/2017/05/Frutos-do-Mar-Horizontal.jpg'
];

export default function Gastronomia() {
    return (
        <ScrollView style={styles.container}>
            <HeaderHotel />
            <View style={styles.divTitle}>
                <Text style={styles.title}>Restaurante Gordao Lounge</Text>
                {/* Aqui você pode usar um ícone compatível com React Native */}
            </View>
            <Text style={styles.description}>
                Aproveite as delícias da cozinha local e internacional no Gordao Lounge Restaurante!{'\n'}
                De longos almoços ou jantares românticos à luz de velas,
                este é o lugar perfeito para desfrutar da vista privilegiada sobre a Gordao de Guaraíras
                e delicie-se com uma inesquecível experiência gastronômica.{'\n'}
                O Gordao Lounge Restaurante está aberto todos os dias para almoço e jantar,
                com cozinha contemporânea e oferece uma grande variedade de pratos a la carte,
                incluindo peixes, mariscos, massas, carnes, saladas e uma excelente carta de vinhos.
            </Text>
            <View style={styles.gallery}>
                {images.map((image, index) => (
                    <View key={index} style={styles.galleryItem}>
                        <Image source={{ uri: image }} style={styles.galleryImage} />
                    </View>
                ))}
            </View>
            <Footer />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    divTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    title: {
        fontSize: 38,
        color: '#333',
        fontWeight: '500',
        textAlign: 'center',
    },
    description: {
        textAlign: 'center',
        marginHorizontal: 20,
        color: '#333',
        fontSize: 16,
    },
    gallery: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 20,
    },
    galleryItem: {
        width: '100%',
        margin: 10,
        height: 200,
    },
    galleryImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
});
