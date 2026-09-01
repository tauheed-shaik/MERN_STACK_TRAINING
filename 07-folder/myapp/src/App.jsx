import React from 'react'

const App = () => {
  function btnClicked(){
    console.log("Yes you have clicked me");
  }
  const mouseOver=()=>{
        console.log("Mouse is working.")
      }
  return (
    <div className='parent'>
      <h1>This is a functions class</h1>
      <button className="btn" onClick={btnClicked}>On Click external</button>
      <button className="btn" onDoubleClick={()=>{
        console.log("Thanks")
      }}>On Double Click</button>
      <button className="btn" onMouseOver={mouseOver}>Mouse over Click</button>
      <button onclick={btnClicked} onMouseOver={mouseOver}>Two way button</button>
    </div>
  )
}

export default App
