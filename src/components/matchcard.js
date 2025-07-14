// components/MatchCard.js
import React from "react";

const MatchCard = ({ match }) => {
    const { opponent, date, time, stadium, competition } = match;

    const compIcon = competition === "Premier League" ? "🏆" : "🌍";

    return (
        <div className="match-card">
            <h3 className="match-title">{compIcon} vs {opponent}</h3>
            <p className="match-detail">🗓️ {date}</p>
            <p className="match-detail">⏰ {time}</p>
            <p className="match-detail">🏟️ {stadium}</p>
            <span className={`match-badge ${competition === "Premier League" ? "prem" : "preseason"}`}>
        {competition}
      </span>
        </div>
    );
};

export default MatchCard;
