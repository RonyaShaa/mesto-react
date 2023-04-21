import React from 'react';

function Card({card, onCardClick}) {
  
  function handleClick() {
    onCardClick(card);
  } 

  return (
    <article className="card">
      <button
        className="card__delete"
        type="button"
      >
      </button>
      <img
        src={card.link}
        alt={card.name}
        className="card__photo"
        onClick={handleClick}
      />
      <div className="card__place">
        <h2 className="card__name">{card.name}</h2>
        <div className="card__like-container">
          <button
            className="card__like"
            type="button"
          >
          </button>
          <div className="card__like-counter">{card.likes.length}</div>
        </div>
      </div>
    </article>
  )
}

export default Card;