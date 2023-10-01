import express from "express";
import autenticar from "./seguranca/Autenticacao.js";
import session from "express-session";
import rotaLogin from "./rotas/rotaLogin.js";
import rotaFilme from "./Backend/Rotas/rotaFilme.js";
//IP com todas as interfaces disponíveis
const host = "0.0.0.0";
const porta = 3202;

const app = express();

app.use(express.json());

app.use(
  session({
    secret: "Minh4ChAveS3crEt4",
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 30,
    },
  })
);

app.use(express.urlencoded({ extended: false }));

app.use(express.static("./publico"));

app.use("/filmes", rotaFilme);

app.use("/login", rotaLogin);
app.use(autenticar, express.static("./protegido"));

app.listen(porta, host, () => {
  console.log(`servidor escutando em ${host} ${porta}`);
});
