/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line
import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
// @flow
type List = (...args: any) => any | null;

export const has = (list: List, element: mixed) => {
  if (isEmpty(list)) {
    return false;
  }
  if (head(list) === element) {
    return true;
  }
  return has(tail(list), element);
};
// END
