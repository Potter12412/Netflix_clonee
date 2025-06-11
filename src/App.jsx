import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav'
import Section1 from './component/Section1'
import Section2 from './component/Section2'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Section1/>
      <Section2/>
      <Footer/>
    </>
  )
}

export default App
