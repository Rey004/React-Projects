import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 15
  let [counter, setCounter]= useState(0)

  const addValue = () => {
    // counter = counter + 1,
    setCounter(counter + 1)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }


  let content;

  if (counter >= 0 && counter <= 20) {
    content = (
      <>
        <button onClick={addValue}>Add Value</button>
        <br />
        <button onClick={removeValue}>Remove Value</button>
      </>
    );
  } else {
    content = <p>Counter value is out of range (0-20).</p>;
  }


  return (
    <>
      <h1>React Counter</h1>
      <h2>Counter Value: {counter}</h2>

      {content}
    </>
  )
}

export default App
