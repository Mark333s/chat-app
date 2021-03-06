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
   
    <div className='title'>
     <Header />
    
     <Sidebar />
     
     
     <Routes>
     <Route path='/Josefina' element={<Josefina Josefina={props.state.Josefina}  sendMessage2={props.sendMessage2} />} />
     <Route path='/Alica' element={<Alica Alica={props.state.Alica}  sendMessage={props.sendMessage} />} /> 
     <Route path='/Velazquez' element={<Velazquez Velazquez={props.state.Velazquez} sendMessage3={props.sendMessage3}/>} />
     </Routes>

     
    </div>
    
  );
}

export default App;
