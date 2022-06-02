import React, { useEffect, useState } from 'react'

export const Gifs = () => {
    const inputGif=document.getElementById('inputgif'); 
    const mainContainer=document.getElementById("mainContainer");
    inputGif.addEventListener('keyup',customGif);

    const [card, setcard]= useState([]);

    const change =()=>{
        setcard(!card);
    } 

    useEffect( ()=>{
        if(card){
        inputGif.addEventListener('keyup',customGif);
    }
    })

    function customGif(event){
        const URL = "https://g.tenor.com/v1/search?";
        const Key = "S9Z646TX5T38";
        const query = `q=${event.target.value}`;
        const limit = "&limit=5";
    
        fetch(`${URL}${query}&key=${Key}${limit}`)
        .then(response => response.json())
        .then(data => { createGif(data) })
    }

    function createGif(data){
        eliminateChilds();
    
        data.results.map( gif => {
            const imgCard = document.createElement("img");
            imgCard.classList.add('img-gif');
            imgCard.src = gif.media[0].mediumgif.url;
            mainContainer.appendChild(imgCard);
        })
    }

    function eliminateChilds(){

        while(mainContainer.firstChild){
            mainContainer.removeChild(mainContainer.firstChild)
        }
    }

  return (
    <div>
        <h1>Gifs</h1>
        <div className='mainContainer'></div>
        <input type="text" className='inputgif' id='inputgif' onKeyDown={change} />
    </div>
    
  )
}
