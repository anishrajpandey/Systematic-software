import React, { useEffect } from "react";
import "./slider.css";
const Slider = () => {
  function addAnimation() {
    const scroller = document.querySelector(".scroller");
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const dublicatedItem = item.cloneNode(true);
      dublicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(dublicatedItem);
    });
  }
  useEffect(() => {
    addAnimation();
  }, []);
  return (
    <>
      <div className="scroller">
        <ul className="tag-list scroller__inner">
          <li className="slide">
            <img
              src="lmc-final-logo.svg"
              alt="lumbini medical college"
              className="lumbini"
            />
          </li>
          <li className="slide">
            <img src="kalika.svg" alt="kalika school" className="kalika" />
          </li>
          <li className="slide">
            <img src="sanjeevani.svg" alt="sanjeevani" className="sanjeevani" />
          </li>
          <li className="slide">
            <img
              src="sainamaina.svg"
              alt="sainamain byapar sanga"
              className="sainamaina"
            />
          </li>
          <li className="slide">
            <img
              src="rotary.svg"
              alt="rotary club of butwal"
              className="rotary"
            />
          </li>
          <li className="slide">
            <div className="oxford">
              <img src="oxford.svg" alt="Oxford college" className="oxford" />
            </div>
          </li>
          <li className="slide">
            <img
              src="rambadevi.svg"
              alt=" Rambadevi college"
              className="rambadevi"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Slider;
