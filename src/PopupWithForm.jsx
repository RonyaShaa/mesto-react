import React from 'react';

function PopupWithForm({title, name , children, isOpen , onClose}) {
  return (
    <>
      <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>  
        <div className="popup__container">
          <button className="popup__close" type="button" onClick={onClose}></button>
          <h2 className="popup__name">{title}</h2>
          <form className="popup__form" name={name}>{children}</form>
        </div>
      </div>
    </>
  )
}
export default PopupWithForm;