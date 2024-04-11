import React from 'react'

export const Flexcont = () => {
  return (
    <div className=' grid grid-cols-2 m-8 p8 shadow-lg p-4 bg-slate-400 rounded-xl ' >
    <div className='basis-1/4 rounded shadow-md bg-slate-900 text-white font-bold p-4  hover:p-6'><h2>HTML</h2></div>
        <div className='basis-1/4 rounded shadow-md bg-slate-900 text-white font-bold p-4 hover:p-6'><h2>TAILWIND CSS</h2></div>
        <div className='basis-1/4 rounded shadow-md bg-slate-900 text-white font-bold p-4 hover:p-6'><h2>TYPESCRIPT</h2></div>
        <div className='basis-1/4 rounded shadow-md bg-slate-900 text-white font-bold p-4 hover:p-6'><h2>NEXT JS</h2></div>
        
    </div>
  )
}
