import React, { useState } from "react"
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

     const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
            <from className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input value={email} type="email" placeholder="nasim.qureshi@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} type="password" placeholder="your password" id="password" name="password" />
            <button type="submit">Log In</button>
        </from>
        <br />
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Already have an account? Login here</button>
        <button>Don't have an accout? Register here</button>
        
        </div>
    )
}