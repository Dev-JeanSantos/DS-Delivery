import React, { useEffect, useState } from 'react';
import { ScrollView,Alert, ActivityIndicator} from "react-native";
import { Header } from '../../Componets';
import OrderCard from './OrderCard/OrderCard';
import { fetchOrders } from '../../api';
import { Order } from '../../types';
import { orderContainer } from '../../Styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useIsFocused, useNavigation } from '@react-navigation/native';


const Orders: React.FC = () => {

    const [ orders, setOrders] = useState<Order[]>([]);
    const [ isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const handleOnPress = (order: Order) => {  
        navigation.navigate('OrderDetails', {
            order
        });
    }

    const fetchData = () => {
        setIsLoading(true);
        fetchOrders()
        .then(response => setOrders(response.data))
        .catch(() => Alert.alert('Erro ao buscar os pedidos'))
        .finally(() => setIsLoading(false));
    }
    
    useEffect(() => {
        if (isFocused){
            fetchData();
        }
    }, [isFocused]);

    return (
        <>
            <Header />
            <ScrollView style={orderContainer.container}>
               {isLoading ? (
                 <ActivityIndicator style={{marginTop:210}} size="large" color="#0000ff"/> 
               ):(
                orders.map(order => (
                    <TouchableWithoutFeedback 
                        onPress={() => handleOnPress(order)} 
                        key={order.id}
                        >
                        <OrderCard order={order}/>
                    </TouchableWithoutFeedback>         
                 ))
               )}
            </ScrollView>
        </>
    );
}

export default Orders;