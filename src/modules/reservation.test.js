/**
 * @jest-environment jsdom
 */

 import { finalCounter } from './reservation';
 describe('reservation check', () => {
  test('number of reservations posted for an item ', () => {
    const raws = [
      {
        item_id: 'test-item1',
        username: 'Zahra',
        date_start: '2022-03-16',
        date_end: '2022-03-17',
      },
      {
        item_id: 'test-item1',
        username: 'Arshia',
        date_start: '2022-03-17',
        date_end: '2022-03-18',
      },
    ];

    expect(finalCounter(raws)).toBe(2);
  });

  test('number of reservation received', () => {
    const arr = ['2022-03-16 - 2022-03-17 by Zahra', '2022-03-17 - 2022-03-18 by Arshia'];
    expect(finalCounter(arr)).toBe(2);
  });

  test('invalid input', () => {
    const string = '2022/03/16 to 2022/03/17';
    const counter = finalCounter(string);
    expect(counter).toBe('invalid');
  });
});