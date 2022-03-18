/**
 * @jest-environment jsdom
 */

import { CommentCounter } from './comment.js';

describe('comment counter check', () => {
  test('number of comments posted for an item ', () => {
    const raws = [
      {
        item_id: 'test-item2',
        username: 'Zahra',
        date_start: 'good movie',
      },
      {
        item_id: 'test-item2',
        username: 'Arshia',
        comment: 'too much episods',
      },
    ];

    expect(CommentCounter(raws)).toBe(2);
  });

  test('number of post received', () => {
    const arr = ['2022-03-16| Zahra: good movie', '2022-03-17| Arshia: too much episods'];
    expect(CommentCounter(arr)).toBe(2);
  });

  test('invalid input', () => {
    const string = '2022-03-16| Zahra: good';
    const counter = CommentCounter(string);
    expect(counter).toBe('invalid');
  });
});
