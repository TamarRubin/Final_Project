import React from 'react';
import { setState} from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Filters from './Filters';
import Books from './Books';
import SignUp from './sighnUp/signUp.component';
import SignIn from './signIn/SignIn';


import {Button} from 'react-bootstrap'
function FirstPage() {
  const greeting = 'Hello Function Component!';
 const signInLink = SignIn;
  return<div>

      {/* 
      <SignIn/>
      < SignUp/>
  <Header/>
  <Filters/>
  <Books/> */}
  </div>;
}
 
export default FirstPage;