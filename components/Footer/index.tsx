import React from 'react';
import { RxPaperPlane } from "react-icons/rx";
import qrcode from "../../public/assets/Qrcode.png"
import Image from 'next/image';
import playmarket from "../../public/assets/playmarket.png"
import appstore from "../../public/assets/appstore.png"
import { TbBrandFacebook } from "react-icons/tb";
import { TbBrandTwitter } from "react-icons/tb";
import { SiInstagram } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdCopyright } from "react-icons/md";
import "../Footer/Footer.css"



const Footer = () => {
    return (
        <div id='footer' >
            <div className="container">
              <div className="footer">
                <div className="footers">
                    <div className="footer-exl">
                    <h2>Exclusive</h2>
                    <h3>Subscribe</h3>
                    <p>Get 10% off your first order</p>
                   <div className="input">
                   <input type="text" placeholder='Enter your email'/>
                   <a><RxPaperPlane /></a>
                   </div>
                    </div>
                    <div className="footer-support">
                        <h1>Support</h1>
                        <h2>111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</h2>
                        <h3>exclusive@gmail.com</h3>
                        <h4>+88015-88888-9999</h4>
                    </div>
                    <div className="footer-acc">
                        <h1>Account</h1>
                        <h3>My Account</h3>
                        <h3>Login / Register</h3>
                        <h3>Cart</h3>
                        <h3>Wishlist</h3>
                        <h3>Shop</h3>
                    </div>
                    <div className="footer-links">
                        <h1>Quick Link</h1>
                        <h2>Privacy Policy</h2>
                        <h2>Terms Of Use</h2>
                        <h2>FAQ</h2>
                        <h2>Contact</h2>
                    </div>
                    <div className="footer-app">
                        <h1>Download App</h1>
                        <span>Save $3 with App New User Only</span>
                        <div className="qrcode">
                            <Image src={qrcode} alt="img"/>
                            <div className="app-store">
                                <Image src={playmarket} alt="img"/>
                                <Image src={appstore} alt="img"/>
                            </div>
                        </div>
                        <div className="icons">
                            <a><TbBrandFacebook /></a>
                            <a><TbBrandTwitter /></a>
                            <a><SiInstagram /></a>
                            <a><SlSocialLinkedin /></a>
                        </div>
                    </div>
                   
                </div>
                <hr/>
                <div className="rimel">
                        <a><MdCopyright /></a>
                        <span>Copyright Rimel 2022. All right reserved</span>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;