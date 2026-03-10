import React from "react";
import Contact from "./Home/Contact";
import Services from "./Home/Services";
import Banner from "./Home/Banner";
import Marquee from "./Home/Marquee";
import Testimony from "./Home/Testimony";

function Home() {
  return (
    <>
      <Banner />
      <Marquee />
      <Services />
      <Testimony />
      <Contact />
    </>
  );
}

export default Home;
