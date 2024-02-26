# DB and Web Project
# I Описание
## Наименование

## Предметная область

# II Данные
## Для каждого элемента данных - ограничения
1. User Table
  Поля:
  - id (Integer, Primary Key, AutoIncrement) - идентификатор пользователя
  - email (String, Unique) - электронная почта пользователя
  - name (String) - имя пользователя
  - telegram (String) - телеграм пользователя
  - is_superuser (Boolean) - роль пользователя (true: Admin, false: User)
  ForeignKey:
  - 

2. Order Table
  Поля:
  - id (Integer, Primary Key, AutoIncrement) - идентификатор заказа
  - id_user (Integer) - идентификатор пользователя, сделавшего заказ (FK)
  - date (Date) - дата заказа
  - in_work (Boolean) - состояние заказа
  - is_completed (Boolean) - состояние заказа
  - note (String) - описание заказа
  ForeignKey:
  - 

3. OrderInfos Table
  Поля:
  - id (Integer, Primary Key, AutoIncrement) - идентификатор
  - id_order (Integer) - идентификатор заказа (FK)
  - id_service (Integer) - идентификатор услуги (FK)
  - count (Integer) - количество
  ForeignKey:
  -

4. Service Table
  Поля:
  - id (Integer, Primary Key, AutoIncrement) - идентификатор услуги
  - name (String) - название услуги
  - annotation (String) - аннотация/описание услуги
  - cost (Integer) - стоимость услуги
  - type (Integer) - тип услуги (FK?)
  ForeignKey:
  -
5. ServiceType Table
  Поля:
  - id (Integer, Primary Key, AutoIncrement) - идентификатор типа услуги
  - name (String) - название типа
  - annotation (String) - описание
  - super_type (Integer) - супер тип (FK?)
  ForeignKey:
  -
6. SuperType Table
  Поля:
  - id (Integer, Primary Key, AutoIncrement) - идентификатор
  - name = (String) - название
  - annotation (String) - описание

## Общие ограничения целостности

## Схема базы данных

# III Пользовательские роли: наименование, ответственность, количество пользователей в этой роли

# IV UI/API
## UI

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
