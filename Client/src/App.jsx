import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [nest , setNest] = useState("")

  useEffect(()=>{
    axios.get("http://localhost:3002")
    .then(res=> {
      console.log(res)
      setNest(res.data)
    }).catch(err => 
      console.log(err));
  } , []);

  return (
    <>
    <p>Testing</p>
     <p>{nest}</p>
    </>
  )
}

export default App
