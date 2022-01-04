export default class Section {
  constructor(renderInitial, renderNew, containerSelectorId) {
    this._renderInitial = renderInitial;
    this._renderNew = renderNew;
    this._container = document.querySelector(`#${containerSelectorId}`);
  }

  appendCard(element) {
    this._container.append(element);
  }

  prependCard(element) {
    this._container.prepend(element);
  }

  renderArray(array) {
    array.forEach(element => {
      this._renderInitial(element);
    });
  }

  renderCard(element) {
    this._renderNew(element);
  }
}
