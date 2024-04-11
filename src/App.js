import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact';
import Directory from './components/Directory';
import Donate from './components/Donate';
import Download from './components/Download';
import Programs from './components/Programs';
import DashboardHome from './components/admin/DashboardHome'
import News1 from './components/news/News1';
import News2 from './components/news/News2';
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
    <Route path='/DashboardHome' element={<DashboardHome/>}/>
    <Route path='/News1' element={<News1/>}/>
    <Route path='/News2' element={<News2/>}/>
   </Routes>
   </BrowserRouter>
</>
  )
}

export default App