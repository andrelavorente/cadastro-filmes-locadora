import { Router } from "express";

const rotaLogin = Router()

rotaLogin.get("/", (req, res) => {
    res.redirect('/aluno2-ppiadsead/login.html')
})
.post("/", (req, res) => {
    const usuario = req.body.usuario
    const senha = req.body.senha
    if (usuario === "Renato" && senha === "123") {
        req.session.usuarioLogado = true;
        res.redirect("/aluno2-ppiadsead/cadastroFilme.html");
      } else {
        res.send(
          " \
        <p>Usuário e senha inválidos</p> \
        <button onclick='history.back()'> Tentar novamente </button>"
        );
      }
})

export default rotaLogin