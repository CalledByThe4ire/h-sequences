/* eslint-disable import/prefer-default-export, arrow-body-style, consistent-return */
import {
  isEmpty,
  head,
  tail,
  toString as listToString,
} from 'hexlet-pairs-data'; // eslint-disable-line
import {
  value,
  is,
  toString as htmlToString,
} from 'hexlet-html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
// @flow
type Message = 'car' | 'cdr';
type Pair = (message: Message) => any;
type List = (...args: any) => any | null;

export const reduce = (fn: Function, acc: number, elements: List) => {
  const iter = (udList: List, accumulator: number) => {
    if (isEmpty(udList)) {
      return accumulator;
    }
    const item: Pair = head(udList);
    const newAcc: number = (fn(item, acc)) ? accumulator + 1 : accumulator;
    return iter(tail(udList), newAcc);
  };
  return iter(elements, 0);
};

export const emptyTagsCount = (tagName: string, html: List) => {
  return reduce((element: Pair, acc: number) => {
    if (is(tagName, element)) {
      if (value(element)) {
        return acc;
      }
      return acc + 1;
    }
  }, 0, html);
};
// END

export const headersCount = (tagName: string, elements: List) => {
  const iter = (items: List, acc: number) => {
    if (isEmpty(items)) {
      return acc;
    }
    const item: Pair = head(items);
    const newAcc: number = is(tagName, item) ? acc + 1 : acc;
    return iter(tail(items), newAcc);
  };
  return iter(elements, 0);
};
