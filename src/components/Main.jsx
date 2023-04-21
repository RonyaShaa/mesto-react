import React from 'react';
import photoProfile from '../images/photo-profile.jpg';
import editButton from '../images/Edit__Button.svg';
import pluse from '../images/pluse.svg';
import { api } from '../utils/Api.js';
import Card from './Card';

function Main({onEditAvatarClick, onEditProfileClick, onAddPlaceClick, onCardClick}) {
  // добавим в стейт переменные состояния для данных пользователя
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardData]) => {
        //получаем объект с данными пользователя(name, about, avatar)
        //получим массив карточек с сервера
        console.log(cardData);
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        console.log(cardData)
        setCards(cardData);
      }).catch((err) => {
        console.log(err); // выведем ошибку в консоль 
      });
  }, []);//при перерендере будет проверяться массив зависимостей


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__button-avatar" onClick={onEditAvatarClick}>
          <img
            className="profile__photo"
            src={userAvatar}
            alt="Фотография владельца профиля"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
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
          <p className="profile__interests">{userDescription}</p>
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
        {
          cards.map((card) => {
            return (
              <Card
                key={card.id}
                card={card}
                onCardClick={onCardClick}
              />
            )
          })
        }
      </section>
    </main>
  )
}


export default Main;