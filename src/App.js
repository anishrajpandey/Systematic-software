import "./App.css";
import NavBar from "./components/global/nav";
import Footer from "./components/global/footer";
import Slider from "./components/global/slider";
function App() {
  return (
    <>
      <NavBar />
      <section id="home" className="main ">
        <div className="hero-text">
          <div>
            <h1 className="hero-title">
              RIGHT TIME-RIGHT REPORT:
              <span> SYSTEMATIC SOFTWARE.</span>
            </h1>
            <p className="hero-sub-text">Software Development Center </p>
            <p className="hero-paragraph">
              As a software company, we design a variety of online/offline
              software, web applications, and mobile applications. We assist
              businesses in envisioning and crafting futuristic digital
              experiences.
            </p>
          </div>
          <div className="buttons">
            <h4 className="arrow-buttons joinsystematic">
              Join Systematic
              <img src="/blackarrow.svg" alt="arrow" className="blackarrow" />
            </h4>

            <h4 className=" arrow-buttons buildwithus">
              Build with Us
              <img src="/bluearrow.svg" alt="arrow" className="bluearrow" />
            </h4>
          </div>
        </div>
        <div className="hero-video">
          <video autoPlay muted loop>
            <source src="/intro.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      <section id="services">
        <div className="fbluebox">
          <h2 className="services-heading">Our Services</h2>
          <div className="services">
            <div className="servicebox sms">
              <img src="/sms.svg" alt="sms" className="sms" />
              <div className="text-below">
                <h4> SMS</h4>
                <p className="textone">
                  With our Bulk SMS service, you can easily talk to your
                  customers. It helps organizations send out promotions, alerts,
                  updates, and official announcements.
                </p>
              </div>
            </div>
            <div className="servicebox googlemobile">
              <img
                src="/googlemobile.svg"
                alt="Mobile"
                className="googlemobile"
              />
              <div className="text-below">
                <h4> App Development</h4>
                <p className="textone">
                  If you intend to connect with your customers through their
                  mobile phones, all you require is a mobile app. Simply inform
                  us of your specifications, and we'll ensure your needs are
                  met.
                </p>
              </div>
            </div>
            <div className="servicebox setting">
              <img src="/setting.svg" alt="setting" className="setting" />
              <div className="text-below">
                <h4>Software Development</h4>
                <p className="textone">
                  We take all stages of the software development process
                  seriously. Our primary goal is to (meet all out customer needs
                  and requirements) meet the needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="services_background"></div>
      </section>
      <section id="clients" className="clients">
        <h2>
          Trusted by 150+ companies, growth-stage businesses, and emerging
          ventures.
        </h2>
        <p className="paraone">
          <span className="sys">At Systematic,</span> we've had the privilege of
          teaming up with some of the most innovative and forward-thinking
          entities across various sectors, including education institutions like
          schools, cooperatives, and businesses ranging from small enterprises
          to large corporations. Whether in academia or diverse business
          landscapes, they entrust us with the expertise and support needed to
          bring their ideas to life.
        </p>
        <Slider />
      </section>
      <Footer />
    </>
  );
}

export default App;
