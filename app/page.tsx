'use client';
import HomePage from '@/components/HomePage';
import { Product } from '../types/common';
import Header from '@/components/Header';
import HomePage2 from '@/components/HomePage2';
import HomePage3 from '@/components/HomePage3';
import HomePage4 from '@/components/HomePage4';


const Home: React.FC = () => {

  return (
    <>
      <Header />
      <HomePage/>
      <HomePage2/>
      <HomePage3/>
      <HomePage4/>
    </>
  );
};

export default Home;
