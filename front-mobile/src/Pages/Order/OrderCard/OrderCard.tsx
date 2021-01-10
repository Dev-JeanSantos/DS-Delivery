import React from 'react';
import { Text, View } from "react-native";
import { orderCard, text } from '../../../Styles';

const OrderCard: React.FC = () => {

    return (
        <View style={orderCard.container}>
            <View style={orderCard.header}>
                <Text style={text.orderName}>Pedido 1</Text>
                <Text style={text.orderPrice}>R$ 50,00</Text>
            </View>
            <Text style={text.text}>Há 30 minutos</Text>
            <View style={orderCard.productsList}>
                <Text style={text.text}>Pizza Calabresa</Text>
                <Text style={text.text}>Pizza Quatro Queijos</Text>
                <Text style={text.text}>Pizza Margarita</Text>
            </View>
        </View>
    );
}

export default OrderCard;