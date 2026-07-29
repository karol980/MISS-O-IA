const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao desenvolver uma nova inteligência artificial, qual princípio ético você considera mais importante?",
        alternativas: [
            {
                texto: "Garantir a transparência e explicabilidade de suas decisões.",
                afirmacao: "Sua prioridade é que a IA seja compreensível e auditável, promovendo a confiança e a responsabilidade. "
            },
            {
                texto: "Assegurar que a IA seja justa e livre de vieses.",
                afirmacao: "Você se dedica a criar IAs que tratem todos os usuários de forma equitativa, evitando discriminação. "
            }
        ]
    },
    {
        enunciado: "Em um futuro próximo, a IA se torna capaz de realizar tarefas criativas complexas, como compor músicas e pintar quadros. Como você vê o papel dos artistas humanos nesse cenário?",
        alternativas: [
            {
                texto: "A IA será uma ferramenta poderosa para os artistas, ampliando suas capacidades e explorando novas formas de expressão.",
                afirmacao: "Você acredita na colaboração entre humanos e IA, onde a tecnologia serve como um catalisador para a criatividade humana. "
            },
            {
                texto: "A arte gerada por IA nunca terá a profundidade e a emoção da arte humana, mantendo o valor intrínseco da criação humana.",
                afirmacao: "Você valoriza a singularidade da experiência humana na arte e defende a preservação do toque humano na criação artística. "
            }
        ]
    },
    {
        enunciado: "Sua empresa está considerando implementar um sistema de IA para otimizar processos e reduzir custos. Qual é a sua principal preocupação ao tomar essa decisão?",
        alternativas: [
            {
                texto: "O impacto nos empregos dos funcionários e a necessidade de requalificação profissional.",
                afirmacao: "Você se preocupa com o bem-estar dos colaboradores e busca soluções que incluam programas de treinamento e transição de carreira. "
            },
            {
                texto: "A segurança dos dados e a privacidade dos usuários que interagem com o sistema de IA.",
                afirmacao: "Sua prioridade é a proteção de informações sensíveis, implementando rigorosos protocolos de segurança e conformidade. "
            }
        ]
    },
    {
        enunciado: "Você está participando de um projeto para desenvolver uma IA que auxilia no diagnóstico médico. Qual abordagem você defende para garantir a confiabilidade e a ética dessa IA?",
        alternativas: [
            {
                texto: "A IA deve ser uma ferramenta de apoio para médicos, com a decisão final sempre sendo humana.",
                afirmacao: "Você defende que a IA deve complementar a expertise humana, fornecendo insights e análises, mas sem substituir o julgamento profissional. "
            },
            {
                texto: "A IA deve ser treinada com uma vasta gama de dados diversificados para evitar vieses e garantir diagnósticos precisos para todos.",
                afirmacao: "Você enfatiza a importância da diversidade nos dados de treinamento para construir IAs equitativas e eficazes em diferentes populações. "
            }
        ]
    },
    {
        enunciado: "Como você imagina a interação entre humanos e IAs no cotidiano daqui a 20 anos?",
        alternativas: [
            {
                texto: "IAs serão assistentes onipresentes, integradas em todos os aspectos da vida, facilitando tarefas e otimizando decisões.",
                afirmacao: "Você prevê um futuro de profunda integração, onde a IA se torna uma extensão natural das capacidades humanas. "
            },
            {
                texto: "A interação será mais consciente e controlada, com humanos mantendo o domínio sobre as IAs e utilizando-as para fins específicos.",
                afirmacao: "Você acredita na importância de manter a autonomia humana e um controle rigoroso sobre o desenvolvimento e uso da IA. "
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
