import React from 'react'
import { Home } from '../Home/Home.jsx'
export const RickAndMorty = () => {

  const URL2= 'https://rickandmortyapi.com/api/character/?name='
  const URL= 'https://rickandmortyapi.com/api/character'
  
  function getCharacters(){
    fetch(URL)
    .then(response=>response.json())
    .then(data=>{
        data.results.forEach(element => {
            iterar(element.name, element.image);
        }); 
    });     
  }

  function iterar(name, img){
    const card=document.getElementById("card");
    const ContainerCard=document.createElement("div");
    const imaCard=document.createElement("img");
    const nameCard=document.createElement("h1");

    imaCard.classList.add("imaCard");
    ContainerCard.classList.add("ContainerCard");
    ContainerCard.style.width="342px";
    ContainerCard.style.height="384px";

    imaCard.setAttribute('src', img);
    imaCard.setAttribute('alt', name);
    nameCard.textContent = name;
    nameCard.style.color="white";
    ContainerCard.appendChild(imaCard);
    ContainerCard.appendChild(nameCard);
    card.appendChild(ContainerCard);   
  }
  
  return (
    <>
      <Home/>
      <h1>Wha character do you want to show?</h1>
      <input type="text" placeholder="🔍 Find a character."></input> 
      <div id="card" className='card' onLoad={getCharacters()}></div>
    </>
  )
}
