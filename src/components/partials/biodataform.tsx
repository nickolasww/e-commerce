import React from 'react'
import {Path, useForm, SubmitHandler, UseFormRegister} from  'react-hook-form'

interface IFormValues{ 
  "Firstnae": string;
  age: number
}


type InputProps = { 
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
}


const input =({label, register, required}: InputProps) => (
  <>
    <label>{label}</label>
    <input {...register(label, {required})}/>
  </>
)


const BiodataForm = () => {
  const {register,handleSubmit} = useForm<IFormValues>(); 
  const onSubmit: SubmitHandler<IFormValues> = (data) => console.log(data); 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="submit"/> 
    </form>
  )
}

export default BiodataForm
