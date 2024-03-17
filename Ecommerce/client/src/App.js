import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Index from './components/Index.jsx';
import Product from './components/Product';
import { Routes, Route } from 'react-router-dom';
import List from '../src/components/List';
import Electronics from './components/Electronics';
import Clothing from '../src/components/Clothing';
import Popo from './components/Popo';

function App() {
  return (
    <>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/navbar' element={<Navbar/>}></Route>
      <Route path='/users/sign_up' element={<Index isSignInPage={false}/>}/>
      <Route path='/users/sign_in' element={<Index isSignInPage={true}/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/list' element={<List/>}/>
      <Route path='/electronics' element={<Electronics/>}/>
      <Route path='/clothing' element={<Clothing/>}/>  
      <Route path='/popo' element={<Popo/>}/>  
    </Routes>
    </>
  );
}

export default App;