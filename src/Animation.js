import React from 'react';
import classes from './Animation.module.css';
import Header from './Header';
import Footer from './Footer';
import blog from "./blog1.png";
import blog1 from './blog2.png';
import blog2 from './blog 3.jpg';
import success1 from './3.jpg';
import success2 from './3a.jpg';
import success3 from './3b.png';
import about from './ic.png';
import history from './history.png';
import vision from './ic1.png';
import mission from './mission (1).png';
import leader from './leadership.png';
import approach from './tactics.png';
import objective from './focus.png';
import values from './customer.png';

const FactoryAnimation = () => {
  return (
    <div className={classes.factoryContainer}>
      <div className={classes.factory}>
        <div className={classes.smokestack}></div>
        <div className={classes.building}>
          <div className={classes.floor}></div>
          <div className={classes.floor}></div>
          <div className={classes.floor}></div>
          <div className={classes.floor}></div>
          <div className={classes.window}></div>
          <div className={classes.window}></div>
          <div className={classes.window}></div>
          <div className={classes.window}></div>
        </div>
        <div className={classes.crane}>
          <div className={classes.craneArm}></div>
          <div className={classes.craneHook}></div>
        </div>
        <div className={classes.conveyor}>
          <div className={classes.box}></div>
          <div className={classes.box}></div>
        </div>
      </div>
    </div>
  );
};

export default FactoryAnimation;


<div className={classes.aboutcontainer}>
<Header />
<header className={classes.aboutheader}>
    <div className={classes.icon}>
        <img src={about} alt="About Icon" className={classes.headingIcon1}/>
        <h1>About Us</h1>
    </div>
    <h2 className={classes.tagline}>Fostering Growth and Dignity in Every Life We Touch</h2>
    <p>Welcome to the Bhaktivedanta International Academy for Applied Spiritual Technology, where we are dedicated to empowering individuals through holistic development and spiritual enlightenment. As a leading institution founded by the ISKCON Youth Forum, Bhubaneswar, we are committed to nurturing the potential of youth and women, equipping them with essential skills for personal and professional success.</p>
</header>

<section className={`${classes.aboutsection} ${classes.zigzag}`}>
    <div>
        <div className={classes.headingContainer}>
            <img src={history} alt="History Icon" className={classes.headingIcon}/>
            <h2>Our History</h2>
        </div>
        <p>The history of Bhaktivedanta International Academy for Applied Spiritual Technology is a testament to the vision and dedication of its founders, who sought to create a center of learning that seamlessly integrates spiritual wisdom with modern education.</p>
        <p>Established in [Year], Bhaktivedanta Academy emerged from the collective efforts of [Founders' Names], inspired by the teachings of Srila Prabhupada, the founder of the International Society for Krishna Consciousness (ISKCON).</p>
    </div>
    <img src={success1} alt="Success Image 1" className={classes.inlineImage}/>
</section>

<section className={`${classes.aboutsection} ${classes.zigzag}`}>
    <img src={success2} alt="Success Image 2" className={classes.inlineImage}/>
    <div>
        <div className={classes.headingContainer}>
            <img src={vision} alt="Vision Icon" className={classes.headingIcon}/>
            <h2>Our Vision</h2>
        </div>
        <p>At Bhaktivedanta International Academy for Applied Spiritual Technology, our vision is to create a world where every individual is empowered to lead a fulfilling and purposeful life, driven by the principles of compassion, integrity, and service to humanity. We envision a society where holistic development is prioritized, and individuals are equipped with the tools to thrive in all aspects of life.</p>
    </div>
</section>

<section className={`${classes.aboutsection} ${classes.zigzag}`}>
    <div>
        <div className={classes.headingContainer}>
            <img src={mission} alt="Mission Icon" className={classes.headingIcon}/>
            <h2>Our Mission</h2>
        </div>
        <p>We aim to provide comprehensive employability skill development programs that integrate physical, mental, emotional, and spiritual growth. We aim to foster a supportive learning environment where participants can discover their true potential, develop essential skills, and embark on self-discovery and personal transformation.</p>
    </div>
    <img src={success3} alt="Success Image 3" className={classes.inlineImage}/>
</section>

<section className={`${classes.aboutsection} ${classes.zigzag}`}>
    <img src={leader} alt="Leadership Image" className={classes.inlineImage}/>
    <div>
        <div className={classes.headingContainer}>
            <img src={leader} alt="Leadership Icon" className={classes.headingIcon}/>
            <h2>Leadership</h2>
        </div>
        <p>Led by a team of visionary leaders and experienced educators, BI-FAST is guided by a commitment to excellence, innovation, and social responsibility. Our leadership team brings together expertise from diverse fields, ensuring that our programs are relevant, impactful, and tailored to meet the evolving needs of our participants.</p>
    </div>
</section>

<section className={`${classes.aboutsection} ${classes.zigzag}`}>
    <div>
        <div className={classes.headingContainer}>
            <img src={approach} alt="Approach Icon" className={classes.headingIcon}/>
            <h2>Our Approach</h2>
        </div>
        <p>At BI-FAST, we adopt a holistic approach to skill development, recognizing the interconnectedness of physical, mental, and spiritual well-being. Through classroom instruction, practical training, and experiential learning, we provide participants with a comprehensive toolkit for success in today's fast-paced world.</p>
    </div>
    <img src={blog1} alt="Approach Image" className={classes.inlineImage}/>
</section>

<section className={`${classes.aboutsection} ${classes.zigzag}`}>
    <img src={blog2} alt="Objectives Image" className={classes.inlineImage}/>
    <div>
        <div className={classes.headingContainer}>
            <img src={objective} alt="Objective Icon" className={classes.headingIcon}/>
            <h2>Our Objectives</h2>
        </div>
        <ul>
            <li>To empower youth and women through employability skill development programs.</li>
            <li>To foster a culture of innovation, creativity, and entrepreneurship.</li>
            <li>To promote spiritual awareness and personal growth.</li>
            <li>To cultivate ethical leadership and social responsibility.</li>
            <li>To create a supportive community of like-minded individuals committed to positive change.</li>
        </ul>
    </div>
</section>

<section className={`${classes.aboutsection} ${classes.zigzag}`}>
    <div>
        <div className={classes.headingContainer}>
            <img src={values} alt="Values Icon" className={classes.headingIcon}/>
            <h2>Our Values</h2>
        </div>
        <ul>
            <li><strong>Integrity:</strong> We are committed to honesty, transparency, and ethical conduct in all our interactions.</li>
            <li><strong>Compassion:</strong> We strive to treat others with kindness, empathy, and respect.</li>
            <li><strong>Excellence:</strong> We set high expectations for ourselves and hold ourselves accountable for delivering exceptional quality in everything we do.</li>
            <li><strong>Lifelong Learning:</strong> We foster a culture of continuous learning, empowering individuals to expand their horizons and reach their full potential.</li>
            <li><strong>Service:</strong> We are dedicated to serving others with humility, compassion, and selflessness.</li>
<li><strong>Spirituality:</strong> We embrace diversity and welcome individuals of all faiths and backgrounds, fostering an environment where spirituality is celebrated and respected.</li>
</ul>
</div>
<img src={blog} alt="Values Image" className={classes.inlineImage}/>
</section>

<section className={classes.imageSection}>
<h2>Gallery</h2>
<div className={classes.imageContainer}>
<img src={blog} alt="Gallery Image 1" className={classes.image}/>
<img src={blog1} alt="Gallery Image 2" className={classes.image}/>
<img src={blog2} alt="Gallery Image 3" className={classes.image}/>
</div>
</section>
<Footer/>
</div>