import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  // добавим в стейт переменные состояния попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
    setIsImagePopupOpen(false);
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditAvatarClick={handleEditAvatarClick}

          onEditProfileClick={handleEditProfileClick}

          onAddPlaceClick={handleAddPlaceClick}

          onCardClick={handleCardClick}
        />
        <Footer />
        {/* попап Развернуть карточку */}
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          isOpen={isImagePopupOpen}
        />
        {/* попап Удалить карточку */}
        <PopupWithForm
          title='Вы уверены?'
          name='delete-card'
        >
          <button className="popup__button-yes" type="submit">Да</button>
        </PopupWithForm>
        {/* попап Редактировать профиль */}
        <PopupWithForm
          title='Редактировать профиль'
          name='edit-profile'
          buttonText='Сохранить'
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="input-name"
            type="text"
            className="popup__input-text popup__input-text_type_name"
            placeholder="Введите имя"
            name="name"
            // minlength="2"
            // maxlength="40"
            required
          />
          <span id="input-name-error" className="popup__error"></span>
          <input
            id="input-interests"
            type="text"
            className="popup__input-text popup__input-text_type_interests"
            placeholder="Введите интересы"
            name="about"
            // minlength="2"
            // maxlength="200"
            required
          />
          <span id="input-interests-error" className="popup__error"></span>
        </PopupWithForm>
        {/* попап Обновить фото профиля */}
        <PopupWithForm
          title='Обновить аватар'
          name='update-avatar'
          buttonText='Сохранить'
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
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
        </PopupWithForm>
        {/* попап Добавить карточку */}
        <PopupWithForm
          title='Новое место'
          name='add-card'
          buttonText='Создать'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="input-mesto"
            type="text"
            className="popup__input-text popup__input-text_type_mesto"
            placeholder="Название"
            name="name"
            // minlength="2"
            // maxlength="30"
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
        </PopupWithForm>
      </div>
    </div>
  );
}

export default App;
