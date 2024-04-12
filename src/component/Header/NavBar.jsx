import { useState } from "react";
import "./navbar.css";
import * as IoIcons from "react-icons/io";
import { motion } from "framer-motion";
const NavBar = () => {
  const [dropDown, setDropDown] = useState(false);
  const showDropDown = () => {
    setDropDown(!dropDown);
  };
  return (
    <>
      <header>
        <section className="header-content">
          <div className="logo-menu">
            <div className="hearder-logo">
              <h4 className="logo">
                <a href="/">Entourage</a>
              </h4>
            </div>
            <div className="use-app">
              <button className="use-app-btn">Use App</button>
            </div>
            <div className="menu-bar">
              {dropDown ? (
                <IoIcons.IoMdClose className="close" onClick={showDropDown} />
              ) : (
                <IoIcons.IoIosMenu className="bars" onClick={showDropDown} />
              )}
            </div>
          </div>

          <nav
            className={
              dropDown ? "header-nav-links show-links" : "header-nav-links"
            }
          >
            <ul className="links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#howItWorks">Services</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </nav>
          <div
            className={
              dropDown ? "nav-btn-container show-btn" : "nav-btn-container"
            }
          >
            <motion.button
              className="login-register"
              whileHover={{ scale: 0.9 }}
            >
              <a href="">Login / Register</a>
            </motion.button>
          </div>
        </section>
      </header>
    </>
  );
};

export default NavBar;
