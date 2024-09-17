import React from 'react';
import "../Header/Header.css"
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import { FaChevronDown } from "react-icons/fa";
import Link from 'next/link';
import Home from '../Home';


const Header: React.FC = () => {
  return (
   <div id="header">
    <div className="container">
        <div className="footer-top">
          <div className="footer-link">
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
          <a href="#">ShopNow</a>
          </div>
          <div className="footer-language">
            <p>English</p>
            <FaChevronDown />
          </div>
        </div>
      <div className="header">
        <div className="logo">
        <h1>Exclusive</h1>
        </div>
        <div className="header-nav">
        <div className="nav">
          <Link href='/' legacyBehavior><a> Home</a></Link>
          <Link href='/contact' legacyBehavior><a > Contact</a></Link>
        <a href=''> About</a>
        <a href=''> Sign Up</a>
        </div>
        </div>
        <div className="icons">
          <div className="inputs">
          <input type="text" placeholder='What are you looking for?' />
          <a>
            <IoSearchOutline />
           </a>          
          </div>
          <a>
          <FaRegHeart />
          </a>
          <a>
          <SlBasket />
          </a>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Header;
