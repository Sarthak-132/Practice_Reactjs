import React, { useState } from 'react'

const App = () => {

  const age = 23;

  const [a , setA] = useState(10)

  const change = () =>{

    setA(20)

  }


  const [num, setNum] = useState(0);
  

  // num = readable element , setNum = writable element

  return (
    <div>
      <h1>Age is : {age}</h1>
      <h1>value of a is : {a}</h1>
      <h1>value of num is : {num}</h1>
      <button onClick={change}>Change</button>
      <button onClick={()=>setNum(num+10)}>increment</button>
      <button onClick={()=>setNum(num-10)}>decrement</button>
    </div>
  )
}

export default App

