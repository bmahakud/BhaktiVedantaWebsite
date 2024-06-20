import React from 'react';
import classes from './success.module.css';
import designWithinReach from './event1.png';
import jenisIceCream from './event1.png';
import whirlpool from './event1.png';
import banner from './success stories.jpg';

const SuccessStories = () => {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <div className={classes.banner}>
          <img src={banner} alt="Success Stories Banner" className={classes.bannerImage} />
          <div className={classes.bannerText}>
            <h2>SUCCESS STORIES</h2>
            <h3>Chosen by millions of businesses, from small companies to the Fortune 500.</h3>
          </div>
        </div>
      </header>
      <div className={classes.stories}>
        <div className={classes.story}>
          <img src={designWithinReach} alt="Design Within Reach" className={classes.storyImage} />
          <div className={classes.storyContent}>
            <h4>Design Within Reach</h4>
            <p>We want to be more nimble, we want to be faster. Google allows us to be closer to the customer.</p>
          </div>
        </div>
        <div className={classes.story}>
          <img src={jenisIceCream} alt="Jeni's Splendid Ice Cream" className={classes.storyImage} />
          <div className={classes.storyContent}>
            <h4>Jeni's Splendid Ice Cream</h4>
            <p>With Google, we can do everything large businesses do even though we're small, like sharing information across our kitchen, ful...</p>
          </div>
        </div>
        <div className={classes.story}>
          <img src={whirlpool} alt="Whirlpool" className={classes.storyImage} />
          <div className={classes.storyContent}>
            <h4>Whirlpool</h4>
            <p>Google is critical to helping us innovate faster — to collapse geography and take the best of our global ideas and apply them l...</p>
          </div>
        </div>
      </div>
      <footer className={classes.footer}>
        
        <button className={classes.ctaButton}>COMING SOON...</button>
      </footer>
      <div className={classes.ThrivingCommunity}>
        <p>Become a Part of Our Thriving Community</p>
        <button className={classes.KnowMoreButton}>JOIN NOW</button>
      </div>
    </div>
  );
};

export default SuccessStories;
