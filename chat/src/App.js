import React from 'react';
import './App.css';
import Header from './Componentss/Header/Header';
import Josefina from './Componentss/Content/Josefina';
import Sidebar from './Componentss/Sidebar/Sidebar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Messages from './Componentss/Sidebar/Messages/Messages';
import Alica from './Componentss/Content/Alica';
import Velazquez from './Componentss/Content/Velazquez';

const App =(props) =>{
  return (
    <BrowserRouter>
    <div className='title'>
     <Header />
    
     <Sidebar />
     
     
     <Routes>
     <Route path='/Josefina' element={<Josefina messagesData2={props.state.messagesData2}/>} />
     <Route path='/Alica' element={<Alica messagesData={props.state.messagesData} />} /> 
     <Route path='/Velazquez' element={<Velazquez messagesData3={props.state.messagesData3}/>} />
     </Routes>

     
    </div>
    </BrowserRouter>
  );
}

export default App;
