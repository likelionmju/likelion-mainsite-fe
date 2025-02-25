import React, { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import './Home.css';
import YearPlan from '@/components/YearPlan';
import character from '/public/character4.svg';
import Part from '@/components/Part';
import Schedule from '@/components/Schedule';
import Banner from '@/components/Banner.jsx';
import Introduction from '@/components/Introduction';

const Home = () => {
  return (
    <div className="Home">
      <Banner character={character} />
      <Introduction />
      <Part
      />
      <YearPlan
      />
      <Schedule
      />
      <Footer />
    </div>
  );
};

export default Home;
