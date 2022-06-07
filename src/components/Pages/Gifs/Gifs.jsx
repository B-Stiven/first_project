import React, { useEffect, useState } from 'react'
import Input from '../../UI/Input/Input';


export const Gifs = () => {
    const inputGif=document.getElementById('inputgif'); 
    const mainContainer=document.getElementById("mainContainer");
    

    const [card, setcard]= useState([]);

    useEffect( ()=>{
        if(card > 0){
        customGif(document.getElementById('inputgif'));
    }
    }, [])

    const createGif =(data) =>{
        eliminateChilds();
        
        const container = document.getElementById('container')
        data.results.map( gif => {
            const imgCard = document.createElement("img");
            imgCard.classList.add('img-gif');
            imgCard.src = gif.media[0].mediumgif.url;
            container.appendChild(imgCard);
        })
    }

    const customGif =(event) =>{
        const container = document.getElementById('container')
        container.innerText=""

        const URL = "https://g.tenor.com/v1/search?";
        const Key = "S9Z646TX5T38";
        const query = `q=${event.target.value}`;
        const limit = "&limit=5";
    
        fetch(`${URL}${query}&key=${Key}${limit}`)
        .then(response => response.json())
        .then(data => { createGif(data) 
            setcard(data)
        
        })
    }

    function eliminateChilds(){
        const container = document.getElementById('container')

        while(container.firstChild){
            container.removeChild(mainContainer.firstChild)
        }
    }

    window.addEventListener('load', customGif)

  return (
    <div>
        <h1>Gifs</h1>
        
        <Input type="text" className='inputgif' id='inputgif' event={customGif} />

        <div className='container' id='container'></div>

    </div>
    
  )
}
