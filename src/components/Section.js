export default class Section {
  constructor(initialRenderer, newRenderer, containerSelectorId) {
    this._initialRenderer = initialRenderer;
    this._newRenderer = newRenderer;
    this._container = document.querySelector(`#${containerSelectorId}`);
  }

  renderArray(array) {
    array.forEach(element => {
      this._initialRenderer(this._container, element);
    });
  }

  renderCard(element) {
    this._newRenderer(this._container, element);
  }
}
