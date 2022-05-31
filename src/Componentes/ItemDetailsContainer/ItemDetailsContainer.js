import { useEffect,useState } from "react"
//Componentes
import ItemDetails from "../ItemDetails/ItemDetails"
import { productoDetail } from "../../Utils/ProductosMock"

const ItemDetailsContainer = ()=>{
    const [details,setDetails] = useState({})

    const getItemDetails = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(productoDetail)
            }, 2000)
        })
    }

    useEffect( () => {
        getItemDetails()
        .then( (res) => {
         setDetails(res)
         console.log(res)
        })
        .catch( (err) => {
             console.log("Fallo la llamada.", err)
        })
        .finally( () => {
            
        })
    }, [])



    return(
        <>
            <div>Contenedor ITEM</div>
            <ItemDetails data={details}/>
        </>
    )
}

export default ItemDetailsContainer