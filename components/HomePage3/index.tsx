import React from 'react';
import "../HomePage3/HomePage3.css"
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import iphone from "../../public/assets/iphone.png"
import Image from 'next/image';
import televizor from "../../public/assets/televizor.png"
import watch from "../../public/assets/watch.png"
import camera from "../../public/assets/camera.png"
import head from "../../public/assets/head.png"
import gaming from "../../public/assets/gamepad.png"

const HomePage3 = () => {
    return (
        <div id='category'>
            <div className="container">
                <div className="category">
                <div className="categor-bg">
                        <div className="bgn"></div>
                        <div className="categor-h5">
                          <h5>Categories</h5>
                        </div>
                    </div>
                    <div className="category-text">
                        <h1>Browse By Category</h1>
                        <div className="button">
                        <button className="prev"><GrLinkPrevious /></button>
                        <button className="next"><GrLinkNext /></button>
                        </div>
                    </div>
                    <div className="category-blocks">
                        <div className="cgblock">
                           <div className="img-teg">
                           <Image src={iphone} alt="img"/>
                           <h3>Phones</h3>
                           </div>
                        </div>
                          <div className="cgblock">
                          <div className="img-teg">
                           <Image src={televizor} alt="img"/>
                           <h3>Phones</h3>
                           </div>
                          </div>
                         <div className="cgblock">
                         <div className="img-teg">
                           <Image src={watch} alt="img"/>
                           <h3>Phones</h3>
                           </div>
                         </div>
                           <div className="camera-block">
                           <div className="img-teg">
                           <Image src={camera} alt="img"/>
                           <h3>Phones</h3>
                           </div>
                           </div>
                          <div className="cgblock">
                          <div className="img-teg">
                           <Image src={head} alt="img"/>
                           <h3>Phones</h3>
                           </div>
                          </div>
                           <div className="cgblock">
                           <div className="img-teg">
                           <Image src={gaming} alt="img"/>
                           <h3>Phones</h3>
                           </div>
                           </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default HomePage3;