import React from 'react'
import {useForm, SubmitHandler} from  'react-hook-form'

interface IFormInput{ 
  firstname: string; 
  lastname: string;
  age: number;
}

const BiodataForm = () => {
  const {register,handleSubmit} = useForm<IFormInput>(); 
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data); 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstname", {required: true, maxLength:5})} className='border-2 border-black'/>
      <input {...register("lastname", {pattern: /^[A-Za-z]+$/i})} className=""/>
      <input type="number" {...register("age", {min:18, max:99})} className=''/>
      <input type="submit"/> 
    </form>
  )
}

export default BiodataForm
