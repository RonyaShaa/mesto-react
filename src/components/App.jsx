import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from '../PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  function handleEditAvatarClick() {
    const popupUpdateAvatar = document.querySelector('.popup_type_update-avatar');
    popupUpdateAvatar.classList.add('popup_opened');
  }
  function handleEditProfileClick() {
    const popupEditProfile = document.querySelector('.popup_type_edit-profile');
    popupEditProfile.classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    const popupAddCard = document.querySelector('.popup_type_add-card');
    popupAddCard.classList.add('popup_opened');
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditAvatarClick={handleEditAvatarClick}

          onEditProfileClick={handleEditProfileClick}

          onAddPlaceClick={handleAddPlaceClick}
        />
        <Footer />
        {/*Темплейт карточки*/}
        <template id="card">
          <article className="card">
            <button
              className="card__delete"
              type="button"
            >
            </button>
            <img
              src="#"
              alt=""
              className="card__photo"
            />
            <div className="card__place">
              <h2 className="card__name"></h2>
              <div className="card__like-container">
                <button
                  className="card__like"
                  type="button"
                >
                </button>
                <div className="card__like-counter"></div>
              </div>
            </div>
          </article>
        </template>
        {/* попап Развернуть карточку */}
        <ImagePopup />
        {/* попап Удалить карточку */}
        <PopupWithForm
          title='Вы уверены?'
          name='delete-card'
        >
          <button className="popup__button-yes" type="submit">Да</button>
        </PopupWithForm>
      </div>
    </div>
  );
}

export default App;
