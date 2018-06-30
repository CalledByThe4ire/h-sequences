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
export const map = (func: Function, collection: List): List => {
  const iter = (fn: Function, acc: List) => {
    if (isEmpty(acc)) {
      return l();
    }
    const newElement = func(head(acc));
    return cons(newElement, iter(fn, tail(acc)));
  };
  return iter(func, collection);
};
export const mirror = (list: List): List =>
  map((elem: mixed) => node(name(elem), reverseStr(value(elem))), list);
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
