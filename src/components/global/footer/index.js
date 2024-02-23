import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-title"> Ready to get Started?</div>
      <div className="get-started-section">
        <div className="get-started-boxes">
          <div className="box boxone">
            <div className="text">
              Elevate your pace. Transform ideas into reality swiftly. Let's
              delve deeper into possibilities together.
            </div>
            <div className="text">
              Let's delve deeper into possibilities together.
            </div>
            <div className="footer-button">
              Build with us
              <img src="bluearrow.svg" alt="bluearrow" className="bluearrow" />
            </div>
          </div>
          <div className="box boxtwo">
            <div className="text">
              You find inspiration in cutting-edge technology, dream of creating
              with great companies, and aim to be an expert.
            </div>
            <div className="text">
              We bring together smart, like-minded people for innovation and
              learning. Let's connect.
            </div>
            <div className=" footer-button">
              Join Us
              <img src="bluearrow.svg" alt="bluearrow" className="bluearrow" />
            </div>
          </div>
        </div>
      </div>
      <div className="news-letter">
        <div className="stayintheloop">Stay In Loop</div>
        <input type="text" placeholder="Enter your email" className="email" />
        <div className="button subscribe">Subscribe</div>
      </div>
      <div className="line"></div>
      <div className="footer-bottom">
        <div className="footer-columns">
          <div className="logo">
            <img src="/kalika.svg" />
          </div>
        </div>
        <div className="fotter-bottom-content">
          <div className="footer-columns">
            <div className="title">We are Systematic</div>

            <div className="aboutus  nav-link">About Us</div>
            <div className="blog  nav-link">Blog</div>
            <div className="contactus  nav-link">Contact Us</div>
            <div className="title">Work with Us</div>
            <div className="careers  nav-link">Careers</div>
            <div className="internships nav-link">Internships</div>
          </div>

          <div className="footer-columns">
            <div className="title">Our Products</div>
            <div className="schoolandcollege nav-link">School and College</div>
            <div className="cooperative nav-link">Co-operative Software</div>
            <div className="hospital nav-link">Hospital Management</div>
            <div className="lab nav-link">Lab Management</div>
            <div className="business nav-link">Business Softwares</div>
          </div>
          <div className="footer-columns">
            <div className="title">Connect with Us</div>
            <div className="row">
              <img src="call.svg" alt="call" className="footer-icon" />
              <span>
                Kalika Marga,
                <br /> Kathmandu, Nepal
              </span>
            </div>
            <div className="row">
              <img src="/call.svg" alt="call" className="footer-icon" />
              <span>9857024291</span>
            </div>
            <div className="row">
              <img src="/mail.svg" alt="mail" className="footer-icon" />
              <span>systematic@yahoo.com</span>
            </div>
            <div className="row  nav-link">
              <img src="/facebook.png" alt="facebook" className="footer-icon" />
              <span> Facebook</span>
            </div>
            <div className="row  nav-link">
              <img src="/linkedln.svg" alt="linkedln" className="footer-icon" />
              <span>Linkedln</span>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Footer;
