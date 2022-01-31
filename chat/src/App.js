import React from 'react';
import './App.css';
import Header from './Componentss/Header/Header';
import Main from './Componentss/Main/Main';
import Sidebar from './Componentss/Sidebar/Sidebar';

const App =() =>{
  return (
    <div className='title'>
    
  <Header />
  <Sidebar />
  <Main/>
    </div>
  );
}

export default App;
