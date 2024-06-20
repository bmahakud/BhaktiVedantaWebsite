import React, { useState } from "react";
import classes from './Footer.module.css';
import t1 from "./twitter (1).png";
import t3 from "./youtube (3).png";
import t4 from "./instagram (1).png";
import t5 from "./facebook (2).png";
import s1 from './home (2).png';
import s2 from './email.png';
import s3 from './phone-call.png';

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
        <div className={classes.leftSection}>
          <p className={classes.description}>
            Bhaktivedanta International Academy for Applied Spiritual Technology is dedicated to empowering youth through holistic development. We offer specialized programs in employability skills, entrepreneurship, and spiritual growth to foster a balanced and fulfilling life.
          </p>
        </div>
        <div className={classes.rightSection}>
          <div className={classes.emailSubscription}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email ID"
              className={classes.emailInput}
            />
            <button
              className={classes.subscribeButton}
              onClick={handleSubscribe}
            >
              Sign Up
            </button>
            {error && (
              <span className={classes.errorMessage}>{error}</span>
            )}
          </div>
          <p className={classes.stayUpdated}>
            Stay updated with our latest news, programs, and events.
          </p>
        </div>
      </div>
      <div className={classes.contactAndLinks}>
        <div className={classes.contactInfo}>
          <div className={classes.text}>
            <h2>Reach out to us</h2>
            <h2>Get your questions answered about us..</h2>
          </div>
          <div className={classes.details}>
            <div className={classes.contactItem}>
              <img src={s3} alt="Phone" className={classes.contactIcon} />
              <span>Phone: +91-9437405606</span>
            </div>
            <div className={classes.contactItem}>
              <img src={s1} alt="Home" className={classes.contactIcon} />
              <span>Address: Bhubaneswar</span>
            </div>
            <div className={classes.contactItem}>
              <img src={s2} alt="Email" className={classes.contactIcon} />
              <span>Email: info@bhaktivedantaacademy.org</span>
            </div>
          </div>
        </div>
        <div className={classes.footerLinks}>
          <div className={classes.footerSection}>
            <h2>Quick Links</h2>
            <p>Home</p>
            <p>About Us</p>
            <p>Our Programs</p>
            <p>Impact</p>
            <p>Blog</p>
            <p>Contact Us</p>
            <p>FAQs</p>
          </div>
          <div className={classes.footerSection}>
            <h2>Get Involved</h2>
            <p>Partner With Us</p>
            <p>Volunteer Opportunities</p>
            <p>Career</p>
          </div>
          <div className={classes.footerSection}>
            <h2>Follow Us</h2>
            <div className={classes.footerIcons}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={classes.iconButton}>
                <img src={t5} alt="Facebook" className={classes.icon} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className={classes.iconButton}>
                <img src={t1} alt="Twitter" className={classes.icon} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={classes.iconButton}>
                <img src={t4} alt="Instagram" className={classes.icon} />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className={classes.iconButton}>
                <img src={t3} alt="YouTube" className={classes.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footerBottom}>
        <p>© 2024 Bhaktivedanta International Academy for Applied Spiritual Technology. All rights reserved.</p>
        <p>
          <a href="#" className={classes.footerLink}>Privacy Policy</a> |
          <a href="#" className={classes.footerLink}>Terms & Conditions</a> 
        </p>
        <a href="#" className={classes.footerLink}>Powered by DiracAI Private Limited</a>
      </div>
    </footer>
  );
}

export default Footer;
