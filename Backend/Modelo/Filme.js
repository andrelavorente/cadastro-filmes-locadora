import FilmeDAO from "../Persistencia/FilmeDAO.js";

export default class Filme {
  #nomeFilme;
  #ano;
  #categoria;
  #id;
  #palavra;
  constructor(nomeFilme, ano, categoria, id, palavra) {
    this.#id = id;
    this.#nomeFilme = nomeFilme;
    this.#ano = ano;
    this.#categoria = categoria;
    this.#palavra = palavra;
  }

  get nomeFilme() {
    return this.#nomeFilme;
  }

  set nomeFilme(novoNomeFilme) {
    this.#nomeFilme = novoNomeFilme;
  }

  get ano() {
    return this.#ano;
  }

  set ano(novoAno) {
    this.#ano = novoAno;
  }

  get categoria() {
    return this.#categoria;
  }

  set categoria(novaCategoria) {
    this.#categoria = novaCategoria;
  }

  get id() {
    return this.#id;
  }

  set id(novoId) {
    this.#id = novoId;
  }

  get palavra() {
    return this.#palavra;
  }

  set palavra(novaPalavra) {
    this.#palavra = novaPalavra;
  }

  toJSON() {
    return {
      nomeFilme: this.#nomeFilme,
      ano: this.#ano,
      categoria: this.#categoria,
      id: this.#id,
      palavra: this.#palavra,
    };
  }
  async gravar() {
    const filDAO = new FilmeDAO();
    await filDAO.gravar(this);
  }

  async atualizar() {
    const filDAO = new FilmeDAO();
    await filDAO.atualizar(this);
  }

  async delete() {
    const filDAO = new FilmeDAO();
    await filDAO.delete(this);
  }

  async consultar(termo) {
    const filDAO = new FilmeDAO();
    return await filDAO.consultar(termo);
  }
}
