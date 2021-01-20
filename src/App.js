
import './App.css';
import React,{useState} from 'react'
import Component from './Component'

function App() {

  let [count, setCount] = useState(0);

  let addOne=(param)=>{
    setCount(count+param)
  }


  return (
    <div className="App">
      <div>Le compte est de {count}</div>
      {/* <button onClick={()=>setCount(count+1)}>Plus un </button> */}
      {/* <button onClick={addOne}> Plus un </button> */}
      <Component>{addOne}</Component>




      
    </div>
  );
}

export default App;
