import React from 'react'
import { Home } from '../Home/Home'



export const UseState = () => {
    
    function sumar(){
        const numero = document.getElementById('numero');
        let suma= Number(numero.textContent);
        numero.textContent = suma + 1;
    }
    function restar(){
        const numero = document.getElementById('numero');
        let suma= Number(numero.textContent);
        numero.textContent = suma - 1;
    }
    function Reset(){
        var suma=0;
        numero.textContent=suma;
    }
     
  return (
    <>
        <Home/>
        <h1 id='numero'>0</h1>
        <hr />
        <button id='sumar' onClick={sumar}>+</button>
        <button id='Reset' >Reset</button>
        <button id='Restar' onClick={restar}>-</button>

    </>

  )
}
