
import Blogs from '@/components/Blogs';
import Hero from '@/components/Hero';
import About from '@/components/About';
import NewsLetter from '@/components/NewsLetter';
import Projects from '@/components/Projects';
import React from 'react';


const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Projects/>
      <Blogs/>
      <NewsLetter/>
    </>
  );
};

export default Home;
