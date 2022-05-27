import { Grid } from "@mui/material"
import CardItem from "../Card/Carditem"

const ItemList =( {products} )=>{
    return(
        <>
            <Grid >
                {
                    products.map((products)=> {
                        return(
                            <Grid item md={5} key={products.id}>
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
