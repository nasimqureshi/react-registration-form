
import React, { useState } from "react"

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
   
    return (
        <div className="auth-form-container">
        <from className="login-form"  onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input value={name} name="name" id="name" placeholder="Eneter your full name" />
            <label htmlFor="email">Email</label>
            <input value={email} type="email" placeholder="Enter your email address" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} type="password" placeholder="Enter your password" id="password" name="password" />
            <button type="submit">Log In</button>
        </from>
        <br />
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
        
        
        </div>
    )
}