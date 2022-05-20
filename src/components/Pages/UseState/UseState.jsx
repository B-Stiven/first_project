import React, { useState } from 'react'
import { Home } from '../Home/Home'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'



export const UseState = () => {
    
    const [counter, setcounter] = useState(0);

    function sumar(){
        setcounter(counter+1)
    }
    function restar(){
        setcounter(counter-1)
    }
    function Reset(){
        setcounter(0)
    }
    function cambiarColor(){
        let body =document.body;
        body.classList.toggle("oscuro");
    }

  return (
    <>
        <Home/>
        <h1 >{counter}</h1>
        <hr />
        <ButtonUI 
            style='btnsuma' 
            event={sumar} 
        />
        <ButtonUI style='btnrest' 
            event={Reset} 
            txtbutton="Resetear"
        />
        <ButtonUI style='btnresta'
            event={restar}
            txtbutton="Restar"
        />
        <ButtonUI style='btnresta'
            event={cambiarColor}
            txtbutton="Cambiar Color"
        />
    </>

  )
}
