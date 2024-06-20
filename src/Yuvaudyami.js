import React from 'react';
import classes from './Yu.module.css';
import banner from './yuva udyami chetana kendra (2).jpg';
import event1 from './event1.png';
import event2 from './event2.jpg';
import event3 from './event3.png';


import l1 from './l1.png';
import l2 from './l2.png';
import l3 from './l3.png';
import l4 from './l4.png';
import l5 from './l5.png';

function App() {
  return (
    <div className={classes.container}>
    
      <header>
        <div className={classes.banner}>
          <img src={banner} alt="Banner" className={classes.bannerImage} />
          <div className={classes.bannerText}>
            <h1>Welcome to Bhaktivedanta Yuva Udyami Chetana Kendra</h1>
            <h2>Fueling Futures: Empowering Youth with Entrepreneurship and Employability</h2>
          </div>
        </div>
        <p className={classes.introText}>
          At Bhaktivedanta Yuva Udyami Chetana Kendra, we are dedicated to igniting the entrepreneurial spirit and enhancing the employability skills of youth. Our programs are designed to equip young individuals with the tools, knowledge, and mindset needed to thrive in today's dynamic world.
        </p>
      </header>
      <section className={classes.content}>
        <div className={classes.block}>
          <img src={l1} alt="Icon 1" className={classes.icon} />
          <h3>Empowering Youth</h3>
          <p>Our mission is to empower youth to become leaders of tomorrow by fostering innovation, creativity, and resilience. Through our holistic approach to skill development, we aim to unlock the potential of every participant and inspire them to pursue their passions and dreams.</p>
        </div>
        <div className={classes.block}>
          <img src={l2} alt="Icon 2" className={classes.icon} />
          <h3>Entrepreneurship Education</h3>
          <p>We believe in the power of entrepreneurship to drive economic growth and social change. Our entrepreneurship education programs provide aspiring entrepreneurs with the guidance, resources, and support they need to turn their ideas into successful ventures. From business planning to market research to financial management, we cover all aspects of starting and growing a business.</p>
        </div>
        <div className={classes.block}>
          <img src={l3} alt="Icon 3" className={classes.icon} />
          <h3>Employability Skills</h3>
          <p>In addition to entrepreneurship education, we also focus on enhancing employability skills to prepare youth for the job market. Our programs cover essential skills such as communication, teamwork, critical thinking, and leadership, ensuring that participants are well-equipped to succeed in any professional setting.</p>
        </div>
        <div className={`${classes.block} ${classes.fullWidthBlock}`}>
          <img src={l4} alt="Icon 4" className={classes.icon} />
          <h3>Holistic Development</h3>
          <p>At Bhaktivedanta Yuva Udyami Chetana Kendra, we believe in holistic development that encompasses physical, mental, emotional, and spiritual well-being. Through a combination of workshops, seminars, mentoring, and hands-on projects, we provide participants with a well-rounded learning experience that nurtures their personal and professional growth.</p>
        </div>
      </section>
      <footer>
        <img src={l5} alt="Icon 5" className={classes.icon1} />
        <h3>Join Us</h3>
        <p>Join us at Bhaktivedanta Yuva Udyami Chetana Kendra and embark on a journey of self-discovery, innovation, and transformation. Together, let's fuel futures, empower youth, and create a brighter tomorrow for generations to come.</p>
      </footer>
      <div className={classes.ThrivingCommunity}>
        <p>Become a Part of Our Thriving Community</p>
        <button className={classes.KnowMoreButton}>JOIN NOW</button>
      </div>
    </div>
  );
}

export default App;
