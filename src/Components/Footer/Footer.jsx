import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <div className="parentFooter">
      <div className="content">
        <div>
          <div className="heading">
            <p>Popular Locations</p>
          </div>
          <div className="list">
            <ul style={{listStyleType:'none'}}>
              <li>kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>Trending Locations</p>
          </div>
          <div className="list">
            <ul style={{listStyleType:'none'}}>
              <li>Bhuvaneshawar</li>
              <li>Hyderabad</li>
              <li>Chandigarh</li>
              <li>Nashik</li>
            </ul>
          </div>
        </div>

        <div style={{marginBottom:'50px'}}>
          <div className="heading">
            <p>About Us</p>
          </div>
          <div className="list">
            <ul style={{listStyleType:'none'}}>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="heading">
            <p>Olx</p>
          </div>
          <div className="list">
            <ul style={{listStyleType:'none'}}>
              <li>Blog</li>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal&Privacy information</li>
            </ul>
          </div>
        </div>
        <div style={{marginBottom:'72px'}}>
          <div className="heading">
            <p>Follow Us</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Help - Sitemap</p>
        <p>All rights resreved © 2006-2024 OLX</p>
      </div>
    </div>
  );
};

export default Footer;
