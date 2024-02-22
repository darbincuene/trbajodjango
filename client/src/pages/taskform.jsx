import React from 'react'
import {useEffect} from 'react'
import {useForm} from 'react-hook-form' 
import { createTask , deleteTask , updateTask, getTask} from '../api/Task.api'
import {useNavigate, useParams} from 'react-router-dom'


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
    }else{
      await createTask(data)
    
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
    { params.id &&       <button onClick={async()=>{
      const aceptado = window.confirm('esta seguro?')
      if (aceptado){
        await deleteTask(params.id);
        navigate("/tasks")

      }
    }}>delete</button>}
    </div>
  )
}

