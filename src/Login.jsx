
import React, { useState } from "react"

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
   
    return (
        <>
        <from onSubmit={handleSubmit}>
            <label for="email">email</label>
            <input value={email} type="email" placeholder="nasim.qureshi@gmail.com" id="email" name="email" />
            <label for="password">Password</label>
            <input value={pass} type="password" placeholder="your password" id="password" name="password" />
            <button type="submit">Log In</button>
        </from>
        <button>Don't have an accout? Register here</button>
        </>
    )
}