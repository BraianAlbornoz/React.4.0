import './Carditem.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// Componentes
import ItemCount from '../ItemCount/ItemCount.js';



const Carditem = ({products})=> {

  return (

    <Card>
      <CardContent className='Carditem'>

          <div>
            <img src={`./${products.image}`} alt='Por Completar' />
          </div>

          <p>{products.title}</p>
          <span>{products.price}</span>

        <ItemCount title={`${products.title}`} />
          
      </CardContent>
    </Card>
  );
}
export default Carditem