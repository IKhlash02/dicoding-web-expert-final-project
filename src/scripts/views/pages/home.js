import RestaurantSource from '../../data/restauran-source';
import { creatRestarauntItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="hero">
      <div class="hero__inner">
        <h1 class="hero__title">Selamat Datang di CulinaryHub</h1>
        <p class="hero__tagline">Nikmati suguhan makanan yang menggoda lidah dan mengusik indra penciuman Anda dari berbagai wilayah di Indonesia.</p>
      </div>
    </section>
    <section class="explore">
      <h1 class="explore__label">Explore Restaurant</h1>
      <div class="posts"></div>
    </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await RestaurantSource.listRestaurant();
    const restaurantsContainer = document.querySelector('.posts');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += creatRestarauntItemTemplate(restaurant);
    });
  },
};

export default Home;
