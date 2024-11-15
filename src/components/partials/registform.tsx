import React from 'react'
import {useForm} from 'react-hook-form'
import {SubmitHandler} from 'react-hook-form'

enum GenderEnum { 
  female = "Female", 
  male = "male", 
  other = "other",
}

interface IFormInput { 
  firstName: string;
  gender: GenderEnum; 
}

const RegistForm = () => {

  const {register, handleSubmit} = useForm<IFormInput>() ;
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <div className='flex flex-col gap-2 border-2 border-black'>
            <label className='bg-blue-300 p-2'>First Name</label>
            <input {...register("firstName")} className='rounded-lg p-5'/>
          </div>
        <label>Gender Slect</label>
        <select className='p-2'>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="">Other</option>
        </select>
        <input type='submit' className='bg-red-500 p-2 cursor-pointer hover:bg-green-500'/>
        </div>
      </form>
  )
}

export default RegistForm
