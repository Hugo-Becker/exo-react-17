
import './App.css';
import React,{useState} from 'react'

function App() {

  let [count, setCount] = useState(0);

  let addOne=()=>{
    setCount(count+1)
  }


  return (
    <div className="App">
      <div>Le compte est de {count}</div>
      {/* <button onClick={()=>setCount(count+1)}>Plus un </button> */}
      <button onClick={addOne}> Plus un </button>


      
    </div>
  );
}

export default App;
