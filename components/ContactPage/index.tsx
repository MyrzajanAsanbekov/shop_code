import React from 'react';
import "../ContactPage/ContactPage.css"
import callto from "../../public/assets/callto.png"
import sms from "../../public/assets/sms.png"
import Image from 'next/image';

const ContactPage = () => {
    return (
        <div id='contact'>
            <div className="container">
                <div className="contact">
                  <div className="contact-nav">
                  <a>Home</a>
                  <span>/</span>
                  <a>Cantact</a>
                    </div>     
                    <div className="contact-df">
                    <div className="contact-adress">
                    <div className="contact-call">
                       <div className="call">
                       <Image src={callto} alt="img"/>
                       <h3>Call To Us</h3>
                       </div>
                       <div className="call-text">
                       <p>We are available 24/7, 7 days a week.</p>
                           <span>Phone: +8801611112222</span>
                           <hr className='contact-hr'/>
                       </div>
                        </div>
                        <div className="contact-email">
                           <div className="sms">
                           <Image src={sms} alt='img'/>
                           <h3>Write To US</h3>
                           </div>
                           <div className="email-text">
                           <p>Fill out our form and we will contact <br /> you within 24 hours.</p>
                           <span>Emails: customer@exclusive.com</span>
                           <p>Emails: support@exclusive.com</p>
                           </div>
                        </div>  
                    </div>
                        <div className="contact-inputs">
                            <input type="text" placeholder='Your Name *'/>
                            <input type="email" placeholder='Your Email *'/>
                            <input type="number" placeholder='Your Phone *'/>
                            
                            </div>  
                                  <div className="input-paragraf">
                                  <input type="text" placeholder='Your Massage'/>
                                    </div>   
                                  <button className='contact-button'>Send Massage</button>
                                      </div>  
                </div>
            </div>
        </div>
    );
};

export default ContactPage;