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
      {/* попап Редактировать профиль */}
      <PopupWithForm
        title='Редактировать профиль'
        name='edit-profile'
      >
        <input
          id="input-name"
          type="text"
          className="popup__input-text popup__input-text_type_name"
          placeholder="Введите имя"
          name="name"
          minlength="2"
          maxlength="40"
          required
        />
        <span id="input-name-error" className="popup__error"></span>
        <input
              id="input-interests"
              type="text"
              className="popup__input-text popup__input-text_type_interests"
              placeholder="Введите интересы"
              name="about"
              minlength="2"
              maxlength="200"
              required
            />
            <span id="input-interests-error" className="popup__error"></span>
            <button className="popup__button" type="submit">Сохранить</button>
      </PopupWithForm>
      {/* попап Обновить фото профиля */}
      <PopupWithForm
        title='Обновить аватар'
        name='update-avatar'
      >
        <input
          id="input-update-avatar"
          type="url"
          className="popup__input-text popup__input-text_type_update-avatar"
          placeholder="Ссылка на картинку"
          name="link"
          required
        />
        <span id="input-update-avatar-error" className="popup__error"></span>
        <button className="popup__button" type="submit">Сохранить</button>
      </PopupWithForm>
      {/* попап Добавить карточку */}
      <PopupWithForm
        title='Новое место'
        name='add-card'
      >
        <input
          id="input-mesto"
          type="text"
          className="popup__input-text popup__input-text_type_mesto"
          placeholder="Название"
          name="name"
          minlength="2"
          maxlength="30"
          required
        />
        <span id="input-mesto-error" className="popup__error"></span>
        <input
          id="input-link"
          type="url"
          className="popup__input-text popup__input-text_type_link"
          placeholder="Ссылка на картинку"
          name="link"
          required
        />
        <span id="input-link-error" className="popup__error"></span>
        <button className="popup__button" type="submit">Сохранить</button>
      </PopupWithForm>
    </main>
  )
}


export default Main;