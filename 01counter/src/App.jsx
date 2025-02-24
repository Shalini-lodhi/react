import { useState } from 'react';

import './App.css'

function App() {

  let [cnt, setCnt] = useState(0)

  const addValue=()=>{
    setCnt(cnt += 1)
    console.log("Value added", cnt);
  }
  const reduceValue=()=>{ 
    if(cnt > 0){
      setCnt(cnt -= 1)
    }   
    console.log("Value reduced", cnt);
  }
  return (
    <>
     <h1>Let's count! 🚀</h1>
     <h2>Value: {cnt}</h2>

    <button onClick={addValue}>Add</button> 
    <button onClick={reduceValue}>Reduce</button>
    </>
  )
}

export default App
