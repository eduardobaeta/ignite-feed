import { useState } from 'react'
import { Header } from './components/Header/Header'

import StyleApp from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <div className={StyleApp.wrapper}>
        <aside>
          sidebar
        </aside>
        <main>
          post
        </main>
      </div>
    </div>
  )
}

export default App
