import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function card({task}) {

  const Navigate =useNavigate()
  return (
    <div className='bg-slate-600 p-3 hover:bg-zinc-700 hover:cursor-pointer '
    
    onClick={() => {
      Navigate(`/darbin/${task.id}`)
    }}>
    <h1 className="font-bold uppercase">{task.vegetable_name}</h1>
    <h1 className="text-slate-400">{task.description}</h1>

    
    </div>
    
  )
}
