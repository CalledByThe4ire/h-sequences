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

const select = (tagName: string, html: List): List =>
  reduce(
    (element: Node, acc: List) => {
      const acc2: List = hasChildren(element)
        ? concat(select(tagName, children(element)), acc)
        : acc;
      return is(tagName, element) ? consList(element, acc2) : acc2;
    },
    l(),
    html,
  );
// END
