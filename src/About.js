import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <main className="">
        <div className="fone">
          <div className="aboutone">
            <br />
            About Us
            <p className="aboutsys">
              <br />
              Established in 2006 A.D., Systematic Software is the first
              Software Development Center in Western
              <br />
              Nepal, located in Butwal. We specialize in providing advanced
              technology support, creating customized
              <br />
              application packages for various professional institutions and
              organizations.
              <br />
              <br />
              With a track record of success, we've collaborated with financial
              institutions, investment companies,
              <br /> educational sectors, automobile industries, hospitals, and
              more. Thousands of users have chosen <br />
              Systematic Software as their trusted technology partner.
              <br />
              <br />
              <br />
              <span className="blue-text">
                Join us in building success through innovation and reliability
                <img
                  src="bluearrow.svg"
                  alt="bluearrow"
                  className="bluearrow"
                />
              </span>
            </p>
          </div>
        </div>
        <div className="ftwo">
          <div className="boxtwoabout"></div>
          <div className="abouttwo">
            <br />
            What we believe in?
            <p className="aboutsys">
              <br /><span class="blue-text">
              Driving Client Value with Every Line of Code</span>
              <br />
              <br />
              Our commitment is to create value for our clients in every aspect of our software development,<br/>
               ensuring that each line of code contributes directly to their business objectives.
              
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
