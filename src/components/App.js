import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
//code here
  const[name, setName] = useState({firstName: '_______'})
  const[input, setInput] = useState("")
 
  const handleOnChange= (e)=>{
    setInput({firstName: e.target.value})
    
   }

   const handleOnClick = ()=>{
    setName(input)
  }
  return (
    <div id="main">
      <input type='text' id='input' onChange={handleOnChange}></input>
      <button id='button' onClick={handleOnClick}>Click</button>
      <p id='text'> Hello my name is {name.firstName} and I study at Newton School</p>
    </div>
  )
}


export default App;
