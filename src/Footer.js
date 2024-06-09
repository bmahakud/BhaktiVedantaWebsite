import classes from './Footer.module.css';
import t1 from "./twitter (1).png";
import t2 from "./whatsapp (1).png";
import t3 from "./youtube (3).png";
import t4 from "./instagram (1).png";
import t5 from "./facebook (2).png";
import t6 from "./linkedin (1).png";
import t7 from "./right-arrow (1).png";
import React, { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setError("");
    } else {
      setError("Please add Email");
    }
  };

  return (
    <footer className={classes.footer}>
      <div className={classes.footerTop}>
        <div className={classes.footerIcons}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={classes.iconButton}>
            <img src={t4} alt="Instagram" className={classes.icon} />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className={classes.iconButton}>
            <img src={t2} alt="WhatsApp" className={classes.icon} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className={classes.iconButton}>
            <img src={t3} alt="YouTube" className={classes.icon} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className={classes.iconButton}>
            <img src={t1} alt="Twitter" className={classes.icon} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={classes.iconButton}>
            <img src={t5} alt="Facebook" className={classes.icon} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={classes.iconButton}>
            <img src={t6} alt="LinkedIn" className={classes.icon} />
          </a>
        </div>
        <div className={classes.newsletter}>
          {!isSubscribed ? (
            <div className={classes.emailSubscription}>
              <span className={classes.emailLabel}>NEWS LETTER:</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL"
                className={classes.emailInput}
              />
              <button
                className={classes.subscribeButton}
                onClick={handleSubscribe}
              >
                <img
                  src={t7}
                  alt="Subscribe"
                  className={classes.blinkingArrow}
                />
              </button>
              {error && (
                <span className={classes.errorMessage}>{error}</span>
              )}
            </div>
          ) : (
            <span className={classes.thankYouMessage}>
              Thank You for Subscribing!
            </span>
          )}
        </div>
      </div>
      <div className={classes.footerSections}>
        <div className={classes.footerSection}>
          <h2>COMPANY</h2>
          <p>About Us</p>
          <p>Vision</p>
          <p>Mission</p>
        </div>
        <div className={classes.footerSection}>
          <h2>PORTFOLIO</h2>
          <p>Applications</p>
          <p>Projects</p>
          <p>Pre Engineered Building</p>
        </div>
        <div className={classes.footerSection}>
          <h2>PEOPLE</h2>
          <p>Team</p>
          <p>Vision</p>
          <p>Careers</p>
        </div>
        <div className={classes.footerSection}>
          <h2>SOCIETY</h2>
          <p>Brighter Futures</p>
        </div>
        <div className={classes.footerSection}>
          <h2>NEWSROOM</h2>
          <p>Press Releases</p>
        </div>
        <div className={classes.footerSection}>
          <h2>STORIES</h2>
          <p>Blogs</p>
        </div>
        <div className={classes.footerSection}>
          <h2>MISCELLANEOUS</h2>
          <p>CONTACT US</p>
          <p>DISCLAIMER</p>
          <p>STATUTORY DOCUMENTATION</p>
          <p>POLICIES</p>
        </div>
      </div>
      <div className={classes.footerBottom}>
        © 2024 - Bhakti Vedant. All rights reserved.
      </div>
      <div className={classes.footerBottom1}>
        Powered by DiracAI Private Limited
      </div>
    </footer>
  );
}

export default Footer;
