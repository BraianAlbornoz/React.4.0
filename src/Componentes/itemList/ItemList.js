import { Grid } from "@mui/material"
// Componentes
import CardItem from "../Card/Carditem"

const ItemList =( {products} )=>{
    return(
        <>
            <Grid container spacing={2}>
                {
                    products.map((products)=> {
                        return(

                            <Grid item md={3} key={products.id} >
                                <CardItem products={products}/>
                            </Grid>
                        )
                    })
                }
        
            </Grid>
        </>   
    )
}
export default ItemList
