import React from 'react';
import { Image, Text, View } from "react-native";
import { navBar, text } from '../../Styles';

const Header: React.FC = () => {
    return(
        <View style={navBar.container}>
            <Image source={require('../../Assets/logo.png')}/>
            <Text style={text.text_logo}>DS Delivery</Text>
        </View>
    );
}

export default Header;