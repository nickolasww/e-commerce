import * as React from 'react'

const Input = ({type, placeholder}) => {
  return (
    <div>
      <input
        type  = {type}
        placeholder = {placeholder}
        className=" border-b-2 border-gray-300 w-72 focus:outline-none"
        />
    </div>
  )
}

export default Input
