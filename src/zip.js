/* eslint-disable import/prefer-default-export */
import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

// BEGIN (write your solution here)
// @flow
type List = (...args: any) => any | null;

const zip = (list1: List, list2: List): List => {
  const iter = (first: List, last: List, acc: List): List => {
    if (isEmpty(first) || isEmpty(last)) {
      return acc;
    }

    const newAcc = cons(l(head(first), head(last)), acc);
    return iter(tail(first), tail(last), newAcc);
  };

  return reverse(iter(list1, list2, l()));
};

export default zip;
// END

