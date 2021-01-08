import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import OrderLocations from './OrderLocations';
import OrderSummary from './OrderSummary';
import ProductsList from './ProducsList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { OrderLocationData, Product } from './types';

function Orders() {

  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation]=useState<OrderLocationData>()



  useEffect(() => {
    fetchProducts()
    .then(response => setProducts(response.data))
    .catch(error => console.log(error))
  },[]);
  
    return(
      <div className="orders-container">
          <StepsHeader />
          <ProductsList products={products}/>
          <OrderLocations  onchangeLocation={location => setOrderLocation(location)}/>
          <OrderSummary />
      </div>  
    )
}

export default Orders;