
import './App.css'
import Home from './Pages/Home'
import {Routes, Route, Router} from "react-router-dom"
import Signup from './Pages/Signup'
import LoginPage from './Pages/loginPage' 
import { useContext, useEffect } from 'react'
import { AuthContext } from './Context/Context'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from './Firebase/firebaseConfig'
import CreatePost from './Components/CreatePost/CreatePost'
import ViewPostPage from './Pages/ViewPostPage'



function App() {

  const {setUser} = useContext(AuthContext)

  useEffect(()=>{
   onAuthStateChanged(auth, (user)=>{
    setUser(user)
    console.log(user.displayName);
   })
  })

  return (
    < >
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>      
      <Route path='/createPost' element={<CreatePost/>}></Route>      
      <Route path='/viewPost' element={<ViewPostPage/>}></Route>      
    </Routes>
      
      
    </>
  )
}

export default App
