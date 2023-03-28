import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-about">
        <h3>ABOUT</h3>
        <ul>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>eshop Stories</li>
          <li>Press</li>
          <li>eshop Wholesale</li>
          <li>Corporate Information</li>
        </ul>
      </div>
      <div className="footer-help">
        <h3>HELP</h3>
        <ul>
          <li>Payments</li>
          <li>Shipping</li>
          <li>Cancellation &amp; Returns</li>
          <li>FAQ</li>
          <li>Report Infringement</li>
        </ul>
      </div>
      <div className="footer-consumer-policy">
        <h3>CONSUMER POLICY</h3>
        <ul>
          <li>Return Policy</li>
          <li>Terms Of Use</li>
          <li>Security</li>
          <li>Privacy</li>
          <li>Sitemap</li>
          <li>Grievance Redressal</li>
          <li>EPR Compliance</li>
        </ul>
      </div>
      <div className="footer-social">
        <h3>SOCIAL</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>YouTube</li>
        </ul>
      </div>
      <div className="footer-address">
        <h3>Registered Office Address:</h3>
        <p>eshop Internet Private Limited,</p>
        <p>Outer Ring Road, Devarabeesanahalli Village,</p>
        <p>Bengaluru, 560103, Karnataka, India</p>
        <p>CIN : U51109KA2012PTC066107</p>
        <p>Telephone: 044-45614700</p>
      </div>
    </footer>
  );
};

export default Footer;
