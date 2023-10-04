import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let PostData = [
    {id: 1, header: 'First post', text: 'Nullam euismod,1 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 3, date: '09 September 2023'},
    {id: 1, header: 'Second post', text: 'Nullam euismod,2 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 5, date: '02 September 2023'},
    {id: 1, header: 'Next post', text: 'Nullam euismod,3 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 12, date: '28 August 2023'},
    {id: 1, header: 'New post', text: 'Nullam euismod,4 diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.', countLikes: 2, date: '21 August 2023'},
]

let DialogData = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Nast'},
    {id: 3, name: 'Dmitry'},
    {id: 4, name: 'Evgeny'},
    {id: 5, name: 'Yan'},
    {id: 6, name: 'Alber'},
    {id: 7, name: 'Poul'}
]

let MessageData = [
    {id: 1, text: 'Hi Alex', date: '08 September 2023'},
    {id: 2, text: 'Hey Nasty, how are you?', date: '10 September 2023'},
    {id: 3, text: 'Im okay, but so busy, what about you?', date: '10 September 2023'},
    {id: 4, text: 'Im so good, im now in usa', date: '11 September 2023'},
    {id: 5, text: 'Wow, its so cool, what are you do?', date: '13 September 2023'}
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App PostData={PostData} DialogData={DialogData} MessageData={MessageData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
