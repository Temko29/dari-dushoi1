import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Advertising from './components/advertising/Advertising'
import Footer from './components/footer/Footer'
import Grid from './components/grid/Grid'
import Header from './components/header/Header'
import Questions from './components/questions/Questions'
import Slider from './components/slider/Slider'





function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <Header />
      <Slider />
      <Grid img="./components/grid/Rectangle 632.png" title="Конная прогулка" buy="от 990р"/>
      <Advertising />
      <Questions />
      <Footer />

   </>
  )
}

export default App
