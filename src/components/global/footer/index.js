import React from "react";
import "./footer.css";
import { footer, products } from "../../../utils/data";
import { Link } from "react-router-dom";
const Footer = () => {
  const { newsletter, navLinks, socialLinks, cards } = footer;
  return (
    <div className="footer">
      <h2 className="footer-title"> Ready to get Started?</h2>
      <div className="get-started-section">
        {cards.map((card, index) => {
          return (
            <div
              className={`box box${index + 1}`}
              style={{
                backgroundImage: `url(${card.image})`,
              }}
            >
              <div className="content">
                <h5 className="text">{card.text}</h5>
                <p className="text">{card.subtext}</p>
                <h5 className="footer-button">
                  {card.buttonText}
                  <img
                    src="bluearrow.svg"
                    alt="bluearrow"
                    className="bluearrow"
                  />
                </h5>
              </div>
            </div>
          );
        })}
      </div>
      <div className="news-letter">
        <h4 className="stayintheloop">{newsletter.title}</h4>
        <input
          type="text"
          placeholder={newsletter.placeholder}
          className="email"
        />
        <div className="button subscribe">{newsletter.buttonText}</div>
      </div>
      <div className="line"></div>
      <div className="footer-bottom">
        <div className="footer-columns">
          <div className="logo">
            <img src={footer.logo} alt="logo" />
          </div>
        </div>
        <div className="fotter-bottom-content">
          <div className="footer-columns">
            {navLinks.map((navLink, index) => (
              <>
                <div className="title">{navLink.header}</div>
                {navLink.links.map((link, index) => (
                  <Link
                    key={index}
                    className="nav-link"
                    to={{
                      pathname: link.url,
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </>
            ))}
          </div>

          <div className="footer-columns">
            <div className="title">Our Products</div>
            {products.map((product, index) => (
              <div key={index} className="nav-link">
                {product.name}
              </div>
            ))}
          </div>

          <div className="footer-columns">
            <div className="title">Connect with Us</div>
            {socialLinks.map((link, index) => (
              <div key={index} className="row nav-link">
                <img src={link.logo} alt={link.name} className="footer-icon" />
                <span> {link.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Footer;
