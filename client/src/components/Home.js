import React, { useState } from 'react'
 function Home() {
  const [lock,setLock]=useState(true)
  return (
    <div className=' text-center'><p>{lock?'Door is locked':'Door is open'}</p>
      <button className="m-2 p-1 pr-3 pl-3 bg-cyan-500" onClick={()=>{setLock(lock?false:true)}}>{lock?"Open":"Lock"}</button>
    </div>
  )
}

export default Home;