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
    </>
  );
}

export default App;
