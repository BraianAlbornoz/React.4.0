import { CardContent,Typography } from "@mui/material"
import './ItemDetails.css'

const ItemDetails =({data})=>{
    return(
        
    <>
    
        <CardContent className='CardDetailsContainer'>

            <div className='CardDetailsImg'>
                <img src={`./${data.image}`} alt='Por Completar' />
            </div>

            <CardContent>
                
                <Typography variant="h5" component="div">
                    {data.title}
                </Typography>
                <Typography variant="h5" component="div">
                    ${data.price}
                </Typography>
                <Typography variant="h5" component="div">
                    STOCK: {data.stock}uni.
                </Typography>
                
                
            </CardContent>
            
        </CardContent>

        
            
    </>
      
    

    
    )
}

export default ItemDetails