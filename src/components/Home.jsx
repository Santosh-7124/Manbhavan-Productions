import React from "react";
import Contact from "./Home/Contact";
import Services from "./Home/Services";
import Banner from "./Home/Banner";
import Marquee from "./Home/Marquee";
import Testimony from "./Home/Testimony";
import Brands from "./Home/Brands";
import Reality from "./Home/Reality";
import Parle from "./Home/Parle";
import Holi from "./Home/Holi";
import Diwali from "./Home/Diwali";
import Impact from "./Home/Impact";
import BTS from "./Home/BTS";

function Home() {
  return (
    <>
      <Banner />
      <Marquee />
      <Reality />
      <Parle />
      <Brands />
      <Holi />
      <Diwali />
      <Impact />
      <Services />
      <BTS />
      <Testimony />
      <Contact />
    </>
  );
}

export default Home;
