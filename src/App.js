import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="fcontainer">
        <div className="logo">Logo</div>
        <div className="menu">
          <div className="home">Home</div>
          <div className="services">Services</div>
          <div className="joinus">Join Us</div>
          <div className="blog">Blog</div>
          <div className="aboutus">About Us</div>
          <div className="cocreate">
            <div className="cocreatewithus">
              <img src="/handshake.png" alt="handshake" className="handshake" />
              CO_CREATE WITH US
            </div>
          </div>
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
        <div className="mainfive"></div>
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
    <div className ="fbluebox">
      <div className="fbox"></div>
        <div className="fbox"> </div>
        <div className="fbox"></div>
        <div className="ourservices">Our Services</div>
    </div>
        
       
      
   
   
    </div>
  
    </>
  );
}

export default App;
