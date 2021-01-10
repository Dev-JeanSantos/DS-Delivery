import React from 'react';
import { Image, Text, View } from "react-native";
import { Header } from '../../Componets';
import OrderCard from './OrderCard/OrderCard';
import { order } from '../../Styles'
import { ScrollView } from 'react-native-gesture-handler';

const Order: React.FC = () => {
    
    return (
        <>
            <Header />
            <ScrollView style={order.container}>
                <OrderCard /> 
                <OrderCard /> 
                <OrderCard /> 
                <OrderCard /> 
                <OrderCard /> 
            </ScrollView>
        </>
    );
}

export default Order;