import React, { useContext, useState } from "react";
import "./Header.css";
import Olxlogo from "../../assets/Olxlogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import Sellbtn from "../../assets/Sellbtn";
import SellbtnPlus from "../../assets/SellbtnPlus";
import { AuthContext } from "../../Context/Context";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user } = useContext(AuthContext);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(user);
    console.log("clicked");
    setShowLogout(!showLogout);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setShowLogout(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSell = () => {
    navigate("/createPost");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brand">
          <Olxlogo></Olxlogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input type="text" placeholder="Find Cars, Mobile, houses" />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span>ENGLISH</span>
          <Arrow></Arrow>
        </div>
        <div className="login">
          {user && (
            <span
              onClick={handleClick}
              style={{
                color: "orangered",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              {user.displayName}&#8628;
            </span>
          )}
          {!user && (
            <>
              <span onClick={handleLogin}>Login</span> <hr />
            </>
          )}
        </div>
        <div onClick={handleSell} className="sell">
          <Sellbtn></Sellbtn>
          <div className="sellMenuContent">
            <SellbtnPlus></SellbtnPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
      <div>
        {showLogout && (
          <div className="logoutDiv">
            <p style={{ color: "red" }}>{user.displayName}</p>
            <br />
            <p>My Ads</p>

            <p>Profile</p>

            <p>Help</p>

            <p>Settings</p>
            <div>
              <button className="logBtn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
