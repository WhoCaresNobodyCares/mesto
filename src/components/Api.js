export default class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  _handleThenErrors(methodName, response) {
    return Promise.reject(`Что-то пошло не так в ${methodName} - ${response.status}`);
  }

  _handleCatchErrors(methodName, error) {
    console.log(`Что-то действительно пошло не так в ${methodName} - ${error}`);
  }

  getUserInformation() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: this._token,
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return this._handleThenErrors('getUserInformation()', response);
        }
      })
      .catch(error => {
        this._handleCatchErrors('getUserInformation()', error);
      });
  }

  setUserInformation(name, about) {
    fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(`Теперь твоё имя - ${data.name}, а твоё описание - ${data.about}`);
      })
      .catch(error => {
        this._handleCatchErrors('setUserInformation()', error);
      });
  }

  getInitialCardsArray() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._token,
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return this._handleThenErrors('getInitialCardsArray()', response);
        }
      })
      .catch(error => {
        this._handleCatchErrors('getInitialCardsArray()', error);
      });
  }

  addNewCard(name, link) {
    fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(
          `Ты загрузил карточку! Имя - ${data.name}, а ссылка на изображение - ${data.link}`
        );
      })
      .catch(error => {
        this._handleCatchErrors('addNewCard()', error);
      });
  }
}
