import React from 'react';
import './Footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    
  return (
    <div>
      <div className="Container">
        <footer className="new_footer_area bg_color">
          <div className="new_footer_top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                    <h3 className="f-title f_600 t_color f_size_18">Stock market</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sint ut, vitae eligendi hic eaque..!</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                    <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                    <ul className="list-unstyled f_list">
                      <li><a href="#">Company</a></li>
                      <li><a href="#">Android App</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s">
                    <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                    <ul className="list-unstyled f_list">
                      <li><a href="#">FAQ</a></li>
                      <li><a href="#">Term &amp; conditions</a></li>
            
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s">
                    <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                    <div className="f_social_icon">
                      <a href="#" className="fab fa-facebook">
                        <FaFacebookF/>
                      </a>
                      <a href="#" className="fab fa-twitter">
                        <FaTwitter/>
                      </a>
                      <a href="#" className="fab fa-linkedin">
                        <FaLinkedinIn/>
                      </a>
                      <a href="#" className="fab fa-pinterest">
                        <FaTelegramPlane/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
