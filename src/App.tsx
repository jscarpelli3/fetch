import React from 'react'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import LogForm from './components/LogForm'
import Card from './components/Card'
import Input from './components/Input'
import './App.css'
import { login, logout } from './utils/api'

type User = {
  name: string
  email: string
}

function App() {
  const [user, setUser] = useState<User[]>([])
  const [logged, setLogged] = useState<boolean>(false)
  const [fetchedData, setFetchedData] = useState<boolean>(false)

  const logHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('handler')
  }



  return (
    <div className="App">
      <header className="header-container">
        <Header loggedIn/>
     </header>
     <hr/>
      {logged ? 
        <div className="card-container">

        </div> 
        : 
        <div>
          <LogForm loggedIn={logged}/>
        </div>}
    </div>
  )
}

export default App
