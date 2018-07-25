/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
// @flow
type List = (...args: any) => any | null;

const take = (n: number, list: List): List => {
  if (isEmpty(list) || n === 0) {
    return l();
  }

  return cons(head(list), take(n - 1, tail(list)));
};

export default take;
// END
