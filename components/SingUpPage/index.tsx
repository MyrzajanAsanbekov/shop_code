import React from 'react';
import "./SingUpPage.css"
import signup from "../../public/assets/signup.png"
import Image from 'next/image';
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import { GrFormNextLink } from "react-icons/gr";


const SignUpPage: React.FC = () => {
    return (
        <div id='signup'>
            <div className="container">
                <div className="signup">
                    <div className="signup-img">
                        <Image src={signup} alt='img'/>
                        <div className="account">
                            <h1>Create an account</h1>
                            <p>Enter your details below</p>
                           <div className="account-inputs">
                           <input type="text" placeholder='Name'/>
                            <input type="email" placeholder='Email or Phone Number'/>
                            <input type="password" placeholder='Password'/>
                            <div className="icon-button">
                            <button >Create Account</button>
                            </div>
                                <button className='google-button'> <a><FcGoogle /></a>Sign up with Google</button>
                            <div className="create-login">
                                <p>Already have account?</p>
                                <Link href="/login">Log in</Link>
                                <span><GrFormNextLink /></span>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SignUpPage;