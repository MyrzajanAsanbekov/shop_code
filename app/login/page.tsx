'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoginPage from '@/components/LoginPage';

const Login: React.FC = () => {

  return (
    <>
      <Header />
      <LoginPage/>
      <Footer/>
    </>
  );
};

export default Login;
