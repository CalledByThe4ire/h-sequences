/* eslint-disable import/prefer-default-export */
import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

// BEGIN (write your solution here)
// @flow
type List = (...args: any) => any | null;

const zip = (list1: List, list2: List): List => {
  if (isEmpty(list1) || isEmpty(list2)) {
    return l();
  }
  return cons(l(head(list1), head(list2)), zip(tail(list1), tail(list2)));
};

export default zip;
// END

