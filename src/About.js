import React from "react";
import classes from "./About.module.css";
import pic from "./banner.jpg";
import Header from "./Header";
import Footer from "./Footer";
import history from "./history.png";
import about from "./ic.png";
import vision from "./icon1.png";
import mission from "./mission (1).png";
import leadership from "./ic1.png";
import approachImage from "./blog1.png";
import h1 from "./integrity.png";
import h2 from "./compassion (1).png";
import h3 from "./excellence.png";
import h4 from "./learning.png";
import h5 from "./services.png";
import h6 from "./spiritual.png"
import Header from "./Header";

const About = () => {
  return (
    <div className={classes.aboutContainer}>
      <Header />
      <div
        className={classes.banner}
        style={{ backgroundImage: `url(${pic})` }}
      >
        <div className={classes.tagline}>
          Fostering Growth and Dignity in Every Life We Touch
        </div>
      </div>
     
        <section className={classes.aboutSection}>
          
            <div className={classes.headingContainer1}>
              <img
                src={about}
                alt="About Us Icon"
                className={classes.headingIcon}
              />
              <h2>About Us</h2>
            </div>
            <div className={classes.sectionContent1}>
              <p>
                Welcome to the Bhaktivedanta International Academy for Applied
                Spiritual Technology, where we are dedicated to empowering
                individuals through holistic development and spiritual
                enlightenment. As a leading institution founded by the ISKCON
                Youth Forum, Bhubaneswar, we are committed to nurturing the
                potential of youth and women, equipping them with essential
                skills for personal and professional success.
              </p>
            </div>
          
        </section>
      


      <div className={classes.restContent}>
        <div className={classes.boxHeading}>
          <h1>More About Us</h1>
        </div>
        <section className={classes.squareBox}>
          <div className={classes.sectionContainer}>
            <div className={classes.headingContainer}>
              <img
                src={history}
                alt="History Icon"
                className={classes.headingIcon}
              />
              <h2>Our History</h2>
            </div>
            <div className={classes.sectionContent}>
              <p>
                The history of Bhaktivedanta International Academy for Applied
                Spiritual Technology is a testament to the vision and dedication
                of its founders, who sought to create a center of learning that
                seamlessly integrates spiritual wisdom with modern education.
              </p>
              <p>
                Established in [Year], Bhaktivedanta Academy emerged from the
                collective efforts of [Founders' Names], inspired by the
                teachings of Srila Prabhupada, the founder of the International
                Society for Krishna Consciousness (ISKCON).
              </p>
            </div>
          </div>
        </section>
        <section className={classes.squareBox}>
          <div className={classes.sectionContainer}>
            <div className={classes.headingContainer}>
              <img
                src={vision}
                alt="Vision Icon"
                className={classes.headingIcon}
              />
              <h2>Our Vision</h2>
            </div>
            <div className={classes.sectionContent}>
              <p>
                At Bhaktivedanta International Academy for Applied Spiritual
                Technology, our vision is to create a world where every
                individual is empowered to lead a fulfilling and purposeful
                life, driven by the principles of compassion, integrity, and
                service to humanity. We envision a society where holistic
                development is prioritized, and individuals are equipped with
                the tools to thrive in all aspects of life.
              </p>
            </div>
          </div>
        </section>
        <section className={classes.squareBox}>
          <div className={classes.sectionContainer}>
            <div className={classes.headingContainer}>
              <img
                src={mission}
                alt="Mission Icon"
                className={classes.headingIcon}
              />
              <h2>Our Mission</h2>
            </div>
            <div className={classes.sectionContent}>
              <p>
                We aim to provide comprehensive employability skill development
                programs that integrate physical, mental, emotional, and
                spiritual growth. We aim to foster a supportive learning
                environment where participants can discover their true
                potential, develop essential skills, and embark on
                self-discovery and personal transformation.
              </p>
            </div>
          </div>
        </section>
        <section className={classes.squareBox}>
          <div className={classes.sectionContainer}>
            <div className={classes.headingContainer}>
              <img
                src={leadership}
                alt="Leadership Icon"
                className={classes.headingIcon}
              />
              <h2>Leadership</h2>
            </div>
            <div className={classes.sectionContent}>
              <p>
                Led by a team of visionary leaders and experienced educators,
                BI-FAST is guided by a commitment to excellence, innovation, and
                social responsibility. Our leadership team brings together
                expertise from diverse fields, ensuring that our programs are
                relevant, impactful, and tailored to meet the evolving needs of
                our participants.
              </p>
            </div>
          </div>
        </section>

        <section className={classes.approachSection}>
          <h1>Our Approach</h1>
          <div className={classes.approachContent}>
            <div className={classes.imageContainer}>
              <img
                src={approachImage}
                alt="Approach"
                className={classes.approachImage}
              />
              <div className={classes.quote}>
                <p>
                  At BI-FAST, we adopt a holistic approach to skill development,
                  recognizing the interconnectedness of physical, mental, and
                  spiritual well-being. Through classroom instruction, practical
                  training, and experiential learning, we provide participants
                  with a comprehensive toolkit for success in today's fast-paced
                  world.
                </p>
              </div>
            </div>
            <div className={classes.textContainer}>
              <div className={classes.para}>
              
                <h3>Objectives</h3>
                <p>
                  To empower youth and women through employability skill
                  development programs.
                </p>
              </div>
              <div className={classes.para}>
              
                
                <p>
                  To foster a culture of innovation, creativity, and
                  entrepreneurship.
                </p>
              </div>
              <div className={classes.para}>
              
                
                <p>To promote spiritual awareness and personal growth.</p>
              </div>
              <div className={classes.para}>
             
                <p>
                  To cultivate ethical leadership and social responsibility.
                </p>
              </div>
              <div className={classes.para}>
             
                <p>
                  To create a supportive community of like-minded individuals
                  committed to positive change.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={classes.squareBox}>
          <div className={classes.sectionContainer}>
            <div className={classes.headingContainer}>
              <img
                src={h3}
                alt="Excellence Icon"
                className={classes.headingIcon}
              />
              <h2>Excellence</h2>
            </div>
            <div className={classes.sectionContent}>
              <p>
                Excellence is the standard by which we measure our performance.
                We are relentless in our pursuit of excellence, constantly
                seeking ways to improve and innovate. We set high expectations
                for ourselves and hold ourselves accountable for delivering
                exceptional quality in everything we do.
              </p>
            </div>
          </div>
        </section>
        <section className={classes.squareBox}>
          <div className={classes.sectionContainer}>
            <div className={classes.headingContainer}>
              <img
                src={h4}
                alt="Learning Icon"
                className={classes.headingIcon}
              />
              <h2>Lifelong Learning</h2>
            </div>
            <div className={classes.sectionContent}>
              <p>
                We are committed to lifelong learning and personal growth. We
                believe that education is a lifelong journey, and we encourage
                curiosity, creativity, and intellectual exploration. We foster a
                culture of continuous learning, empowering individuals to expand
                their horizons and reach their full potential.
              </p>
            </div>
          </div>
        </section>
        <section className={classes.squareBox}>
          <div className={classes.sectionContainer}>
            <div className={classes.headingContainer}>
              <img
                src={h5}
                alt="Services Icon"
                className={classes.headingIcon}
              />
              <h2>Service</h2>
            </div>
            <div className={classes.sectionContent}>
              <p>
                Service is at the heart of our ethos. We believe in the power of
                service to create positive change and transform lives. We are
                dedicated to serving others with humility, compassion, and
                selflessness, and we strive to make a meaningful difference in
                the lives of those around us.
              </p>
            </div>
          </div>
        </section>
        <section className={classes.squareBox}>
          <div className={classes.sectionContainer}>
            <div className={classes.headingContainer}>
              <img
                src={h6}
                alt="Spiritual Icon"
                className={classes.headingIcon}
              />
              <h2>Spirituality</h2>
            </div>
            <div className={classes.sectionContent}>
              <p>
                Spirituality is an integral part of our identity. We recognize
                the importance of spiritual growth and self-discovery in
                achieving holistic well-being. We embrace diversity and welcome
                individuals of all faiths and backgrounds, fostering an
                environment where spirituality is celebrated and respected.
              </p>
              <p>
                These values embody who we are as an institution and guide us in
                our mission to empower individuals, foster personal growth, and
                create a more compassionate and enlightened society.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className={classes.stripe}>WE BELIEVE IN GROWTH</div>
      <Footer />
    </div>
  );
};

export default About;
