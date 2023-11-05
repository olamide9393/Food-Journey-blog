import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Routes from './routes/Routes'
import Blog from './pages/Blog'
import Sidebar from './component/BlogSideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Routes/>
    {/* <Sidebar/> */}
    

    </>
  )
}

export default App
