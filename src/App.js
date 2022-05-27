import './App.css';
import ButtonAppBar from './Componentes/NavBar/NavBar';
import {Container } from '@mui/material';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">

      <ButtonAppBar/>

      <Container className='general-container'>
        <ItemListContainer title={'Producto Recomendado'} />
        
      </Container>
      
    </div>
  );
}

export default App;
