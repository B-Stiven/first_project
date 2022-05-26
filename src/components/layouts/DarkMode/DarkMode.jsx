import React, { useEffect,useState } from 'react'
import { UseState } from '../../Pages/UseState/UseState'
import ButtonUI from '../../UI/ButtonUI/ButtonUI';

const DarkMode = () => {

    const [modeDark, setModeDark]= useState(false);
    const [title, settitle]= useState("Dark Mode");

    const handleOn = () =>{
      setModeDark(!modeDark);
    }

    useEffect(() => {
      if(modeDark){
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        settitle('Lisght Mode')
      }else{
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
      }
    }, [modeDark])
    

  return (
      
    <div className='container-dark'>
      
      <h2>Mode Dark</h2>
      <ButtonUI Style="buttonMode" event={handleOn} txtbutton="On"></ButtonUI>
    </div>
  )
}

export default DarkMode