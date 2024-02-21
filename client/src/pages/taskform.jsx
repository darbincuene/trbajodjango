import React from 'react'
import {useForm} from 'react-hook-form' 


export default function taskform() {

  const {register,handleSubmit, formState:{
    errors
  }} = useForm()

  const onSubmit= handleSubmit(data=>{
    console.log(data)
  })
  return (
    
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='nombre verdura' 
        {...register("vegetable_name",{required:true})}
        />
        {errors.vegetable_name && <span>el nombre de la verdura es requerido</span>}
        <textarea placeholder='description'
        {...register("description",{required:true})} rows="3"></textarea>
                {errors.description && <span>descriptiones es requerido</span>}

        <button>save</button>
      </form>
    </div>
  )
}

