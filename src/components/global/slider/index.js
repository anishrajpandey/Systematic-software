import React, { useEffect } from "react";
import "./slider.css";
const Slider = () => {
  function addAnimation(scroller) {
    scroller.setAttribute("data-animated", true);
  }
  useEffect(() => {
    const scroller = document.querySelector(".scroller");
    if (!window.matchMedia("(prefers-reduced-motion: reduce").matches) {
      addAnimation(scroller);
    }
  }, []);

  return (
    <>
      <div className="scroller">
        <ul class="tag-list scroller__inner" onload={() => {}}>
          <li class="slide">
            <img src="images/image1.png" />
          </li>
          <li class="slide">
            <img src="images/image2.png" />
          </li>
          <li class="slide">
            <img src="images/image3.png" />
          </li>
          <li class="slide">
            <img src="images/image4.png" />
          </li>
          <li class="slide">
            <img src="images/image5.png" />
          </li>
          <li class="slide">
            <img src="images/image6.png" />
          </li>
          <li class="slide">
            <img src="images/image7.png" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Slider;
