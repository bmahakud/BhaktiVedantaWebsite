import React from 'react';
import classes from './Partner.module.css';
import banner from './our partner (2).jpg';

import event1 from './event1.png';
import event2 from './event2.jpg';
import event3 from './event3.png';

function OurPartners() {
  return (
    <div className={classes.container}>
      <header>
        <div className={classes.banner}>
          <img src={banner} alt="Banner" className={classes.bannerImage} />
          <div className={classes.bannerText}>
            <h1>Our Partners</h1>
            <p>Empowering Communities Through Partnership</p>
          </div>
        </div>
        <p className={classes.introText}>
          Mahanadi Coalfields Limited (MCL) stands as a proud partner for the Bhaktivedanta International Academy for Applied Spiritual Technology project. With a shared commitment to holistic development and empowerment, our collaboration embodies the spirit of progress and innovation.
        </p>
      </header>
      <section className={classes.content}>
        <div className={classes.block}>
          <img src={event1} alt="Event 1" className={classes.eventImage} />
          <div className={classes.blockText}>
            <p>The partnership between Bhaktivedanta International Academy for Applied Spiritual Technology and Mahanadi Coalfields Limited (MCL) marks a significant collaboration aimed at fostering holistic development and empowerment within our communities.</p>
            <button className={classes.learnMoreButton}>Learn More</button>
          </div>
        </div>
        <div className={classes.block}>
          <img src={event2} alt="Event 2" className={classes.eventImage} />
          <div className={classes.blockText}>
            <p>MCL's contribution to our project is invaluable, reflecting their commitment to social responsibility and sustainable growth. Through their support, we have been able to expand our reach and impact, offering transformative programs and initiatives to a wider audience.</p>
            <button className={classes.learnMoreButton}>Learn More</button>
          </div>
        </div>
        <div className={classes.block}>
          <img src={event3} alt="Event 3" className={classes.eventImage} />
          <div className={classes.blockText}>
            <p>From providing financial assistance to sharing expertise and resources, MCL has played a pivotal role in our journey towards creating positive change. Their dedication to our shared vision of empowering individuals with spiritual wisdom and practical skills has strengthened our efforts and amplified our impact.</p>
            <button className={classes.learnMoreButton}>Learn More</button>
          </div>
        </div>
        <div className={classes.block}>
          <img src={event1} alt="Success 1" className={classes.eventImage} />
          <div className={classes.blockText}>
            <p>Together, Bhaktivedanta International Academy and MCL are not only transforming lives but also building a brighter future for generations to come. Through this partnership, we are laying the foundation for a more enlightened and empowered society, where individuals can thrive and contribute meaningfully to the world around them.</p>
            <button className={classes.learnMoreButton}>Learn More</button>
          </div>
        </div>
      </section>
      <div className={classes.stripe}></div>
      <div className={classes.ThrivingCommunity}>
        <p>Become a Part of Our Thriving Community</p>
        <button className={classes.KnowMoreButton}>JOIN NOW</button>
      </div>
    </div>
  );
}

export default OurPartners;
