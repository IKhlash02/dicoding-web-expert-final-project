import FavoriteRestaurantIdb from '../../../public/data/favorite-idb';
import { creatRestarauntItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <section class="explore">
      <h1 class="explore__label">You Like Restaurant</h1>
      <div class="posts"></div>
    </section>
  `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    console.log(restaurants);
    const restaurantContainer = document.querySelector('.posts');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += creatRestarauntItemTemplate(restaurant);
    });
  },
};

export default Like;
