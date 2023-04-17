import photoProfile from './images/photo-profile.jpg';
import editButton from './images/Edit__Button.svg';
import pluse from './images/pluse.svg';
function App() {
  return (
    <div class="page__container">
        <header className="header">
          <div className="header__logo"></div>
        </header>
        <main className="content">
          <section className="profile">
            <div className="profile__button-avatar">
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
        <footer className="footer">
          <p className="footer__text">© 2022 Mesto Russia</p>
        </footer>
        {/*Темплейт карточки*/}
        <template id = "card">
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
        {/* попап Редактировать профиль */}
        <div className="popup popup_type_edit-profile">
          <div className="popup__container">
            <button className="popup__close" type="button"></button>
            <h2 className="popup__name">Редактировать профиль</h2>
            <form className="popup__form" name="formPopup" novalidate>
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
              <span id="input-name-error" class="popup__error"></span>
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
            </form>
          </div>
        </div>
      {/* попап Добавить карточку */}
        <div className="popup popup_type_add-card">
          <div className="popup__container">
            <button className="popup__close popup__close_add_card" type="button"></button>
            <h2 className="popup__name">Новое место</h2>
            <form className="popup__form popup__form-card" name="formPopup"> 
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
              <span id="input-mesto-error" class="popup__error"></span>
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
            </form>
          </div>
        </div>
      {/* попап Развернуть карточку */}
        <div className="popup popup_type_expand-card">
          <div className="popup__container-fullscreen">
            <button className="popup__close popup__close_expand_card" type="button"></button>
            <img src="#" alt="" className="popup__photo"/>
            <h2 className="popup__photo-name"></h2>
          </div>
        </div> 
        {/* попап Удалить карточку */}
        <div className="popup popup_type_delete-card">
          <div className="popup__container">
            <button className="popup__close popup__close_delete-card" type="button"></button>
            <h2 className="popup__name">Вы уверены?</h2>
            <button className="popup__button-yes" type="submit">Да</button>
          </div>
        </div>
        {/* попап Обновить фото профиля */}
        <div className="popup popup_type_update-avatar">
          <div className="popup__container">
            <button className="popup__close popup__close_update-avatar" type="button"></button>
            <h2 className="popup__name">Обновить аватар</h2>
            <form className="popup__form popup__form-update-avatar" name="formPopup" >
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
            </form>
          </div>
        </div>
      </div>
  );
}

export default App;
