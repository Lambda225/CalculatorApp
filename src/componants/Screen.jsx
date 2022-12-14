import React, { useContext } from 'react'
import { Textfit } from 'react-textfit';
import { CalcContext } from '../context/CalcContext';


function Screen() {

  const {calc} = useContext(CalcContext)

  return (
    <Textfit className=' h-16 mb-8' max={70} mode='single'>{ calc.num ? calc.num : calc.res}</Textfit>
  )
}

export default Screen