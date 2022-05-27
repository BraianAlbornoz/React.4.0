import { useEffect,useState } from 'react';
import './ItemListContainer.css'

import {Grid} from '@mui/material';
import ItemList from '../itemList/ItemList';

const ItemListContainer = ( {title}) =>{

    const [products, setProducts] = useState([])
    
    const productosMock = [
        {title : 'Remera Karasuno', price:1500, image:'', stock: 5, id: 1},
        {title : 'Remera Karasuno', price:1500, image:'', stock: 5, id: 2},
        {title : 'Remera Karasuno', price:1500, image:'', stock: 5, id: 3},
        {title : 'Remera Karasuno', price:1500, image:'', stock: 5, id: 4},
    ];

    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(productosMock)
            }, 2000)
        })
    }  
  
    useEffect( () => {
        getProducts()
        .then( (response) => {
         setProducts(response)
        })
        .catch( (err) => {
             console.log("Fallo la llamada.", err)
        })
        .finally( () => {
             console.log("termino la promesa")
        })
    }, [])


    return(
        <> 
            <h2>{title}</h2>
            <Grid container>
                <Grid item md={10} >
                    <ItemList products={products}/>
                </Grid>
                
            </Grid> 
        </>
    );
}

export default ItemListContainer