// @flow
/* eslint-disable import/prefer-default-export */
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import {
  l,
  isEmpty,
  reverse,
  toString as listToString,
  isList,
  head,
  tail,
  cons as consList,
  reduce,
  length,
} from 'hexlet-pairs-data'; // eslint-disable-line

// BEGIN (write your solution here)
// @flow
type List = (...args: any) => any | null;

const isSafeQueens = (list: List) => {
  if (isEmpty(list)) {
    return true;
  }
  const y1: number = head(list);
  const checkSafe: boolean = reduce(
    (y2: number, x: number) => (!x || y1 === y2 || Math.abs(y1 - y2) === x ? false : x + 1),
    1,
    tail(list),
  );
  return checkSafe ? isSafeQueens(tail(list)) : false;
};
export default isSafeQueens;
// END
