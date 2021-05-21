# Тестовое задание для Junior Fullstack
<img width="200" src="https://raw.githubusercontent.com/wowvendor/wowvendor-junior-test/97bf30dc6a091261bd6fc6409e9c8e2791c3d745/images/donut.svg">\
\
Для выполнения тестового задания необходимо склонировать данный репозиторий на локальную машину. \
В качестве результата задания принимается ссылка на публичный репозиторий в Github

## На выполнение тестового задания отводится 2 дня

## Дано:

Приложение мини-игра. Целью игры является добежать до финиша, не столкнувшись с препятствием.\
В приложении реализованы основные методы управления персонажем: ```run, stop, jump```;

## Задачи:
1. Написать JS скрипт, автоматизирующий бег и перепрыгивание через препятствие;
2. Написать PHP скрипт, принимающий результаты забега и записывающий их в БД MySQL;
3. Отправлять результаты забега каждый раз, когда персонаж доходит до финиша или спотыкается о препятствие.

### Результаты забега:

1. Позиция препятствия;
2. Время забега;
3. Дистанция на которой персонаж совершил прыжок;
4. Размер препятствия;
5. Результат забега (Успех или Провал).


### Получение данных и методы управления:

#### Управление персонажем:
```js
    window.character.run(); 
    window.character.stop(); 
    window.character.jump(); 
```

#### Публичные свойства:
```js
    window.terrain.rockPosition; 
    window.terrain.rockSize;
    window.character.isWin; 
    window.character.characterPosition;
```
### Результаты работы:
Публичный репозиторий Github, содержащий:
1. Оригинальный репозиторий;
2. Модифицированный файл `./js/script.js`;
3. Реализованный бекенд на PHP;
4. Файл дампа базы MySQL.
