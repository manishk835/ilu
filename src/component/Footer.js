import React from "react";
function Footer() {
  return (
    <footer className="footer">
        <div className="footer-bg">
            <div className="container">
                <div className="footer-top">
                <div className="footer-logo">
                    <img src={require('./construction-img/footer-logo.png')} alt="" />
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                <div className="quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                    <li>About</li>
                    <li>Drowing</li>
                    <li>Construction</li>
                    <li>Uses Bricks</li>
                    </ul>
                </div>

                <div className="contact-us">
                    <h3>Contact Us</h3>
                    <p>
                    +88 000 147 147
                    </p>
                    <p>
                    info@yursmart.com
                    </p>
                    <p>
                    Ahmad Yani Street #27, Bandung, West Java,
                    Indonesia
                    </p>
                    <p>
                    www.yourdone.com
                    </p>
                </div>
                </div>
            </div>
        </div>    
      <div className="footer-bottom">
        <p>Copyright © BDEXPERT 2017 All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
