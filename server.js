const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const PORT = 3010;
const recruiters = router.db.get("recruiters");
const clients = router.db.get("clients");
const interviews = router.db.get("interviews");
const notes = router.db.get("notes");
const companies = router.db.get("companies");

server.use(middlewares);
server.use(jsonServer.bodyParser);

//Авторизация
server.route("/auth").post((req, res) => {
  const { login, password } = req.body;
  const authUser = recruiters.find(
    (recruiter) => recruiter.login === login && recruiter.password === password
  );
  if (authUser.toJSON() === undefined) {
    res.status(404).json("Ошибка авторизации");
  }
  res.json(authUser);
});

//Регистрация
server.route("/recruiters").post((req, res, next) => {
  const defaultDate = {phone: null, address: null, avatar: null}
  const loginCheck = recruiters.some(recruiter => recruiter.login === req.body.login)
  if (
    req.body.login === undefined ||
    req.body.password === undefined ||
    req.body.name === undefined ||
    req.body.email === undefined
  ) {
    res.status(400);
    res.send();
  } else if (loginCheck.toJSON()) {
    res.status(400).json('Такой логин уже существует')
    res.send();
  }

  req.body = {...req.body,...defaultDate}
  next()
});

//Получение клиентов
server.route("/:id/clients").get((req, res) => {
  const id = req.params.id;
  const fiteredClients = clients.filter((client) => client.recruiterId == id);
  if (fiteredClients.toJSON().length === 0) {
    res.status(404).json("по данному запросу ничего не найдено");
  }
  res.json(fiteredClients);
});

//Получение компаний
server.route("/companies").get((req, res) => {
  const id = req.headers.id;
  const fiteredCompanies = companies.filter(
    (company) => company.recruiterId == id
  );
  if (fiteredCompanies.toJSON().length === 0) {
    res.status(404).json("по данному запросу ничего не найдено");
  }
  res.json(fiteredCompanies);
});

//Получение и добавление заметок
server
  .route("/recruiter/:id/notes")
  .get((req, res) => {
    const id = req.params.id;
    const fiteredNotes = notes.filter((note) => note.recruiterId == id);
    if (fiteredNotes.toJSON().length === 0) {
      res.status(404).json("по данному запросу ничего не найдено");
    }
    res.json(fiteredNotes);
  })
  .post((req, res, next) => {
    if (
      req.body.title === undefined ||
      req.body.content === undefined ||
      req.body.clientId === undefined
    ) {
      res.status(400);
      res.send();
    }
    req.body.date = new Date();
    req.body.recruiterId = Number(req.params.id);
    next();
  });

//добавление клиента
server.route("/clients")
  .post((req,res,next)=>{
    req.body = {
      ...req.body,
      phone: null,
      address: null,
      avatar: null,
      stageId: 1,
      archive: false
    }
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
  })

server.use(router);
server.listen(PORT, () => {
  console.log(`SERVER STARTED ON ${PORT}`);
});
