l

List constructor

Parameters

-   `elements` ...any

Examples

```
l(); // ()
l(8, 10); // (8, 10)

```

cons
----

Add element to list

Parameters

-   `element` any
-   `list` List

Examples

```
cons(5, l(1, 0)); // (5, 1, 0)

```

head
----

Get list's head

Parameters

-   `list` List

Examples

```
head(l(10, 15, 20)); // 10

```

tail
----

Get list's tail

Parameters

-   `list` List

Examples

```
tail(l(10, 15, 20)); // (15, 20)

```

isEmpty
-------

Check if list is empty

Parameters

-   `list` List

Examples

```
isEmpty(l()); // true
isEmpty(l(0)); // false
isEmpty(l('a', 5)); // false

```

toString
--------

Convert list to string

Parameters

-   `list` List

Examples

```
toString(l()); // ()
toString(l('hello', 'world')); // ('hello', 'world')
```