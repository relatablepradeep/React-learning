import {useState} from 'react'

function App() {

  // let  count=5

  let [counter,setcounter]=useState(0)

  const addvalue=()=>{
    // console.log("value added",Math.random());
    // console.log("button is clicked",count);

    console.log("clicked",counter);

    setcounter(counter+1)


    // count=count+1

  }

  const revvalue=()=>{

    if(counter >0){
    setcounter(counter-1)
    }else{
      return 0
    }
  }
 

  return (
    <>
      
      <h1>pradeep hello</h1>

      <h2>Counter value:{counter}</h2>

      <button onClick={addvalue}>add value {counter}</button>
      <br/>
      <button onClick={revvalue}>rev value:{counter}</button>

    </>
  )
}

export default App
