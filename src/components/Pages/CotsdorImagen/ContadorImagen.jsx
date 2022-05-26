import React from 'react'
import ButtonUI from '../../UI/ButtonUI/ButtonUI';
import { useState } from 'react'
import { Logo } from '../../UI/Logo/Logo';
import logo from '../../../Images/logo2.jpg';



export const ContadorImagen = () => {

    const [counter, setcounter] = useState(0);

    function sumar(){
        setcounter(counter+10)
    }
    function restar(){
        setcounter(counter-10)
    }
    function Reset(){
        setcounter(0)
    }
    

  return (
      <div>
        <h1 >{counter}</h1>

        <Logo logotipo={logo}/>

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

      </div>
    
  )
}

