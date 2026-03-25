import React from "react";
import DiwaliImage from "../../assets/Home/Diwali/Diwali Image.png";

function Diwali() {
  return (
    <section className="home-holi home-diwali">
      <div className="home-holi-img">
        <img src={DiwaliImage} alt="Holi Image" />
      </div>
      <div className="home-holi-text">
        <h2>PARLE DIWALI CAMPAIGNN</h2>
        <div className="home-holi-sub-text">
          <div className="home-holi-content">
            <h3>
              From Concept to Screen in just <br /> <span>216 Hours.</span>
            </h3>
          </div>
          <p className="l-regular">
            Every view earned through thoughtful storytelling, precise
            execution, and emotionally resonant visuals.
          </p>
        </div>
        <div className="home-diwali-numbers">
          <article className="home-diwali-numbers-set">
            <span>4</span>
            <p>Digital Films</p>
          </article>
          <article className="home-diwali-numbers-set">
            <span>10</span>
            <p>Statics</p>
          </article>
          <article className="home-diwali-numbers-set">
            <span>90</span>
            <p>Crew Members</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Diwali;
