import React from 'react';
import '../estilos/boton.css';

const Boton = ( { texto, esBotonClic, manejarClic } ) => {
    return (
        <div>
            <button className={esBotonClic ? "botonClic" : "reiniciar"}
                    onClick={manejarClic}
                    >{ texto }
            </button>
        </div>
    );
}

export default Boton;
