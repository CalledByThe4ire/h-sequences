/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line
import {
  l,
  isEmpty,
  head,
  tail,
  filter,
  toString as listToString
} from 'hexlet-pairs-data';

// BEGIN (write your solution here)
// @flow
type List = (...args: any) => any | null;

export default (list: List): List => {
  if (isEmpty(list)) {
    return l();
  }
  return filter((element: number): List => {
    if (head(list) % 2 === 0) {
      return element % 2 === 0;
    }
    return element % 2 !== 0;
  }, list);
};
// END
