const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "(UFPB 2008) Com relação às características gerais dos seres vivos, é incorreto afirmar:",
        alternativas: [
            {
                texto: "Células procarióticas e eucarióticas apresentam membrana plasmática.",
                afirmacao: "Correto,"
            },
            {
                texto: "Apenas as células eucarióticas apresentam ribossomos.",
                afirmacao: "Incorreto,"
            }          
           
        ]
    },
    {
        enunciado: " Qual desses é considerado o material genético das células?",
        alternativas: [
            {
                texto:"Proteínas",
                afirmacao:"incorreto,"
            },
            {
                texto: "DNA",
                afirmacao:"correto,"
            }
        ]
    },
    {
        enunciado: " Qual desses processos biológicos é responsável pela conversão de luz solar em energia química?",
        alternativas: [
            {
                texto:"Fotossíntese",
                afirmacao:"correto,"
            },
            {
                texto:"Respiração celular",
                afirmacao:"incorreto,"
            }
           
        ]
    },
    {
        enunciado: "Parênquima, colênquima, esclerênquima e epiderme são exemplos de:",
        alternativas: [
            {
                texto:"Tecidos",
                afirmacao:"correto "
            },
            {
                texto:"Sistema",
                afirmacao:"incorreto "
            }
           
        ]
    },
    {
        enunciado: "O conjunto formado por todos os ecossistemas do nosso planeta é chamado de:",
        alternativas: [
            {
                texto: "Comunidade",
                afirmacao:"e incorreto."
            },
            {
                texto: "Biosfera",
                afirmacao:"e correto."
            }
           
           
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Gabarito";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();