import { createContext, useState } from "react"

export const CalcContext = createContext()

function CalcProvider({children}) {

    const [calc,setCalc] = useState({
        sign:"",
        num:0,
        res:0
    })

    const proviserValue = {
        setCalc,
        calc
    }

  return (
    <CalcContext.Provider value={proviserValue}>
        {children}
    </CalcContext.Provider>
  )
}

export default CalcProvider