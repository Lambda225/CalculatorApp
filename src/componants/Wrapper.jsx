import React from 'react'

function Wrapper({children}) {
  return (
    <div className='p-8 shadow-md w-80 rounded-[1rem] mt-8 bg-slate-100'>{children}</div>
  )
}

export default Wrapper