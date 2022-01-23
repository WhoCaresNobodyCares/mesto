export default class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, { headers: { authorization: this._token } }).then(response => response.json());
  }

  setUserInfo(name, about) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: { authorization: this._token, 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, about: about }),
    }).then(response => response.json());
  }

  getInitialArray() {
    return fetch(`${this._url}/cards`, { headers: { authorization: this._token } }).then(response => response.json());
  }

  addNewCard(name, link) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: { authorization: this._token, 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, link: link }),
    }).then(response => response.json());
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, { method: 'DELETE', headers: { authorization: this._token } }).then(response =>
      response.json()
    );
  }
}
