import React from 'react';
import photoProfile from '../images/photo-profile.jpg';
import editButton from '../images/Edit__Button.svg';
import pluse from '../images/pluse.svg';
import PopupWithForm from '../PopupWithForm';


function Main({onEditAvatarClick, onEditProfileClick, onAddPlaceClick}) {

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__button-avatar" onClick={onEditAvatarClick}>
          <img
            className="profile__photo"
            src={photoProfile}
            alt="Фотография владельца профиля"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button
            className="profile__button"
            type="button"
            onClick={onEditProfileClick}
          >
            <img
              src={editButton}
              alt="Кнопка 'Редактировать профиль'"
              className="profile__edit-button"
            />
          </button>
          <p className="profile__interests">Исследователь океана</p>
        </div>
        <button
          className="profile__add-photo"
          type="button"
          onClick={onAddPlaceClick}
        >
          <img
            src={pluse}
            alt="Кнопка 'Добавить фото в профиль'"
            className="profile__button-pluse"
          />
        </button>
      </section>
      <section className="cards">
        {/*сюда склонируется темплейт элемент*/}
      </section>
    </main>
  )
}


export default Main;