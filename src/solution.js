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
  const first = head(list);
  return filter(
    (value: number): List => Math.abs(first % 2) === Math.abs(value % 2),
    list,
  );
};
// END
