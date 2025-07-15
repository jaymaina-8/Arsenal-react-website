import React from 'react';
import PlayerCard from '../components/playercard';
import { players, getPlayersByPosition } from '../data/players';

const Team = () => {
  const goalkeepers = getPlayersByPosition('Goalkeeper');
  const defenders = getPlayersByPosition('Defender');
  const midfielders = getPlayersByPosition('Midfielder');
  const forwards = getPlayersByPosition('Forward');

  return (
    <div className="team-page">
      <div className="container">
        <h1>Arsenal Squad</h1>
        
        <section className="position-section">
          <h2>Goalkeepers</h2>
          <div className="team-grid">
            {goalkeepers.map(player => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </section>

        <section className="position-section">
          <h2>Defenders</h2>
          <div className="team-grid">
            {defenders.map(player => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </section>

        <section className="position-section">
          <h2>Midfielders</h2>
          <div className="team-grid">
            {midfielders.map(player => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </section>

        <section className="position-section">
          <h2>Forwards</h2>
          <div className="team-grid">
            {forwards.map(player => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;