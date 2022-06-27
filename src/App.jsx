import { useState } from 'react'
import { Header } from './components/Header/Header'

import Styles from './App.module.css'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Post } from './components/Post/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <div className={Styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}

export default App
