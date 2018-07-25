/* eslint-disable import/prefer-default-export, no-confusing-arrow */
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
  const removeList = (elements: List, accumulator: List) =>
    reduce(
      (element: mixed, acc: List) =>
        !isList(element) ? cons(element, acc) : removeList(element, acc),
      accumulator,
      elements,
    );

  return reverse(removeList(list, l()));
};

export default flatten;
// END
