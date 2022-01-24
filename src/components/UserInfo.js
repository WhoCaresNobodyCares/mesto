export default class UserInfo {
  constructor(config) {
    this._config = config;
    this._name = document.querySelector(`.${this._config.nameClass}`);
    this._description = document.querySelector(`.${this._config.descriptionClass}`);
    this._avatar = document.querySelector(`.${this._config.avatarClass}`);
  }

  getInfo() {
    return { name: this._name.textContent, description: this._description.textContent };
  }

  setInfo(name, description) {
    this._name.textContent = name;
    this._description.textContent = description;
  }

  setAvatar(url) {
    this._avatar.style = `background-image: url('${url}');`;
  }
}
