import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./Header.module.css";
import logo from './logo.png';
import login from './log-in.png';

const Header = () => {
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleProgramsDropdown = () => {
    setIsProgramsOpen(!isProgramsOpen);
    if (!isProgramsOpen) {
      setIsResourcesOpen(false);
    }
  };

  const toggleResourcesDropdown = () => {
    setIsResourcesOpen(!isResourcesOpen);
    if (!isResourcesOpen) {
      setIsProgramsOpen(false);
    }
  };

  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);

  const closeDropdowns = () => {
    setIsProgramsOpen(false);
    setIsResourcesOpen(false);
  };

  return (
    <header className={classes.Header}>
      <div className={classes.LogoContainer}>
        <img src={logo} alt="Logo" className={classes.Logo} />
      </div>
      <nav className={`${classes.NavContainer} ${isMobileNavOpen ? classes.MobileNav : ''}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? `${classes.HeaderItem} ${classes.Active}` : classes.HeaderItem} onClick={closeDropdowns}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? `${classes.HeaderItem} ${classes.Active}` : classes.HeaderItem} onClick={closeDropdowns}>About Us</NavLink>
        <div className={classes.DropdownContainer}>
          <button className={classes.HeaderItem} onClick={toggleProgramsDropdown}>
            Our Programs
          </button>
          {isProgramsOpen && (
            <div className={classes.DropdownContent}>
              <NavLink to="/ourprogram" className={({ isActive }) => isActive ? `${classes.DropdownItem} ${classes.Active}` : classes.DropdownItem} onClick={closeDropdowns}>Our Programs</NavLink>
              <NavLink to="/ourprogram/yuvaudyami" className={({ isActive }) => isActive ? `${classes.DropdownItem} ${classes.Active}` : classes.DropdownItem} onClick={closeDropdowns}>Yuva Udyami Chetna Kendra</NavLink>
              <NavLink to="/ourprogram/adj" className={({ isActive }) => isActive ? `${classes.DropdownItem} ${classes.Active}` : classes.DropdownItem} onClick={closeDropdowns}>Adhyatmik Jagruti Kendra</NavLink>
            </div>
          )}
        </div>
        <NavLink to="/impact" className={({ isActive }) => isActive ? `${classes.HeaderItem} ${classes.Active}` : classes.HeaderItem} onClick={closeDropdowns}>Impact</NavLink>
        <NavLink to="/partner" className={({ isActive }) => isActive ? `${classes.HeaderItem} ${classes.Active}` : classes.HeaderItem} onClick={closeDropdowns}>Our Partner</NavLink>
        <div className={classes.DropdownContainer}>
          <button className={classes.HeaderItem} onClick={toggleResourcesDropdown}>
            Resources
          </button>
          {isResourcesOpen && (
            <div className={classes.DropdownContent}>
              <NavLink to="/blog" className={({ isActive }) => isActive ? `${classes.DropdownItem} ${classes.Active}` : classes.DropdownItem} onClick={closeDropdowns}>Blog</NavLink>
              <NavLink to="/success" className={({ isActive }) => isActive ? `${classes.DropdownItem} ${classes.Active}` : classes.DropdownItem} onClick={closeDropdowns}>Success Stories</NavLink>
              <NavLink to="/event" className={({ isActive }) => isActive ? `${classes.DropdownItem} ${classes.Active}` : classes.DropdownItem} onClick={closeDropdowns}>Events</NavLink>
            </div>
          )}
        </div>
        <NavLink to="/contact" className={({ isActive }) => isActive ? `${classes.HeaderItem} ${classes.Active}` : classes.HeaderItem} onClick={closeDropdowns}>Contact</NavLink>
      </nav>
      <button className={classes.SignUpButton}>
        <span className={classes.LoginText}>Login / Sign Up</span>
        <img src={login} alt="Login" className={classes.LoginIcon} />
      </button>
    </header>
  );
};

export default Header;
