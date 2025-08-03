import React from 'react'
import './App.css'
import Dashboard from './Dashboard'
import {BrowserRouter,Routes,Router,Route} from 'react-router-dom'
import Login from './Login'
import SignUp from './Signup'
import Mainpage from './Mainpage'
import About from './About'
import ForgotPassword from './ForgotPassword'
import Navbar2 from './Navbar2'
import Orderhere from "./OrderHere";
import OurProduct from './OurProduct'
import { ToastContainer } from 'react-toastify'




function App() {
  return(

 <>
 <BrowserRouter>
 <Routes>
    
    <Route path='/' element={<Dashboard/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/mainpage' element={<Mainpage/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/forgotpassword' element={<ForgotPassword/>}></Route>
    <Route path='/navbar2' element={<Navbar2/>}></Route>
    <Route path='/orderhere' element={<Orderhere/>}></Route>
    <Route path='/ourproduct' element={<OurProduct/>}></Route>
    

    


    
 </Routes>
</BrowserRouter>
<ToastContainer></ToastContainer>
 </> 
 )
}

export default App
