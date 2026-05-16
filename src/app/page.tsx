
import Blogs from '@/components/Blogs';
import Hero from '@/components/Hero';
import NewsLetter from '@/components/NewsLetter';
import Projects from '@/components/Projects';
import React from 'react';


const Home = () => {
  return (
    <>
      <Hero/>
      <Projects/>
      <Blogs/>
      <NewsLetter/>
    </>
  );
};

export default Home;
