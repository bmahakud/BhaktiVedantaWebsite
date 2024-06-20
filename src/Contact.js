import React from 'react';
import classes from './contact.module.css';
import banner from './contact us.jpg';
import t1 from "./twitter (1).png";
import t3 from "./youtube (3).png";
import t4 from "./instagram (1).png";
import t5 from "./facebook (2).png";
import s1 from './home (2).png';
import s2 from './email.png';
import s3 from './phone-call.png';

const ContactUs = () => {
  return (
    <div className={classes.contactUs}>
      <div className={classes.banner}>
        <img src={banner} alt="Contact Us Banner" className={classes.bannerImage} />
        <div className={classes.bannerText}>
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Please fill out the form below to get in touch with us.</p>
        </div>
      </div>
      <form className={classes.contactForm}>
        <div className={classes.formGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className={classes.submitButton}>Submit</button>
      </form>
      <div className={classes.contactDetails}>
        <h2>Reach out to us</h2>
        <p><img src={s3} alt="Phone" /> Phone: +91-9437405606</p>
        <p><img src={s1} alt="Address" /> Address: Bhubaneswar</p>
        <p><img src={s2} alt="Email" /> Email: <a href="mailto:info@bhaktivedantaacademy.org">info@bhaktivedantaacademy.org</a></p>
        <div>
          <h3>Follow us on:</h3>
          <a href="#"><img src={t1} alt="Twitter" /></a>
          <a href="#"><img src={t3} alt="YouTube" /></a>
          <a href="#"><img src={t4} alt="Instagram" /></a>
          <a href="#"><img src={t5} alt="Facebook" /></a>
        </div>
      </div>

      <div className={classes.ThrivingCommunity}>
        <p>Become a Part of Our Thriving Community</p>
        <button className={classes.KnowMoreButton}>JOIN NOW</button>
      </div>
      
    </div>
  );
};

export default ContactUs;
