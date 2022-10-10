import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'

function Button({value}) {

  const {calc,setCalc} = useContext(CalcContext)

  const getClass = (name) =>{
    const className = {
      '=':'equals',
      'x':'opt',
      '-':'opt',
      '+':'opt',
      '/':'opt',
    }
    return className[name]
  }

  // Ajout de nombre
  const hundleClickButton =  () => {
    if(!(value === 0 && calc.num === 0)){
      setCalc({
        ...calc,
        num: Number(calc.num + '' + value)
      })
    }
  }

  // Ajouter un point
  const commaClick = () =>{
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num 
    })
  }

  // retour a l'état initial
  const restatClick = () =>{
    setCalc({sign:'',num:0,res:0})
  }

  // opéation
  const signClick = () =>{
    setCalc({
      sign:value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num:0
    })
  }

  // résultat
  const equalsClick = () =>{
    if( calc.res && calc.num){
      const math = (a,b,sign) =>{
        const result = {
          '+':(a,b) => a + b,
          '-':(a,b) => a - b,
          'x':(a,b) => a * b,
          '/':(a,b) => a / b
        }
        return result[sign](a,b)
      } 
      setCalc({
        res:0,
        sign:'',
        num: math(calc.res,calc.num,calc.sign)
      })
    } 
  }

  // calcule de pourcentage
  const pourcentClick = () =>{
    setCalc({
      ...calc,
      num: calc.num /100
    })
  }

  // clacule de l'inverse
  const negativeClick = () =>{
    setCalc({
      ...calc,
      num : calc.num * (-1)
    })
  }

  const hundleClick = () =>{
    const results = {
      '.':commaClick,
      'C':restatClick,
      '/':signClick,
      '+':signClick,
      '-':signClick,
      'x':signClick,
      '=':equalsClick,
      '%':pourcentClick,
      '-+':negativeClick
    }
    if(results[value]){
      return results[value]()
    }else{
      return hundleClickButton()
    }
  }

  return (
    <button onClick={hundleClick} className={`${getClass(value)} button`}>{value}</button>
  )
}

export default Button