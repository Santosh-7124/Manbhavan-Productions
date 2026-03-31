import React, { useRef, useState, useEffect } from "react";
import RealityImage from "../../assets/Home/Reality/Reality Image.png";

function Reality() {
  const testimonyRef = useRef(null);

  useEffect(() => {
    const section = testimonyRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.style.backgroundColor = "#f4f0e9";
        } else {
          document.body.style.backgroundColor = "#fff";
        }
      },
      {
        threshold: 0.5,
      },
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className="home-reality-wrapper" ref={testimonyRef}>
      <div className="home-reality">
        <div className="template-heading">
          <h3 className="h3-semibold">
            We Create Stories <br />
            into <span>Reality.</span>
          </h3>
        </div>
        <div className="home-reality-container">
          <img src={RealityImage} />
          <p className="xl-regular">
            Manbhavan Productions is a creative production house working across
            advertising, films, music videos, and branded content, focused on
            crafting visuals that feel human, emotionally resonant, and
            thoughtfully produced. Guided by clarity of storytelling and
            attention to detail, we collaborate with brands, agencies and
            creators.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Reality;
