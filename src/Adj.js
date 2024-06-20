import React from 'react';
import classes from './Yu.module.css';
import banner from './adhyatmic jagruti kendra (2).jpg';

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
            <h1>Welcome to Bhaktivedanta Adhyatmik Jagruti Kendra</h1>
            <h2>Awakening Spirits, Shaping Futures, Enlightening Souls</h2>
          </div>
        </div>
      </header>
      <section className={classes.content}>
        <div className={classes.block}>
          <img src={l1} alt="Icon 1" className={classes.icon} />
          <h3>Awakening Spirits</h3>
          <p>Our mission is to awaken the dormant spiritual consciousness within each individual and facilitate a deeper connection with the divine. Through spiritual practices, meditation, and introspection, we help participants explore the depths of their souls and uncover the eternal truths that lie within.</p>
        </div>
        <div className={classes.block}>
          <img src={l2} alt="Icon 2" className={classes.icon} />
          <h3>Shaping Futures</h3>
          <p>We believe that spiritual enlightenment is the key to shaping a brighter future for individuals and society as a whole. Our programs empower participants to transcend their limitations, overcome obstacles, and manifest their highest potential in all areas of life. By instilling values of compassion, integrity, and service, we inspire individuals to become agents of positive change in the world.</p>
        </div>
        <div className={classes.block}>
          <img src={l3} alt="Icon 3" className={classes.icon} />
          <h3>Enlightening Souls</h3>
          <p>At Bhaktivedanta Adhyatmik Jagruti Kendra, we are dedicated to enlightening souls and illuminating the path to self-realization. Through the study of ancient wisdom, sacred texts, and spiritual teachings, we provide participants with the knowledge and tools they need to embark on a journey of self-discovery and inner transformation.</p>
        </div>
        <div className={`${classes.block} ${classes.fullWidthBlock}`}>
          <img src={l4} alt="Icon 4" className={classes.icon} />
          <h3>Join Us</h3>
          <p>Join us at Bhaktivedanta Adhyatmik Jagruti Kendra and embark on a profound journey of spiritual awakening, personal growth, and enlightenment. Together, let's awaken spirits, shape futures, and enlighten souls, as we strive to create a world filled with peace, harmony, and spiritual wisdom.</p>
        </div>
      </section>
      <footer>
        <img src={l5} alt="Icon 5" className={classes.icon1} />
        <h3>Join Us</h3>
        <p>Join us at Bhaktivedanta Adhyatmik Jagruti Kendra and embark on a profound journey of spiritual awakening, personal growth, and enlightenment. Together, let's awaken spirits, shape futures, and enlighten souls, as we strive to create a world filled with peace, harmony, and spiritual wisdom.</p>
      </footer>
      <div className={classes.ThrivingCommunity}>
        <p>Become a Part of Our Thriving Community</p>
        <button className={classes.KnowMoreButton}>JOIN NOW</button>
      </div>
    </div>
  );
}

export default App;
