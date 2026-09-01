import React, { useState } from 'react'

const App = () => {
  // let number=10;
  const [num,setNum] = useState(10);
  function increaseNum(){
    setNum(num+1);
  }
  function decreaseNum(){
    setNum(num-1);
  }
  function jumpNum(){
    setNum(num+5);
  }

  return (
    <>
    <h1>{num}</h1>
    <button onClick={increaseNum}>Increase</button>
    <br/>
    <button onClick={decreaseNum}>Decrease</button>
    <br/>
    <button onClick={jumpNum}>Jump</button>
    </>
  )
}

export default App
