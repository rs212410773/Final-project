import '../styles/login.css'
import React, { useState, useEffect } from 'react'

import {loginUser} from '../api/userApi'

export function Login(props) {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    

    const handleSubmit =async () => {
        const user = await loginUser(userName, password);
    }
    return (
        <div>
            <form className="login" onSubmit={handleSubmit}>
                <br />
                <h3>login</h3>
                <br />
                <input type={"text"} placeholder="user name" onChange={e => setUserName(e.target.value)}></input>
                <br /><br />
                <input type={"password"} placeholder="password" onChange={e => setPassword(e.target.value)}></input>
                <br /><br />
                <input type="submit"></input>

            </form>
            <form className="login">
                <br />
                <h3>new user</h3>
                <br />
                <input type={"text"} placeholder="first name"></input>
                <br /><br />
                <input type={"text"} placeholder="last name"></input>
                <br /><br />
                <input type={"email"} placeholder="email"></input>
                <br /><br />
                <input type={"date"} placeholder="birth date"></input>
                <br /><br />
                <input type={"text"} placeholder="user name"></input>
                <br /><br />
                <input type={"password"} placeholder="password"></input>
                <br /><br />
                <input type="submit"></input>

            </form>
        </div>
    )
}