import * as React from 'react';



import './CustomCard.css';

const CustomCard = ({ character, isDetailPage = false }) => {
  const placeholderImage = 'https://web.dragonball-api.com/assets/images/placeholder.png';
  
  const getBorderClass = () => {
    switch (character.race?.toLowerCase()) {
      case 'saiyan': return 'border-saiyan';
      case 'namekian': return 'border-namekian';
      case 'android': return 'border-android';
      default: return 'border-default';
    }
  };

  return (
    <div className={`dragonball-card ${getBorderClass()} ${isDetailPage ? 'super-saiyan-effect' : ''}`}>
      <div className="character-image-container">
        <img 
          className="character-image"
          src={character.image || placeholderImage}
          alt={character.name}
          onError={(e) => { e.target.src = placeholderImage }}
        />
      </div>
      <div className="card-content">
        <h3 className="character-name" title={character.name}>{character.name}</h3>
        <div className="character-stat">
          <span className="stat-value race-gender">
            <span className="race-label">{character.race || 'Desconocida'} - {character.gender || 'Desconocido'}</span> 
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;