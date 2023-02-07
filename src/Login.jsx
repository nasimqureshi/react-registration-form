
import React, { useState } from "react"

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
   
    const handleSubmit = () => {

    }
   
    return (
        <from onSubmit={handleSubmit}>
            <label for="email">email</label>
            <input value={email} type="email" placeholder="nasim.qureshi@gmail.com" id="email" name="email" />
            <label for="password">Password</label>
            <input value={pass} type="password" placeholder="your password" id="password" name="password" />
            <button>Log In</button>
        </from>
    )
}