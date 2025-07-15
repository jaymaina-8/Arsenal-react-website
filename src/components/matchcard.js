// components/MatchCard.js
import React from "react";

const MatchCard = ({ match }) => {
    const { homeTeam, awayTeam, date, time, venue, competition, homeScore, awayScore, status } = match;

    // Format date to display format
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { 
            weekday: 'short', 
            day: 'numeric', 
            month: 'short',
            year: 'numeric'
        };
        return date.toLocaleDateString('en-GB', options);
    };

    // Format time to remove seconds if present
    const formatTime = (timeString) => {
        return timeString.substring(0, 5);
    };

    // Get competition badge color
    const getCompetitionColor = (comp) => {
        switch(comp) {
            case "Premier League":
                return "#37003c";
            case "Champions League":
                return "#0066cc";
            case "Europa League":
                return "#ff6600";
            case "FA Cup":
                return "#1e3a8a";
            case "League Cup":
                return "#059669";
            default:
                return "#6b7280";
        }
    };

    // Get team logo placeholder or actual logo
    const getTeamLogo = (teamName) => {
        // You can replace this with actual logo paths
        const teamLogos = {
            "Arsenal": "/images/teams/arsenal.png",
            "Manchester United": "/images/teams/man-utd.png",
            "Manchester City": "/images/teams/man-city.png",
            "Liverpool": "/images/teams/liverpool.png",
            "Chelsea": "/images/teams/chelsea.png",
            "Tottenham Hotspur": "/images/teams/tottenham.png",
            "Newcastle United": "/images/teams/newcastle.png",
            "Brighton & Hove Albion": "/images/teams/brighton.png",
            "Aston Villa": "/images/teams/aston-villa.png",
            "West Ham United": "/images/teams/west-ham.png",
            "Crystal Palace": "/images/teams/crystal-palace.png",
            "Fulham": "/images/teams/fulham.png",
            "Brentford": "/images/teams/brentford.png",
            "Nottingham Forest": "/images/teams/nottingham-forest.png",
            "Everton": "/images/teams/everton.png",
            "Wolverhampton Wanderers": "/images/teams/wolves.png",
            "Burnley": "/images/teams/burnley.png",
            "Leeds United": "/images/teams/leeds.png",
            "Sunderland": "/images/teams/sunderland.png",
            "Bournemouth": "/images/teams/bournemouth.png",
        };
        return teamLogos[teamName] || "/images/teams/default.png";
    };

    return (
        <div className="match-card">
            <div className="match-card-header">
                <div 
                    className="competition-badge"
                    style={{ backgroundColor: getCompetitionColor(competition) }}
                >
                    {competition}
                </div>
                <div className="match-date">
                    {formatDate(date)}
                </div>
            </div>

            <div className="match-content">
                <div className="team-section">
                    <div className="team home-team">
                        <div className="team-logo">
                            <img 
                                src={getTeamLogo(homeTeam)} 
                                alt={homeTeam}
                                onError={(e) => {
                                    e.target.src = "/images/teams/default.png";
                                }}
                            />
                        </div>
                        <div className="team-name">{homeTeam}</div>
                    </div>

                    <div className="match-center">
                        {status === 'completed' ? (
                            <div className="score">
                                <span className="home-score">{homeScore}</span>
                                <span className="score-separator">-</span>
                                <span className="away-score">{awayScore}</span>
                            </div>
                        ) : (
                            <div className="match-time">
                                <div className="time">{formatTime(time)}</div>
                                <div className="vs">VS</div>
                            </div>
                        )}
                    </div>

                    <div className="team away-team">
                        <div className="team-logo">
                            <img 
                                src={getTeamLogo(awayTeam)} 
                                alt={awayTeam}
                                onError={(e) => {
                                    e.target.src = "/images/teams/default.png";
                                }}
                            />
                        </div>
                        <div className="team-name">{awayTeam}</div>
                    </div>
                </div>

                <div className="match-details">
                    <div className="venue">
                        <span className="venue-icon">🏟️</span>
                        {venue}
                    </div>
                    {status === 'completed' && (
                        <div className="final-badge">
                            FT
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MatchCard;