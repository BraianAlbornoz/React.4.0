import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Cartwidget from './Cartwidget';


export default function ButtonAppBar() {
  return (
    <>
    <AppBar className='AppBar'>
      <Toolbar className='NavBar'>

        <div className='ContainerLogo'>
             <img src='./favicon.ico' alt='AnimeStore'/>
        </div>

        <div className='ContainerButton'>
            <Button variant="contained">Home</Button>
            <Button variant="contained">Productos</Button>
            <Button variant="contained">Contacto</Button>
        </div>
        
        <Cartwidget/>
      
          


      </Toolbar>
    </AppBar>
    </>
    
  );
}
