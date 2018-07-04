import { l, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import take from '../src/take';

describe('Take', () => {
  it('set 1', () => {
    expect(listToString(take(3, l()))).toBe(listToString(l()));
  });

  it('set 2', () => {
    expect(listToString(take(3, l(1, 2)))).toBe(listToString(l(1, 2)));
  });

  it('set 3', () => {
    expect(listToString(take(1, l('op', 'hop')))).toBe(listToString(l('op')));
  });
});
