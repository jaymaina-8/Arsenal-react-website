import React from 'react';
import { clubInfo } from '../data/clubInfo';
import { getLatestNews } from '../data/newsArticles';
import { getUpcomingFixtures } from '../data/fixtures';
import '../components/Home.css';

const Home = () => {
  const latestNews = getLatestNews(3);
  const upcomingFixtures = getUpcomingFixtures(3);

  return (
      <div className="home-page">
        {/* Hero Section */}
        <div className="hero-section arsenal-style-hero">
          <img
              src="/images/rice-celeb-newcastle_wn6ptksd.jpg"
              alt="Arsenal Training"
              className="hero-bg"
          />
          <div className="hero-content">
            <div className="hero-tagline">Trending</div>
            <h1 className="hero-title">Gallery: Our Final Training Session From La Manga</h1>
            <p className="hero-subtitle">All the best snaps from our final day in Spain</p>
            <button className="hero-cta">View Gallery</button>
          </div>
        </div>

        {/* Sponsor Band */}
        <div className="sponsor-band">
          <img src="/emirates-airlines-seeklogo.png" alt="Emirates" />
          <img src="/adidas-seeklogo.png" alt="Adidas" />
          <img src="/visit-rwanda-seeklogo.png" alt="Visit Rwanda" />
        </div>

        {/* Main Grid Layout */}
        <div className="arsenal-main-grid">
          {/* Latest News */}
          <section className="latest-news-section">
            <h2 className="section-title">Latest News</h2>
            <div className="news-grid">
              {latestNews.map(article => (
                  <div key={article.id} className="news-card">
                    <div className="news-meta">
                      <span className="news-category">{article.category}</span>
                      <span className="news-date">{article.date}</span>
                    </div>
                    <h3 className="news-title">{article.title}</h3>
                    <p className="news-summary">{article.summary}</p>
                    <button className="read-more">Read More</button>
                  </div>
              ))}
            </div>
          </section>

          {/* Upcoming Fixtures */}
          <section className="fixtures-section">
            <h2 className="section-title">Upcoming Fixtures</h2>
            <div className="fixtures-list">
              {upcomingFixtures.map(fixture => (
                  <div key={fixture.id} className="fixture-card">
                    <div className="fixture-info">
                      <div className="fixture-date-time">
                        <span className="fixture-date">{fixture.date}</span>
                        <span className="fixture-time">{fixture.time}</span>
                      </div>
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
          </section>
        </div>

        {/* Join CTA */}
        <div className="join-cta">
          <h2>Become Part of The Arsenal</h2>
          <p>Sign up for news, tickets and exclusive content.</p>
          <button className="hero-cta">Join Now</button>
        </div>
      </div>
  );
};

export default Home;
