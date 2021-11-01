import React from 'react'
import { Form, Button } from 'react-bootstrap'
import '../sighnUp/signUp.css'

function SignIn(){
    return (
        <form>
    
            <h3>שלום, טוב לראותך</h3>
    
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="email" />
            </div>
    
            <div className="form-group">
                <label>סיסמה</label>
                <input type="password" className="form-control" placeholder="סיסמה" />
            </div>
    
            {/* <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div> */}
    
            <button type="submit" className="btn btn-dark btn-lg btn-block">התחברות</button>
            {/* <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p> */}
        </form>
    );



}
export default SignIn;