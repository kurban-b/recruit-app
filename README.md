| Адрес                                       | Назначение                | Обязательные значения            |
| --------------------------------------------|---------------------------| ---------------------------------|
| GET /users?login={логин}&password={пароль}  | Авторизация |-|
| POST /users                                 | регистрация нового пользователя|login(String), password(String), name(String), email(String) |
| PATCH /users /id                            | добавление и изменение данных пользователя | |
| GET /clients?userId={id}                    | получение списка клиентов по ID пользователя|-|
| GET /clients /id                            | получение клиента по ID |-|
| POST /clients                               | добавление нового клиента по ID | usersId(number), fullName(String), email (String), specialty (String), companyId(number), stageId(number), archive (Boolean)|
| DELETE /clients /id                         | удаление клиента по ID |-|
| PATCH /clients /id                          | добавление и изменение данных пользователя | |
| GET /interviews                             | получение списка собеседований |-|
| POST /interviews                            | добавление собеседования  |userId(Number), clientsId(Number), date (String) |-|
| GET /notes?userId={id}                      | получение списка заметок по ID пользователя|-|
| POST /notes                                 | добавление новой заметки |userId(Number), clientsId(Number), title(String), content (String), date(String)|
| DELETE /notes /id                           | удаление заметки по ID  |-|
| GET /companies?userId={id}                  | получение списка компаний по Id пользователя |-|
| POST /companies /id                         | добавление компаний    |-|
| DELETE /companies /id                       | удаление компаний    |-|
| GET /stages                                 | получение списка состояний|-|

