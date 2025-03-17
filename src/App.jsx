import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [progress,setProgress] = useState(0)
  
  return (
   <div className='App bg-slate-900 rounded-lg w-1/2 h-96 flex justify-center items-center flex-col m-auto' >
    <div className="content w-full h-full mt-4 p-5">
    <h1 className='text-4xl text-white' >Progress Bar</h1>
     <progress id='myBar' className='w-full h-8 rounded-lg mt-20 bg-blue-600'  value={(progress <= 100 ) ? progress : 0 } max={100} >32%</progress>
      
    <br/>
     <input type="text" className='border border-black w-1/2 m-5 p-2 rounded-md outline-none focus:ring-2 ring-blue-700' placeholder='Enter Progress Value' onChange={(e)=>setProgress(e.target.value)}/>
     </div>
   </div>
  )
}

export default App
