import React from 'react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

type Formfiels  = { 
  email: string; 
  password: string; 
}
const Input = () => {
  const {register}= useForm<Formfiels>();

  const onSubmit: SubmitHandler<Formfiels> = (data) => { 
    console.log(data);
  }



// const [email, setEmail]= useState('');
// const [password, setPassword]= useState('');
// const [errors,setErrors] = useState<{ email: string; password: string }>({
//   email: '',
//   password: '',
// })


// const handleSubmit = (e: React.FormEvent ) => { 
// e.preventDefault();
// setErrors({email: '', password: ''});

// }

  return (
    <header className='flex items-center justify-center flex-col gap-2 '>
      <input {...register("email")} type='Name' placeholder='Email' className=' bg-blue-200 p-2'/>
      <input {...register("password")} type='password' placeholder='password' className='bg-blue-200 p-2'/>
      <button type='submit' className='bg-red-400 py-2 px-20 rounded-lg hover:bg-blue-200'>Submit</button>
    </header>
  )
}

export default Input
