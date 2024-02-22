import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function card({task}) {

  const Navigate =useNavigate()
  return (
    <div style={{background:"#77D4E6 "}}
    
    onClick={() => {
      Navigate(`/darbin/${task.id}`)
    }}>
    <h1>{task.vegetable_name}</h1>
    <hr />
    
    </div>
    
  )
}
