import '../../styles/log.css'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { loginUser, createUser } from '../../api/user/userApi'
import NavTabs from './tabUser';


export default function Login(props) {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [birthDate, setBirthDate] = useState();

    const history = useHistory();
    const login = () => {
        history.push("/login")
    }

    const handleSubmit = async () => {
        const user = await loginUser(userName, password);
        if (user.isManage)
            alert(`hellow manager`);
        if (user)
            history.push("/Courses")


    }

    const handleSubmitCreate = async () => {
        const user = {
            userName: userName,
            password: password,
            firstName: firstName,
            lastName: lastName,
            email: email,
            birthDate: birthDate,
        }
        const createdUser = await createUser(user).then(data => {
            console.log(data, "data");
        });
        if (createdUser)
            alert(createdUser)
    }

    return (
        <div className="login-wrap">
            <NavTabs></NavTabs>
            <div className="login-html">
                <input id="tab-1" type="radio" name="tab" className="sign-in" /><label htmlFor="tab-1" className="tab">Sign In</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
                <div className="login-form">
                    {/* <form className="sign-in-htm" onSubmit={handleSubmit}> */}
                    <div className="sign-in-htm">
                        <div className="group">
                            <label htmlFor="user" className="label">Username</label>
                            <input id="user" className={"input"} type={"text"} onChange={e => setUserName(e.target.value)} />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Password</label>
                            <input id="pass" className="input" data-type="password" type={"password"} onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="group">
                            <input id="check" type="checkbox" className="check"
                            //  checked
                            />
                            <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
                        </div>
                        <div className="group">
                            <input type="button" onClick={handleSubmit} className="button" value="Sign In" />
                        </div>
                        <div className="hr"></div>
                        <div className="foot-lnk">
                            <a href="#forgot">Forgot Password?</a>
                        </div>
                        {/* </form> */}
                    </div>
                    {/* <form className="sign-up-htm" onSubmit={() => handleSubmitCreate()}> */}
                    <div className="sign-up-htm" >
                        <div className="group">
                            <label htmlFor="user" className="label">First name</label>
                            <input id="user" className="input" type={"text"} onChange={e => setFirstName(e.target.value)} />
                        </div>
                        <div className="group">
                            <label htmlFor="user" className="label">Last name</label>
                            <input id="user" className="input" type={"text"} onChange={e => setLastName(e.target.value)} />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">User name</label>
                            <input id="pass" className="input" type={"text"} onChange={e => setUserName(e.target.value)} />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Password</label>
                            <input id="pass" className="input" data-type="password" type={"password"} onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Email Address</label>
                            <input id="pass" className="input" type={"email"} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Birth date</label>
                            <input id="pass" className="input" type={"date"} onChange={e => setBirthDate(e.target.value)} />
                        </div>

                        <div className="group">
                            <input type="button" onClick={handleSubmitCreate} className="button" value="Sign Up" />
                        </div>
                        <div className="hr"></div>

                        <div className="foot-lnk">
                            <label htmlFor="tab-1">  Member?</label>
                        </div>
                        {/* </form> */}
                    </div>
                </div>

            </div>

        </div>

    )
}