import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Form from './components/Form'

import { USER_FORM, PUP_FORM, PUP_RECORD_FORM, USER, PUP, RECORD } from './utilities/FormFields';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard';
import Login from './pages/user/Login';
import Register from './pages/user/Register';
import PupForm from './pages/pups/PupForm';

const testUser = { username: "Test", email: "email@email.com", first_name: "Test", last_name: "User", password1: "", password2: ""}

function App() {
  const [loggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>

        <Route path="home" element={<Dashboard />}/>
        <Route path="addPup" element = {<PupForm httpType={"post"} title={"Add Pup"}/>} />
        
        <Route element={<ProtectedRoute />}>
          {/* private routes */}
        </Route>
      </Route>
    </Routes>
    {/* // <Navbar/>
    // <main>
    //   {!loggedIn? (
    //     <div className='main-content'>
    //     <Sidebar />
    //     <div style={{padding:"1%"}}>
    //       <Form 
    //         initialData={RECORD}
    //         httpType={"post"}
    //         onSubmit={() => console.log("Submitted!")}
    //         onCancel={() => console.log("Cancelled")}
    //         formFields={PUP_RECORD_FORM}
    //         title={"RECORD"}
    //       />
    //     </div>
    //   </div>

    //   ): (
    //     <div><p>Welcome!</p></div>
    //   )}
    
    // </main> */}
    </>
  )
}

export default App
