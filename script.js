const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em um determinado dia na escola, a diretora propoẽ uma palestra onde um escritor irá a escola e falrá sobre a importância da leitura no desenvolvimento dos estudantes e mostrará diferentes gêneros e escritores importantes na literatura. Ao ouvir essa proposta, o que você acharia dessa palestra?",
        alternativas: [
            "È uma ótima ideia, pois amo ler",
            "Não acho interessante, preferia uma palestra sobre tecnologias"
        ]
    },
    {
        enunciado: "A maioria dos estudantes vota a favor da palestra e o escritor vai a escola onde no final da palestra você acaba se interessando pelo mundo da literatura. Qual a primeira coisa que você faz ao acabar a palestra?",
        alternativas: [
            "Pesquiso na internet os livro os mais vendidos e saio comprando, pois se estão em alta é porque são bons",
            "Pesquiso um pouco mais sobre cada gênero e vejo qual me interessa mais para que eu possa ter segurança na minha escolha"
        ]
    },
    {
        enunciado: "Alguns dias após a palestra, sua professora pede um trabalho sobre as categorias existentes na literatura. Fica a seu critério escolher qual você prefere, sua esolha seria sem dúvidas:",
        alternativas: [
            "Narrativo: Romance, novela, conto, crônica",
            "Dramáticos: Tragédia, comédia, dramas histórico, teatro de vanguarda"
        ]
    },
    {
        enunciado: "Durante suas pesquisas, os sites mostram um escritor muito importante na história da literatura. Para você, este nome é reconhecido para você?",
        alternativas: [
            "Já ouvi falar por conta de seu livro 'Dom Casmurro', um dos mais famosos da história da literatura",
            "Nunca ouvi falar, mas achei interessante e pesquisei um pouco mais"
        ]
    },
    {
        enunciado: "No final do trabalho, você se intensifica mais seu sentimento pela leitura e não para de pesquisar sobre novos autores e obras. O seu tipo favorito de livros se tornam:",
        alternativas: [
            "Os clássicos, pois são mais profundos e importantes para usar nos estudos",
            "Livros modernos, porque são mais fáceis de entender mesmo não sendo usados em concursos importantes"
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();