import React,{useState,useEffect} from 'react'
import NavBar from './components/NavBar'


const App=(props)=>{
  const[userLoggedIn,setUserLoggedIn]=useState(false)

  const handleAuth=()=>{
    setUserLoggedIn(!userLoggedIn)
  }

  useEffect(()=>{
    if(localStorage.getItem('token')){
      handleAuth()
    }
  },[])
  
  return (
    <div>
       <center><h1>FULL STACK TASK</h1></center>
      <NavBar userLoggedIn={userLoggedIn} handleAuth={handleAuth}/>
      
    </div>
  )

}
export default App
