import React from 'react'
import profileImg from '../images/profile_man.png'
export default function UserItem(props) {
    const {id,name}=props;
  return (
    <div className='flex m-3 p-3 bg-black justify-between'>
<div className='flex'>
  <img
    alt=""
    src={profileImg}
    className="h-8 w-8 rounded-full m-3"
  />
<div className='mx-3'>
<p className='text-xl' key={id}>{name} </p>
<p className='text-xs'>last opened 6hrs ago</p>
</div>
</div>
    <div className=''>
    <button className="pr-3 pl-3 m-3 p-1 w-24 bg-blue-600" onClick={()=>{}}>Edit</button>
    <button className="pr-3 pl-3 m-3 p-1 w-24 bg-red-600" onClick={()=>{}}>Delete</button>
    </div>
  </div>

  )
}
