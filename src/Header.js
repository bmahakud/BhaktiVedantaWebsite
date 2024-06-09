import React, { useState } from 'react';
import classes from "./Header.module.css";
import logo from './logo.png';
import login from './log-in.png';

const Header = () => {
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleProgramsDropdown = () => {
    setIsProgramsOpen(!isProgramsOpen);
  };

  const toggleResourcesDropdown = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className={classes.Header}>
      <div className={classes.LogoContainer}>
        <img src={logo} alt="Logo" className={classes.Logo} />
      </div>
      <div className={classes.Hamburger} onClick={toggleMobileNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`${classes.NavContainer} ${isMobileNavOpen ? classes.MobileNav : ''}`}>
        <button className={classes.HeaderItem}>Home</button>
        <button className={classes.HeaderItem}>About Us</button>
        <div className={classes.DropdownContainer}>
          <button className={classes.HeaderItem} onClick={toggleProgramsDropdown}>
            Our Programs
          </button>
          {isProgramsOpen && (
            <div className={classes.DropdownContent}>
              <button className={classes.DropdownItem}>Yuva Udyami Chetna Kendra</button>
              <button className={classes.DropdownItem}>Adhyatmik Jagruti Kendra</button>
            </div>
          )}
        </div>
        <button className={classes.HeaderItem}>Impact</button>
        <button className={classes.HeaderItem}>Our Partner</button>
        <div className={classes.DropdownContainer}>
          <button className={classes.HeaderItem} onClick={toggleResourcesDropdown}>
            Resources
          </button>
          {isResourcesOpen && (
            <div className={classes.DropdownContent}>
              <button className={classes.DropdownItem}>Blog</button>
              <button className={classes.DropdownItem}>Success Stories</button>
              <button className={classes.DropdownItem}>Events</button>
            </div>
          )}
        </div>
        <button className={classes.HeaderItem}>Contact</button>
      </div>
      <button className={classes.SignUpButton}>
        <span className={classes.LoginText}>Login / Sign Up</span>
        <img src={login} alt="Login" className={classes.LoginIcon} />
      </button>
    </header>
  );
};

export default Header;
