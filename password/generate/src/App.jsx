import { useState,useCallback,useEffect,useRef } from 'react'
import './index.css';


function App() {

  const [length,Setlength]=useState(8)
  
  const [numall,Setnum] =useState(false)
  const [password,Setpass] =useState("")
  const [charall,Setchar] =useState(false)

  const passref=useRef(null)

  const generate=useCallback(()=>{

    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numall) str+="0123456789"
    if(charall) str+="!@#$%^&*()?/><:"
    

    for(let i=1;i<=length;i++){
      let char=   Math.floor(Math.random()*str.length )
      //character aya yani ke array ke index value ayii hai

      pass+=str.charAt(char)



    }

    Setpass(pass)

  },[length,charall,numall,Setpass])

  const copyclip=useCallback(()=>{
    passref.current?.select()//it will give that highlight the password
    passref.current?.setSelectionRange(0,3)//it will highlight the password according to range given
    window.navigator.clipboard.writeText(password)//writetext or readtext

  },[password])

  useEffect(()=>{
    generate()
  },[length,charall,numall,generate])

  




  return (
    <>


    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800">

      
    <h1 className=' text-center  text-white py-2 text-lg'>Password generate</h1>

      <div className='flex shadow rounded-lg overflow-hidden my-5 mx-1 '>
        <input type="text"  value={password} className='outline-none w-full py-1 px-3  ' placeholder='password' readOnly   ref={passref}           />


        <button onClick={copyclip} className='rounded-sm bg-blue-400 text-white py-3 px-3'>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={8} max={100} value={length}  className='cursor-pointer'   onChange={(e)=>{Setlength(Number(e.target.value))}}      />
          <label  className='text-white'>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input type="checkbox" deafultChecked={numall} id="numberInput"   className='cursor-pointer'   onChange={()=>{Setnum((prev)=>!prev)}}   />
        <label htmlFor="numberInput" className='text-white'>Number</label>
        </div>

        <div className='flex items-center gap-x-1'>
        <input type="checkbox" deafultChecked={charall} id="charInput"   className='cursor-pointer'   onChange={()=>{Setchar((prev)=>!prev)}}   />
        <label htmlFor="charInput" className='text-white'>Charcter</label>
        </div>

      </div>

    </div>

    </>
   
  )
}

export default App
