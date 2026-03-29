import React from "react";
import Static from "../../assets/Home/Banner/Static.png";
import Moving from "../../assets/Home/Banner/Moving.png";
import Background from "../../assets/Home/Banner/Background.png"

function Banner() {
  return (
    <section className="home-banner">
      <img src={Background} alt="Background" className="home-banner-background"/>
      <div className="home-banner-heading">
        <div className="home-banner-heading-text">
          <h1>
            At Manbhavan Productions, <br />{" "}
            <span>Every Frame Carries a Meaning.</span>{" "}
          </h1>
          <p>
            Manbhavan Productions has partnered with India’s leading brands,
            crafting impactful films that travel across screens and audiences
            nationwide.
          </p>
        </div>
        <a href="#" className="navbar-button">
          <p>Founder</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_622_1774"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect
                width="24"
                height="24"
                transform="matrix(-1 0 0 1 24 0)"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_622_1774)">
              <path
                d="M6.4 18L16 8.4V17H18V5H6V7H14.6L5 16.6L6.4 18Z"
                fill="white"
              />
            </g>
          </svg>
        </a>
      </div>
      <div className="home-banner-container">
        <img
          src={Static}
          alt="Static Logo"
          className="home-banner-container-static"
        />
        <img
          src={Moving}
          alt="Moving Logo"
          className="home-banner-container-moving"
        />
      </div>
    </section>
  );
}

export default Banner;
