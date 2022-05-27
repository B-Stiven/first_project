import React, { useEffect, useState } from 'react'
import { Home } from '../Home/Home.jsx'
import { UseState } from '../UseState/UseState.jsx'



export const RickAndMorty = () => {

  const URL2= 'https://rickandmortyapi.com/api/character/?name='
  const [modificar, setmodificar] = useState(false);

  const change =()=>{
    setmodificar(!modificar);
  } 

  useEffect(()=>{
    if(modificar){
      getCharacters2(document.getElementById("busqueda").value)
    }
  })

  function createElements(name, img){
    const card=document.getElementById("card");
    const ContainerCard=document.createElement("div");
    const imaCard=document.createElement("img");
    const nameCard=document.createElement("h1");

    imaCard.classList.add("imaCard");
    ContainerCard.classList.add("ContainerCard");
    ContainerCard.style.width="212px";
    ContainerCard.style.height="214px";

    imaCard.setAttribute('src', img);
    imaCard.setAttribute('alt', name);
    nameCard.textContent = name;
    nameCard.style.color="white";
    ContainerCard.appendChild(imaCard);
    ContainerCard.appendChild(nameCard);
    card.appendChild(ContainerCard);   
  }


function getCharacters2(event){
    fetch(URL2+event)
    .then(response=>response.json())
    .then(data=>{ 
        data.results.forEach(element => {
            createElements(element.name,element.image)
            
        }); 

    }); 
  }
  
  return (
    <>
      <Home/>
      <h1>Wha character do you want to show?</h1>
      <input onKeyDown={change} id='busqueda' className='busqueda' type="text" placeholder="🔍 Find a character."></input> 
      <div id="card" className='card' ></div>
    </>
  )
}
