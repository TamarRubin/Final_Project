import React from 'react';
import Header from './Header';
import Filters from './Filters';
import Books from './Books'
function Layout() {
  const greeting = 'Hello Function Component!';
 
  return<div>
       <h1>{greeting}</h1>
  <Header/>
  <Filters/>
  <Books/>
  </div>;
}
 
export default Layout;
