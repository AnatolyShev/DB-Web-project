# DB and Web Project
# I Описание
Проект онлайн-магазина книг и канцелярских товаров
## Наименование
StoreBook - онлайн книжный магазин 
## Предметная область
Учебный проект, онлайн-магазин товаров
# II Данные
## Для каждого элемента данных - ограничения
1. User Table
   - Поля:
     - id (Integer, Primary Key, AutoIncrement) - идентификатор пользователя
     - email (String, Unique) - электронная почта пользователя
     - name (String) - имя пользователя
     - telegram (String) - телеграм пользователя
     - is_superuser (Boolean) - роль пользователя (true: Admin, false: User)
   - ForeignKey:
     - id_order (integer, Foreign Key referencing Order.id) - ссылка на идентификатор заказа пользователя

2. Order Table
   - Поля:
     - id (Integer, Primary Key, AutoIncrement) - идентификатор заказа
     - id_user (Integer) - идентификатор пользователя, сделавшего заказ
     - date (Date) - дата заказа
     - in_work (Boolean) - состояние заказа
     - is_completed (Boolean) - состояние заказа
     - note (String) - описание заказа
   - ForeignKey:
     - id_user (integer, Foreign Key referencing User.id) - ссылка на идентификатор пользователя заказа
     - id_order_info (integer, Foreign Key referencing OrderInfos.id) - ссылка на идентификатор доп.информации о заказе

3. OrderInfos Table
   - Поля:
     - id (Integer, Primary Key, AutoIncrement) - идентификатор
     - id_order (Integer) - идентификатор заказа
     - id_service (Integer) - идентификатор услуги
     - count (Integer) - количество
   - ForeignKey:
     - id_order (integer, Foreign Key referencing Order.id) - ссылка на идентификатор заказа
     - id_service (integer, Foreign Key referencing Service.id) - ссылка на идентификатор услуги заказа

4. Service Table
   - Поля:
     - id (Integer, Primary Key, AutoIncrement) - идентификатор услуги
     - name (String) - название услуги
     - annotation (String) - аннотация/описание услуги
     - cost (Integer) - стоимость услуги
     - type (Integer) - тип услуги
   - ForeignKey:
     - id_type (integer, Foreign Key referencing ServiceType.id) - ссылка на идентификатор типа услуги

5. ServiceType Table
   - Поля:
     - id (Integer, Primary Key, AutoIncrement) - идентификатор типа услуги
     - name (String) - название типа
     - annotation (String) - описание
     - super_type (Integer) - супер тип
   - ForeignKey:
     - id_super_type (integer, Foreign Key referencing SuperType.id) - ссылка на идентификатор супер типа

6. SuperType Table
   - Поля:
     - id (Integer, Primary Key, AutoIncrement) - идентификатор
     - name (String) - название
     - annotation (String) - описание

## Общие ограничения целостности

## Схема базы данных
https://dbdiagram.io/d/BD-Web-proj-65dd83475cd0412774e371e3
# III Пользовательские роли: наименование, ответственность, количество пользователей в этой роли

# IV UI/API
## UI
UI представляет собой набор страниц, с которыми взаимодейтсвует пользователь.
## API

# V Технологии разработки
## Фреймворки и библиотеки:
1. Node.js - backend
2. React.js - frontend

## Языки программирования
1. Python
2. JavaScript

## СУБД
1. PostgreSGL
2. DBeaver
3. pgAdmin 4

# VI Тестирование
