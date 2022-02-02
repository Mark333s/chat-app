import React from 'react';
import './App.css';
import Header from './Componentss/Header/Header';
import Josefina from './Componentss/Content/Josefina';
import Sidebar from './Componentss/Sidebar/Sidebar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Messages from './Componentss/Sidebar/Messages/Messages';
import Alica from './Componentss/Content/Alica';
import Velazquez from './Componentss/Content/Velazquez';

const App =() =>{
  return (
    <BrowserRouter>
    <div className='title'>
     <Header />
    
     <Sidebar />
     <div className='link'>
     
     <Routes>
     <Route path='/Josefina' element={<Josefina />} />
     <Route path='/Alica' element={<Alica />} /> 
     <Route path='/Velazquez' element={<Velazquez />} />
     </Routes>

     </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
