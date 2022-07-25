import React, { createElement } from 'react'
import { useState, useEffect } from 'react';

export const ArraysUseState = () => {
    
    const StrinsName = ["Laura Restrepo", "Franz Kafka", "", "", "", ""];
   
    const [mostrar, setMostrar]= useState(false);
    
    const btnmostrar = () =>{
        setMostrar(!mostrar);
    }

    useEffect(() => {

        if(mostrar){
            for (let i=0; i<StrinsName.length; i++) { 
                const li =document.getElementById(toString(i+1));
                console.log(li)
            }
        }else{
        
        }
      },[mostrar])

    function mostrarLista(){
        StrinsName.map(nombre=>{
            console.log(mostrar);
            
        })
    }

    return (
    <div>
        <ul>
            <li id="1"></li>
            <li id="2"></li>
            <li id="3"></li>
            <li id="4"></li>
            <li id="5"></li>
            <li id="6"></li>
        </ul>
        <button id='btn' onClick={btnmostrar()}>Mostrar Lista</button>
    </div>
    )
}
