import React, { useEffect, useId } from "react";
import FirstSlide from "./partials/FirstSlide";
import SecondSlide from "./partials/SecondSlide";
import ThirdSlide from "./partials/ThirdSlide";
import FourthSlide from "./partials/FourthSlide";
import FifthSlide from "./partials/FifthSlide";
import Footer from "./partials/Footer";
import { randomImg } from "../../utils/tools.util";

const Home = () => {
  return (
    <div className="relative snap-y snap-mandatory h-screen overflow-y-auto">
      <FirstSlide className="snap-center snap-always" />
      <SecondSlide className="snap-center snap-always" />
      <ThirdSlide className="snap-center snap-always" />
      <FourthSlide className="snap-center snap-always" />
      <FifthSlide className="snap-center snap-always" />
      <Footer className="snap-center snap-always" />
    </div>
  );
};

export default Home;
