import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0)
    const decrementHandler =()=>{
        setCount((prevCount)=>prevCount-1);
    }
    const incrementHandler =()=>{
        setCount((prev)=>prev+1)
    }
  return (
    <>
    <h1 className='mt-5'>{count}</h1>
    <button className='btn btn-primary me-2' onClick={()=>decrementHandler()}>Decrement</button>
    <button className='btn btn-secondary me-2' onClick={()=>setCount(0)}>Reset</button>
    <button className='btn btn-danger' onClick={()=>incrementHandler()}>Increment</button>

    </>
  )
}

export default Counter