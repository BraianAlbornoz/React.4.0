import './App.css';
import {Container } from '@mui/material';
// Componentes
import ButtonAppBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from './Componentes/ItemDetailsContainer/ItemDetailsContainer';

function App() {
  return (
    <div className="App">

      <ButtonAppBar/>

      <Container className='general-container'>
        <ItemListContainer title={'Producto Recomendado'} />
      </Container>

      <ItemDetailsContainer/>
      
    </div>
  );
}

export default App;
