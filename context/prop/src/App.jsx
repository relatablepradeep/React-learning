import React from "react";
import Login from "./comp/Login"
import Profile from "./comp/Profile"
import ContProvider from "./cont/ContProvider";


function App() {

  return(
    <ContProvider>
      <Login/>
      <Profile/>
    </ContProvider>
  )
  
} 

export default App