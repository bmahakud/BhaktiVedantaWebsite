import React from 'react';
import classes from './Impact.module.css';
import banner from './our impact.jpg';

import impact1 from './event1.png';
import impact2 from './event2.jpg';
import impact3 from './event3.png';
import impact4 from './event1.png';
import l1 from './l1.png';
import l2 from './l2.png';
import l3 from './l3.png';
import l4 from './l4.png';
import l5 from './l5.png';

function OurImpact() {
  return (
    <div className={classes.container}>
      <header>
        <div className={classes.banner}>
          <img src={banner} alt="Banner" className={classes.bannerImage} />
          <div className={classes.bannerText}>
            <h1> Our Impact</h1>
            <p>Transforming Lives, Inspiring Change</p>
          </div>
        </div>
        <h2>At Bhaktivedanta International Academy for Applied Spiritual Technology, our impact extends far beyond the walls of our institution. We are proud to be catalysts for positive change, empowering individuals and communities to thrive and flourish.</h2>
      </header>
      <section className={classes.content}>
        <div className={classes.block}>
          <img src={impact1} alt="500+ Youth Empowered" className={classes.eventImage} />
          <img src={l1} alt="Icon 1" className={classes.icon} />
          <h3>500+ Youth Empowered</h3>
          <p>Over 500 young individuals have participated in our programs, gaining crucial employability and life skills.</p>
        </div>
        <div className={classes.block}>
          <img src={impact1} alt="200+ Workshops Conducted" className={classes.eventImage} />
          <img src={l2} alt="Icon 2" className={classes.icon} />
          <h3>200+ Workshops Conducted</h3>
          <p>We have organized over 200 workshops focusing on various aspects of personal and professional development.</p>
        </div>
        <div className={classes.block}>
          <img src={impact3} alt="200+ Community Members Engaged" className={classes.eventImage} />
          <img src={l3} alt="Icon 3" className={classes.icon} />
          <h3>200+ Community Members Engaged</h3>
          <p>Through our outreach and community programs, we have positively impacted the lives of over 200 community members.</p>
        </div>
        <div className={`${classes.block} ${classes.fullWidthBlock}`}>
          <img src={l1} alt="Empowering Youth and Women" className={classes.icon} />
          <h3>Empowering Youth and Women</h3>
          <p>Through our programs and initiatives, we have empowered over 500 youth and women to unlock their potential and pursue their dreams. From entrepreneurship education to employability skill development, we provide the resources and support needed to foster economic independence and self-reliance.</p>
        </div>
        <div className={`${classes.block} ${classes.fullWidthBlock}`}>
          <img src={l4} alt="Fostering Holistic Development" className={classes.icon} />
          <h3>Fostering Holistic Development</h3>
          <p>We believe in nurturing the holistic development of every individual, addressing their physical, mental, emotional, and spiritual well-being. To date, we have conducted over 200 workshops and seminars on topics ranging from mindfulness to personal growth, equipping participants with the tools and knowledge to lead fulfilling and purposeful lives.</p>
        </div>
        <div className={`${classes.block} ${classes.fullWidthBlock}`}>
          <img src={l5} alt="Building Sustainable Communities" className={classes.icon} />
          <h3>Building Sustainable Communities</h3>
          <p>We are committed to building sustainable communities that thrive in harmony with nature. Through our environmental awareness programs and initiatives, we have engaged over 200 community members in conservation efforts, eco-friendly practices, and community-based solutions to environmental challenges.</p>
        </div>
        <div className={`${classes.block} ${classes.fullWidthBlock}`}>
          <img src={l4} alt="Promoting Social Responsibility" className={classes.icon} />
          <h3>Promoting Social Responsibility</h3>
          <p>At Bhaktivedanta International Academy, we instill values of social responsibility and civic engagement in our participants. Through community service projects, volunteer initiatives, and outreach programs, we have impacted the lives of thousands, empowering individuals to make a positive impact on society and contribute to the greater good.</p>
        </div>
        <div className={`${classes.block} ${classes.fullWidthBlock}`}>
          <img src={l3} alt="Inspiring Global Change" className={classes.icon} />
          <h3>Inspiring Global Change</h3>
          <p>Our vision extends beyond borders, as we strive to inspire global change and create a more just, equitable, and sustainable world. Through partnerships, collaborations, and advocacy efforts, we work towards addressing pressing global issues and promoting peace, unity, and social justice.</p>
        </div>
      </section>
      <footer>
        <img src={l5} alt="Join Us" className={classes.icon} />
        <h3>Join Us</h3>
        <p>Join us in our mission to transform lives, inspire change, and create a brighter future for generations to come. Together, we can make a meaningful impact and leave a lasting legacy of hope, compassion, and empowerment. Let's work together to build a world where every individual has the opportunity to thrive and succeed.</p>
      </footer>
      <div className={classes.ThrivingCommunity}>
        <p>Become a Part of Our Thriving Community</p>
        <button className={classes.KnowMoreButton}>JOIN NOW</button>
      </div>
    </div>
  );
}

export default OurImpact;
