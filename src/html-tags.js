/* eslint-disable import/prefer-default-export */
import {
  l,
  isEmpty,
  head,
  tail,
  cons,
  reverse,
  toString as listToString,
} from 'hexlet-pairs-data'; // eslint-disable-line
import {
  name,
  value,
  node,
  is,
  toString as htmlToString,
} from 'hexlet-html-tags'; // eslint-disable-line
import { reverse as reverseStr } from './strings';

// BEGIN (write your solution here)
// @flow
type List = (...args: any) => any | null;
// Рекурсивный процесс
// export const map = (func, elements) => {
//   if (isEmpty(elements)) {
//     return l();
//   }

//   return cons(func(head(elements)), map(func, tail(elements)));
// };

// Итеративный процесс (рекурсивно)
export const map = (func: Function, elements: List) => {
  const iter = (items: List, acc: List) => {
    if (isEmpty(items)) {
      return reverse(acc);
    }
    return iter(tail(items), cons(func(head(items)), acc));
  };

  return iter(elements, l());
};

export const mirror = (elements: List): List =>
  map((element: mixed) => node(name(element), reverseStr(value(element))), elements);
// END

export const b2p = (elements: List): List => {
  if (isEmpty(elements)) {
    return l();
  }

  let newElement: mixed;
  const element: mixed = head(elements);
  if (is('blockquote', element)) {
    newElement = node('p', value(element));
  } else {
    newElement = element;
  }

  return cons(newElement, b2p(tail(elements)));
};
