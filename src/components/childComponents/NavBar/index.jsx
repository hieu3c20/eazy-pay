import { React, useState, usetEffect } from "react";
import Logo from "../../../assets/images/image.png";
import "./style.scss";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import TextDisplaying from "../TextDisplaying";
import Account from "../ComponentsOfDashboard/Account";

const NavBar = () => {
  const handleLogout = () => {
    // Perform logout actions here (e.g., clearing session, removing tokens, etc.)
    // Then redirect to the login page
  };
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("/");

  // useEffect(() => {
  //   setCurrentPath(location.pathname);
  // }, location);

  const checkIfHighlight = (path) => {
    if (currentPath == path) {
      return "item-highlight";
    } else {
      return "";
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-container">

        <Link className="navbar-logo" to="/">
          <img className="navbar-logo-img" src={Logo} alt="Bank Logo" />
          {/* <span className="logo-text">EazyPay</span> */}
        </Link>

        <div className="navbar_user">
          <TextDisplaying
            textContent="Client"
            fontWeight="700"
            fontSize="26px"
            color="#068FFF"
          ></TextDisplaying>
          <Account></Account>
        </div>

        <div className="navbar-links">

          <Link className={`navbar-item ${checkIfHighlight("/")}`} to="/">
            <ion-icon name="layers-outline"></ion-icon>
            <TextDisplaying textContent="Dashboard"></TextDisplaying>
          </Link>

          <Link
            className={`navbar-item ${checkIfHighlight("/account")}`}
            to="/account"
          >
            <ion-icon name="swap-horizontal-outline"></ion-icon>
            <TextDisplaying textContent="Transactions"></TextDisplaying>
          </Link>

          <Link
            className={`navbar-item ${checkIfHighlight("/my-transactions")}`}
            to="/my-transactions"
          >
            <ion-icon name="wallet-outline"></ion-icon>
            <TextDisplaying textContent="Wallet"></TextDisplaying>
          </Link>
          
          <Link
            className={`navbar-item ${checkIfHighlight("/setting")}`}
            to="/setting"
          >
            <ion-icon name="person-outline"></ion-icon>
            <TextDisplaying textContent="Profile"></TextDisplaying>
          </Link>

          <button className="navbar-button" onClick={handleLogout}>
            <div>
              <ion-icon name="log-out-outline"></ion-icon>
              <TextDisplaying textContent="Logout"></TextDisplaying>
            </div>
          </button>


        </div>
      </div>
    </div>
  );
};

export default NavBar;
