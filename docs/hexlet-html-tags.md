name
----

Get node's name

Parameters

-   `element`

Examples

```
name(node('p', 'hello, world')); // p

```

value
-----

Get node's value

Parameters

-   `element`

Examples

```
value(node('p', 'hello, world')); // hello, world

```

node
----

Make a node

Parameters

-   `tag`
-   `mix` (optional, default `data.l()`)

Examples

```
node('h2', 'hello, world');
node('div', l(node('p', 'one'), node('p', 'two')));

```

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