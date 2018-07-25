/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line
import {
  l,
  isEmpty,
  cons,
  reduce,
  has,
  reverse,
  toString as listToString,
} from 'hexlet-pairs-data';

// BEGIN (write your solution here)
// @flow
type List = (...args: any) => any | null;

const appendUniq = (base: List, list: List): List => {
  const result = reduce(
    (value: mixed, acc: List) => (has(acc, value) ? acc : cons(value, acc)),
    reverse(base),
    list,
  );
  return reverse(result);
};

export default (list1, list2) => appendUniq(appendUniq(l(), list1), list2);
// END
