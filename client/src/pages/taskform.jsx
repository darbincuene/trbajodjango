import React from 'react'
import {useEffect} from 'react'
import {useForm} from 'react-hook-form' 
import { createTask , deleteTask , updateTask, getTask} from '../api/Task.api'
import {useNavigate, useParams} from 'react-router-dom'
import  { toast } from 'react-hot-toast'

export default function taskform() {

  const {
    register,
    handleSubmit,
     formState:{errors},
     setValue
    
    } = useForm()
  const navigate=useNavigate()
  const params=useParams()
  console.log(params)

  const onSubmit= handleSubmit( async (data)=>{
    if(params.id){
      await updateTask(params.id, data)
      toast.success('tarea actualizada')
    }else{
      await createTask(data)
      toast.success('tarea creada')

    
    }
    navigate("/tasks")
  });


  useEffect(()=>{
    async function loadTask(){
      if(params.id){
        const res= await getTask(params.id)
        setValue('vegetable_name',res.data.vegetable_name)
        setValue('description',res.data.description)


      }

    }
    loadTask()
   

  },[])
  return (
    
    <div className='mx-wl-xl mx-auto w-96'>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='nombre verdura' 
        {...register("vegetable_name",{required:true})}
        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
        />
        {errors.vegetable_name && <span>el nombre de la verdura es requerido</span>}
        <textarea         className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
 placeholder='description'
        {...register("description",{required:true})} rows="3"></textarea>
                {errors.description && <span>descriptiones es requerido</span>}

        <button className='bg-indigo-700 p-3 rounded-lg block w-full mt-3'>save

        </button>
      </form>
    { params.id &&       <button
    className='bg-red-400 p-3 rounded-lg w-48 mt-3'
     onClick={async()=>{
      const aceptado = window.confirm('esta seguro?')
      if (aceptado){
        await deleteTask(params.id);
        toast.success('tarea eliminada')
        navigate("/tasks")

      }
    }}>delete</button>}
    </div>
  )
}

