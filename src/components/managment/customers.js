import React, { useState, useEffect } from 'react';
import '../../styles/managment.css'
import { useHistory } from 'react-router-dom'
import NavTabs from '../tab';

const Customers = () => {
    const history = useHistory();
    const customers = () => {
        history.push("/Customers")
    }
    const [name, setName] = useState();
    const [category, setCategory] = useState();
    const [stage, setStage] = useState();
    return (
        <body>
            <NavTabs></NavTabs>
            <h1>customers</h1>
            <div className="login-wrap">

                <div className="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" /><label htmlFor="tab-1" className="tab">Sign In</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
                    <div className="login-form">

                        <div className="sign-up-htm">

                        
                            <div className="group">
                                <label htmlFor="user" className="label">corse name</label>
                                <input id="user" className="input" type={"text"} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="group">
                                <label htmlFor="user" className="label">Last name</label>
                                <input id="user" className="input" type={"text"} onChange={e => setCategory(e.target.value)} />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">User name</label>
                                <input id="pass" className="input" type={"text"} onChange={e => setStage(e.target.value)} />
                            </div>
                            <div className="group">
                                <input type="submit" className="button" value="Sign Up" />
                            </div>
                            <div className="hr"></div>

                            <div className="foot-lnk">
                                <label htmlFor="tab-1">  Member?</label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            )
        </body>

    )
}
export default Customers;
