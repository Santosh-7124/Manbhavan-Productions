import React from "react";
import CommercialsImage from "../../assets/Home/Services/Commercials/IMAGE.png";
import CommercialsSVG from "../../assets/Home/Services/Commercials/SVG.svg";
import NarrativesImage from "../../assets/Home/Services/Narratives/IMAGE.png";
import NarrativesSVG from "../../assets/Home/Services/Narratives/SVG.svg";
import VisualImage from "../../assets/Home/Services/Visual/IMAGE.png";
import VisualSVG from "../../assets/Home/Services/Visual/SVG.svg";
import AIImage from "../../assets/Home/Services/AI/IMAGE.png";
import AISVG from "../../assets/Home/Services/AI/SVG.svg";
import EventImage from "../../assets/Home/Services/Event/IMAGE.png";
import EventSVG from "../../assets/Home/Services/Event/SVG.svg";

function Services() {
  return (
    <section className="home-services">
      <div className="template-heading">
        <h3 className="h3-semibold">
          What We{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="49"
            height="49"
            viewBox="0 0 49 49"
            fill="none"
          >
            <path
              d="M14.825 7C8.29438 7 3 12.1652 3 18.5364C3 30.0729 16.975 40.5606 24.5 43C32.025 40.5606 46 30.0729 46 18.5364C46 12.1652 40.7056 7 34.175 7C30.176 7 26.6393 8.93708 24.5 11.9019C23.4094 10.3869 21.9608 9.1504 20.2767 8.29715C18.5926 7.44389 16.7226 6.99896 14.825 7Z"
              fill="#C3262B"
              stroke="#C3262B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>{" "}
          <span>
            & <br />
            Go Big On
          </span>
        </h3>
        <p className="m-regular">
          Lorem ipsum dolor sit amet consectetur. Maecenas at quis vestibulum
          diam hac consectetur eget.{" "}
        </p>
      </div>
      <div className="home-services-container">
        <div className="home-services-container">
          <article className="home-services-set">
            <div className="home-services-sticky">
              <div className="home-services-set-img">
                <img src={CommercialsImage} alt="Brand & Commercials Image" />
              </div>

              <div className="home-services-set-content">
                <img src={CommercialsSVG} alt="Brand & Commercials SVG" />

                <div className="home-services-set-text">
                  <h5 className="h5-semibold">Brand & Commercials</h5>
                  <p className="xxl-regular">
                    Brand Films | Digital Advertisement | TVC’s | Corporate
                    Films | Product Films
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="home-services-set">
            <div className="home-services-sticky">
              <div className="home-services-set-img">
                <img src={NarrativesImage} alt="Narratives Image" />
              </div>

              <div className="home-services-set-content">
                <img src={NarrativesSVG} alt="Narratives SVG" />

                <div className="home-services-set-text">
                  <h5 className="h5-semibold">Narratives</h5>
                  <p className="xxl-regular">
                    Feature Films | Short Films | Web Series
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="home-services-set">
            <div className="home-services-sticky">
              <div className="home-services-set-img">
                <img src={VisualImage} alt="Visual & Cultural Image" />
              </div>

              <div className="home-services-set-content">
                <img src={VisualSVG} alt="Visual & Cultural SVG" />

                <div className="home-services-set-text">
                  <h5 className="h5-semibold">Visual & Cultural</h5>
                  <p className="xxl-regular">
                    Music Videos | Fashion Films | Documentary | Talk Shows
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="home-services-set">
            <div className="home-services-sticky">
              <div className="home-services-set-img">
                <img src={AIImage} alt="AI Image" />
              </div>

              <div className="home-services-set-content">
                <img src={AISVG} alt="AI SVG" />

                <div className="home-services-set-text">
                  <h5 className="h5-semibold">AI Filmmaking</h5>
                  <p className="xxl-regular">
                    AI Concept Visualization | Virtual Scene Creation | AI
                    Generated Storyboarding | Hybrid AI + Live Action Production
                    | AI Commercial & Digital Content Creation
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="home-services-set">
            <div className="home-services-sticky">
              <div className="home-services-set-img">
                <img src={EventImage} alt="Event Management Image" />
              </div>

              <div className="home-services-set-content">
                <img src={EventSVG} alt="Event Management SVG" />

                <div className="home-services-set-text">
                  <h5 className="h5-semibold">Event Management</h5>
                  <p className="xxl-regular">
                 Corporate Events  |  Live Broadcasting  | Experiential Installations  |  Stage Design & Technical Setup
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Services;
