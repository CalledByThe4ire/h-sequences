/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line
import {
  l,
  isEmpty,
  reverse,
  toString as listToString,
  isList,
  head,
  tail,
  cons,
  reduce,
} from 'hexlet-pairs-data';

// BEGIN (write your solution here)
// @flow
type List = (...args: any) => any | null;

const flatten = (list: List): List => {
  const iter = (items: List, acc: List) => {
    if (isEmpty(items)) {
      return acc;
    }
    const current = head(items);
    const rest = tail(items);

    if (!isList(current)) {
      return iter(rest, cons(current, acc));
    }
    return iter(rest, iter(current, acc));
  };
  return reverse(iter(list, l()));
};

export default flatten;
// END
