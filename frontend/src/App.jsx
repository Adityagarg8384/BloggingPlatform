import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import SingleBlog from './pages/SingleBlog'
import Home from './pages/Home'
import './App.css';
import Login from './pages/Login';
import CreateBlog from './pages/CreateBlog'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/blog/:id' element={<SingleBlog/>}/>
        <Route exact path='/create-blog' element={<CreateBlog/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
