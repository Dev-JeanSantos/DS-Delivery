import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, Linking, Text, View, } from "react-native";
import { Header } from '../../../Componets';
import { Order } from '../../../types';
import { text, orderDetails } from '../../../Styles'
import OrderCard from '../OrderCard/OrderCard';
import { RectButton } from 'react-native-gesture-handler';
import { confirmDelivery } from '../../../api';

type Props = {
    route: {
        params: {
            order: Order;
        }
    }
}

function OrderDetails({ route }: Props) {

    const { order } = route.params;
    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate('Order');
    }

    const handleOnCancel = () => {
        navigation.navigate('Order');
    }
    const handlerConfirmDelivered = () => {
        confirmDelivery(order.id)
            .then(() => {
                Alert.alert(`Pedido ${order.id} confirmado com sucesso`)
                navigation.navigate('Order');
            })
            .catch(() => {
                Alert.alert(`Houve um erro ao confirmar o pedido ${order.id}`)
            })
    }

    const handleStartNavigation = () => {
        Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`)
    }
    return (
        <>
            <Header />
            <View style={orderDetails.container}>
                <OrderCard order={order} />
                <RectButton style={orderDetails.button} onPress={handleStartNavigation}>
                    <Text style={text.buttonTextOrderDetails}>INICIAR NAVEGAÇÃO</Text>
                </RectButton>
                <RectButton style={orderDetails.button} onPress={handlerConfirmDelivered}>
                    <Text style={text.buttonTextOrderDetails}>CONFIRMAR ENTREGA</Text>
                </RectButton>
                <RectButton style={orderDetails.button} onPress={handleOnCancel}>
                    <Text style={text.buttonTextOrderDetails}>CANCELAR</Text>
                </RectButton>
            </View>
        </>
    );
}

export default OrderDetails;