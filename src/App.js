import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/global/nav";
import Footer from "./components/global/footer";
import Slider from "./components/global/slider";
function App() {
  // window.onload = () => {
  //   document.querySelector("video").play();
  // };
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
            <div className="hero-sub-text">Software Development Center </div>
            <div className="hero-paragraph">
              As a software company, we design a variety of online/offline
              software, web applications, and mobile applications. We assist
              businesses in envisioning and crafting futuristic digital
              experiences.
            </div>
          </div>
          <div className="buttons">
            <div className="arrow-buttons joinsystematic">
              Join Systematic
              <img src="/blackarrow.svg" alt="arrow" className="blackarrow" />
            </div>

            <div className=" arrow-buttons buildwithus">
              Build with Us
              <img src="/bluearrow.svg" alt="arrow" className="bluearrow" />
            </div>
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
          <div className="services-heading">Our Services</div>
          <div className="services">
            <div className="servicebox sms">
              <img src="/sms.svg" alt="sms" className="sms" />
              <div className="text-below">
                <b> SMS</b>
                <div className="textone">
                  With our Bulk SMS service, you can easily talk to your
                  customers. It helps organizations send out promotions, alerts,
                  updates, and official announcements.
                </div>
              </div>
            </div>
            <div className="servicebox googlemobile">
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
            <div className="servicebox setting">
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
      </section>
      <section id="clients" className="clients">
        <h1>
          Trusted by 150+ companies, growth-stage businesses, and emerging
          ventures.
        </h1>
        <p className="paraone">
          <span className="sys">At Systematic,</span> we've had the privilege of
          teaming up with some of the most innovative and forward-thinking
          entities across various sectors, including education institutions like
          schools, cooperatives, and businesses ranging from small enterprises
          to large corporations. Whether in academia or diverse business
          landscapes, they entrust us with the expertise and support needed to
          bring their ideas to life.
        </p>
        <Slider/>
        {/* <div className="examples">
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
        </div> */}
      </section>
      <Footer />
    </>
  );
}

export default App;
