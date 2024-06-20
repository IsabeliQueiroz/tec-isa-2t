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
                afirmacao: "Células procarióticas e eucarióticas apresentam membrana plasmática,"
            },
            {
                texto: "Apenas as células eucarióticas apresentam ribossomos.",
                afirmacao: "Células procarióticas e eucarióticas apresentam membrana plasmática,"
            }          
           
        ]
    },
    {
        enunciado: " Qual desses é considerado o material genético das células?",
        alternativas: [
            {
                texto:"Proteínas",
                afirmacao:"DNA,"
            },
            {
                texto: "DNA",
                afirmacao:"DNA,"
            }
        ]
    },
    {
        enunciado: " Qual desses processos biológicos é responsável pela conversão de luz solar em energia química?",
        alternativas: [
            {
                texto:"Fotossíntese",
                afirmacao:"Fotossintese,"
            },
            {
                texto:"Respiração celular",
                afirmacao:"Fotossintese,"
            }
           
        ]
    },
    {
        enunciado: "Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?",
        alternativas: [
            {
                texto:" Tem entre 2 a 4 litros. São retirados 450 mililitros",
                afirmacao:"Tem entre 4 a 6 litros e São retirados 450 mililitros,"
            },
            {
                texto:"Tem entre 4 a 6 litros. São retirados 450 mililitros",
                afirmacao:"Tem entre 4 a 6 litros e São retirados 450 mililitros,"
            }
           
        ]
    },
    {
        enunciado: " O que a palavra legend significa em português?",
        alternativas: [
            {
                texto: "Legenda",
                afirmacao:"Lenda."
            },
            {
                texto: "Lenda",
                afirmacao:"Lenda."
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