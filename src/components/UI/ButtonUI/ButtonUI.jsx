import React from 'react'

export const ButtonUI = ({Style, event, txtbutton="sumar"}) => {
  return (
    <button onClick={event} className={Style}>{txtbutton}</button>
  )
}

export default ButtonUI

