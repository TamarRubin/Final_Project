import React from 'react';
import SignIn from './signIn/SignIn';
 import SignUp from './sighnUp/signUp.component';
function Header() {
 
  return <div>
<SignIn/>
<SignUp/>
{/* <Button onClick={() => setState({view: 1})}>התחברות</Button>{' '}
{this.state.view === 1 ? <SignIn/> : ''}  */}


  </div>
}
export default Header;
