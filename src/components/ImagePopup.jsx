import React from 'react';

function ImagePopup(onClose, card, isOpen) {


  return (
    <>
      <div className={`popup popup_type_expand-card ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container-fullscreen">
          <button className="popup__close popup__close_expand_card" type="button" onClick={onClose}></button>
          <img src={card.link} alt={card.name} className="popup__photo" />
          <h2 className="popup__photo-name">{card.name}</h2>
        </div>
      </div>
    </>
  )
}
export default ImagePopup;
