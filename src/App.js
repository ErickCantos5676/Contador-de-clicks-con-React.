import Contador from './componentes/contador';
import Boton from './componentes/boton';
import { useState } from 'react';
import "./App.css";
import './estilos/contador.css';

function App() {

  const [ numClics, setNumCLics ] = useState(0);


  const manejarClick = () => {
    setNumCLics(numClics + 1);
     console.log('clic');
  }
  const reiniciar = () => {
    setNumCLics(0);
 }

  return (
    <div className="App">
      <div className='contenedor-principal'>

        <Contador className="contador" numClics={numClics} />

        <Boton
          texto="clic"
          esBotonClic={true}
          manejarClic={manejarClick}
          > 
        </Boton>
        <Boton
          texto="reiniciar"
          esBotonClic={false}
          manejarClic={reiniciar}
          > 
        </Boton>
          
      </div>
    </div>
  );
}

export default App;
