import React from 'react'
import './App.css'

import { Footer, Blog, Posibility, Features, Header, WhatGPT3} from './containers'
import { Brand, Navbar, Cta } from './Components'

export default function App() {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar/>
        <Header/>
      </div>
      <div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Posibility/>
        <Cta/>
        <Blog/>
        <Footer/>
      </div>
    </div>
  )
}
