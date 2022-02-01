import React from 'react';
import './App.css';
import Header from './Componentss/Header/Header';
import Main from './Componentss/Main/Main';
import Sidebar from './Componentss/Sidebar/Sidebar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Messages from './Componentss/Sidebar/Messages/Messages';

const App =() =>{
  return (
    <BrowserRouter>
    <div className='title'>
     <Header />
    
     <Sidebar />
     <div className='link'>
      <Routes>
<Route path='/message1' element={ <Messages />} />
<Route path='/message2' element={ <Messages />} />
<Route path='/message3' element={ <Messages />} />

     </Routes>
      
     </div>
  
  <Main/>
    </div>
    </BrowserRouter>
  );
}

export default App;
