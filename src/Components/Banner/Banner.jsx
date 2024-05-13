import React from "react";
import Arrow from "../../assets/Arrow";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="parentBanner">
      <div className="childBanner">
        <div className="menuBar">
          <div className="categories">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow>
          </div>
          <div className="otherOptions">
            <span>Cars</span>
            <span>Motorcycles</span>
            <span>Mobile Phones</span>
            <span>For Sale: Houses and Appartments</span>
            <span>Scooters</span>
            <span>Commercial & Other vehicles</span>
            <span>For Rent: Houses and Appartments</span>
          </div>
        </div>
        <div className="banner">
            <img src="../../../Images/OLXbannerImage.jpg" alt="banner" />

        </div>
      </div>
    </div>
  );
};

export default Banner;
