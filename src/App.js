import './App.css';
import {Container } from '@mui/material';
// Componentes
import ButtonAppBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">

      <ButtonAppBar/>

      <Container className='general-container'>
        <ItemListContainer title={'Producto Recomendado'} />
        <ItemListContainer title={'Producto Relacionados'} />
        
      </Container>
      
    </div>
  );
}

export default App;
