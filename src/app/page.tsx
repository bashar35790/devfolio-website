import Blogs from '@/components/Blogs';
import Hero from '@/components/Hero';
import About from '@/components/About';
import StatsCounter from '@/components/StatsCounter';
import Services from '@/components/Services';
import NewsLetter from '@/components/NewsLetter';
import Projects from '@/components/Projects';
import FAQ from '@/components/FAQ';
import React from 'react';


const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <StatsCounter/>
      <Services/>
      <Projects/>
      <Blogs/>
      <FAQ/>
      <NewsLetter/>
    </>
  );
};

export default Home;
