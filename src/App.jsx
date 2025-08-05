import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';

function App() {

  let data = useSelector((state)=>{
    return state.counter
  })

  let dispatch = useDispatch()

  return (
    <div className='mainDiv1'>

        <div className='mainDiv2'>
          <h2 className='heading'>Counter App With React-Redux</h2>
          <p className='paraa'>{data}</p>
        </div>
        
        <div className='btnsDiv'>
          <button className='btn btn-danger me-3 btnnn'
          onClick={()=>{
            dispatch({type: "DECREMENT"})
          }}>Decrement</button>

          <button className='btn btn-dark me-3 btnnn'
          onClick={()=>{
            dispatch({type: "RESET"})
          }}>Reset</button>

          <button className='btn btn-success btnnn' 
          onClick={(e)=>{
            dispatch({type: "INCREMENT"})
            }}>Increment</button>
        </div>

    </div>
  )
}

export default App;
