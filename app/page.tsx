'use client';
import HomePage from '@/components/HomePage';
import { Product } from '../types/common';
import Header from '@/components/Header';
import HomePage2 from '@/components/HomePage2';
import HomePage3 from '@/components/HomePage3';
import HomePage4 from '@/components/HomePage4';
import HomePage5 from '@/components/HomePage5';
import Footer from '@/components/Footer';
import HomePage6 from '@/components/HomePage6';
import Homepage7 from '@/components/HomePage7';


const Home: React.FC = () => {

  return (
    <>
      <Header />
      <HomePage/>
      <HomePage2/>
      <HomePage3/>
      <HomePage4/>
      <HomePage5/>
      <HomePage6/>
      <Homepage7/>
      <Footer/>
    </>
  );
};

export default Home;
