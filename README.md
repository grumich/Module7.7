# Игра Угадайка / Guessing game

Игра, в которой компьютер угадывает задуманное пользователем число.

Компьютер определяет число по алгоритму бинарного поиска, при этом сравнение числа с искомым и запуск итераций поиска выполняет пользователь.

Пользователь указывает интервал от -999 до 999.

При вводе текста, который не может быть интерпретирован как число (NaN) присваиваются значения по умолчанию: 0 и 100.

При вводе минимума или максимума меньше -999 или больше 999 числа изменяются на ближайшие границы -999 и 999 соответственно. (например: -1500 на -999, а 2300 на 999).

Число выводится в текстовой форме, если на его запись в текстовой форме требуется меньше 20 символов, включая пробелы (вопрос выглядит не «Вы загадали число 15?», а «Вы загадали число пятнадцать?» и т.д.)

## Используемые технологии

* HTML
* CSS
* JavaScript


# Генератор случайных пользовательских данных

Генерирует данные: фамилия, имя, отчество, пол, дата рождения, профессия.

Имя, фамилия и отчество привязаны к полу.

Профессия связана с полом (мужские и женские профессии).

Добавлена генерация дня и месяца рождения. Месяц рождения написан текстом, например: *«января», «июля»*.

Ограничена генерация дней для месяцев, в которых встречается 28, 30 и 31 дней.

Генерация всех данных происходит через нажатие на соответствующую кнопку (в коде можно включить генерацию и через перезагрузку страницы).

Имеется возможность сбрасывать информацию.
