import React from 'react'
import { useState } from 'react'

export const Inputletras = () => {

    const [read, setread] = useState("");
    const name=document.getElementById("name");
    console.log(read)
  
    name.textContent=read;
    
  return (
      <div>
        <input type="text" onChange={e=>setread(e.target.value)}/>
        <h1>Esto es lo que estas Escribiendo: <p id='name'></p></h1>
      </div>
    
  )
}

