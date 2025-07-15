import React from 'react';
import { clubInfo } from '../data/clubInfo';
import { getLatestNews } from '../data/newsArticles';
import { getUpcomingFixtures } from '../data/fixtures';

const Home = () => {
  const latestNews = getLatestNews(3);
  const upcomingFixtures = getUpcomingFixtures(3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-image">
          <img 
            src="/images/rice-celeb-newcastle_wn6ptksd.avif" 
            alt="Arsenal celebration" 
            className="hero-bg"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Welcome to {clubInfo.name}</h1>
            <p className="hero-subtitle">The official home of Arsenal Football Club</p>
            <button className="hero-cta">Join The Arsenal</button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">Founded</span>
              <span className="stat-label">{clubInfo.founded}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{clubInfo.achievements.leagueTitles}</span>
              <span className="stat-label">League Titles</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{clubInfo.achievements.faCups}</span>
              <span className="stat-label">FA Cups</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        {/* About Section */}
        <section className="about-section">
          <div className="container">
            <div className="section-header">
              <h2>About Arsenal</h2>
              <div className="section-divider"></div>
            </div>
            <div className="about-content">
              <p className="about-text">
                {clubInfo.name} is a professional football club based in North London, England. 
                Founded in {clubInfo.founded}, we compete in the Premier League and have a rich history of success.
                Our home ground is the {clubInfo.stadium.name} with a capacity of {clubInfo.stadium.capacity.toLocaleString()} supporters.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <h3>Our Stadium</h3>
                  <p>{clubInfo.stadium.name}</p>
                </div>
                <div className="highlight-item">
                  <h3>Capacity</h3>
                  <p>{clubInfo.stadium.capacity.toLocaleString()}</p>
                </div>
                <div className="highlight-item">
                  <h3>Location</h3>
                  <p>North London</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* News & Fixtures Section */}
        <section className="news-fixtures-section">
          <div className="container">
            <div className="content-grid">
              {/* Latest News */}
              <div className="news-section">
                <div className="section-header">
                  <h2>Latest News</h2>
                  <div className="section-divider"></div>
                </div>
                <div className="news-grid">
                  {latestNews.map(article => (
                    <div key={article.id} className="news-card">
                      <div className="news-card-header">
                        <span className="news-category">{article.category}</span>
                        <span className="news-date">{article.date}</span>
                      </div>
                      <h3 className="news-title">{article.title}</h3>
                      <p className="news-summary">{article.summary}</p>
                      <button className="read-more">Read More</button>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Upcoming Fixtures */}
              <div className="fixtures-section">
                <div className="section-header">
                  <h2>Upcoming Fixtures</h2>
                  <div className="section-divider"></div>
                </div>
                <div className="fixtures-list">
                  {upcomingFixtures.map(fixture => (
                    <div key={fixture.id} className="fixture-card">
                      <div className="fixture-date-time">
                        <span className="fixture-date">{fixture.date}</span>
                        <span className="fixture-time">{fixture.time}</span>
                      </div>
                      <div className="fixture-match">
                        <div className="fixture-teams">
                          <span className="home-team">{fixture.homeTeam}</span>
                          <span className="vs">VS</span>
                          <span className="away-team">{fixture.awayTeam}</span>
                        </div>
                        <div className="fixture-details">
                          <span className="fixture-venue">{fixture.venue}</span>
                          <span className="fixture-competition">{fixture.competition}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;