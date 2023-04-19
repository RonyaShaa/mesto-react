import React from 'react';

function Card({name, link, likes}) {
  return (
    <article className="card">
      <button
        className="card__delete"
        type="button"
      >
      </button>
      <img
        src={link}
        alt={name}
        className="card__photo"
      />
      <div className="card__place">
        <h2 className="card__name">{name}</h2>
        <div className="card__like-container">
          <button
            className="card__like"
            type="button"
          >
          </button>
          <div className="card__like-counter">{likes}</div>
        </div>
      </div>
    </article>
  )
}

export default Card;