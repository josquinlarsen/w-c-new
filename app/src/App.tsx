import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

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
          <p>Hello</p>
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
