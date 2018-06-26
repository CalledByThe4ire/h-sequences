/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line
import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
// @flow
type List = (...args: any) => any | null;

export const has = (list: List, element: mixed): boolean => {
  if (isEmpty(list)) {
    return false;
  }
  if (head(list) === element) {
    return true;
  }
  return has(tail(list), element);
};

export const reverse = (list: List): List => {
  const iter = (acc: List, udList: List) => {
    if (isEmpty(udList)) {
      return acc;
    }
    return iter(cons(head(udList), acc), tail(udList));
  };
  return iter(l(), list);
};

export const concat = (list1: List, list2: List): List => {
  if (isEmpty(list1)) {
    return list2;
  }

  return cons(head(list1), concat(tail(list1), list2));
};
// END
