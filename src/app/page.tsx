
import Blogs from '@/components/Blogs';
import Herro from '@/components/Herro';
import NewsLetter from '@/components/NewsLetter';
import Projects from '@/components/Projects';
import React from 'react';


const Home = () => {
  return (
    <>
      <Herro/>
      <Projects/>
      <Blogs/>
      <NewsLetter/>
    </>
  );
};

export default Home;
