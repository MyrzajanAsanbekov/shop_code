import React from 'react';
import "../HomePage5/HomePage5.css"
import jbl from "../../public/assets/jbl2.png"
import Image from 'next/image';

const HomePage5 = () => {
    return (
        <div id='mucic'>
            <div className="container">
                <div className="music">
                    <div className="blockm">
                 <div className="music-text">
                    <h3>Categories</h3>
                    <h1>Enhance Your <br /> Music Experience</h1>
                    <div className="music-time">
                        <div className="time-text">
                            <h2>23</h2>
                            <span>Hours</span>
                        </div>
                        <div className="time-text">
                            <h2>05</h2>
                            <span>Days</span>
                        </div>
                        <div className="time-text">
                            <h2>59</h2>
                            <span>Minutes</span>
                        </div>
                        <div className="time-text">
                            <h2>35</h2>
                            <span>Seconds</span>
                        </div>
                        <button>Buy Now!</button>
                    </div>
                 </div>
                 <div className="music-img">
                    <Image src={jbl} alt="img"/>
                 </div>
                 </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage5;