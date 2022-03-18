/* eslint-disable import/extensions */
/**
 * @jest-environment jsdom
 */

import { countMovies } from './get-api';

test('displays number of items on home-page', () => {
  document.body.innerHTML = '<h1 class="count-movies"></h1>';
  countMovies([1, 2, 3, 4, 5, 6, 7, 59, 89, 20]);
  expect(document.querySelector('.count-movies').innerHTML).toBe('10');
});

test('displays nothing if there are no items on home-page', () => {
  document.body.innerHTML = '<h1 class="count-movies"></h1>';
  countMovies([]);
  expect(document.querySelector('.count-movies').innerHTML).toBe('');
});
