const DATA = require('../public/data/DATA.json');
const Component = require('./component');

class Restaurant extends Component {
  static list = [];

  static init() {
    try {
      const response = DATA;
      const data = response.restaurants;
      this.list = data.map((restaurantData) => new this(restaurantData));

      const restaurantContainer = document.querySelector('.posts');
      this.list.forEach((restaurant) => {
        restaurantContainer.innerHTML += restaurant.render();
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error processing data:', error);
    }
  }
}

module.exports = Restaurant;
