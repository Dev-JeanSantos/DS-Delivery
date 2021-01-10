import React from 'react';
import { Text, View } from "react-native";
import { orderCard, text } from '../../../Styles';
import { Order } from '../../../types';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import relativeTime from 'dayjs/plugin/relativeTime';
import "intl";
import "intl/locale-data/jsonp/en";

dayjs.locale('pt-br');
dayjs.extend(relativeTime);

type Props = {
    order: Order;
}

export function formatPrice(price: number) {
    const formatter = new Intl.NumberFormat(
        'pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        });
    return formatter.format(price);
}

function dateFromNow(date: string){
    return dayjs(date).fromNow();
}

function OrderCard( { order }: Props){

    return (
        <View style={orderCard.container}>
            <View style={orderCard.header}>
                <Text style={text.orderName}>Pedido {order.id} </Text>
                <Text style={text.orderPrice}>{formatPrice(order.total)}</Text>
            </View>
            <Text style={text.text}>{dateFromNow(order.moment)}</Text>
            <View style={orderCard.productsList}>
               {order.products.map(prod =>(
                   <Text key={prod.id} style={text.text}>{prod.name}</Text>
               ))}
                 
            </View>
        </View>
    );
}

export default OrderCard;