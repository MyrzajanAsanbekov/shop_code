import React from 'react';
import "../HomePage3/HomePage3.css"
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineTv } from "react-icons/hi2";
import { TbDeviceWatchStats } from "react-icons/tb";
import { IoMdHeadset } from "react-icons/io";
import { SiYoutubegaming } from "react-icons/si";
import { MdOutlinePhotoCamera } from "react-icons/md";



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
                           <a><IoIosPhonePortrait /></a>
                           <h3>Phones</h3>
                           </div>
                        </div>
                          <div className="cgblock">
                          <div className="img-teg">
                           <a><HiOutlineTv /></a>
                           <h3>Computers</h3>
                           </div>
                          </div>
                         <div className="cgblock">
                         <div className="img-teg">
                           <a><TbDeviceWatchStats /></a>
                           <h3>SmartWatch</h3>
                           </div>
                         </div>
                           <div className="cgblock">
                           <div className="img-teg">
                           <a><MdOutlinePhotoCamera /></a>
                           <h3>Camera</h3>
                           </div>
                           </div>
                          <div className="cgblock">
                          <div className="img-teg">
                           <a><IoMdHeadset /></a>
                           <h3>HeadPhones</h3>
                           </div>
                          </div>
                           <div className="cgblock">
                           <div className="img-teg">
                           <a><SiYoutubegaming /></a>
                           <h3>Gaming</h3>
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