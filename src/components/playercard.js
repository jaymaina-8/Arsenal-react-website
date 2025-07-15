// components/PlayerCard.js
import React from "react";


const PlayerCard = ({ player }) => {
    const { name, position, age, nationality, number, photoUrl, bio } = player;

    const getPositionColor = (position) => {
        switch (position) {
            case 'Goalkeeper': return '#ffc107';
            case 'Defender': return '#28a745';
            case 'Midfielder': return '#007bff';
            case 'Forward': return '#dc143c';
            default: return '#6c757d';
        }
    };

    const getPositionIcon = (position) => {
        switch (position) {
            case 'Goalkeeper': return '🥅';
            case 'Defender': return '🛡️';
            case 'Midfielder': return '⚽';
            case 'Forward': return '🏃';
            default: return '👤';
        }
    };

    const getFlagEmoji = (nationality) => {
        const flags = {
            'England': '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
            'Spain': '🇪🇸',
            'France': '🇫🇷',
            'Brazil': '🇧🇷',
            'Germany': '🇩🇪',
            'Netherlands': '🇳🇱',
            'Belgium': '🇧🇪',
            'Norway': '🇳🇴',
            'Portugal': '🇵🇹',
            'Ukraine': '🇺🇦',
            'Poland': '🇵🇱',
            'Italy': '🇮🇹',
            'Sweden': '🇸🇪',
            'Denmark': '🇩🇰',
            'Estonia': '🇪🇪',
            'Albania': '🇦🇱',
            'Wales': '🏴󠁧󠁢󠁷󠁬󠁳󠁿'
        };
        return flags[nationality] || '🏳️';
    };

    return (
        <div className="player-card">
            <div className="player-header">
                <div className="player-number" style={{ background: getPositionColor(position) }}>
                    {number}
                </div>
                <div className="position-badge">
                    <span className="position-icon">{getPositionIcon(position)}</span>
                    <span className="position-text">{position}</span>
                </div>
            </div>
            
            <div className="player-image-container">
                <img
                    src={photoUrl || "/images/players/default.jpg"}
                    alt={name}
                    className="player-photo"
                    onError={(e) => {e.target.src = '/images/players/default.jpg'}}
                />
                <div className="player-overlay">
                    <div className="arsenal-badge">
                        <img src="/images/arsenal-logo.png" alt="Arsenal" />
                    </div>
                </div>
            </div>
            
            <div className="player-info">
                <h3 className="player-name">{name}</h3>
                
                <div className="player-stats">
                    <div className="stat-item">
                        <span className="stat-label">Age</span>
                        <span className="stat-value">{age}</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-label">Nation</span>
                        <span className="stat-value">
                            {getFlagEmoji(nationality)} {nationality}
                        </span>
                    </div>
                </div>
                
                {bio && (
                    <div className="player-bio">
                        <p>{bio}</p>
                    </div>
                )}
            </div>
            
            <div className="player-footer">
                <div className="arsenal-colors"></div>
            </div>
        </div>
    );
};

export default PlayerCard;