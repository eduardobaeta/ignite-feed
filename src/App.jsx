import { useState } from 'react'
import { Header } from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <div className="wrapper">
        <aside>
          sidebar
        </aside>
        <main>

        </main>
      </div>
    </div>
  )
}

export default App
