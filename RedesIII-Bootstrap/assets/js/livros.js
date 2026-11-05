
// CADASTRO DOS LIVROS

const livros = [

    {
        id: "pequeno-principe",
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        categoria: "Literatura infantojuvenil",
        capa: "/assets/FotosLivros/PequenoPrincipe.png",
        destaque: true
    }

];


// ELEMENTOS DO HTML

const destaques = document.getElementById("destaques");
const infantojuvenil = document.getElementById("infantojuvenil");

const pesquisa = document.getElementById("pesquisaLivro");
const formulario = document.getElementById("formPesquisa");

const botoesCategorias = document.querySelectorAll(".categoria-btn");
const mensagemVazia = document.getElementById("mensagemVazia");


// CRIAR CARTÃO DE LIVRO

function criarCartao(livro) {

    return `
        <a href="/livro.html?id=${livro.id}"
           class="livro-card">

            <img src="${livro.capa}" alt="Capa de ${livro.titulo}">

            <h3>${livro.titulo}</h3>

            <p>${livro.autor}</p>

        </a>
    `;

}


// EXIBIR LIVROS

function exibirLivros(lista) {

    destaques.innerHTML = "";
    infantojuvenil.innerHTML = "";

    const livrosDestaque = lista.filter(livro => livro.destaque);

    const livrosInfantojuvenis = lista.filter(
        livro => livro.categoria === "Literatura infantojuvenil"
    );

    livrosDestaque.forEach(livro => {
        destaques.innerHTML += criarCartao(livro);
    });

    livrosInfantojuvenis.forEach(livro => {
        infantojuvenil.innerHTML += criarCartao(livro);
    });

    mensagemVazia.hidden = lista.length > 0;
}


// FILTRAR CATEGORIAS

let categoriaSelecionada = "todos";

function filtrarLivros() {

    const termo = pesquisa.value.trim().toLocaleLowerCase("pt-BR");

    const resultado = livros.filter(livro => {

        const correspondePesquisa =
            livro.titulo.toLocaleLowerCase("pt-BR").includes(termo) ||
            livro.autor.toLocaleLowerCase("pt-BR").includes(termo);

        const correspondeCategoria =
            categoriaSelecionada === "todos" ||
            livro.categoria === categoriaSelecionada;

        return correspondePesquisa && correspondeCategoria;

    });

    exibirLivros(resultado);

}


// BOTÕES DE CATEGORIA

botoesCategorias.forEach(botao => {

    botao.addEventListener("click", () => {

        botoesCategorias.forEach(item => {
            item.classList.remove("ativa");
        });

        botao.classList.add("ativa");

        categoriaSelecionada = botao.dataset.categoria;

        filtrarLivros();

    });

});


// PESQUISA

formulario.addEventListener("submit", evento => {

    evento.preventDefault();

    filtrarLivros();

});

pesquisa.addEventListener("input", filtrarLivros);


// INICIAR CATÁLOGO

exibirLivros(livros);
