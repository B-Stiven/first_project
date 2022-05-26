import React from 'react';

import { NavHome } from '../../UI/NaveHome/NavHome';
import { Logo } from '../../UI/Logo/Logo'
import DarkMode from '../DarkMode/DarkMode';

import logo from '../../../Images/logotipo.jpg';

export const HeaderHome = () => {
  return(
    <div>
        <Logo logotipo={logo}/>
        <NavHome/>
        <DarkMode></DarkMode>
    </div>
  )
}
