import { useState } from 'react'
import { Header } from './components/Header/Header'

import StyleApp from './App.module.css'
import { Sidebar } from './components/Sidebar/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <div className={StyleApp.wrapper}>
        <Sidebar/>
        <main>
          post
        </main>
      </div>
    </div>
  )
}

export default App
