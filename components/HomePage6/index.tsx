import React from 'react';
import "../HomePage6/HomePage6.css"
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import dog from "../../public/assets/dog.png"
import addcamera from "../../public/assets/addcamera.png"
import pk from "../../public/assets/pk.png"
import rumka from "../../public/assets/Frame.png"
import car from "../../public/assets/car.png"
import zoombts from "../../public/assets/zoombts.png"
import usbsony from "../../public/assets/usbsony.png"
import jacket from "../../public/assets/jacket.png"
import Image from 'next/image';
import { IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import star from "../../public/assets/star.png"


const HomePage6 = () => {
    return (
        <div id='explore'>
            <div className="container">
                <div className="explore">
                    <div className="expolre-bg">
                        <div className="exp-bg"></div>
                    <div className="explore-h5">
                        <h5>Our Products</h5>
                    </div>
                    </div>
                   <div className="explore-text">
                    <h1>Explore Our Products</h1>
                    <div className="buttons">
                        <button className="prev"><GrLinkPrevious /></button>
                        <button className="next"><GrLinkNext /></button>
                        </div>
                   </div>
                   <div className="explore-blocks">
                    <div className="addtoblocks">
                        <div className="addtoblock">
                            <Image src={dog} alt="img"/>
                            <a className="eyes"><IoEyeOutline /></a>
                            <a className="heart"><FaRegHeart /></a>
                        </div>
                        <div className="img-text">
                            <h1>Breed Dry Dog Food</h1>
                            <div className="price">
                                <h5>$100</h5>
                                <Image src={star} alt='img'/>
                                <h3>(35)</h3>
                            </div>
                        </div>
                    </div>
                    <div className="addtoblocks">
                        <div className="addtoblock">
                            <Image src={addcamera} alt="img"/>
                            <a className="eyes"><IoEyeOutline /></a>
                            <a className="heart"><FaRegHeart /></a>
                        </div>
                        <div className="img-text">
                            <h1>Breed Dry Dog Food</h1>
                            <div className="price">
                                <h5>$100</h5>
                                <Image src={star} alt='img'/>
                                <h3>(35)</h3>
                            </div>
                        </div>
                    </div>
                    <div className="addtoblocks">
                        <div className="addtoblock">
                            <Image src={pk} alt="img"/>
                            <a className="eyes"><IoEyeOutline /></a>
                            <a className="heart"><FaRegHeart /></a>
                        </div>
                        <div className="img-text">
                            <h1>Breed Dry Dog Food</h1>
                            <div className="price">
                                <h5>$100</h5>
                                <Image src={star} alt='img'/>
                                <h3>(35)</h3>
                            </div>
                        </div>
                    </div>
                    <div className="addtoblocks">
                        <div className="addtoblock">
                            <Image src={rumka} alt="img"/>
                            <a className="eyes"><IoEyeOutline /></a>
                            <a className="heart"><FaRegHeart /></a>
                        </div>
                        <div className="img-text">
                            <h1>Breed Dry Dog Food</h1>
                            <div className="price">
                                <h5>$100</h5>
                                <Image src={star} alt='img'/>
                                <h3>(35)</h3>
                            </div>
                        </div>
                    </div>
                   </div>
                   <div className="explore-blocks2">
                   <div className="addtoblocks">
                        <div className="addtoblock">
                            <Image src={car} alt="img"/>
                            <a className="eyes"><IoEyeOutline /></a>
                            <a className="heart"><FaRegHeart /></a>
                        </div>
                        <div className="img-text">
                            <h1>Breed Dry Dog Food</h1>
                            <div className="price">
                                <h5>$100</h5>
                                <Image src={star} alt='img'/>
                                <h3>(35)</h3>
                            </div>
                        </div>
                    </div>
                    <div className="addtoblocks">
                        <div className="addtoblock">
                            <Image src={zoombts} alt="img"/>
                            <a className="eyes"><IoEyeOutline /></a>
                            <a className="heart"><FaRegHeart /></a>
                        </div>
                        <div className="img-text">
                            <h1>Breed Dry Dog Food</h1>
                            <div className="price">
                                <h5>$100</h5>
                                <Image src={star} alt='img'/>
                                <h3>(35)</h3>
                            </div>
                        </div>
                    </div>
                    <div className="addtoblocks">
                        <div className="addtoblock">
                            <Image src={usbsony} alt="img"/>
                            <a className="eyes"><IoEyeOutline /></a>
                            <a className="heart"><FaRegHeart /></a>
                        </div>
                        <div className="img-text">
                            <h1>Breed Dry Dog Food</h1>
                            <div className="price">
                                <h5>$100</h5>
                                <Image src={star} alt='img'/>
                                <h3>(35)</h3>
                            </div>
                        </div>
                    </div>
                    <div className="addtoblocks">
                        <div className="addtoblock">
                            <Image src={jacket} alt="img"/>
                            <a className="eyes"><IoEyeOutline /></a>
                            <a className="heart"><FaRegHeart /></a>
                        </div>
                        <div className="img-text">
                            <h1>Breed Dry Dog Food</h1>
                            <div className="price">
                                <h5>$100</h5>
                                <Image src={star} alt='img'/>
                                <h3>(35)</h3>
                            </div>
                        </div>
                    </div>
                   </div>
                   <button className='click-btn'>View All Products</button>
                </div>
            </div>
            
        </div>
    );
};

export default HomePage6;