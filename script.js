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
                afirmação: "Células procarióticas e eucarióticas apresentam membrana plasmática."
            },
            {
                texto: "Apenas as células eucarióticas apresentam ribossomos",
                afirmação: "Apenas as células eucarióticas apresentam ribossomos"
            }          
           
        ]
    },
    {
        enunciado: " Um anel tem 3 pedras preciosas. Quantas pedras preciosas têm 11 anéis?",
        alternativas: [
            {
                texto:"33",
                afirmacao:"33,"
            },
            {
                texto: "30",
                afirmacao:"33,"
            }
        ]
    },
    {
        enunciado: " Qual o nome popular do cloreto de sódio?",
        alternativas: [
            {
                texto:" Sal de cozinha",
                afirmacao:" Sal de cozinha,"
            },
            {
                texto:"Fermento",
                afirmacao:" Sal de cozinha,"
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