import React from 'react';
import "../HomePage7/HomePage7.css"
import ps from "../../public/assets/ps.png"
import Image from 'next/image';
import women from "../../public/assets/womenimg.png"
import amazon from "../../public/assets/amazonb.png"
import gucci from "../../public/assets/gucci.png"
import delivery from "../../public/assets/delivery.png"
import services from "../../public/assets/services.png"
import money from "../../public/assets/money.png"

const Homepage7 = () => {
    return (
        <div id='arrival'>
            <div className="container">
                <div className="arrival">
                    <div className="arrival-bg">
                    <div className="arr-bg"></div>
                    <div className="arrival-h5">
                        <h5>Featured</h5>
                    </div>
                    </div>
                    <div className="arrival-text">
                        <h1>New Arrival</h1>
                    </div>
                    <div className="playstation-blocks">
                        <div className="playstation-bg">
                        <div className="playstation">
                            <Image src={ps} alt="img"/>
                            <h1>PlayStation 5</h1>
                            <p>Black and White version of the PS5 <br /> coming out on sale.</p>
                            <a>Shop Now <hr /></a>
                        </div>
                        </div>
                        <div className="women-products">
                            <div className="women-bg">
                                <div className="women-product">
                                    <Image src={women} alt='img'/>
                                    <div className="women-text">
                                    <h1>Women’s Collections</h1>
                                    <p>Featured woman collections that <br /> give you another vibe.</p>
                                    <a>Shop Now 
                                    <hr noshade size="2" width="31%"></hr>
                                         </a>
                                    </div>
                                </div>
                            </div>
                                <div className="women-perfum-block">
                                    <div className="speakers-bg">
                                        <div className="product-speakers">
                                            <Image src={amazon} alt='img'/>
                                        </div>
                                            <div className="speakers-text">
                                            <h1>Speakers</h1>
                                            <p>Amazon wireless speakers</p>
                                            <a>Shop Now</a>
                                            <hr noshade size="2" width="31%"></hr>
                                            </div>
                                    </div>
                                    <div className="gucci-bg">
                                        <div className="gucci-product">
                                            <Image src={gucci} alt='img'/>
                                        </div>
                                        <div className="gucci-text">
                                            <h1>Perfume</h1>
                                            <p>GUCCI INTENSE OUD EDP</p>
                                            <a>Shop Now</a>
                                            <hr noshade size="2" width="31%"></hr>

                                        </div>
                                    </div>
                                </div>
                        </div>

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

export default Homepage7;