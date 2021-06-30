### Функционал приложения

- регистрация и авторизация рекрутера;
- добавление и редактирование данных рекрутера;
- добавление и удаление соискателей;
- редактирование данных соискателя;
- добавление и удаление заметок по соискателю;
- добавление и удаление собеседований;
- изменение статуса соискателя;
- добавление компаний рекрутеру / изменение компании соискателя;
- календарь с отображением собеседований и возможность их добавления.


### При разработке использовал:

- JavaScript (ES6) / React / Redux;
- json-server / concurrently / nodemon;
- redux-thunk / reselect / redux-logger;
- Material-UI / Fullcalendar / Moment;
- React Router;
- react-transition-group ;
- prettier / ESLint / prop-types;
- git / GitHub.

### Роуты для запросов на фейковый сервер

| Адрес                                       | Назначение                | Обязательные значения            |
| --------------------------------------------|---------------------------| ---------------------------------|
| POST /auth                                  | Авторизация               |login(String), password(String)|
| POST /recruiters                            | регистрация нового пользователя|login(String), password(String), name(String), email(String) |
| PATCH /recruiters /id                       | изменение данных пользователя |-|
| GET /clients                                | получение списка клиентов     |headers: {token: String}|
| POST /clients                               | добавление нового клиента | recruiterId(number), fullName(String), email (String), specialty (String), companyId(number)|
| DELETE /clients /id                         | удаление клиента по ID |-|
| PATCH /clients /id                          | изменение данных клиента |-|
| GET /interviews                             | получение списка собеседований |headers: {token: String}|
| POST /interviews                            | добавление собеседования  |recruiterId(Number), clientsId(Number), date (String) |-|
| GET /notes                                  | получение списка заметок |headers: {token: String}|
| POST /notes                                 | добавление новой заметки |clientsId(Number), title(String), content (String)|
| DELETE /notes /id                           | удаление заметки по ID |-|
| GET /companies                              | получение списка компаний |headers: {token: String}|
| POST /companies                             | добавление компаний    |-|
| DELETE /companies /id                       | удаление компаний    |-|
| GET /stages                                 | получение списка состояний|-|

