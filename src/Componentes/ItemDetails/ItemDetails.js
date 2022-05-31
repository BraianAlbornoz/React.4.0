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
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    benevolent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            
        </CardContent>

        
            
    </>
      
    

    
    )
}

export default ItemDetails