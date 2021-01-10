import React from 'react';
import { Image, Text, View } from "react-native";
import { RectButton } from 'react-native-gesture-handler';
import { home, text } from "../../Styles";

const Home: React.FC = () => {
    
    const handleOnPress = () =>{

    }
    
    return (
        <>
            <View style={home.container}>
                <Image source={require('../../Assets/deliveryman.png')} />
                <Text style={text.title}>Acompanhe os pedidos e {'\n'} entregue no prazo!</Text>
                <Text style={text.subTitle}>Receba todos os pedidos do seu {'\n'} restaurante na palma da sua mão</Text>
            </View>
            <View style={home.footer}>
                <RectButton 
                    style={home.button}
                    onPress={handleOnPress()}
                    >
                    <Text style={text.buttonText}>VER PEDIDOS</Text>
                </RectButton>
                
            </View>
        </>
    );
}

export default Home;