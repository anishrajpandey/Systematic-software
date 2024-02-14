import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="fcontainer">
        <div className="logo">Logo</div>
        <div className="menu">
          <Link to={"/"}>
            <div className="home">Home</div>
          </Link>
          <Link to={"/services"}>
            <div className="services">Services</div>
          </Link>
          <Link to={"/career"}>
            <div className="joinus">Join Us</div>
          </Link>
          <Link to={"/"}>
            <div className="blog">Blog</div>
          </Link>
          <Link to={"/about"}>
            <div className="aboutus">About Us</div>
          </Link>
          <Link to={"/"}>
            <div className="cocreate">
              <div className="cocreatewithus">
                <img
                  src="/handshake.png"
                  alt="handshake"
                  className="handshake"
                />
                CO_CREATE WITH US
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="main">
        <div className="mainone">
          RIGHT TIME-RIGHT REPORT:
          <span className="maintwo">SYSTEMATIC SOFTWARE.</span>
        </div>
        <div className="mainthree">Software Development Center </div>
        <div className="mainfour">
          As a software company, we design a variety of online/offline software,
          web applications, and mobile applications. We assist businesses in
          envisioning and crafting futuristic digital experiences.{" "}
        </div>
        <div className="mainfive">
          <video src="/intro.mp4" autoPlay loop></video>
        </div>
        <div className="buttons">
          <div className="joinsystematic">
            Join Systematic
            <div className="blackarrow">
              <img src="/blackarrow.svg" alt="arrow" className="blackarrow" />
            </div>
          </div>

          <div className="buildwithus">
            Build with Us
            <div className="bluearrow">
              <img src="/bluearrow.svg" alt="arrow" className="bluearrow" />
            </div>
          </div>
        </div>
        <div className="fbluebox">
          <div className="ourservices">Our Services</div>

          <div className="fbox">
            <div className="sms">
              <img src="/sms.svg" alt="sms" className="sms" />
              <div class="text-below">
                <b> SMS</b>
                <div className="textone">
                  With our Bulk SMS service, you can easily talk to your
                  customers. It helps organizations send out promotions, alerts,
                  updates, and official announcements.
                </div>
              </div>
            </div>
          </div>
          <div className="fbox">
            <div className="googlemobile">
              <img
                src="/googlemobile.svg"
                alt="Mobile"
                className="googlemobile"
              />
              <div className="text-below">
                <b> App Development</b>
                <div className="textone">
                  If you intend to connect with your customers through their
                  mobile phones, all you require is a mobile app. Simply inform
                  us of your specifications, and we'll ensure your needs are
                  met.
                </div>
              </div>
            </div>
          </div>
          <div className="fbox">
            <div className="setting">
              <img src="/setting.svg" alt="setting" className="setting" />
              <div className="text-below">
                <b>Software Development</b>
                <div className="textone">
                  We take all stages of the software development process
                  seriously. Our primary goal is to (meet all out customer needs
                  and requirements) meet the needs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="trusted">
        Trusted by 150+ companies, growth-stage businesses, and emerging
        ventures.
      </div>
      <div className="paraone">
        <span className="sys">At Systematic,</span> we've had the privilege of
        teaming up with some of the most innovative and forward-thinking
        entities across various sectors, including education institutions like
        schools, cooperatives, and businesses ranging from small enterprises to
        large corporations. Whether in academia or diverse business landscapes,
        they entrust us with the expertise and support needed to bring their
        ideas to life.
      </div>
      <div className="examples">
        <div className="lumbini">
          <img
            src="lmc-final-logo.svg"
            alt="lumbini medical college"
            className="lumbini"
          />
        </div>
        <div className="kalika">
          <img src="kalika.svg" alt="kalika school" className="kalika" />
        </div>
        <div className="kantipur">
          <img src="kantipur.svg" alt="kantipur" className="kantipur" />
        </div>
        <div className="sanjeevani">
          <img src="sanjeevani.svg" alt="sanjeevani" className="sanjeevani" />
        </div>
        <div className="sainamaina">
          <img
            src="sainamaina.svg"
            alt="sainamain byapar sanga"
            className="sainamaina"
          />
        </div>
        <div className="rotary">
          <img
            src="rotary.svg"
            alt="rotary club of butwal"
            className="rotary"
          />
        </div>
        <div className="oxford">
          <img src="oxford.svg" alt="Oxford college" className="oxford" />
        </div>
        <div className="rambadevi">
          <img
            src="rambadevi.svg"
            alt=" Rambadevi college"
            className="rambadevi"
          />
        </div>
      </div>
      <div className="footer">
        <div className="footerone"> Ready to get Started?</div>
        <div className="boxone">
          <div className="boxonetext">
            Elevate your pace. Transform ideas into reality swiftly. Let's delve
            deeper into possibilities together.
          </div>
          <div className="boxonetext2">
            Let's delve deeper into possibilities together.
          </div>
          <div className="cocreate2">
            Co-create with us
            <img src="bluearrow.svg" alt="bluearrow" className="bluearrow" />
          </div>
        </div>

        <div className="boxtwo">
          <div className="boxtwotext">
            You find inspiration in cutting-edge technology, dream of creating
            with great companies, and aim to be an expert.
          </div>
          <div className="boxtwotext2">
            We bring together smart, like-minded people for innovation and
            learning. Let's connect.
          </div>
          <div className="joinus2">
            Join Us
            <img src="bluearrow.svg" alt="bluearrow" className="bluearrow" />
          </div>
        </div>
        <div className="stayintheloop">Stay in the Loop</div>

        <div className="boxthree">
          <div className="youremail">Your email address</div>
        </div>

        <div className="boxfour">
          <div className="subscribe">Subscribe for Updates</div>
        </div>
        <div className="line"></div>
        <div className="systematic">SYSTEMATIC</div>
        <div className="call">
          <img src="call.svg" alt="call" className="call" />
        </div>
        <div className="number">9857024291</div>
        <div className="mail">
          <img src="/mail.svg" alt="mail" className="mail" />
        </div>
        <div className="mailid">systematic_software@yahoo.com</div>
        <div className="wearesystematic">We are Systematic Software</div>
        <div className="aboutus2">About Us</div>
        <div className="blog2">Blog</div>
        <div className="contactus2">Contact Us</div>
        <div className="workwithus">Work with Us</div>
        <div className="careers">Careers</div>
        <div className="internships">Internships</div>
        <div className="ourproducts">Our Products</div>
        <div className="schoolandcollege">School and College</div>
        <div className="cooperative">Co-operative Software</div>
        <div className="hospital">Hospital Management</div>
        <div className="lab">Lab Management</div>
        <div className="business">Business Softwares</div>
        <div className="connectwithus">Connect with Us</div>

        <div className="facebook">
          {" "}
          <div className="facebooklogo">
            <img
              src="/facebook.png"
              alt="facebooklogo"
              className="facebooklogo"
            />
          </div>
          Facebook
        </div>

        <div className="linkedln">
          {" "}
          <div className="linkedlnlogo">
            <img
              src="/linkedln.svg"
              alt="linkedlnlogo"
              className="linkedlnlogo"
            />
          </div>
          Linkedln
        </div>
<div className="linetwo"></div>
<div className="allrights">
  {" "}
  <div className="copyright">
    <img 
    src= "/copyright.svg"
    alt="copyright"
    className="copyright"
    />
  </div>
  All rights reserved, Systematic 2024.
</div>




      </div>
    </>
  );
}

export default App;
