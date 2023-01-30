import React from "react";
import logo from "../../images/logo-footer.svg";
import pic1 from "../../images/figma/Image-1.jpg";
import pic2 from "../../images/figma/Image-2.jpg";
import pic3 from "../../images/figma/Image-3.jpg";
import pic4 from "../../images/figma/Image-4.jpg";
import pic5 from "../../images/figma/Image-5.jpg";
import pic6 from "../../images/figma/Image-6.jpg";
import facebookIcon from "../../images/figma/Facebook.svg";
import twitterIcon from "../../images/figma/Twitter.svg";
import instagramIcon from "../../images/figma/Instagram.svg";
import youtubeIcon from "../../images/figma/Youtube.svg";
import "../../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content-wrapper">
        <div className="footer-wrapper">
          <div className="business-card">
            <div className="footer-logo">
              <a href="/" className="footer-logo-link">
                <img src={logo} alt="Newscast" className="footer-logo-pic" />
              </a>
            </div>
            <p className="business-card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque,
              pellentesque dictum posuere id diam rutrum.
            </p>
            <ul className="business-card-contacts-list">
              <li className="contact-item">
                <a href="#!" className="contact-link">
                  <img
                    src={facebookIcon}
                    alt=""
                    className="contact-thumbnail"
                  ></img>
                </a>
              </li>
              <li className="contact-item">
                <a href="#!" className="contact-link">
                  <img
                    src={twitterIcon}
                    alt=""
                    className="contact-thumbnail"
                  ></img>
                </a>
              </li>
              <li className="contact-item">
                <a href="#!" className="contact-link">
                  <img
                    src={instagramIcon}
                    alt=""
                    className="contact-thumbnail"
                  ></img>
                </a>
              </li>
              <li className="contact-item">
                <a href="#!" className="contact-link">
                  <img
                    src={youtubeIcon}
                    alt=""
                    className="contact-thumbnail"
                  ></img>
                </a>
              </li>
            </ul>
          </div>
          <section className="photo-gallery-section">
            <h4 className="section-title">Photo Gallery</h4>
            <div className="photo-gallery-container">
              <img src={pic1} alt="" className="photo-gallery-image"></img>
              <img src={pic2} alt="" className="photo-gallery-image"></img>
              <img src={pic3} alt="" className="photo-gallery-image"></img>
              <img src={pic4} alt="" className="photo-gallery-image"></img>
              <img src={pic5} alt="" className="photo-gallery-image"></img>
              <img src={pic6} alt="" className="photo-gallery-image"></img>
            </div>
          </section>
          <section className="tags-section">
            <h4 className="section-title">Tags</h4>
            <ul className="tags-list">
              <li className="tag category-bg-color-1">Football</li>
              <li className="tag category-bg-color-2">Cricket</li>
              <li className="tag category-bg-color-3">Covid-19</li>
              <li className="tag category-bg-color-4">Life Style</li>
              <li className="tag category-bg-color-5">Tranding News</li>
              <li className="tag category-bg-color-6">Technology</li>
              <li className="tag category-bg-color-1">Travel</li>
            </ul>
          </section>
          <section className="stay-in-touch-section">
            <h4 className="section-title">Stay In Touch</h4>
            <p className="stay-in-touch-text">
              To be updated with all the latest news, offers and special
              annoucements.
            </p>
            <form className="stay-in-touch-form">
              <input
                type="email"
                placeholder="Your email address"
                className="email-input"
              ></input>
              <button type="submit" className="subscribe-button">
                Subscribe
              </button>
            </form>
          </section>
        </div>
      </div>
    </footer>
  );
}
