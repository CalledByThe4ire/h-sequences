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

  const base: number = head(list);
  const firstMember: List = filter(
    (element: number): boolean => element < base,
    tail(list),
  );
  const secondMember: List = filter(
    (element: number): boolean => element >= base,
    tail(list),
  );

  return concat(sort(firstMember), cons(base, sort(secondMember)));
};

export default sort;
// END
