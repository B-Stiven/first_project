import React from 'react'
import ButtonUI from '../ButtonUI/ButtonUI';
import { useState } from 'react'
import { Logo } from '../Logo/Logo';
import logo from '../../../Images/logo2.jpg';



export const ContadorImagen = () => {

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
    

  return (
      <div>
        <h1>Change</h1>
        <h2 >{counter}</h2>

        <ButtonUI style='btnresta'
        event={restar}
        txtbutton="Restar"
        />

        <ButtonUI style='btnrest' 
        event={Reset} 
        txtbutton="Resetear"
        />

        <ButtonUI 
        style='btnsuma' 
        event={sumar} 
        />
      </div>
    
  )
}

