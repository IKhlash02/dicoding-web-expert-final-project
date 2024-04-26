class Component {
  // eslint-disable-next-line object-curly-newline
  constructor({ id, name, description, pictureId, city, rating }) {
    if (this.constructor === Component) {
      throw new Error('cannot instantiate from Abstract class');
    }
    this.id = id;
    this.name = name;
    this.description = description;
    this.pictureId = pictureId;
    this.city = city;
    this.rating = rating;
  }

  render() {
    return `
      <article class="post-item">
      <img class="post-item__thumbnail" src="${this.pictureId}" 
      alt="Gambar ${this.name}" />
      <div class="post-item__content">
        <p class="post-item__sub">
          Kota ${this.city}
          <span class="post-item__rating">Rating ${this.rating}</span>
        </p>
        <h1 class="post-item__title">
          <a href="#">${this.name}</a>
        </h1>
        <p class="post-item__description">${this.description}</p>
      </div>
    </article>
      `;
  }
}

module.exports = Component;
