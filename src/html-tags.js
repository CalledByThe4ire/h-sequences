/* eslint-disable import/prefer-default-export */
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
