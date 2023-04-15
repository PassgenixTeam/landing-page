import React from 'react';
import FirstSlide from './partials/FirstSlide';
import SecondSlide from './partials/SecondSlide';
import ThirdSlide from './partials/ThirdSlide';
import FourthSlide from './partials/FourthSlide';
import FifthSlide from './partials/FifthSlide';
import Footer from './partials/Footer';

const Home = () => {
  return (
    <div>
      <FirstSlide />
      <SecondSlide />
      <ThirdSlide />
      <FourthSlide />
      <FifthSlide />
      <Footer />
    </div>
  );
};

export default Home;
