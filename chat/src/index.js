import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {sendMessage} from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import { sendMessage2 } from './redux/state';
import { sendMessage3 } from './redux/state';





 let rerenderEntiredTree =(state)=>{
ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App state={state} sendMessage={sendMessage} sendMessage2={sendMessage2} sendMessage3={sendMessage3}/>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
}



rerenderEntiredTree(state);


subscribe(rerenderEntiredTree);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
