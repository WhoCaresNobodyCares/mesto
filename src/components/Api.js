export default class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  getUserInformation() {
    return fetch(`${this._url}/users/me`, {
      headers: { authorization: this._token },
    }).then(response => {
      return response.ok ? response.json() : Promise.reject(`${response.status}`);
    });
  }

  setUserInformation(name, about) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(response => {
      return response.ok ? response.json() : Promise.reject(`${response.status}`);
    });
  }

  getInitialCardsArray() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._token,
      },
    }).then(response => {
      return response.ok ? response.json() : Promise.reject(`${response.status}`);
    });
  }

  addNewCard(name, link) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(response => {
      return response.ok ? response.json() : Promise.reject(`${response.status}`);
    });
  }
}
