| Адрес                                       | Назначение                | Обязательные значения            |
| --------------------------------------------|---------------------------| ---------------------------------|
| POST /auth                                  | Авторизация |login(String), password(String)|
| POST /recruiters                            | регистрация нового пользователя|login(String), password(String), name(String), email(String) |
| PATCH /recruiters /id                            | изменение данных пользователя | |
| GET /:id /clients                                | получение списка клиентов по ID пользователя|-|
| POST /clients                                    | добавление нового клиента | recruiterId(number), fullName(String), email (String), specialty (String), companyId(number)|
| DELETE /clients /id                              | удаление клиента по ID |-|
| PATCH /clients /id                               | изменение данных клиента | |
| GET /interviews                                  | получение списка собеседований |-|
| POST /interviews                                 | добавление собеседования  |recruiterId(Number), clientsId(Number), date (String) |-|
| GET /recruiters/:id/notes                        | получение списка заметок по ID пользователя|-|
| POST /recruiters/:id/notes                       | добавление новой заметки |clientsId(Number), title(String), content (String)|
| DELETE /notes /id                                | удаление заметки по ID  |-|
| GET /companies                                   | получение списка компаний по Id пользователя |header: {id:(Number)}|
| POST /companies                                  | добавление компаний    |-|
| DELETE /companies /id                            | удаление компаний    |-|
| GET /stages                                      | получение списка состояний|-|

