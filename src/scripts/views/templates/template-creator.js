import CONFIG from '../../global/config';

const createRestaurantDetailTemplate = (restaurant) => `
<div class="restaurant-detail">
  <h2 class="restaurant-title">${restaurant.name}</h2>
  <img class="restaurant-poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL}/medium/${restaurant.pictureId}" alt="${restaurant.name}" />
  
  <div class="restaurant-info">
    <p>${restaurant.description}</p>
    <h3>Information</h3>
    <p><strong>Address:</strong> ${restaurant.address}</p>
    <p><strong>City:</strong> ${restaurant.city}</p>
    <p><strong>Categories:</strong> ${restaurant.categories.map((category) => category.name).join(', ')}</p>
    <p><strong>Rating:</strong> ${'<span class="star">&#9733;</span>'.repeat(restaurant.rating)}</p>
  </div>
  
  <div class="menu-section">
    <h3>Menu</h3>
    <div>
      <h4>Foods</h4>
      <br/>
      <ul class="horizontal-list" >${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}</ul>
    </div>
    <div>
      <h4>Drinks</h4>
      <br/>
      <ul  class="horizontal-list">${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}</ul>
    </div>
  </div>
  
  <div class="restaurant-reviews">
    <h3>Customer Reviews</h3>
    <ul>
      ${restaurant.customerReviews.map((review) => `<li>
          <p><strong>${review.name}</strong> (${review.date}):</p>
          <p>${review.review}</p>
        </li>`).join('')}
    </ul>
  </div>
</div>


`;

const creatRestarauntItemTemplate = (restaurant) => `
<article class="post-item">
      <img class="post-item__thumbnail lazyload" data-src="${`${CONFIG.BASE_IMAGE_URL}/small/${restaurant.pictureId}`}" 
      alt="Gambar ${restaurant.name}" />
      <div class="post-item__content">
        <p class="post-item__sub">
          Kota ${restaurant.city}
          <span class="post-item__rating">Rating ${restaurant.rating}</span>
        </p>
        <h1 class="post-item__title">
          <a href="#/detail/${restaurant.id}">${restaurant.name}</a>
        </h1>
        <p class="post-item__description">${restaurant.description}</p>
      </div>
    </article>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  creatRestarauntItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
