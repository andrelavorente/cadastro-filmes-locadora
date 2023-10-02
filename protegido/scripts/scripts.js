window.onload = () => {
  obterFilmes();
};

function obterFilmes() {
  fetch("https://129.146.68.51/aluno2-ppiadsead/filmes", {
    method: "GET",
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return [];
      }
    })
    .then((listaFilmes) => {
      mostrarFilmes(listaFilmes);
    });
}
function mostrarFilmes(listaFilmes) {
  const elementoDivTabela = document.getElementById("espacoTabela");
  if (listaFilmes.length > 0) {
    elementoDivTabela.innerHTML = "";
    let tabela = document.createElement("table");
    let cabecalhoTabela = document.createElement("thead");
    let corpoTabela = document.createElement("tbody");
    cabecalhoTabela.innerHTML = `<tr>
                                  <th>Nome do filme: </th>
                                  <th>Ano de lançamento: </th>
                                  <th>Categoria: </th>
                                  <th>ID do filme: </th>
                                  <th>Palavras-chave: </th>
                              </tr>`;

    tabela.appendChild(cabecalhoTabela);

    for (filme of listaFilmes) {
      const linhaTabela = document.createElement("tr");
      linhaTabela.innerHTML = `<td>${filme.nomeFilme}</td>
                             <td>${filme.ano}</td>
                             <td>${filme.id}</td>
                             <td>${filme.categoria}</td>
                             <td>${filme.palavra}</td>
    `;
    }
    corpoTabela.appendChild(linhaTabela);

    tabela.appendChild(corpoTabela);
    elementoDivTabela.appendChild(tabela);
  } else {
    elementoDivTabela.innerHTML = `<div class= "alert alert-warning" role="alert"> nenhum filme cadastrado!</div>`;
  }
}
