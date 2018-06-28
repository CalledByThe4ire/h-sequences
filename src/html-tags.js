// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';

// eslint-disable-next-line
export const make = () => l();
// BEGIN (write your solution here)
// @flow
type Node = {
  name: mixed,
  value: mixed
};
type List = (...args: mixed) => mixed | null;

export const append = (dom: List, element: Node) => consList(element, dom);

export const node = (tag: mixed, content: mixed): Node => cons(tag, content);

export const name = (element: Node): mixed => car(element);
export const value = (element: Node): mixed => cdr(element);

export const toString = (elements: List): string => {
  if (isEmpty(elements)) {
    return '';
  }
  const element = head(elements);
  const tag = name(element);
  return `${toString(tail(elements))}<${tag}>${value(element)}</${tag}>`;
};
// END

