import Filme from "../Modelo/Filme.js";
import conectar from "./Conexao.js";

export default class FilmeDAO {
  async gravar(filme) {
    if (filme instanceof Filme) {
      const conexao = await conectar();
      const sql =
        "INSERT INTO filme (nomeFilme, ano, categoria, id, palavra) VALUES (?, ?, ?, ?, ?)";
      const parametros = [
        filme.nomeFilme,
        filme.ano,
        filme.categoria,
        filme.id,
        filme.palavra,
      ];
      await conexao.execute(sql, parametros);
      global.poolConexoes = releaseConnection(conexao);
    }
  }

  async atualizar(filme) {
    if (filme instanceof Filme) {
      const conexao = await conectar();
      const sql =
        "UPDATE filme SET nomeFilme = ?, ano = ?, categoria = ?, palavra = ? WHERE id = ?";
      const parametros = [
        filme.nomeFilme,
        filme.ano,
        filme.categoria,
        filme.palavra,
        filme.id,
      ];
      await conexao.execute(sql, parametros);
      global.poolConexoes = releaseConnection(conexao);
    }
  }

  async excluir(filme) {
    if (filme instanceof Filme) {
      const conexao = await conectar();
      const sql = "DELETE FROM filme WHERE id = ?";
      const parametros = [filme.id];
      await conexao.execute(sql, parametros);
      global.poolConexoes = releaseConnection(conexao);
    }
  }

  async consultar(termo) {
    const conexao = await conectar();
    if (!termo) termo = "";

    const listaFilmes = [];
    const sql = "SELECT * FROM filme WHERE nomeFilme LIKE ?";
    const parametros = ["%" + termo + "%"];
    const [rows] = await conexao.query(sql, parametros);
    for (const linha of rows) {
      const filme = new Filme(
        linha.nomeFilme,
        linha.ano,
        linha.id,
        linha.categoria,
        linha.palavra
      );
      listaFilmes.push(filme);
    }

    return listaFilmes;
  }
}
