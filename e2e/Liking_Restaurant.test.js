const assert = require('assert');

/* eslint-disable no-undef */
Feature('LIKING RESTAURANT');

Scenario('Liking adn unLikikng one Restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.post-item__title a');
  const firstRestaurant = locate('.post-item__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.post-item');
  const LikedRestaurantTitle = await I.grabTextFrom('.post-item__title a');

  assert.strictEqual(firstRestaurantTitle, LikedRestaurantTitle);

  I.seeElement('.post-item');
  const likedRestaurant = locate('.post-item__title a').first();
  I.click(likedRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.dontSee(firstRestaurantTitle);

  pause();
});
