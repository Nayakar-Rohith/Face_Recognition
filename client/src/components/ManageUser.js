import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import UserItem from './UserItem';

export default function ManageUser() {
  // const user=[{id:'1',name:'bharat',
  // },{id:'2',name:'saikumar',
  // }]
  const [user,setUser]=useState([{id:'1',name:'Bharat',
  },{id:'2',name:'Saikumar',
  }])

  return (
    <div>
      {/* <Link to='/adduser'>
      <button className="pr-3 pl-3 m-3 p-1 bg-green-800" onClick={()=>{}}>Add New Member</button>
      </Link> */}
      {user?.map((a,index)=>{
        return <UserItem key={index} id={a.id} name={a.name}/>
      })}
    </div>
  )
}
