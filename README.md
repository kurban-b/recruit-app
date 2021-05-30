

| Адрес                      | Назначение                | Примечание                       |
| ---------------------------|---------------------------| ---------------------------------|
| /                          | Авторизация / Приветствие | в случае авторизации - приветствие. В случает отсутствия авторизации - форма авторизации |
| /registration              | Регистрация               |                                  |
| /dashboard                 | Рабочая область           | доступна только после авторизации|
| /dashboard/profile         | Профиль рекрутера         |                                  |
| /dashboard/users           | Список работников         |                                  |
| /dashboard/users/:id_?     | Профиль пользователя      | id - ид пользователя             |
| /dashboard/nodes/:id_?     | Заметки                   | id - ид рекрутера                |
| /dashboard/interviews/:id_?| Список собеседований      | id - ид рекрутера                |
| /dashboard/calendar/:id_?  | Календарь                 | id - ид рекрутера                |
