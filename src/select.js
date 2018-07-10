/* eslint-disable import/prefer-default-export, no-unused-vars */
import {
  l,
  cons as consList,
  isList,
  isEmpty,
  head,
  tail,
  concat,
  toString as listToString,
} from 'hexlet-pairs-data';

import {
  is,
  toString as htmlToString,
  hasChildren,
  children,
  filter,
  reduce,
} from 'hexlet-html-tags';

// BEGIN (write your solution here)
// @flow
type List = (...args: any) => any | null;
type Node = {
  nodeName: string,
  nodeValue: mixed
};

const select = (tagName: string, list: List): List => {
  if (isEmpty(list)) {
    return list;
  }
  const predicate = (element: Node): boolean => is(tagName, element);
  const func = (element: Node, acc: List): List => {
    if (!predicate(element) && !hasChildren(element)) {
      return acc;
    }

    if (predicate(element)) {
      if (!hasChildren(element) || !predicate(head(children(element)))) {
        return consList(element, acc);
      } else if (predicate(head(children(element)))) {
        return concat(consList(element, acc), children(element));
      }
    }
    return reduce(func, acc, children(element));
  };
  return reduce(func, l(), list);
};

export default select;
// END
