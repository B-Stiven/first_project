import React from 'react'
import { Link } from 'react-router-dom'

export const NavHome = ({textNav, ref}) => {
  return (

    <nav>
        <Link to="/">Home</Link>
        <Link to="/aboutUS">AboutUs</Link>
        <Link to="/contactUS">ContactUs</Link>
    </nav>
  )
}
