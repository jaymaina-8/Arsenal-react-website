import React, { useState } from 'react';
import { fixtures, results } from '../data/fixtures';
import '../components/Fixtures.css';

const Fixtures = () => {
  const [activeTab, setActiveTab] = useState('fixtures');

  // Use all fixtures instead of limited subset
  const upcomingFixtures = fixtures.filter(fixture => fixture.status === 'upcoming')
      .sort((a, b) => new Date(a.date) - new Date(b.date));

  // Use all results instead of limited subset
  const recentResults = results.filter(result => result.status === 'completed')
      .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
      <div className="fixtures-page">
        <div className="container">
          <h1>Fixtures & Results</h1>

          <div className="tabs">
            <button
                className={`tab-btn ${activeTab === 'fixtures' ? 'active' : ''}`}
                onClick={() => setActiveTab('fixtures')}
            >
              Upcoming Fixtures
            </button>
            <button
                className={`tab-btn ${activeTab === 'results' ? 'active' : ''}`}
                onClick={() => setActiveTab('results')}
            >
              Recent Results
            </button>
          </div>

          {activeTab === 'fixtures' && (
              <section className="fixtures-section">
                <h2>All Upcoming Fixtures ({upcomingFixtures.length})</h2>
                <div className="fixtures-list">
                  {upcomingFixtures.map(fixture => (
                      <div key={fixture.id} className="fixture-card">
                        {/* Rest of the code remains the same */}
                        <div className="fixture-date">
                          <span className="date">{fixture.date}</span>
                          <span className="time">{fixture.time}</span>
                        </div>
                        <div className="fixture-teams">
                          <span className="home-team">{fixture.homeTeam}</span>
                          <span className="vs">vs</span>
                          <span className="away-team">{fixture.awayTeam}</span>
                        </div>
                        <div className="fixture-details">
                          <span className="venue">{fixture.venue}</span>
                          <span className="competition">{fixture.competition}</span>
                        </div>
                        <div className="fixture-status">
                    <span className={`importance ${fixture.importance}`}>
                      {fixture.importance} importance
                    </span>
                          <span className={`tickets ${fixture.ticketsAvailable ? 'available' : 'sold-out'}`}>
                      {fixture.ticketsAvailable ? 'Tickets Available' : 'Sold Out'}
                    </span>
                        </div>
                      </div>
                  ))}
                </div>
              </section>
          )}

          {activeTab === 'results' && (
              <section className="results-section">
                <h2>All Results ({recentResults.length})</h2>
                <div className="results-list">
                  {recentResults.map(result => (
                      <div key={result.id} className="result-card">
                        {/* Rest of the code remains the same */}
                        <div className="result-date">{result.date}</div>
                        <div className="result-teams">
                          <span className="home-team">{result.homeTeam}</span>
                          <span className="score">{result.homeScore} - {result.awayScore}</span>
                          <span className="away-team">{result.awayTeam}</span>
                        </div>
                        <div className="result-details">
                          <span className="venue">{result.venue}</span>
                          <span className="competition">{result.competition}</span>
                        </div>
                        {result.matchReport && (
                            <div className="match-report">{result.matchReport}</div>
                        )}
                        <div className="scorers">
                          {result.scorers.home.length > 0 && (
                              <div className="home-scorers">
                                <strong>{result.homeTeam}:</strong> {result.scorers.home.join(', ')}
                              </div>
                          )}
                          {result.scorers.away.length > 0 && (
                              <div className="away-scorers">
                                <strong>{result.awayTeam}:</strong> {result.scorers.away.join(', ')}
                              </div>
                          )}
                        </div>
                      </div>
                  ))}
                </div>
              </section>
          )}
        </div>
      </div>
  );
};

export default Fixtures;