import React from "react";
import NavBar from "../../components/global/nav";
import Footer from "../../components/global/footer";
import "./CoCreate.css";
export default function CoCreate() {
  return (
    <>
      <NavBar />
      <section class="cocreate-section" id="cocreate">
        <div class="container">
          <div class="row gap-4">
            <div class="col-md-5">
              <div class="heading ">
                <h1>
                  Let's
                  <span> CoCreate</span>
                </h1>
                <p>
                  Whether you're starting up or scaling, we've got you covered.
                  From finance to education, and beyond, our solutions are
                  tailored for success.
                  <br />
                </p>
              </div>

              <div class="content">
                <div
                  className="imageContainer "
                  style={{
                    overflow: "hidden",
                    flex: 1,
                    borderBottomRightRadius: "4.5rem",
                    backgroundColor: "#f5f5f5",
                    height: "20rem",
                    // height: "auto",
                    width: "auto",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src="https://1.bp.blogspot.com/-7dVEfo-4z5w/YMi1T2TCzMI/AAAAAAAABoQ/lXMdAU8tAt0dJl4lUArP8ENfsob3Te62QCLcBGAsYHQ/s1335/IMG_20210615_171007.jpg"
                    alt="school"
                  />
                </div>
              </div>
            </div>

            <div
              className="col-md-6 "
              style={{
                marginTop: "4rem",
                flex: 1,
              }}
            >
              <form>
                <div class="row">
                  <div class="col-lg-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div class="col-lg-6">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div class="col-sm-12">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    rows="5"
                    id="comment"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button class="btn col-sm-12 mt-4" type="submit">
                  Send Now!
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
