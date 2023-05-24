import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import './App.css';
import CharacterList from './components/CharacterList/CharactersList';
import Main from './pages/Main';
import Navbar from './components/NavBar/NavBar';
import OneCharacter from './pages/OneCharacter';

function App() {




  return (
    <>
      
      <div className="App">
        
        
      
      <Routes>
                <Route path='/' element={<Navbar/>}>
                  <Route path='/:id' element={<OneCharacter/>}/>
                  <Route index element={<Main/>}/> 
                 
                </Route>
      </Routes>
      </div>
    </>
  );
}

export default App;
