# DB and Web Project
# I Описание
## Наименование

## Предметная область

# II Данные
## Для каждого элемента данных - ограничения
1. User Table
 -- Поля
  - id (Integer, Primary Key, AutoIncrement) - идентификатор пользователя
  - email (String, Unique) - электронная почта пользователя
  - name (String) - имя пользователя
  - telegram (String) - телеграм пользователя
  - is_superuser (Boolean) - роль пользователя (true: Admin, false: User)
 -- ForeignKey
    
2. Order Table
 -- Поля
  - id (Integer, Primary Key, AutoIncrement)
  - id_user (Integer)
  - date (Date)
  - in_work (Boolean)
  - is_completed (Boolean)
  - note (String)
  - 
3. OrderInfos Table
 -- Поля
  - 
4. 
5. 
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
