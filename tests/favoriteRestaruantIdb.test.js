/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/public/data/favorite-idb';
import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteRestaurantontract';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurant()).forEach(async (Restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(Restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
