import React from 'react'
import "./main_style.css";

export default function Login() {
    return (
        <div className="login-box">
            <br></br>
            <br></br>
            <h1>LOGIN</h1>
            <form action="" method="POST" className="login-form">
                <ul className="form-list">
                    <li>
                        <div className="label-block"> <label for="login:username">Username</label> </div>
                        <div className="input-box"> <input type="text" id="login:username" name="txtUsername" placeholder="Username" /> </div>
                    </li>
                    <li>
                        <div className="label-block"> <label for="login:password">Password</label> </div>
                        <div className="input-box"> <input type="password" id="login:password" name="txtPassword" placeholder="Password" /> </div>
                    </li>
                    <li>
                        <div className="label-block"> <label for="login:type">Login Type</label> </div>
                        <div className="input-box">
                            <select name="login_type" id="login:type">
                                <option value="" disabled selected>-- Select Type --</option>
                                <option value="retailer">Teacher</option>
                                <option value="manufacturer">Student</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <input type="submit" value="Login" class="submit_button" />
                    </li>
                </ul>
            </form>

        </div>
    )
}
