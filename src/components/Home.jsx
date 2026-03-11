import React from "react";
import Contact from "./Home/Contact";
import Services from "./Home/Services";
import Banner from "./Home/Banner";
import Marquee from "./Home/Marquee";
import Testimony from "./Home/Testimony";
import Brands from "./Home/Brands";

function Home() {
  return (
    <>
      <Banner />
      <Marquee />
      <Brands />
      <Services />
      <Testimony />
      <Contact />
    </>
  );
}

export default Home;
