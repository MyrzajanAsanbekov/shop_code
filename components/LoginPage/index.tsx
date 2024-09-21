import React from 'react';
import signup from "../../public/assets/signup.png"
import Image from 'next/image';
import "../LoginPage/LoginPage.css"
import { GrFormPreviousLink } from "react-icons/gr";
import Link from 'next/link';


const LoginPage: React.FC = () => {
    return (
        <div id='login'>
            <div className="container">
                <div className="login">
                    <div className="login-img">
                        <Image src={signup} alt="img"/>
                        <div className="login-account">
                            <h1>Log in to Exclusive</h1>
                            <p>Enter your details below</p>
                            <div className="login-inputs">
                                <input type="email" placeholder='Email or Phone Number'/>
                                <input type="password" placeholder='Password'/>
                                <div className="login-btn">
                                <button>Log In</button>
                                <a>Forget Password?</a>
                                </div>
                            </div>
                                <div className="prevsingup">
                                <span><GrFormPreviousLink /></span>
                                <Link href='/singup'> Sing Up</Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default LoginPage;