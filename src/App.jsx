import React from 'react'
import './App.css'

import { Footer, Blog, Possibility, Features, Header, WhatGPT3} from './containers'
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
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
      </div>
    </div>
  )
}
