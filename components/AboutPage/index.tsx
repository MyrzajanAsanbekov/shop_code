import React from 'react';
import "../AboutPage/AboutPage.css"
import story from "../../public/assets/story.png"
import Image from 'next/image';
import abouthome from"../../public/assets/abouthome.png"
import aboutusd from "../../public/assets/aboutusd.png"
import aboutsom from "../../public/assets/aboutsom.png"
import aboutmoney from "../../public/assets/aboutmoney.png"
import tom from "../../public/assets/tom.png"
import emma from "../../public/assets/emma.png"
import will from "../../public/assets/will.png"
import { LuTwitter } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io";
import { RiLinkedinLine } from "react-icons/ri";
import delivery from "../../public/assets/delivery.png"
import services from "../../public/assets/services.png"
import money from "../../public/assets/money.png"



const AboutPage = () => {
    return (
        <div id='about'>
            <div className="container">
                <div className="about">
                   <div className="about-nav">
                    <a>Home</a>
                    <span>/</span>
                    <a>About</a>
                   </div>
                   <div className="about-story">
                    <div className="about-text">
                    <h1>Our Story</h1>
                    <p>Launced in 2015, Exclusive is South Asia’s premier online shopping <br /> makterplace with an active presense in Bangladesh. Supported <br /> by wide range of tailored marketing, data and service solutions, <br /> Exclusive has 10,500 sallers and 300 brands and serves 3 <br /> millioons customers across the region. </p>
                    <p>Exclusive has more than 1 Million products to offer, growing at a <br /> very fast. Exclusive offers a diverse assotment in categories <br /> ranging  from consumer.</p>
                    </div>
                    <div className="about-img">
                        <Image src={story} alt="img"/>
                    </div>
                   </div>
                   <div className="about-block">
                    <div className="about-home">
                        <Image src={abouthome} alt='img'/>
                        <h2>10.5k </h2>
                        <p>Sallers active our site</p>
                    </div>
                    <div className="about-home-red">
                        <Image src={aboutusd} alt='img'/>
                        <h2>33k </h2>
                        <p>Mopnthly Produduct Sale</p>
                    </div>
                    <div className="about-home">
                        <Image src={aboutsom} alt='img'/>
                        <h2>45.5k </h2>
                        <p>Customer active in our site</p>
                    </div>
                    <div className="about-home">
                        <Image src={aboutmoney} alt='img'/>
                        <h2>25k </h2>
                        <p>Anual gross sale in our site</p>
                    </div>
                    
                   </div>
                   <div className="working-block">
                    <div className="chairman">
                        <Image src={tom} alt='img'/>
                        <h1>Tom Cruise</h1>
                        <p>Founder & Chairman</p>
                       <div className="about-icon">
                       <a><LuTwitter /></a>
                       <a><IoLogoInstagram /></a>
                       <a><RiLinkedinLine /></a>
                       </div>

                    </div>
                    <div className="managing">
                        <Image src={emma} alt='img'/>
                        <h2>Emma Watson</h2>
                        <p>Managing Director</p>
                        <div className="about-icon">
                       <a><LuTwitter /></a>
                       <a><IoLogoInstagram /></a>
                       <a><RiLinkedinLine /></a>
                       </div>
                    </div>
                    <div className="product-director">
                        <Image src={will} alt='img'/>
                        <h2>Will Smith</h2>
                        <p>Product Designer</p>
                        <div className="about-icon">
                       <a><LuTwitter /></a>
                       <a><IoLogoInstagram /></a>
                       <a><RiLinkedinLine /></a>
                       </div>
                    </div>
                   </div>
                    <div className="dot">
                        <div className="dot1"></div>
                        <div className="dot1"></div>
                        <div className="dot1"></div>
                        <div className="dot1"></div>
                        <div className="dot1"></div>
                    </div>
                    <div className="finish-block">
                                    <div className="delivery">
                                        <Image src={delivery} alt='img'/>
                                        <h2>FREE AND FAST DELIVERY</h2>
                                        <p>Free delivery for all orders over $140</p>
                                    </div>
                                    <div className="services">
                                        <Image src={services} alt='img'/>
                                        <h2>24/7 CUSTOMER SERVICE</h2>
                                        <p>Friendly 24/7 customer support</p>
                                    </div>
                                    <div className="guarantee">
                                        <Image src={money} alt='img'/>
                                        <h2>MONEY BACK GUARANTEE</h2>
                                        <p>We reurn money within 30 days</p>
                                    </div>
                                </div>
                </div>
            </div>
            
        </div>
    );
};

export default AboutPage;