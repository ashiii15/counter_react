import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, incrementCount, resetCount } from '../Redux/actions/counterAction';

function Counter() {
  const counter = useSelector((state)=>state.incrementCounter)
  const dispatch = useDispatch()
  console.log(counter);
    // const [count,setCount] = useState(0)
    // const decrementHandler =()=>{
    //     setCount((prevCount)=>prevCount-1);
    // }
    // const incrementHandler =()=>{
    //     setCount((prev)=>prev+1)
    // }
  return (
    <>
    <h1 className='mt-5'>{counter}</h1>
    <button className='btn btn-primary me-2' onClick={()=>dispatch(decrementCount())}>Decrement</button>
    <button className='btn btn-secondary me-2'onClick={()=>dispatch(resetCount())} >Reset</button>
    <button className='btn btn-danger' onClick={()=>dispatch(incrementCount())}>Increment</button>

    </>
  )
}

export default Counter