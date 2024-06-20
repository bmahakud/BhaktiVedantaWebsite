import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ourprogram.module.css';
import p1 from './p1.png';
import p2 from './p2.png';
import p3 from './p.png';
import p4 from './p4.png';
import p5 from './p5.png';
import p6 from './p6.png';
import p7 from './p7.png';
import p8 from './p8.png';
import d1 from './d.png';
import d2 from './d1.png';
import d3 from './d2.png';
import d4 from './d3.png';
import d5 from './d4.png';
import e1 from './e.png';
import e2 from './e1.png';
import e3 from './e2.png';
import e4 from './e3.png';
import event1 from './event1.png';
import event2 from './event2.jpg';
import event3 from './event3.png';
import success1 from './3.jpg';
import success2 from './3a.jpg';
import success3 from './3b.png';
import blog from "./blog1.png";
import blog1 from './blog2.png';
import blog2 from './blog 3.jpg';
import team from './team.jpg';
import team1 from './team1.jpg';

const OurProgram = () => {
    const employabilityPoints = [
        { color: '#FFCDD2', icon: p1, text: "Communication Skills: Enhancing verbal and written communication skills for effective workplace interactions." },
        { color: '#E1BEE7', icon: p2, text: "Critical Thinking: Developing analytical and problem-solving skills to tackle complex challenges." },
        { color: '#C5CAE9', icon: p3, text: "Teamwork and Collaboration: Fostering collaboration and teamwork abilities to achieve common goals." },
        { color: '#BBDEFB', icon: p4, text: "Leadership and Management: Cultivating leadership qualities and management capabilities for career advancement." },
        { color: '#B2DFDB', icon: p5, text: "Technical Skills: Providing training in industry-specific technical skills and tools relevant to various sectors." },
        { color: '#C8E6C9', icon: p6, text: "Problem Solving: Equipping individuals with critical thinking and analytical skills to tackle challenges with confidence and creativity." },
        { color: '#DCEDC8', icon: p7, text: "Emotional Intelligence: Cultivating self-awareness and empathy to navigate interpersonal relationships and foster a harmonious work environment." },
        { color: '#FFF9C4', icon: p8, text: "Entrepreneurial Mindset: Instilling a spirit of innovation, resilience, and adaptability to inspire entrepreneurial thinking and drive success in today's dynamic business landscape." },
    ];

    const spiritualPoints = [
        { color: '#FFECB3', icon: d1, text: "Mantra Meditation: Teaching Mantra meditation techniques and the foundational principles of Bhagavad Gita practices to cultivate mental clarity and emotional balance among youth." },
        { color: '#FFE0B2', icon: d2, text: "Self-Discovery and Reflection: Guiding participants on a journey of self-discovery and reflection to uncover their passions, values, and life purpose." },
        { color: '#FFCCBC', icon: d3, text: "Wellness and Well-being: Providing resources and tools for maintaining physical, mental, and emotional wellness." },
        { color: '#D7CCC8', icon: d4, text: "Values and Ethics: Exploring ethical principles and values-based decision-making to navigate life's challenges with integrity and purpose." },
        { color: '#CFD8DC', icon: d5, text: "Community Service and Engagement: Encouraging participants to engage in service-oriented activities and contribute positively to their communities." },
    ];

    const workshopPoints = [
        { color: '#B3E5FC', icon: e1, text: "Industry Insights: Inviting industry experts and thought leaders to share insights and trends in various sectors." },
        { color: '#B2EBF2', icon: e2, text: "Professional Development: Offering workshops on resume writing, interview skills, networking, and career planning." },
        { color: '#B2DFDB', icon: e3, text: "Personal Growth: Hosting seminars on personal development, goal setting, time management, and stress management." },
        { color: '#C8E6C9', icon: e4, text: "Spiritual Retreats: Organizing spiritual retreats and retreats to provide participants with opportunities for reflection, rejuvenation, and spiritual growth." },
    ];

    return (
        <div className={classes.ourprogram}>
            <div className={classes.header}>
                <div className={classes.headerContent}>
                    <h1>Our Programs</h1>
                    <p>Building Careers and Characters Together</p>
                </div>
            </div>
            <p className={classes.additionalContent}>
                At Bhaktivedanta International Academy for Applied Spiritual Technology, we offer a range of comprehensive programs designed to empower individuals with the skills, knowledge, and resources they need to succeed in today's fast-paced world. Our programs integrate employability skill development with spiritual and personal growth, providing participants with a holistic learning experience that equips them for success in all aspects of life.
            </p>
            <div className={classes.pointsSection}>
                <h2>Employability Skill Development</h2>
                <p>Our employability skill development programs are designed to prepare participants for the challenges of the modern workforce. Through a combination of classroom instruction, practical training, and hands-on projects, we provide participants with the essential skills they need to thrive in their careers.</p>
                <div className={classes.pointsGrid}>
                    {employabilityPoints.map((point, index) => (
                        <div key={index} className={classes.pointCard}>
                            <div className={classes.colorBlock} style={{ backgroundColor: point.color }}>
                                <img src={point.icon} alt={`Icon ${index + 1}`} className={classes.pointIcon} />
                            </div>
                            <div className={classes.iconAndText}>
                                <div className={classes.pointText}>
                                    <h3>{point.text.split(':')[0]}</h3>
                                    <p>{point.text.split(':')[1]}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={classes.pointsSection}>
                <h2>Spiritual and Personal Growth</h2>
                <div className={classes.pointsGrid}>
                    {spiritualPoints.map((point, index) => (
                        <div key={index} className={classes.pointCard}>
                            <div className={classes.colorBlock} style={{ backgroundColor: point.color }}>
                                <img src={point.icon} alt={`Icon ${index + 1}`} className={classes.pointIcon} />
                            </div>
                            <div className={classes.iconAndText}>
                                <div className={classes.pointText}>
                                    <h3>{point.text.split(':')[0]}</h3>
                                    <p>{point.text.split(':')[1]}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={classes.pointsSection}>
                <h2>Specialized Workshops and Events</h2>
                <div className={classes.pointsGrid}>
                    {workshopPoints.map((point, index) => (
                        <div key={index} className={classes.pointCard}>
                            <div className={classes.colorBlock} style={{ backgroundColor: point.color }}>
                                <img src={point.icon} alt={`Icon ${index + 1}`} className={classes.pointIcon} />
                            </div>
                            <div className={classes.iconAndText}>
                                <div className={classes.pointText}>
                                    <h3>{point.text.split(':')[0]}</h3>
                                    <p>{point.text.split(':')[1]}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={classes.bottomCardsContainer}>
                <div className={classes.bottomCard}>
                    <img src={team} alt="Yuva Udyami Chetana Kendra" style={{ width: '100%', height: 'auto', borderRadius: '10px 10px 0 0' }} />
                    <div className={classes.bottomCardContent}>
                        <h2>Welcome to Bhaktivedanta Yuva Udyami Chetana Kendra</h2>
                        <p>Fueling Futures: Empowering Youth with Entrepreneurship and Employability</p>
                        <Link to="/ourprogram/yuvaudyami" className={classes.learnMoreButton}>Learn More</Link>
                    </div>
                </div>
                <div className={classes.bottomCard}>
                    <img src={team} alt="Adhyatmic Jagruti Kendra" style={{ width: '100%', height: 'auto', borderRadius: '10px 10px 0 0' }} />
                    <div className={classes.bottomCardContent}>
                    <h2>Welcome to Bhaktivedanta Adhyatmik Jagruti Kendra</h2>
                        <p>Awakening Spirits, Shaping Futures, Enlightening Souls</p>
                        <Link to="/ourprogram/adj" className={classes.learnMoreButton}>Learn More</Link>
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

export default OurProgram;

