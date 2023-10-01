import Filme from "../Modelo/Filme.js";

export default class FilmeCtrl {
  gravar(req, res) {
    res.type("application/json");
    if (req.method === "POST" && req.is("application/json")) {
      const dados = req.body;
      const id = dados.id;
      const nomeFilme = dados.nomeFilme;
      const ano = dados.ano;
      const categoria = dados.categoria;
      const palavra = dados.palavra;
      if (id && nomeFilme && ano && categoria && palavra) {
        const filme = new Filme(id, nomeFilme, ano, categoria, palavra);
        filme
          .gravar()
          .then(() => {
            res.json({
              status: true,
              mensagem: "Filme cadastrado com sucesso!",
            });
          })
          .catch((err) => {
            res.json({
              status: false,
              mensagem: "Erro ao cadastrar o filme: " + err.message,
            });
          });
      } else {
        res.json({
          status: false,
          mensagem: "Informe todos os dados do filme!",
        });
      }
    } else {
      res.json({
        status: false,
        mensagem: "Requisição inválida! Informe um filme no formato JSON",
      });
    }
  }
  atualizar(req, res) {
    res.type("application/json");
    if (req.method === "PUT" && req.is("application/json")) {
      const dados = req.body;
      const id = dados.id;
      const nomeFilme = dados.nomeFilme;
      const ano = dados.ano;
      const categoria = dados.categoria;
      const palavra = dados.palavra;
      if (id && nomeFilme && ano && categoria && palavra) {
        const filme = new Filme(id, nomeFilme, ano, categoria, palavra);
        filme
          .atualizar()
          .then(() => {
            res.json({
              status: true,
              mensagem: "Filme atualizado com sucesso!",
            });
          })
          .catch((err) => {
            res.json({
              status: false,
              mensagem: "Erro ao atualizar o filme" + err,
            });
          });
      } else {
        res.json({
          status: false,
          mensagem: "Informe os dados do filme conforme solicitado!",
        });
      }
    } else {
      res.json({
        status: false,
        mensagem:
          "Requisição inválida! Informe um filme no formado JSON para ser atualizado",
      });
    }
  }
  excluir(req, res) {
    res.type("application/json");
    if (req.method === "DELETE" && req.is("application/json")) {
      const dados = req.body;
      const id = dados.id;
      if (id) {
        const filme = new Filme(id);
        filme
          .excluir()
          .then(() => {
            res.json({
              status: true,
              mensagem: "Filme excluído com sucesso!",
            });
          })
          .catch((err) => {
            res.json({
              status: false,
              mensagem: "Erro ao excluir o filme " + err.message,
            });
          });
      } else {
        res.json({
          status: false,
          mensagem: "Informe o ID do filme para ser excluído",
        });
      }
    } else {
      res.json({
        status: false,
        mensagem: "Requisição inválida! Informe um filme no formato JSON!",
      });
    }
  }
  consultar(req, res) {
    res.type("application/json");
    if (req.method === "GET") {
      let termo = req.query.termo;
      if (!termo) termo = "";
      const filme = new Filme();
      filme
        .consultar(termo)
        .then((listaFilmes) => {
          res.json(listaFilmes);
        })
        .catch((err) => {
          res.json({
            status: false,
            mensagem: "Erro ao consultar o filme " + err.message,
          });
        });
    }
  }
}
