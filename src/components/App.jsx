import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/Api.js';
import EditProfilePopup from './EditProfilePopup';

function App() {
  // добавим в стейт переменные состояния попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  //добавим в стейт переменную состояния текущего пользователя
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  // React.useEffect(() => {
  //   api.getUserInfo()
  //   .then((userData) => {
  //     setCurrentUser(userData)
  //   })
  // })

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardData]) => {
        //получаем объект с данными пользователя(name, about, avatar)
        //получим массив карточек с сервера
        setCurrentUser(userData)
        setCards(cardData);
      }).catch((err) => {
        console.log(err); // выведем ошибку в консоль 
      });
  }, []);//при перерендере будет проверяться массив зависимостей

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

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id,!isLiked)
      .then((newCard) => {
        setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c))
      }).catch((err) => {
        console.log(err); // выведем ошибку в консоль 
      });
  }

  function handleCardDelete(card){
    api.deleteCard(card._id)
      .then((newCard) => {
        setCards(cards => cards.filter((c) => c._id !== card._id))
      }).catch((err) => {
        console.log(err); // выведем ошибку в консоль 
      });
  }

  function handleUpdateUser(userData){
    api.setUserInfo(userData)
      .then((res)=>{
        debugger;
        setCurrentUser(res);
        closeAllPopups();
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header />
          <Main
            onEditAvatarClick={handleEditAvatarClick}

            onEditProfileClick={handleEditProfileClick}

            onAddPlaceClick={handleAddPlaceClick}

            onCardClick={handleCardClick}

            onCardLike={handleCardLike}

            onCardDelete={handleCardDelete}

            cards={cards}
          />
          <Footer />
          {/* попап Редактировать профиль */}
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
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
    </CurrentUserContext.Provider>
  );
}

export default App;
