export default class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
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
          return Promise.reject(`Что-то пошло не так в getUserInformation(): ${response.status}`);
        }
      })
      .catch(error => {
        console.log(`Что-то действительно пошло не так в getUserInformation(): ${error}`);
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
    }).catch(error => {
      console.log(`Что-то действительно пошло не так в setUserInformation(): ${error}`);
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
          return Promise.reject(`Что-то пошло не так в getInitialCardsArray(): ${response.status}`);
        }
      })
      .catch(error => {
        console.log(`Что-то действительно пошло не так в getInitialCardsArray(): ${error}`);
      });
  }
}
