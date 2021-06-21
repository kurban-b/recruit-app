const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const PORT = 5000;
const recruiters = router.db.get("recruiters");
const clients = router.db.get("clients");
const notes = router.db.get("notes");
const companies = router.db.get("companies");
const interviews = router.db.get("interviews");

server.use(middlewares);
server.use(jsonServer.bodyParser);

const getRandomToken = (len) => {
  if (len == undefined || len <= 0) {
    len = 1;
  }
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  let iffirst = 0;
  for (let i = 0; i < len; i++) {
    if (i == 0) {
      iffirst = 10;
    } else {
      iffirst = 0;
    }
    result +=
      characters[Math.round(Math.random() * (characters.length - iffirst - 1))];
  }
  return result;
};

//Авторизация
server.post("/auth", (req, res) => {
  const { login, password } = req.body;
  const authUser = recruiters
    .toJSON()
    .find(
      (recruiter) =>
        recruiter.login === login && recruiter.password === password
    );
  if (authUser === undefined) {
    res.status(404).json({ message: "Ошибка авторизации" });
  } else {
    res.json({ ...authUser, password: null });
  }
});

//Регистрация
server.post("/recruiters", (req, res, next) => {
  const defaultDate = {
    phone: null,
    address: null,
    avatar: null,
    token: getRandomToken(100),
  };
  const loginCheck = recruiters.some(
    (recruiter) => recruiter.login === req.body.login
  );
  if (
    req.body.login === undefined ||
    req.body.password === undefined ||
    req.body.firstName === undefined ||
    req.body.lastName === undefined ||
    req.body.email === undefined
  ) {
    res.status(400);
    res.send();
  } else if (loginCheck.toJSON()) {
    res.status(400).json("Такой логин уже существует");
    res.send();
  }
  req.body = { ...req.body, ...defaultDate };
  next();
});

//Проверка токена
const authRecruiter = (req, res, next) => {
  const recruiter = recruiters
    .toJSON()
    .find((item) => item.token === req.headers.token);
  if (!recruiter) {
    res.status(400).json({ message: "Ошибка доступа. Токен не подходит" });
  } else {
    req.user = recruiter;
    next();
  }
};

//Получение клиентов
server.get("/clients", authRecruiter, (req, res) => {
  const fiteredClients = clients.filter(
    (client) => client.recruiterId === req.user.id
  );
  if (fiteredClients.toJSON().length === 0) {
    res.status(404).json([]);
  }
  res.json(fiteredClients);
});

//Получение компаний
server.get("/companies", authRecruiter, (req, res) => {
  const fiteredCompanies = companies.filter(
    (company) => company.recruiterId === req.user.id
  );
  if (fiteredCompanies.toJSON().length === 0) {
    res.status(404).json([]);
  }
  res.json(fiteredCompanies);
});

//Получение заметок
server.get("/notes", authRecruiter, (req, res) => {
  const fiteredNotes = notes.filter((note) => note.recruiterId === req.user.id);
  if (fiteredNotes.toJSON().length === 0) {
    res.status(404).json([]);
  }
  res.json(fiteredNotes);
});

//Добавление заметок
server.post("/notes", authRecruiter, (req, res, next) => {
  if (
    req.body.title === undefined ||
    req.body.content === undefined ||
    req.body.clientId === undefined
  ) {
    res.status(400);
    res.send();
  }
  req.body.date = new Date();
  req.body.recruiterId = Number(req.user.id);
  next();
});

//добавление клиента
server.post("/clients", (req, res, next) => {
  req.body = {
    ...req.body,
    avatar: null,
    stageId: 1,
    archive: false,
  };
  if (
    req.body.recruiterId === undefined ||
    req.body.fullName === undefined ||
    req.body.email === undefined ||
    req.body.specialty === undefined ||
    req.body.companyId === undefined
  ) {
    res.status(400);
    res.send();
  }
  next();
});

//Получение собеседований
server.get("/interviews", authRecruiter, (req, res) => {
  const fiteredInterviews = interviews
    .toJSON()
    .filter((interview) => interview.recruiterId === req.user.id);
  if (fiteredInterviews.length === 0) {
    res.status(404).json([]);
  }
  res.json(fiteredInterviews);
});

server.use(router);
server.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT: ${PORT}`);
});
