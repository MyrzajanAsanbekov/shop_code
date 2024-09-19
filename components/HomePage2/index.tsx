import React from 'react';
import "../HomePage2/HomePage2.css"
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import sony from "../../public/assets/sony.png"
import Image from 'next/image';
import star from "../../public/assets/star.png"
import { IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";



const HomePage2 = () => {
    return (
        <div id='flash'>
            <div className="conatainer">
                <div className="flash">
                   <div className="home-next">
                    <div className="text-bg">
                        <div className="bg"></div>
                        <div className="text-h5">
                          <h5>Today’s</h5>
                        </div>
                    </div>
                    <div className="flash-time">
                        <h1>Flash Sales</h1>
                    
                    <div className="time">
                        <div className="days">
                            <a>Days</a>
                            <h1>03 <span>:</span></h1>
                        </div>
                        <div className="hours">
                            <a>Hours</a>
                            <h2>23 <span>:</span></h2>
                        </div>
                        <div className="minutes">
                            <a>Minutes</a>
                            <h3>19 <span>:</span></h3>
                        </div>
                        <div className="seconds">
                            <a>Seconds</a>
                            <h4>56</h4>
                        </div>
                    </div>
                    <div className="button">
                        <button className="prev"><GrLinkPrevious /></button>
                        <button className="next"><GrLinkNext /></button>
                    </div>
                    </div>
                   </div>
                   <div className="blocks">
                    <div className="block-images">
                   <div className="images-block">
                    <Image src={sony} alt="img"/>
                    <div className="percent">-40%</div>
                    <a className="eyes"><IoEyeOutline /></a>
                    <a className="heart"><FaRegHeart /></a>
                   </div>
                   <div className="img-text">
                   <h1>HAVIT HV-G92 Gamepad</h1>
                   <div className="price">
                   <h5>$120</h5>
                   <h6>$160</h6>
                   </div>
                   <div className="star">
                    <Image src={star} alt="img"/>
                    <h3>(88)</h3>
                   </div>
                   </div>
                   </div>

{/*  */}
                   <div className="block-images">
                   <div className="images-block">
                    <Image src={sony} alt="img"/>
                    <div className="percent">-30%</div>
                    <a className="eyes"><IoEyeOutline /></a>
                    <a className="heart"><FaRegHeart /></a>
                   </div>
                   <div className="img-text">
                   <h1>HAVIT HV-G92 Gamepad</h1>
                   <div className="price">
                   <h5>$120</h5>
                   <h6>$160</h6>
                   </div>
                   <div className="star">
                    <Image src={star} alt="img"/>
                    <h3>(88)</h3>
                   </div>
                   </div>
                   </div>       
{/*  */}
                   <div className="block-images">
                   <div className="images-block">
                    <Image src={sony} alt="img"/>
                    <div className="percent">-35%</div>
                    <a className="eyes"><IoEyeOutline /></a>
                    <a className="heart"><FaRegHeart /></a>
                   </div>
                   <div className="img-text">
                   <h1>HAVIT HV-G92 Gamepad</h1>
                   <div className="price">
                   <h5>$120</h5>
                   <h6>$160</h6>
                   </div>
                   <div className="star">
                    <Image src={star} alt="img"/>
                    <h3>(88)</h3>
                   </div>
                   </div>
                   </div>

{/*  */}
                   <div className="block-images">
                   <div className="images-block">
                    <Image src={sony} alt="img"/>
                    <div className="percent">-25%</div>
                    <a className="eyes"><IoEyeOutline /></a>
                    <a className="heart"><FaRegHeart /></a>
                   </div>
                   <div className="img-text">
                   <h1>HAVIT HV-G92 Gamepad</h1>
                   <div className="price">
                   <h5>$120</h5>
                   <h6>$160</h6>
                   </div>
                   <div className="star">
                    <Image src={star} alt="img"/>
                    <h3>(88)</h3>
                   </div>
                   </div>
                   </div>
                </div>
                <div className="addTo">
                 <button>View All Products</button>

                </div>
                </div>
            </div>
            
        </div>
    );
};

export default HomePage2;