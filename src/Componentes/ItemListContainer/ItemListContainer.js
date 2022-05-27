import { useEffect,useState } from 'react';
import './ItemListContainer.css'
import {Grid} from '@mui/material';
// Componentes
import ItemList from '../itemList/ItemList';

const ItemListContainer = ( {title}) =>{

    const [products, setProducts] = useState([])
    
    const productosMock = [
        {title : 'Remera Karasuno1', price:1500, image:'gon.jpg', stock: 2, id: 1},
        {title : 'Remera Karasuno2', price:3500, image:'gon.jpg', stock: 3, id: 2},
        {title : 'Remera Karasuno3', price:2500, image:'gon.jpg', stock: 4, id: 3},
        {title : 'Remera Karasuno4', price:4500, image:'gon.jpg', stock: 5, id: 4},
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
         console.log(response)
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

            <Grid >
                <ItemList products={products}/>
            </Grid>
            
        </>
    );
}

export default ItemListContainer