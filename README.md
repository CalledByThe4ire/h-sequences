### html-tags.js

Реализуйте и экспортируйте функцию `extractHeaders`, которая извлекает тексты всех заголовков `h2` из переданного `html` и возвращает `html` в котором каждый из этих текстов обернут в `p`.

Например такой `html` в строковом представлении `<h2>header1</h2><h2>header2</h2><p>content</p>` превратится в такой `<p>header1</p><p>header2</p>`. Ниже развернутый пример.

```
import { node, append, make, reduce, toString as htmlToString } from 'hexlet-html-tags';

const html1 = append(make(), node('h2', 'header1'));
const html2 = append(html1, node('h2', 'header2'));
const html3 = append(html2, node('p', 'content'));
// => <h2>header1</h2><h2>header2</h2><p>content</p>

htmlToString(extractHeaders(html3));
// => <p>header1</p><p>header2</p>

```

Реализуйте и экспортируйте функцию `wordsCount`, которая считает вхождения слова в определенный тег. Для подсчета слов в тексте одного тега воспользуйтесь вспомогательной функцией `wc`, которая уже импортирована в модуль `html-tags`.

```
import { make, append, node } from 'hexlet-html-tags';

const html1 = append(make(), node('h2', 'header1 lisp'));
const html2 = append(html1, node('p', 'content'));
const html3 = append(html2, node('h2', 'lisp header2 lisp'));
const html4 = append(html3, node('p', 'content lisp'));

wordsCount('h2', 'lisp', html4); // 3

```

### Подсказки

-   Подсчет слов в тексте: `wc(word, text)`, где `word` искомое слово, а `text` это текст, в котором ведется поиск.

    ```
    wc('what', 'what, what, who, what'); // 3
    wc('la', 'loli'); // 0
    ```