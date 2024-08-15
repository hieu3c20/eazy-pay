import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import "./style.scss";
import Account from "../Account";
import CheckoutStage from "../CheckoutStage";
import { useNavigate } from "react-router-dom";

const SearchInput = ({customWidth}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isAccountClicked, setIsAccountClicked] = useState(false);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const clearSearchText = () => {
    setSearchText("");
  };

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleBlur = () => {
    setIsClicked(false);
  };

  const handleAccountClick = (accountData) => {
    setIsAccountClicked(true);

    const { name, phoneNumber, imageUrl } = accountData;
    setName(name);
    setPhoneNumber(phoneNumber);
    setImageUrl(imageUrl);

    navigate("/account/send-and-request");
  };

  return (
    <div className="search-input" style={{width: customWidth}}>
      <div
        className={`search-input__container ${isClicked ? "clicked" : ""}`}
        onClick={handleClick}
        onBlur={handleBlur}
        tabIndex={0}
      >
        <FaSearch className="search-input__icon search-input__icon--search" />

        <input
          type="text"
          placeholder="Search by name, @username, email, or mobile phone"
          className="search-input__field"
          value={searchText}
          onChange={handleInputChange}
        />

        <FaTimes
          className="search-input__icon search-input__icon--clear"
          onClick={clearSearchText}
        />
      </div>

      {searchText && !isAccountClicked && (
        <Account
          imageUrl="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          name="John Doe"
          phoneNumber="0868975422"
          onClick={handleAccountClick}
        />
      )}
      
    </div>
  );
};

export default SearchInput;
