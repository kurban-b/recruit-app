| Адрес                                       | Назначение                | Обязательные значения            |
| --------------------------------------------|---------------------------| ---------------------------------|
| GET /recruiters?login={логин}&password={пароль}  | Авторизация |-|
| POST /recruiters                                 | регистрация нового пользователя|login(String), password(String), name(String), email(String) |
| PATCH /recruiters /id                            | добавление и изменение данных пользователя | |
| GET /clients?recruiterId={id}                    | получение списка клиентов по ID пользователя|-|
| GET /clients /id                                 | получение клиента по ID |-|
| POST /clients                                    | добавление нового клиента по ID | recruiterId(number), fullName(String), email (String), specialty (String), companyId(number), stageId(number), archive (Boolean)|
| DELETE /clients /id                              | удаление клиента по ID |-|
| PATCH /clients /id                               | изменение данных клиента | |
| GET /interviews                                  | получение списка собеседований |-|
| POST /interviews                                 | добавление собеседования  |recruiterId(Number), clientsId(Number), date (String) |-|
| GET /notes?recruiterId={id}                      | получение списка заметок по ID пользователя|-|
| POST /notes                                      | добавление новой заметки |recruiterId(Number), clientsId(Number), title(String), content (String), date(String)|
| DELETE /notes /id                                | удаление заметки по ID  |-|
| GET /companies?recruiterId={id}                  | получение списка компаний по Id пользователя |-|
| POST /companies /id                              | добавление компаний    |-|
| DELETE /companies /id                            | удаление компаний    |-|
| GET /stages                                      | получение списка состояний|-|

