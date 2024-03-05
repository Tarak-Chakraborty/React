import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [Counter, setCounter] = useState(1)

  //let Counter = 15

  const addValue = () => {
    if(Counter < 20){
      Counter = Counter + 1
      setCounter(Counter)
    }
  }

  const removeValue = () => {
    if(Counter > 0){
      Counter = Counter -1
      setCounter(Counter)
    }
  }


  return (
    <>
      <h1>Make Counter Project</h1>
      <h2>Counter Value: {Counter}</h2>

      <button onClick = {addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
