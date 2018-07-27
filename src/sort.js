/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line
import {
  l,
  isEmpty,
  head,
  tail,
  cons,
  concat,
  filter,
  toString as listToString,
} from 'hexlet-pairs-data';

// BEGIN (write your solution here)
// @flow
type List = (...args: any) => any | null;

const sort = (list: List): List => {
  if (isEmpty(list)) {
    return l();
  }

  const divisor: number = head(list);
  const rest: List = tail(list);

  const left: List = filter((value: number) => value <= divisor, rest);
  const right: List = filter((value: number) => value > divisor, rest);

  return concat(sort(left), cons(divisor, sort(right)));
};

export default sort;
// END
