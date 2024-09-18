import React from 'react';
import "../HomePage4/HomePage4.css"
import womencloth from "../../public/assets/womencloth.png"
import sumka from "../../public/assets/sumka.png"
import cooler from "../../public/assets/cooler.png"
import frame from "../../public/assets/Frame.png"
import Image from 'next/image';
import star from "../../public/assets/star.png"
import { IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const HomePage4 = () => {
    return (
        <div id='Product'>
            <div className="container">
                <div className="product">
                    <div className="product-bg">
                        <div className="pro-bg"></div>
                        <div className="product-h5">
                            <h5>This Month</h5>
                        </div>
                    </div>
                    <div className="product-text">
                        <h1>Best Selling Products</h1>
                        <button>View All</button>
                    </div>
                    <div className="product-blocks">
                        <div className="cloth-blokcs">
                        <div className="cloth-block">
                            <Image src={womencloth} alt="img"/>
                            <a className="eyes"><IoEyeOutline /></a>
                            <a className="heart"><FaRegHeart /></a>
                        </div>
                        <div className="img-text">
                            <h1>The north coat</h1>
                        <div className="price">
                                <h5>$260</h5>
                                <h6>$360</h6>
                            </div>
                         <div className="star">
                                    <Image src={star} alt="img"/>
                                    <h3>(65)</h3>
                                </div>
                        </div>
                        </div>
                        
                        {/*  */}


                        <div className="cloth-blokcs">
                        <div className="cloth-block">
                            <Image src={womencloth} alt="img"/>
                            <a className="eyes"><IoEyeOutline /></a>
                            <a className="heart"><FaRegHeart /></a>
                        </div>
                        <div className="img-text">
                            <h1>The north coat</h1>
                        <div className="price">
                                <h5>$260</h5>
                                <h6>$360</h6>
                            </div>
                         <div className="star">
                                    <Image src={star} alt="img"/>
                                    <h3>(65)</h3>
                                </div>
                        </div>
                        </div>


                        {/*  */}

                        <div className="cloth-blokcs">
                        <div className="cloth-block">
                            <Image src={womencloth} alt="img"/>
                            <a className="eyes"><IoEyeOutline /></a>
                            <a className="heart"><FaRegHeart /></a>
                        </div>
                        <div className="img-text">
                            <h1>The north coat</h1>
                        <div className="price">
                                <h5>$260</h5>
                                <h6>$360</h6>
                            </div>
                         <div className="star">
                                    <Image src={star} alt="img"/>
                                    <h3>(65)</h3>
                                </div>
                        </div>
                        </div>


                        {/*  */}

                        <div className="cloth-blokcs">
                        <div className="cloth-block">
                            <Image src={womencloth} alt="img"/>
                            <a className="eyes"><IoEyeOutline /></a>
                            <a className="heart"><FaRegHeart /></a>
                        </div>
                        <div className="img-text">
                            <h1>The north coat</h1>
                        <div className="price">
                                <h5>$260</h5>
                                <h6>$360</h6>
                            </div>
                         <div className="star">
                                    <Image src={star} alt="img"/>
                                    <h3>(65)</h3>
                                </div>
                        </div>
                        </div>
                
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default HomePage4;