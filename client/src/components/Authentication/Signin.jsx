import React, { useState } from 'react'

const Signin = () => {
    const [first, setfirst] = useState('second')
  return (
    <div className='flex justify-center absolute items-center h-screen w-screen' >
        <div className='' >
            <h1>Signin</h1>
            <form className='flex-col flex  text-2xl gap-y-4'>
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button value="some" className='bg-green-200' type="submit">Signin</button>
            </form>
        </div>
    </div>
  )
}

export default Signin