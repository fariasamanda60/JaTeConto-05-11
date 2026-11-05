
/* =========================================
   CADASTRO DOS LIVROS
========================================= */

const livros = {

    "pequeno-principe": {

        titulo: "O Pequeno Príncipe",

        autor: "Antoine de Saint-Exupéry",

        genero: "Literatura infantojuvenil",

        sinopse: "Após uma pane no avião, um piloto conhece um pequeno viajante no deserto. O menino conta sobre seu planeta, sua rosa e as visitas que fez a outros mundos, onde encontrou adultos preocupados com poder, números e status. Ao conhecer a raposa, aprende sobre amizade e responsabilidade. A história convida à reflexão sobre afeto, amadurecimento e o que realmente importa.",

        isbn: "9788542809862",

        editora: "Novo Século Editora e Distribuidora LTDA",

        paginas: "71 páginas no PDF",

        ano: "2021",

        idioma: "Português brasileiro",

        classificacao: "Livre",

        tempoLeitura: "3h 12min",

        capa: "/assets/FotosLivros/PequenoPrincipe.png",

        pdf: "./assets/pdf/PequenoPrincipe.pdf"

    }

};

/* =========================================
   IDENTIFICAR O LIVRO
========================================= */

// Lê o identificador presente no endereço da página.

const parametros = new URLSearchParams(window.location.search);

// Se nenhum identificador for informado,
// abre O Pequeno Príncipe como padrão.

const idLivro = parametros.get("id") || "pequeno-principe";

const livro = livros[idLivro];


/* =========================================
   CARREGAR AS INFORMAÇÕES
========================================= */

if (livro) {

    // Título da aba do navegador
    document.title = `Já Te Conto | ${livro.titulo}`;

    // Caminho de navegação
    document.getElementById("breadcrumbTitulo").textContent =
        livro.titulo;

    // Capa
    const capa = document.getElementById("capaLivro");

    capa.src = livro.capa;
    capa.alt = `Capa do livro ${livro.titulo}`;

    // Título e autor
    document.getElementById("tituloLivro").textContent =
        livro.titulo;

    document.getElementById("autorLivro").textContent =
        livro.autor;

    // Gênero e sinopse
    document.getElementById("generoLivro").textContent =
        livro.genero;

    document.getElementById("sinopseLivro").textContent =
        livro.sinopse;

    // Informações bibliográficas
    document.getElementById("isbnLivro").textContent =
        livro.isbn;

    document.getElementById("editoraLivro").textContent =
        livro.editora;

    document.getElementById("paginasLivro").textContent =
        livro.paginas;

    document.getElementById("anoLivro").textContent =
        livro.ano;

    document.getElementById("idiomaLivro").textContent =
        livro.idioma;

    document.getElementById("classificacaoLivro").textContent =
        livro.classificacao;

    document.getElementById("tempoLeitura").textContent =
        livro.tempoLeitura;


    /* =========================================
       BOTÃO DE DOWNLOAD
    ========================================= */

    const botaoDownload = document.getElementById("botaoDownload");

if (livro.pdf) {

    botaoDownload.href = livro.pdf;

    botaoDownload.classList.remove("disabled");

    botaoDownload.removeAttribute("aria-disabled");

    botaoDownload.setAttribute("download", "PequenoPrincipe.pdf");

} else {

    botaoDownload.href = "#";

    botaoDownload.classList.add("disabled");

    botaoDownload.setAttribute("aria-disabled", "true");

    botaoDownload.removeAttribute("download");

}


/* =========================================
   LIVRO NÃO ENCONTRADO
========================================= */

} else {

    document.querySelector(".pagina-livro").innerHTML = `

        <div class="text-center py-5">

            <h1>Livro não encontrado!</h1>

            <p>Não conseguimos localizar esse livro.</p>

            <a href="/index.html" class="btn btn-success">
                Voltar ao início
            </a>

        </div>

    `;

}
