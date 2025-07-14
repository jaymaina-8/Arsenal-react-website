// components/PlayerCard.js
import React from "react";

const PlayerCard = ({ player }) => {
    const { name, position, age, nationality, number, photoUrl } = player;

    return (
        <div className="player-card">
            <img
                src={photoUrl || "/images/players/default.jpg"}
                alt={name}
                className="player-photo"
            />
            <div className="player-info">
                <h3 className="player-name">#{number} {name}</h3>
                <p className="player-detail"><strong>Position:</strong> {position}</p>
                <p className="player-detail"><strong>Age:</strong> {age}</p>
                <p className="player-detail"><strong>Nationality:</strong> {nationality}</p>
            </div>
        </div>
    );
};

export default PlayerCard;
