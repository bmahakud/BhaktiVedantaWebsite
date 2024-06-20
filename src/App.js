

import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./App.module.css";

import logo from './logo1.svg'
import p1 from './1.jpeg';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import p2 from './2a.jpg';
import p3 from './2a.jpg';
import event1 from './event1.png';
import event2 from './event2.jpg';
import event3 from './event3.png';
import success1 from './3.jpg';
import success2 from './3a.jpg';
import success3 from './3b.png';
import blog from "./blog1.png";
import blog1 from './blog2.png';
import blog2 from './blog 3.jpg';

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.block1}>
      <div className={classes.profile}>
          <img src={p1} className={classes.Image} alt="Illustration" />
        </div>
        <div className={classes.TextContent}>
          <h1>Skill Up for Success</h1>
          <h2>Holistic Employability Skill Development through Nurturing Potential, Inspiring Change</h2>
          <button>REGISTER NOW</button>
        </div>
        
      </div>

      <div className={classes.block3}>
        <div className={classes.TextContent1}>
          <h1>Empowering Generations Through Skills and Spirit</h1>
          <p>
            Welcome to Bhaktivedanta International Academy for Applied Spiritual Technology, where we believe in the power of holistic development to transform lives. Our mission is to empower youth by combining employability skill development with spiritual and mental growth.
        
            <a href="#">Know More About Us</a>
          </p>
        </div>

        <div className={classes.ImpactHeading}>
          <h1>OUR IMPACT</h1>
        </div>
        <div className={classes.ImpactIcons}>
          <div className={classes.ImpactText}>
            <img src={icon1} className={classes.ImpactIcon} alt="Impact Icon 1" />
            <b>500+ Youth Empowered:</b>
            <p>Over 500 young individuals have participated in our programs, gaining crucial employability and life skills.</p>
          </div>
          <div className={classes.ImpactText}>
            <img src={icon2} className={classes.ImpactIcon} alt="Impact Icon 2" />
            <b>200+ Workshops Conducted:</b>
            <p>We have organized over 200 workshops focusing on various aspects of personal and professional development.</p>
          </div>
          <div className={classes.ImpactText}>
            <img src={icon3} className={classes.ImpactIcon} alt="Impact Icon 3" />
            <b>200+ Community Members Engaged:</b>
            <p>Through our outreach and community programs, we have positively impacted the lives of over 200 community members.</p>
          </div>
        </div>
        <div className={classes.button}>
          <Link to="/impact">
            <button className={classes.ImpactButton}>KNOW OUR IMPACT</button>
          </Link>
        </div>
      </div>

      <div className={classes.block4}>
        <div className={classes.ProgramHeading}>
          <h1>OUR PROGRAMS</h1>
        </div>
        <div className={classes.card}>
          <div className={classes.ProgramCard}>
            <img src={p2} className={classes.ProgramImage} alt="Program 1" />
            <div className={classes.ProgramText}>
              <b>Bhaktivedanta Yuva Udyami Chetana Kendra</b>
              <p>Fueling Futures: Empowering Youth with Entrepreneurship and Employability</p>
              <Link to="/ourprogram/yuvaudyami">
                <button className={classes.ProgramButton}>KNOW MORE</button>
              </Link>
            </div>
          </div>
          <div className={classes.ProgramCard}>
            <img src={p3} className={classes.ProgramImage} alt="Program 2" />
            <div className={classes.ProgramText}>
              <b>Bhaktivedanta Adhyatmik Jagruti Kendra</b>
              <p>Awakening Spirits, Shaping Futures, Enlightening Souls</p>
              <Link to="/ourprogram/adj">
                <button className={classes.ProgramButton}>KNOW MORE</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.block5}>
        <div className={classes.EventHeading}>
          <h1>Upcoming Bootcamps & Events</h1>
        </div>
        <div className={classes.eventcards}>
          <div className={classes.EventCard}>
            <img src={event1} className={classes.EventImage} alt="Event 1" />
            <div className={classes.EventText}>
              <b>Skill Up: Employability Enhancement Program</b>
              <p>Workshop July 10th</p>
            </div>
          </div>
          <div className={classes.EventCard}>
            <img src={event2} className={classes.EventImage} alt="Event 2" />
            <div className={classes.EventText}>
              <b>Entrepreneurial Mindset: From Ideas to Impact</b>
              <p>Workshop August 3rd</p>
            </div>
          </div>
          <div className={classes.EventCard}>
            <img src={event3} className={classes.EventImage} alt="Event 3" />
            <div className={classes.EventText}>
              <b>The Journey Towards Self-Discovery</b>
              <p>Workshop July 10th</p>
            </div>
          </div>
        </div>
        <div className={classes.button}>
          <Link to="/event">
            <button className={classes.EventButton}>VIEW ALL EVENTS</button>
          </Link>
        </div>
      </div>

      <div className={classes.block5}>
        <div className={classes.SuccessHeading}>
          <h1>SUCCESS STORIES</h1>
          <div className={classes.SuccessSubHeading}>
            <p>Guided by "Rise for an equal world," "Rise to be future-ready," and "Rise to create value," we empower youths through entrepreneurship, employability, and spirituality programs. Discover inspiring stories of individuals making a difference in their communities.</p>
          </div>
        </div>
        <div className={classes.successcards}>
          <div className={classes.SuccessCard}>
            <img src={success2} className={classes.SuccessImage} alt="Success 1" />
            <div className={classes.SuccessText}>
              <b>Gitika, Khurda</b>
              <p>A Triumph Of Resilience Against All Odds</p>
            </div>
          </div>
          <div className={classes.SuccessCard}>
            <img src={success2} className={classes.SuccessImage} alt="Success 2" />
            <div className={classes.SuccessText}>
              <b>Deepak, Delhi</b>
              <p>Perseverance and Progress: An Entrepreneurial Journey</p>
            </div>
          </div>
          <div className={classes.SuccessCard}>
            <img src={success3} className={classes.SuccessImage} alt="Success 3" />
            <div className={classes.SuccessText}>
              <b>Deepak, Delhi</b>
              <p>Perseverance and Progress: An Entrepreneurial Journey</p>
            </div>
          </div>
        </div>
        <div className={classes.button}>
          <Link to="/success">
            <button className={classes.SuccessButton}>VIEW ALL SUCCESS STORIES</button>
          </Link>
        </div>
      </div>
      <div className={classes.block5}>
        <div className={classes.SuccessHeading}>
          <h1>BLOG</h1>
        </div>
        <div className={classes.successcards}>
          <div className={classes.SuccessCard}>
            <img src={blog} className={classes.SuccessImage} alt="Blog 1" />
            <div className={classes.SuccessText}>
              <p>7 Tips for Better Resume</p>
            </div>
          </div>
          <div className={classes.SuccessCard}>
            <img src={blog1} className={classes.SuccessImage} alt="Blog 2" />
            <div className={classes.SuccessText}>
              <p>Effective Networking Strategies</p>
            </div>
          </div>
          <div className={classes.SuccessCard}>
            <img src={blog2} className={classes.SuccessImage} alt="Blog 3" />
            <div className={classes.SuccessText}>
              <p>Leveraging Social Media for Career Growth</p>
            </div>
          </div>
        </div>
        <div className={classes.button}>
          <Link to="/blog">
            <button className={classes.BlogButton}>VIEW ALL BLOGS</button>
          </Link>
        </div>
      
        </div>
      <div className={classes.ThrivingCommunity}>
        <p>Become a Part of Our Thriving Community</p>
        <button className={classes.KnowMoreButton}>JOIN NOW</button>
      </div>
        
       
      
    </div>
  );
}

export default App;
