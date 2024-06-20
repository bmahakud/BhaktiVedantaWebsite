import React from 'react';
import classes from './Event.module.css';
import eventImage from './event1.png';
import banner from './events (2).jpg';

const EventLandingPage = () => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <div className={classes.banner}>
          <img src={banner} alt="Event Banner" className={classes.bannerImage} />
          <div className={classes.bannerText}>
            <h1>Event Landing Page Templates </h1>
            <div className={classes.author}>
              <span>By Surjith S M</span>
             
            </div>
          </div>
        </div>
      </header>
    
      <div className={classes.description}>
        <h2>GATHER</h2>
        <p>EVENT LANDING</p>
      </div>
      <div className={classes.eventDetails}>
        <div className={classes.event}>
          <img src={eventImage} alt="Event" className={classes.eventImage} />
          <div className={classes.eventContent}>
            <h3>A CREATIVE CONFERENCE</h3>
            <h2>INSPIRE. CREATE. REPEAT.</h2>
            <p>August 21st - 22nd 2016</p>
            <p>Stockholm, Sweden</p>
            <button className={classes.ctaButton}>COMING SOON ...</button>
            <p>Gather is a responsive website template for events, conferences, meetups, webinars etc. This template can be used...</p>
            <div className={classes.countdown}>
              <div>
                <h4>402</h4>
                <p>Days</p>
              </div>
              <div>
                <h4>20</h4>
                <p>Hours</p>
              </div>
              <div>
                <h4>00</h4>
                <p>Minutes</p>
              </div>
              <div>
                <h4>18</h4>
                <p>Seconds</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.event}>
          <img src={eventImage} alt="Event" className={classes.eventImage} />
          <div className={classes.eventContent}>
            <h3>A CREATIVE CONFERENCE</h3>
            <h2>INSPIRE. CREATE. REPEAT.</h2>
            <p>August 21st - 22nd 2016</p>
            <p>Stockholm, Sweden</p>
            <button className={classes.ctaButton}>COMING SOON ...</button>
            <p>Gather is a responsive website template for events, conferences, meetups, webinars etc. This template can be used...</p>
            <div className={classes.countdown}>
              <div>
                <h4>402</h4>
                <p>Days</p>
              </div>
              <div>
                <h4>20</h4>
                <p>Hours</p>
              </div>
              <div>
                <h4>00</h4>
                <p>Minutes</p>
              </div>
              <div>
                <h4>18</h4>
                <p>Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={classes.footer}>
        <p>SPONSERED BY </p>
        <div className={classes.sponsors}>
          <img src="paypal.png" alt="PayPal" />
          <img src="eventbrite.png" alt="Eventbrite" />
        </div>
      </footer>
      <div className={classes.ThrivingCommunity}>
        <p>Become a Part of Our Thriving Community</p>
        <button className={classes.KnowMoreButton}>JOIN NOW</button>
      </div>
    </div>
  );
};

export default EventLandingPage;
