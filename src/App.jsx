import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import GeneralMovieList from './components/GeneralMovieList'

function App() {


  return (
    <>
      <Header />
      <Slider />
      <ProductionHouse />
      <GeneralMovieList />
    </>
  )
}

export default App
