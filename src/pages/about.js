import React from 'react';
import { clubInfo, history } from '../data/clubInfo';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1>About {clubInfo.name}</h1>
        
        <div className="about-content">
          <section className="about-section">
            <h2>Our History</h2>
            <p>
              {clubInfo.name} was founded in {clubInfo.founded} and has since become one of the most successful clubs in English football. 
              Based in North London, we have a rich history of achievements and a passionate fanbase worldwide.
            </p>
            
            <div className="history-timeline">
              <h3>Key Milestones</h3>
              <div className="timeline">
                {history.map((milestone, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-year">{milestone.year}</div>
                    <div className="timeline-event">{milestone.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <section className="about-section">
            <h2>Our Stadium</h2>
            <p>
              The {clubInfo.stadium.name} has been our home since {clubInfo.stadium.opened}. 
              With a capacity of {clubInfo.stadium.capacity.toLocaleString()}, it's one of the largest stadiums in the Premier League 
              and provides an incredible atmosphere for our matches.
            </p>
            <div className="stadium-details">
              <p><strong>Address:</strong> {clubInfo.stadium.address}</p>
              <p><strong>Capacity:</strong> {clubInfo.stadium.capacity.toLocaleString()}</p>
              <p><strong>Opened:</strong> {clubInfo.stadium.opened}</p>
            </div>
          </section>
          
          <section className="about-section">
            <h2>Achievements</h2>
            <div className="achievements-grid">
              <div className="achievement-item">
                <h3>League Titles</h3>
                <span className="achievement-number">{clubInfo.achievements.leagueTitles}</span>
              </div>
              <div className="achievement-item">
                <h3>FA Cups</h3>
                <span className="achievement-number">{clubInfo.achievements.faCups}</span>
              </div>
              <div className="achievement-item">
                <h3>League Cups</h3>
                <span className="achievement-number">{clubInfo.achievements.leagueCups}</span>
              </div>
              <div className="achievement-item">
                <h3>European Cups</h3>
                <span className="achievement-number">{clubInfo.achievements.europeanCups}</span>
              </div>
              <div className="achievement-item">
                <h3>Community Shields</h3>
                <span className="achievement-number">{clubInfo.achievements.communityShields}</span>
              </div>
            </div>
          </section>
          
          <section className="about-section">
            <h2>Club Leadership</h2>
            <div className="leadership-info">
              <p><strong>Manager:</strong> {clubInfo.manager}</p>
              <p><strong>Chairman:</strong> {clubInfo.chairman}</p>
              <p><strong>Owner:</strong> {clubInfo.owner}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;