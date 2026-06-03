import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Form from './components/Form'

import { USER_FORM, PUP_FORM, PUP_RECORD_FORM, USER, PUP, RECORD } from './utilities/FormFields';

const testUser = { username: "Test", email: "email@email.com", first_name: "Test", last_name: "User", password1: "", password2: ""}

function App() {
  const [loggedIn, setIsLoggedIn] = useState<boolean>(false);


  return (
    <>
    <Navbar 
      loggedIn={loggedIn}
      setIsLoggedIn={setIsLoggedIn}
    />
    <main>
      {loggedIn? (
        <div className='main-content'>
        <Sidebar />
        <div style={{padding:"1%"}}>
          <Form 
            initialData={RECORD}
            httpType={"post"}
            onSubmit={() => console.log("Submitted!")}
            onCancel={() => console.log("Cancelled")}
            formFields={PUP_RECORD_FORM}
            title={"RECORD"}
          />
        </div>
      </div>

      ): (
        <div><p>Welcome!</p></div>
      )}
    
    </main>
    </>
  )
}

export default App
