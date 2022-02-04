import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state'


let messagesData =[ {
    id: 1,
    text: 'How are you?',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ups0cNsdCkLhITh9cR-zXWRlEZIxNF-W3g&usqp=CAU',
    data: '03/02/2022 , 14:10' 
      }, 
      
     {
          id: 2,
      text: 'Tell me something new.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ups0cNsdCkLhITh9cR-zXWRlEZIxNF-W3g&usqp=CAU',
      data: '03/02/2022 , 14:25' 
        },
  
       { id: 3,
        text: 'eyy',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ups0cNsdCkLhITh9cR-zXWRlEZIxNF-W3g&usqp=CAU',
        data: '03/02/2022 , 14:30' 
          }
      ]

      let messagesData2 =[ {
        id: 1,
        text: 'Hello!.',
        img: 'https://www.fotoprizer.ru/img/061017-064505-ft.jpg',
        data: '07/13/2021 , 14:01' 
          }, 
          
         {
              id: 2,
          text: 'What are you doing now?',
          img: 'https://www.fotoprizer.ru/img/061017-064505-ft.jpg',
          data: '03/02/2022 , 14:25' 
            },
      
        
          ]



ReactDOM.render(
  <React.StrictMode>
    <App messagesData={messagesData} messagesData2={messagesData2}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
