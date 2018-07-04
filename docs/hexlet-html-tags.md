is
--

Check if node is tag

Parameters

-   `tagName` [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)
-   `element`

Examples

```
is('h3', node('h3', 'hexlet')); // true
is('h3', node('h6', 'hexlet')); // false

```

toString
--------

Convert list of nodes to string

Parameters

-   `elements`

Examples

```
const tags = make(node('p', 'text'), node('p', 'text2'));
toString(tags); // <p>text</p><p>text2</p>

```

hasChildren
-----------

Check if node has children

Parameters

-   `element`

Examples

```
hasChildren(node('h3', 'hexlet')); // false
hasChildren(node('div', l(node('p', 'wow')))); // true

```

children
--------

Get node's children

Parameters

-   `element`

Examples

```
const children = l(node('p', 'wow'), node('p', 'hey');
children(node('div', children)); // [('p', 'wow'), ('p', 'hey')]

```

filter
------

Filter a list of nodes

Parameters

-   `func`
-   `elements`

Examples

```
filter(element => is('h2', element), dom);

```

reduce
------

Reduce a list of nodes

Parameters

-   `func`
-   `init`
-   `elements`

Examples

```
reduce((element, acc) => acc + 1, 0, dom);
```