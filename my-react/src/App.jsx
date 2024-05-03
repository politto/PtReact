import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokemon from './components/Pokemon'
import Parent from './components/parent'
import { Pokedex } from './components/Pokedex'
import { TeamProvider } from './components/contextSample'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const [chocobo, setChocobo] = useState(false)

  const increment = () => {
    setCount(count + 1)
    handleChocobo()
  }
  const handleChocobo = () => {
    if ((count + 1) % 7 === 0) {
      setChocobo(true)
    } else {
      setChocobo(false)
    }  
  }

  return (
    <>
      
      {Pokedex()}

      <hr/>

      <TeamProvider></TeamProvider>
      <Router>
        <nav>
          <Link style = {{padding: 5}} to = "/">Home</Link>
          <Link style = {{padding: 5}} to = "pokedex/ditto">Ditto</Link>
        </nav>

        <Routes>
          <Route path = "/" element={<></>}/>
          <Route path = "/pokedex/:pokename" element={<Pokedex/>}/>
    
        </Routes>
      </Router>
    </>
  )
}

export default App

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}