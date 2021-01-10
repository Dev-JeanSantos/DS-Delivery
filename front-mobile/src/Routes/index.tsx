import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import { Home, Order } from "../Pages";

const Stack = createStackNavigator();

function Routes(){
    return(
       
        <Stack.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle:{
                backgroundColor:'#FFF'
            }
        }}
    >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Order" component={Order}/>
    </Stack.Navigator>
    )
}

export default Routes;