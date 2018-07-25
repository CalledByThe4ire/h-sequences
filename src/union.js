/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line
import {
  head,
  tail,
  concat,
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

// const has = (list: List, element: mixed): boolean => {
//   if (isEmpty(list)) {
//     return false;
//   }
//   if (head(list) === element) {
//     return true;
//   }

//   return has(tail(list), element);
// };

const unique = (list: List): List => {
  const iter = (items: List, acc: List): List => {
    if (isEmpty(items)) {
      return reverse(acc);
    }

    const current = head(items);
    const rest = tail(items);
    const newAcc = has(rest, current) ? acc : cons(current, acc);

    return iter(rest, newAcc);
  };
  return iter(list, l());
};

// const list1 = l(1, 5, 3, 5, 8, 9);
// const list2 = l(2, 3, 2, 1, 7);

// console.log(listToString(unique(list1)));
// console.log(listToString(unique(list2)));

export default (list1: List, list2: List): List => {
  if (isEmpty(list1) && isEmpty(list2)) {
    return l();
  }
  return unique(concat(unique(list1), unique(list2)));
};
// END
