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
       <div className="name">
            <div className="mainone">RIGHT TIME-RIGHT REPORT:<span className="maintwo">SYSTEMATIC SOFTWARE.</span></div>
            <div className="mainthree">Software Development Center </div>
            <div className="mainfour">As a software company, we design a variety of online/offline software, web applications, and mobile applications. We assist businesses in envisioning and crafting futuristic digital experiences. </div>
            <div className="mainfive"></div>
            <div className="joinsystematic">
            <div className="blackarrow">Join Systematic
              <img src="/blackarrow.svg" alt="arrow" className="blackarrow"/>
              </div>
              <div className="buildwithus"></div>
              <div className="bluearrow">Build With Us
                <img arc="/bluearrow.svg" alt="arrow" className="bluearrow"/>
              </div>
              </div>
    </div>
    </>
  );
}

export default App;
