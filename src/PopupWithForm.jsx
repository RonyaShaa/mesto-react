import React from 'react';

function PopupWithForm({title, name , children, isOpen}) {
  return (
    <>
      <div className={`popup popup_type_${name}`}>  
        <div className="popup__container">
          <button className="popup__close" type="button"></button>
          <h2 className="popup__name">{title}</h2>
          <form className="popup__form" name={name} novalidate>{children}</form>
        </div>
      </div>
    </>
  )
}
export default PopupWithForm;