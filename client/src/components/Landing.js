import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div>
       <p>Welcome to C48</p>
       <div>
        <p>Already have an account?</p>
        <Link to='/login'>
        <button className="w-20 bg-cyan-700" onClick={()=>{}}>Login</button>
        </Link>
       </div>
       <div>
        <p>New User?</p>
        <Link to='/signup'>
        <button className="w-20 bg-cyan-700" onClick={()=>{}}>SignUp</button>
        </Link>
       </div>
    </div>
  )
}
