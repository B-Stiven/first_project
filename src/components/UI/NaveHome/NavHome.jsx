import React from 'react'
import { Link } from 'react-router-dom'

export const NavHome = ({textNav, ref}) => {
  return (

    <nav>
        <button className='boton'><Link to="/">Home</Link></button>
        <button className='boton'><Link to="/useState">UseState</Link></button>
        <button className='boton'><Link to="/ContadorImagen">UseCustom</Link></button>
        <button className='boton'><Link to="/useEffect">UseEffect</Link></button>
        <button className='boton'><Link to="/contactUS">ContactUS</Link></button>
        <button className='boton'><Link to="/rickAndmorty">Rick And Morty</Link></button>
    </nav>
  )
}
