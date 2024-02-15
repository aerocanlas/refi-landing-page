import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact';
import Directory from './components/Directory';
import Donate from './components/Donate';
import Download from './components/Download';
import Programs from './components/Programs';

const App = () => {

  return (
<>

<BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Programs' element={<Programs/>}/>
    <Route path='/Download' element={<Download/>}/>
    <Route path='/Directory' element={<Directory/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Donate' element={<Donate/>}/>

   </Routes>
   </BrowserRouter>
</>
  )
}

export default App