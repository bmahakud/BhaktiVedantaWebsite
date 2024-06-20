import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Blog.module.css';
import blog from './spiritual.jpg';
import blog1 from './meditation.jpg';
import blog2 from './pract.jpg';
import banner from './blog (2).jpg';

const Blog = () => {
  return (
    <div className={classes.blogContainer}>
      <header className={classes.blogHeader}>
        <div className={classes.banner}>
          <img src={banner} alt="Blog Banner" className={classes.bannerImage} />
          <div className={classes.bannerText}>
            <h1>Our Blog & Insight</h1>
            <p>We delve into the world of EHS, exploring the latest trends, regulations, and best practices that drive responsible business operations.</p>
          </div>
        </div>
        <div className={classes.categories}>
          <button className={`${classes.category} ${classes.categoryActive}`}>All</button>
          <button className={classes.category}>Newsletter</button>
          <button className={classes.category}>Tips</button>
          <button className={classes.category}>Insight</button>
          <button className={classes.category}>Success Stories</button>
        </div>
      </header>
      <div className={classes.blogPosts}>
        <div className={classes.post}>
          <img src={blog} alt="Post 1" className={classes.postImage} />
          <div className={classes.postContent}>
            <span className={classes.postDate}>October 18, 2023 - 7 min read</span>
            <h2>The Future of EHS: Emerging Trends to Watch</h2>
            <p>Technological advancements, data analytics, and industry disruptions. Navigating the evolving landscape...</p>
            <Link to="/blog1" className={classes.readMore}>Read More</Link>
          </div>
        </div>
        <div className={classes.post}>
          <img src={blog1} alt="Post 2" className={classes.postImage} />
          <div className={classes.postContent}>
            <span className={classes.postDate}>October 18, 2023 - 7 min read</span>
            <h2>Mental Health Matters: EHS Strategies for Employee Well-Being</h2>
            <p>Addressing stress, burnout, and mental health in the workplace. A holistic approach to support employee...</p>
            <Link to="/blog2" className={classes.readMore}>Read More</Link>
          </div>
        </div>
        <div className={classes.post}>
          <img src={blog2} alt="Post 3" className={classes.postImage} />
          <div className={classes.postContent}>
            <span className={classes.postDate}>October 18, 2023 - 7 min read</span>
            <h2>Creating a Safety Culture: EHS Leadership Insights</h2>
            <p>Empowering your team to prioritize safety every day, leadership strategies, training, and cultivating...</p>
            <Link to="/blog3" className={classes.readMore}>Read More</Link>
          </div>
        </div>
      </div>
      <div className={classes.ThrivingCommunity}>
        <p>Become a Part of Our Thriving Community</p>
        <button className={classes.KnowMoreButton}>JOIN NOW</button>
      </div>
        
    </div>
  );
};

export default Blog;
