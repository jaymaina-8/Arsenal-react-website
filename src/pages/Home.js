import React from 'react';
import { clubInfo } from '../data/clubInfo';
import { getLatestNews } from '../data/newsArticles';
import { getUpcomingFixtures } from '../data/fixtures';

const Home = () => {
  const latestNews = getLatestNews(3);
  const upcomingFixtures = getUpcomingFixtures(3);

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to {clubInfo.name}</h1>
          <p>The official home of Arsenal Football Club</p>
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
      
      <div className="container">
        <section className="home-section">
          <h2>About Arsenal</h2>
          <p>
            {clubInfo.name} is a professional football club based in North London, England. 
            Founded in {clubInfo.founded}, we compete in the Premier League and have a rich history of success.
            Our home ground is the {clubInfo.stadium.name} with a capacity of {clubInfo.stadium.capacity.toLocaleString()} supporters.
          </p>
        </section>
        
        <section className="home-section">
          <h2>Latest News</h2>
          <div className="news-preview">
            {latestNews.map(article => (
              <div key={article.id} className="news-preview-card">
                <div className="news-date">{article.date}</div>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
                <span className="news-category">{article.category}</span>
              </div>
            ))}
          </div>
        </section>
        
        <section className="home-section">
          <h2>Upcoming Fixtures</h2>
          <div className="fixtures-preview">
            {upcomingFixtures.map(fixture => (
              <div key={fixture.id} className="fixture-preview-card">
                <div className="fixture-date">
                  <span className="date">{fixture.date}</span>
                  <span className="time">{fixture.time}</span>
                </div>
                <div className="fixture-teams">
                  <span className="home-team">{fixture.homeTeam}</span>
                  <span className="vs">vs</span>
                  <span className="away-team">{fixture.awayTeam}</span>
                </div>
                <div className="fixture-venue">{fixture.venue}</div>
                <div className="fixture-competition">{fixture.competition}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;