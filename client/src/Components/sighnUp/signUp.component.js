import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './signUp.css'
function SignUp() {
    //   return (
    //         <div>
    //            <Form>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="Enter email" />
    //     <Form.Text className="text-muted">
    //       We'll never share your email with anyone else.
    //     </Form.Text>
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //     <Form.Check type="checkbox" label="Check me out" />
    //   </Form.Group>
    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form> 
    //         </div>
    //     )

    return (
        <form>
            <h3>שלום, נעים להכיר</h3>

            <div className="form-group">
                <label>שם פרטי</label>
                <input type="text" className="form-control" placeholder="שם פרטי" />
            </div>

            <div className="form-group">
                <label>שם משפחה</label>
                <input type="text" className="form-control" placeholder="שם משפחה" />
            </div>

            <div className="form-group">
                <label>טלפון</label>
                <input type="text" className="form-control" placeholder="טלפון" />
            </div>
            <div className="form-group">
                <label>טלפון נוסף</label>
                <input type="text" className="form-control" placeholder="טלפון" />
            </div>

            <div className="form-group">
                <label>אימייל</label>
                <input type="email" className="form-control" placeholder=" Email" />
            </div>

            <div className="form-group">
                <label>סיסמה</label>
                <input type="password" className="form-control" placeholder="סיסמה" />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">הרשמה</button>
            <p className="forgot-password text-right">
                כבר רשום? <a href="#">התחברות</a>
            </p>
        </form>
    );
}
export default SignUp;
