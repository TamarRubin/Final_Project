import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from './Components/Layout';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstPage from './Components/FirstPage';
import SignIn from './Components/signIn/SignIn';
//import FormPage from './Components/signIn/signIn,componnents'
ReactDOM.render(
  <React.StrictMode>
{/*  
    <App/> */}
    <FirstPage/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
