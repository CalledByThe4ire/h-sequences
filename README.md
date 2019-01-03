### calculatePolygonPerimeter.js

Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход упорядоченный список точек, являющихся вершинами многоугольника, вычисляет и возвращает периметр многоугольника.

#### Примечания

-   Список реализован с помощью абстрации из библиотеки `hexlet-pairs-data`
-   Точка реализована с помощью абстракции из библиотеки `hexlet-points`
-   [Многоугольник](https://ru.wikipedia.org/wiki/%D0%9C%D0%BD%D0%BE%D0%B3%D0%BE%D1%83%D0%B3%D0%BE%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA) имеет не менее трёх вершин, поэтому, если на вход передан список, содержащий менее трёх точек, то функция должна вернуть `null`
-   Порядок точек, определяющих многоугольник, имеет значение (разный порядок может определять разные ([неконгруэнтные](https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BD%D0%B3%D1%80%D1%83%D1%8D%D0%BD%D1%82%D0%BD%D0%BE%D1%81%D1%82%D1%8C_(%D0%B3%D0%B5%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B8%D1%8F))) многоугольники). Поэтому при вычислении периметра надо придерживаться порядка, заданного во входном списке точек
-   В остальном считаем, что передан правильный многоугольник, то есть дополнительных проверок делать не надо

#### Примеры

За примерами работы обращайтесь в модуль с тестами: `__tests__/calculatePolygonPerimeter.test.js`

#### Подсказки

-   При необходимости вы можете самостоятельно импортировать функцию `toString` из библиотеки `hexlet-pairs-data` и использовать её для отладки решений. Эта функция возвращает строковое представление списка
-   При необходимости вы можете самостоятельно импортировать функцию `toString` из библиотеки `hexlet-points` и использовать её для отладки решений. Эта функция возвращает строковое представление точки
-   Для разрешения противоречий в случае импорта нескольких функций с одинаковыми именами используйте псевдонимы (aliases)