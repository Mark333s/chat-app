
let rerenderEntiredTree=()=>{
  
}

let state = {
          Alica:  [ {
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
              ], 

             Josefina: [ {
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
              
                
                  ],

                  Velazquez:  [{
                    id: 1,
                    text: "What's up?",
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLjRDrylE_ZBdMzZ_cO8nO8sYFXFFYjOPlQ&usqp=CAU',
                    data: '01/13/2022 , 9:30'
                },
            
                {
                    id: 2,
                    text: 'Would you like go to play football today?',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLjRDrylE_ZBdMzZ_cO8nO8sYFXFFYjOPlQ&usqp=CAU',
                    data: '01/13/2022 , 9:32'
                },
            
            
                ],

                messagesData4: [{
                  id: 7,
                  text: 'dsdsfs',
                  data: '13/11/2021 , 11:35'
                }],

                chatName: [{
                  
                }]
                
        }
        export let sendMessage=(Message)=>{
          
          let newMessage={
            id:5,
            text: Message,
            data: '01/13/2022, 10:32'
          };
          state.Alica.push(newMessage);
          rerenderEntiredTree(state);
        };

        export let sendMessage2=(Message)=>{
          
          let newMessage={
            id:5,
            text: Message,
            data: '01/13/2022, 10:32'
          };
          state.Josefina.push(newMessage);
          rerenderEntiredTree(state);
        };
        export let sendMessage3=(Message)=>{
          
          let newMessage={
            id:5,
            text: Message,
            data: '01/13/2022, 10:32'
          };
          state.Velazquez.push(newMessage);
          rerenderEntiredTree(state);
        };

        export const subscribe =(observer) =>{
          rerenderEntiredTree = observer;
        }

        export default state;