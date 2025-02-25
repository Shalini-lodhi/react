import { useState } from 'react';

import './App.css'

function App() {

  let [cnt, setCnt] = useState(0)

  const addValue=()=>{
    setCnt(cnt + 1)
    setCnt(cnt + 1)
    setCnt(cnt + 1)
  }
  //call back function
  const reduceValue=()=>{ 
    if(cnt > 0){
      setCnt(prevCount => prevCount - 1)
      setCnt(prevCount => prevCount - 1)
      setCnt(prevCount => prevCount - 1)
    }   
  }
  return (
    <>
     <h1>Let's count! 🚀</h1>
     <h2>Value: {cnt}</h2>

    <button onClick={addValue}>Add (without call back counter)</button> 
    
    <br />
    <button onClick={reduceValue}>Add (with call back counter)</button>
    </>
  )
}

export default App
