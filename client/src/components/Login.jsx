import React, { useState } from 'react'
import { FaKey, FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { getUser } from '../api/api.user';

const Login = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');


    const handleLoginSumbit = async (e)=>{
        e.preventDefault();
        const CurrentUser = await getUser({username:username,password:password});
        localStorage.setItem('userid',CurrentUser.user.id)
        setusername('');
        setpassword('');
    }

  return (
    <div className='my-4' >
        <h1 className='mb-8' >Login</h1>
        <form onSubmit={handleLoginSumbit} className='flex-col flex text-2xl gap-y-6'>
            <label className="input input-bordered flex items-center gap-2">
            <FaUser />
            <input onChange={(e)=>setusername(e.target.value)}  type="text" value={username} className="grow" placeholder="Username" />
            </label>

            <label className="input input-bordered flex items-center gap-2">
            <FaKey />
            <input onChange={(e)=>setpassword(e.target.value)} type="password" value={password} placeholder='Password' className="grow" />
            </label>
            <button className='btn w-[12rem] mx-auto' > Login </button>
        </form>
    </div>
  )
}

export default Login