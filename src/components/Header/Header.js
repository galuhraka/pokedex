import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import pokeball from "../../images/pokeball.png";
import "./Header.css";
import { auth } from "../../Auth/Firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();

  const [show, handleShow] = useState(false);

  const logOut = () => {
    signOut(auth);
    navigate("/login");
  };

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}  `}>
      <h1 className="nav__title">Pokẽdex</h1>
      <div className="nav__contents">
        <img className="nav__logo" src={pokeball} alt="" />

        {/* <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        /> */}
        <Button className="nav__btn" onClick={logOut}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
