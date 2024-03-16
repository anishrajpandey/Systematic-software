import React from "react";
import "./About.css";
import NavBar from "./components/global/nav";
import Footer from "./components/global/footer";
const About = () => {
  return (
    <>
    <NavBar/>
    <section id="about" className="aboutt">
        <div className="box-one"></div>
          <div className="text-one">About Us
          <br/>
          <br/>
          <div className="aboutsys">
          Established in 2006 A.D., Systematic Software is the first Software Development Center <br/>
          in Western Nepal, located in Butwal. We specialize in providing advanced technology <br/>
          support, creating customized application packages for various professional institutions <br/>
          and organizations.<br/>
          <br/>
          With a track record of success, we've collaborated with financial institutions, investment<br/>
          companies, educational sectors, automobile industries, hospitals, and more. Thousands of<br/>
          users have chosen Systematic Software as their trusted technology partner.<br/>
          <br/>
          <span className="bluetext">Join us in building success through innovation and reliability</span>
           </div>
          </div>
          
          </section>
    <Footer/> 
   

    </>
  );
};

export default About;
