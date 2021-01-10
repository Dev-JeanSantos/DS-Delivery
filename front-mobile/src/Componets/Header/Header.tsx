import React from 'react';
import { Image, Text, View } from "react-native";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { navBar, text } from '../../Styles';
import { useNavigation } from '@react-navigation/native';

const Header: React.FC = () => {

    const nav = useNavigation ();

    const handleOnPress = () =>{
        nav.navigate('Home');
    }
    
    return (
        <TouchableWithoutFeedback onPress={handleOnPress}>
            <View style={navBar.container}>
                <Image source={require('../../Assets/logo.png')} />
                <Text style={text.text_logo}>DS Delivery</Text>
            </View>
        </TouchableWithoutFeedback>

    );
}

export default Header;