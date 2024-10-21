import React, { Fragment } from 'react';
import { View, Text, Image } from 'react-native';
// import Wpp from '../../images/wpp.png'; 
// import Email from '../../images/email.png';
// import Insta from '../../images/insta.png';
import { styles } from './styles';

export default function Footer() {
    return (
        // <View style={styles.footer}>
        //     <View style={styles.main}>
        //         <View style={styles.section}>
        //             <Text style={styles.title}>Hotel Gordão</Text>
        //             <Text style={styles.paragraph}>
        //                 Criado por estudantes de Tecnologia, a Dose de Esperança leva atendimento médico humanizado e recorrente às populações mais vulneráveis da sociedade.
        //             </Text>
        //         </View>

        //         <View style={styles.section}>
        //             <Text style={styles.heading}>Onde estamos</Text>
        //             <Text>Itapevi - SP</Text>
        //         </View>

        //         <View style={styles.section}>
        //             <Text style={styles.heading}>Contato</Text>
        //             <View style={styles.contact}>
        //                 <Image source={require('../../images/insta.png')} style={styles.icon} />
        //                 <Text>Whatsapp</Text>
        //             </View>
        //             <View style={styles.contact}>
        //                 <Image source={require('../../images/insta.png')}  style={styles.icon} />
        //                 <Text>hotelgordao@gmail.com</Text>
        //             </View>
        //             <View style={styles.contact}>
        //                 <Image source={require('../../images/insta.png')}  style={styles.icon} />
        //                 <Text>Instagram</Text>
        //             </View>
        //         </View>
        //     </View>

        <View style={styles.copyright}>
            <Text>Copyright©2023, Big Hotel. Todos os direitos reservados</Text>
        </View>
    );
}
