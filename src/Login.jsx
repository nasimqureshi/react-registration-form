
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
        <>
        <from onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input value={name} name="name" id="name" placeholder="full name" />
            <label htmlFor="email">email</label>
            <input value={email} type="email" placeholder="nasim.qureshi@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} type="password" placeholder="your password" id="password" name="password" />
            <button type="submit">Log In</button>
        </from>
        <button onClick={() => props.onFormSwitch('register')}>Already have an account? Login here</button>
        
        
        </>
    )
}