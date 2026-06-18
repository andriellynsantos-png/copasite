const perguntas = {
  facil: [
{ pergunta: "Qual país sediou a Copa de 2014?", opcoes: ["Brasil","França","Catar","Itália"], resposta: "Brasil" },
{ pergunta: "Quem venceu a Copa de 2022?", opcoes: ["Brasil","Argentina","Alemanha","Portugal"], resposta: "Argentina" },
{ pergunta: "Qual esporte é disputado na Copa do Mundo?", opcoes: ["Basquete","Futebol","Vôlei","Tênis"], resposta: "Futebol" },
{ pergunta: "Quantos jogadores cada time tem em campo?", opcoes: ["9","10","11","12"], resposta: "11" },
{ pergunta: "Qual país tem mais títulos mundiais?", opcoes: ["Alemanha","Brasil","Argentina","Itália"], resposta: "Brasil" },
{ pergunta: "Qual país sediou a Copa de 2022?", opcoes: ["Qatar","Rússia","Brasil","México"], resposta: "Qatar" },
{ pergunta: "Qual seleção é conhecida como Canarinho?", opcoes: ["Brasil","Argentina","França","Portugal"], resposta: "Brasil" },
{ pergunta: "Qual é o troféu disputado na Copa?", opcoes: ["Taça Mundial FIFA","Libertadores","Champions","Copa América"], resposta: "Taça Mundial FIFA" },
{ pergunta: "A Copa ocorre a cada quantos anos?", opcoes: ["2","3","4","5"], resposta: "4" },
{ pergunta: "Qual país venceu a Copa de 2018?", opcoes: ["Croácia","França","Brasil","Bélgica"], resposta: "França" }
],

  medio: [
{ pergunta: "Contra quem o Brasil estreou em 2022?", opcoes: ["Sérvia","Suíça","Croácia","Camarões"], resposta: "Sérvia" },
{ pergunta: "Quem marcou para o Brasil contra a Suíça em 2018?", opcoes: ["Neymar","Coutinho","Casemiro","Jesus"], resposta: "Coutinho" },
{ pergunta: "Qual país sediou a Copa de 2018?", opcoes: ["Rússia","Alemanha","França","México"], resposta: "Rússia" },
{ pergunta: "Quem foi campeão da Copa de 2018?", opcoes: ["Croácia","França","Bélgica","Inglaterra"], resposta: "França" },
{ pergunta: "Qual seleção eliminou o Brasil em 2022?", opcoes: ["Argentina","Croácia","França","Holanda"], resposta: "Croácia" },
{ pergunta: "Quem marcou dois gols para o Brasil contra a Sérvia em 2022?", opcoes: ["Neymar","Richarlison","Casemiro","Vinícius Jr"], resposta: "Richarlison" },
{ pergunta: "Qual país foi vice-campeão em 2018?", opcoes: ["Bélgica","Croácia","Brasil","Inglaterra"], resposta: "Croácia" },
{ pergunta: "Em qual continente ocorreu a Copa de 2022?", opcoes: ["Europa","África","Ásia","América"], resposta: "Ásia" },
{ pergunta: "Qual seleção venceu a Copa de 2014?", opcoes: ["Brasil","Alemanha","Argentina","Holanda"], resposta: "Alemanha" },
{ pergunta: "Quem foi o artilheiro da Copa de 2014?", opcoes: ["Müller","James Rodríguez","Messi","Neymar"], resposta: "James Rodríguez" }
],

  dificil: [
{ pergunta: "Qual foi o placar de Brasil x Croácia na abertura de 2014?", opcoes: ["2x0","3x1","1x1","4x2"], resposta: "3x1" },
{ pergunta: "Quem marcou o gol da vitória da Arábia Saudita contra a Argentina em 2022?", opcoes: ["Salem Al-Dawsari","Messi","Di María","Lautaro"], resposta: "Salem Al-Dawsari" },
{ pergunta: "Quem eliminou o Brasil na Copa de 2018?", opcoes: ["Bélgica","França","Croácia","Holanda"], resposta: "Bélgica" },
{ pergunta: "Qual seleção venceu o Brasil por 7x1 em 2014?", opcoes: ["Alemanha","Holanda","França","Argentina"], resposta: "Alemanha" },
{ pergunta: "Quem marcou o gol do título da Alemanha em 2014?", opcoes: ["Klose","Götze","Müller","Özil"], resposta: "Götze" },
{ pergunta: "Qual foi a seleção surpresa que chegou à semifinal em 2022?", opcoes: ["Marrocos","Japão","Coreia","México"], resposta: "Marrocos" },
{ pergunta: "Quantos títulos tinha a Argentina após vencer em 2022?", opcoes: ["2","3","4","5"], resposta: "3" },
{ pergunta: "Quem foi o melhor jogador da Copa de 2022?", opcoes: ["Mbappé","Messi","Modrić","Hakimi"], resposta: "Messi" },
{ pergunta: "Qual país sediará a Copa junto com EUA e Canadá em 2026?", opcoes: ["México","Brasil","Argentina","Costa Rica"], resposta: "México" },
{ pergunta: "Quem foi o artilheiro da Copa de 2022?", opcoes: ["Messi","Mbappé","Giroud","Richarlison"], resposta: "Mbappé" }
]
};

let dificuldadeAtual = "facil";
let indice = 0;
let pontos = 0;
let respondeu = false;

function mostrarAba(id) {
  const abas = document.querySelectorAll(".aba");

  abas.forEach(aba => {
    aba.classList.remove("ativa");
  });

  document.getElementById(id).classList.add("ativa");
}

function carregarPergunta() {
  respondeu = false;

  const lista = perguntas[dificuldadeAtual];
  const atual = lista[indice];

  document.getElementById("pergunta").innerText = atual.pergunta;
  document.getElementById("resultado").innerText = "";

  const opcoesDiv = document.getElementById("opcoes");
  opcoesDiv.innerHTML = "";

  atual.opcoes.forEach(opcao => {
    const botao = document.createElement("button");
    botao.innerText = opcao;
    botao.classList.add("opcao");
    botao.onclick = () => verificarResposta(opcao);
    opcoesDiv.appendChild(botao);
  });
}

function verificarResposta(opcao) {
  if (respondeu) return;

  respondeu = true;

  const correta = perguntas[dificuldadeAtual][indice].resposta;
  const resultado = document.getElementById("resultado");

  if (opcao === correta) {
    resultado.innerText = "✅ Resposta correta!";
    resultado.style.color = "green";
    pontos += 10;
  } else {
    resultado.innerText = "❌ Resposta errada! A correta era: " + correta;
    resultado.style.color = "red";
  }

  atualizarRanking();
}

function proximaPergunta() {
  const lista = perguntas[dificuldadeAtual];

  indice++;

  if (indice >= lista.length) {
    indice = 0;
  }

  carregarPergunta();
}

function mudarDificuldade() {
  dificuldadeAtual = document.getElementById("dificuldade").value;
  indice = 0;
  carregarPergunta();
}

function atualizarRanking() {
  document.getElementById("pontos").innerText = pontos;
  document.getElementById("listaRanking").innerHTML = `
    <li>Você - ${pontos} pontos</li>
    <li>Jogador 2 - 60 pontos</li>
    <li>Jogador 3 - 40 pontos</li>
  `;
}

carregarPergunta();

const paises2026 = [
  { nome: "Brasil", sigla: "br", titulos: "5", destaque: "Vinícius Jr. e Rodrygo", estilo: "Técnico e ofensivo", cores: ["#002147", "#009B38"], texto: "O Brasil é a seleção mais vencedora da história das Copas. Costuma chegar como uma das favoritas, com muita habilidade individual, criatividade e tradição no futebol mundial." },
  { nome: "Argentina", sigla: "ar", titulos: "3", destaque: "Messi e Julián Álvarez", estilo: "Criativo e competitivo", texto: "A Argentina é atual campeã mundial e tem muita tradição. A equipe mistura experiência, técnica e uma torcida apaixonada, sendo sempre uma seleção forte em Copas." },
  { nome: "França", sigla: "fr", titulos: "2", destaque: "Mbappé", estilo: "Rápido e ofensivo", texto: "A França tem um dos elencos mais fortes do mundo. É uma seleção veloz, física e muito perigosa no ataque, acostumada a chegar longe em grandes competições." },
  { nome: "Alemanha", sigla: "de", titulos: "4", destaque: "Musiala e Wirtz", estilo: "Organizado e coletivo", texto: "A Alemanha é conhecida pela força coletiva e disciplina tática. Mesmo em renovação, continua sendo uma seleção histórica e muito respeitada nas Copas." },
  { nome: "Espanha", sigla: "es", titulos: "1", destaque: "Pedri e Lamine Yamal", estilo: "Posse de bola", texto: "A Espanha costuma controlar o jogo com passes rápidos e muita técnica. Seu time valoriza a posse de bola e conta com jovens talentos de grande destaque." },
  { nome: "Portugal", sigla: "pt", titulos: "0", destaque: "Cristiano Ronaldo e Bernardo Silva", estilo: "Técnico", texto: "Portugal tem uma geração talentosa e jogadores decisivos. A seleção combina experiência com juventude e pode competir contra qualquer adversário." },
  { nome: "Inglaterra", sigla: "gb-eng", titulos: "1", destaque: "Bellingham e Harry Kane", estilo: "Forte e ofensivo", texto: "A Inglaterra tem uma geração muito valorizada, com jogadores que atuam em grandes clubes. É uma seleção forte fisicamente e perigosa no ataque." },
  { nome: "Uruguai", sigla: "uy", titulos: "2", destaque: "Valverde e Darwin Núñez", estilo: "Raçudo", texto: "O Uruguai tem muita tradição e é conhecido pela garra. Mesmo sendo um país pequeno, costuma competir muito bem contra seleções grandes." },
  { nome: "Holanda", sigla: "nl", titulos: "0", destaque: "Van Dijk e Xavi Simons", estilo: "Ofensivo", texto: "A Holanda é famosa por seu futebol técnico e ofensivo. Já teve grandes gerações e costuma ser uma seleção difícil de enfrentar." },
  { nome: "Bélgica", sigla: "be", titulos: "0", destaque: "De Bruyne e Lukaku", estilo: "Experiente", texto: "A Bélgica tem jogadores experientes e muita qualidade no meio-campo. É uma seleção que costuma criar boas chances e jogar com intensidade." },
  { nome: "Croácia", sigla: "hr", titulos: "0", destaque: "Modrić", estilo: "Meio-campo forte", texto: "A Croácia cresceu muito nas últimas Copas. Tem um meio-campo técnico, jogadores experientes e costuma ser muito competitiva em mata-matas." },
  { nome: "Suíça", sigla: "ch", titulos: "0", destaque: "Xhaka", estilo: "Organizada", texto: "A Suíça é uma seleção muito organizada e difícil de vencer. Costuma ter boa defesa, disciplina tática e força coletiva." },
  { nome: "Estados Unidos", sigla: "us", titulos: "0", destaque: "Pulisic", estilo: "Jovem e intenso", texto: "Os Estados Unidos jogam em casa em 2026 e chegam motivados. A seleção tem jogadores jovens, velocidade e busca crescer no futebol mundial." },
  { nome: "México", sigla: "mx", titulos: "0", destaque: "Hirving Lozano", estilo: "Intenso", texto: "O México também será sede da Copa de 2026. Tem uma torcida muito forte e costuma jogar com velocidade, intensidade e muita vontade." },
  { nome: "Canadá", sigla: "ca", titulos: "0", destaque: "Alphonso Davies", estilo: "Rápido", texto: "O Canadá vive crescimento no futebol e jogará em casa. A equipe aposta em velocidade, juventude e motivação para fazer uma boa campanha." },
  { nome: "Colômbia", sigla: "co", titulos: "0", destaque: "Luis Díaz", estilo: "Habilidoso", texto: "A Colômbia tem jogadores técnicos e rápidos. Costuma apostar na criatividade, em jogadas pelas pontas e em muita força ofensiva." },
  { nome: "Equador", sigla: "ec", titulos: "0", destaque: "Moisés Caicedo", estilo: "Físico e rápido", texto: "O Equador vem crescendo bastante no futebol sul-americano. Tem jogadores jovens, fortes e rápidos, principalmente no meio-campo." },
  { nome: "Paraguai", sigla: "py", titulos: "0", destaque: "Miguel Almirón", estilo: "Defensivo e raçudo", texto: "O Paraguai é conhecido pela marcação forte e pela raça. Costuma ser uma seleção difícil, com muita entrega durante os jogos." },
  { nome: "Japão", sigla: "jp", titulos: "0", destaque: "Mitoma", estilo: "Veloz e disciplinado", texto: "O Japão evoluiu muito no futebol mundial. A seleção é rápida, organizada e costuma jogar com disciplina e muita movimentação." },
  { nome: "Coreia do Sul", sigla: "kr", titulos: "0", destaque: "Son Heung-min", estilo: "Intenso", texto: "A Coreia do Sul é uma seleção veloz e muito dedicada. Seu jogo costuma ter pressão, velocidade e organização tática." },
  { nome: "Austrália", sigla: "au", titulos: "0", destaque: "Mathew Ryan", estilo: "Físico", texto: "A Austrália costuma ser forte fisicamente e competitiva. Mesmo sem grandes estrelas, joga com muita entrega e organização." },
  { nome: "Irã", sigla: "ir", titulos: "0", destaque: "Taremi", estilo: "Defensivo", texto: "O Irã é uma das seleções tradicionais da Ásia. Costuma ter boa defesa, força física e jogadores perigosos no ataque." },
  { nome: "Catar", sigla: "qa", titulos: "0", destaque: "Akram Afif", estilo: "Técnico", texto: "O Catar ganhou mais visibilidade após sediar a Copa de 2022. Busca continuar evoluindo e competir melhor em torneios internacionais." },
  { nome: "Arábia Saudita", sigla: "sa", titulos: "0", destaque: "Salem Al-Dawsari", estilo: "Rápido", texto: "A Arábia Saudita é uma seleção asiática competitiva. Ficou conhecida por surpreender grandes equipes e jogar com muita intensidade." },
  { nome: "Marrocos", sigla: "ma", titulos: "0", destaque: "Hakimi", estilo: "Organizado", texto: "Marrocos fez história em 2022 ao chegar muito longe na Copa. A seleção é forte defensivamente, rápida e muito disciplinada." },
  { nome: "Senegal", sigla: "sn", titulos: "0", destaque: "Mané", estilo: "Forte e veloz", texto: "Senegal é uma das seleções mais fortes da África. Tem jogadores rápidos, físicos e acostumados a atuar em grandes clubes." },
  { nome: "Gana", sigla: "gh", titulos: "0", destaque: "Kudus", estilo: "Físico", texto: "Gana tem tradição em Copas e costuma revelar jogadores talentosos. É uma seleção intensa e perigosa em jogos abertos." },
  { nome: "Costa do Marfim", sigla: "ci", titulos: "0", destaque: "Kessié", estilo: "Forte", texto: "A Costa do Marfim é conhecida por sua força física e talento ofensivo. Costuma ter jogadores importantes no futebol europeu." },
  { nome: "Egito", sigla: "eg", titulos: "0", destaque: "Mohamed Salah", estilo: "Contra-ataque", texto: "O Egito tem muita tradição no futebol africano. Com jogadores rápidos e técnicos, pode ser perigoso principalmente nos contra-ataques." },
  { nome: "Tunísia", sigla: "tn", titulos: "0", destaque: "Skhiri", estilo: "Físico", texto: "A Tunísia costuma apresentar um jogo forte fisicamente e bem organizado. É uma seleção que luta bastante durante toda a partida." },
  { nome: "África do Sul", sigla: "za", titulos: "0", destaque: "Percy Tau", estilo: "Veloz", texto: "A África do Sul busca mostrar evolução no futebol mundial. Sua seleção tem velocidade e tenta crescer em competições internacionais." },
  { nome: "Argélia", sigla: "dz", titulos: "0", destaque: "Mahrez", estilo: "Técnico", texto: "A Argélia tem jogadores habilidosos e muita qualidade ofensiva. É uma seleção africana respeitada e capaz de surpreender." },
  { nome: "Cabo Verde", sigla: "cv", titulos: "0", destaque: "Bebé", estilo: "Competitivo", texto: "Cabo Verde representa o crescimento do futebol africano. A seleção chega buscando fazer história e mostrar sua evolução." },
  { nome: "Nova Zelândia", sigla: "nz", titulos: "0", destaque: "Chris Wood", estilo: "Físico", texto: "A Nova Zelândia representa a Oceania. É uma seleção forte fisicamente, que costuma apostar em bolas aéreas e organização." },
  { nome: "Curaçao", sigla: "cw", titulos: "0", destaque: "Jogadores da liga europeia", estilo: "Surpresa", texto: "Curaçao chega como uma seleção de menor tradição, mas com vontade de surpreender. Sua participação mostra a diversidade da Copa." },
  { nome: "Haiti", sigla: "ht", titulos: "0", destaque: "Equipe coletiva", estilo: "Raça", texto: "O Haiti busca representar bem seu país e surpreender adversários mais fortes. A seleção aposta em união, velocidade e entrega." },
  { nome: "Panamá", sigla: "pa", titulos: "0", destaque: "Equipe coletiva", estilo: "Competitivo", texto: "O Panamá vem buscando crescer no futebol. A seleção entra na Copa para ganhar experiência e tentar competir contra equipes tradicionais." },
  { nome: "Turquia", sigla: "tr", titulos: "0", destaque: "Çalhanoğlu", estilo: "Técnico e intenso", texto: "A Turquia tem jogadores técnicos e uma torcida muito apaixonada. Costuma fazer jogos intensos e emocionantes." },
  { nome: "Suécia", sigla: "se", titulos: "0", destaque: "Isak", estilo: "Organizado", texto: "A Suécia é uma seleção tradicional da Europa. Seu jogo costuma ser organizado, físico e com boas opções ofensivas." },
  { nome: "Noruega", sigla: "no", titulos: "0", destaque: "Haaland e Ødegaard", estilo: "Ofensivo", texto: "A Noruega tem grandes nomes no ataque e no meio-campo. Busca transformar seus talentos individuais em uma campanha forte." },
  { nome: "Áustria", sigla: "at", titulos: "0", destaque: "Alaba", estilo: "Coletivo", texto: "A Áustria tem uma seleção organizada e competitiva. Costuma jogar com intensidade, boa marcação e espírito coletivo." },
  { nome: "Escócia", sigla: "gb-sct", titulos: "0", destaque: "McTominay", estilo: "Raçudo", texto: "A Escócia é conhecida pela garra e pela força da torcida. A seleção joga com muita intensidade e espírito de luta." },
  { nome: "República Tcheca", sigla: "cz", titulos: "0", destaque: "Schick", estilo: "Equilibrado", texto: "A República Tcheca tem tradição europeia e um estilo de jogo equilibrado. Costuma ser competitiva e bem organizada." },
  { nome: "Bósnia", sigla: "ba", titulos: "0", destaque: "Džeko", estilo: "Técnico", texto: "A Bósnia possui jogadores técnicos e experientes. Busca fazer uma boa campanha e surpreender seleções mais fortes." },
  { nome: "Uzbequistão", sigla: "uz", titulos: "0", destaque: "Equipe jovem", estilo: "Disciplinado", texto: "O Uzbequistão faz parte do crescimento do futebol asiático. Chega motivado para mostrar organização e competitividade." },
  { nome: "Jordânia", sigla: "jo", titulos: "0", destaque: "Equipe coletiva", estilo: "Defensivo", texto: "A Jordânia busca mostrar evolução no futebol internacional. A equipe costuma apostar em organização, marcação e espírito coletivo." },
  { nome: "Iraque", sigla: "iq", titulos: "0", destaque: "Equipe coletiva", estilo: "Determinado", texto: "O Iraque retorna buscando competir bem e mostrar força. É uma seleção determinada, que valoriza muito cada oportunidade na Copa." },
  { nome: "RD Congo", sigla: "cd", titulos: "0", destaque: "Equipe física", estilo: "Forte e veloz", texto: "A República Democrática do Congo é uma seleção física e veloz. Busca surpreender com intensidade e força no ataque." }
];

const grid = document.getElementById("paisesGrid");

paises2026.forEach(pais => {
  const card = document.createElement("div");
  card.classList.add("pais-card");

  card.innerHTML = `
  <img src="https://flagcdn.com/w160/${pais.sigla}.png" alt="${pais.nome}">
  <h3>${pais.nome}</h3>
`;

  card.onclick = () => abrirPais(pais);

  grid.appendChild(card);
});

const fundos = {
  "Brasil": "linear-gradient(135deg,#009739,#ffdf00,#002776)",
  "Argentina": "linear-gradient(135deg,#74acdf,#ffffff,#74acdf)",
  "França": "linear-gradient(135deg,#0055a4,#ffffff,#ef4135)",
  "Alemanha": "linear-gradient(135deg,#000000,#dd0000,#ffce00)",
  "Espanha": "linear-gradient(135deg,#aa151b,#f1bf00,#aa151b)",
  "Portugal": "linear-gradient(135deg,#006600,#ff0000)",
  "Escócia": "linear-gradient(135deg,#0065bd,#ffffff,#0065bd)",
  "Uruguai": "linear-gradient(135deg,#74acdf,#ffffff,#74acdf)",
  "Holanda": "linear-gradient(135deg,#ae1c28,#ffffff,#21468b)",
  "Bélgica": "linear-gradient(135deg,#000000,#ffde17,#ef3340)",
  "Croácia": "linear-gradient(135deg,#ff0000,#ffffff,#171796)",
  "Suíça": "linear-gradient(135deg,#ff0000,#ffffff)",
  "Estados Unidos": "linear-gradient(135deg,#b22234,#ffffff,#3c3b6e)",
  "México": "linear-gradient(135deg,#006847,#ffffff,#ce1126)",
  "Canadá": "linear-gradient(135deg,#ff0000,#ffffff,#ff0000)",
  "Colômbia": "linear-gradient(135deg,#fcd116,#003893,#ce1126)",
  "Equador": "linear-gradient(135deg,#fcd116,#003893,#ce1126)",
  "Paraguai": "linear-gradient(135deg,#d52b1e,#ffffff,#0038a8)",
  "Japão": "linear-gradient(135deg,#ffffff,#bc002d)",
  "Coreia do Sul": "linear-gradient(135deg,#ffffff,#cd2e3a,#0047a0)",
  "Austrália": "linear-gradient(135deg,#012169,#ffffff,#e4002b)",
  "Irã": "linear-gradient(135deg,#239f40,#ffffff,#da0000)",
  "Catar": "linear-gradient(135deg,#8d1b3d,#ffffff)",
  "Arábia Saudita": "linear-gradient(135deg,#006c35,#ffffff)",
  "Marrocos": "linear-gradient(135deg,#c1272d,#006233)",
  "Senegal": "linear-gradient(135deg,#00853f,#fdef42,#e31b23)",
  "Gana": "linear-gradient(135deg,#ce1126,#fcd116,#006b3f)",
  "Costa do Marfim": "linear-gradient(135deg,#f77f00,#ffffff,#009e60)",
  "Egito": "linear-gradient(135deg,#ce1126,#ffffff,#000000)",
  "Tunísia": "linear-gradient(135deg,#e70013,#ffffff)",
  "África do Sul": "linear-gradient(135deg,#007749,#ffb612,#de3831)",
  "Argélia": "linear-gradient(135deg,#006233,#ffffff)",
  "Nova Zelândia": "linear-gradient(135deg,#012169,#ffffff,#cc142b)",
  "Curaçao": "linear-gradient(135deg,#002b7f,#f9e814)",
  "Haiti": "linear-gradient(135deg,#00209f,#d21034)",
  "Panamá": "linear-gradient(135deg,#005293,#ffffff,#d21034)",
  "Turquia": "linear-gradient(135deg,#e30a17,#ffffff)",
  "Suécia": "linear-gradient(135deg,#006aa7,#fecc00)",
  "Noruega": "linear-gradient(135deg,#ba0c2f,#ffffff,#00205b)",
  "Áustria": "linear-gradient(135deg,#ed2939,#ffffff,#ed2939)",
  "Escócia": "linear-gradient(135deg,#0065bd,#ffffff,#0065bd)",
  "República Tcheca": "linear-gradient(135deg,#11457e,#ffffff,#d7141a)",
  "Bósnia": "linear-gradient(135deg,#002395,#fecb00)",
  "Uzbequistão": "linear-gradient(135deg,#1eb53a,#ffffff,#0099b5)",
  "Jordânia": "linear-gradient(135deg,#000000,#ffffff,#007a3d)",
  "Iraque": "linear-gradient(135deg,#ce1126,#ffffff,#000000)",
  "RD Congo": "linear-gradient(135deg,#007fff,#f7d618,#ce1021)"
};

function abrirPais(pais) {
  const info = document.getElementById("infoPais");

  info.style.background =
    fundos[pais.nome] || "linear-gradient(135deg,#16a34a,#0f172a)";

  info.style.color = "white";
  info.style.textShadow = "0 2px 8px rgba(0,0,0,0.55)";

  document.getElementById("paisBandeira").src =
    `https://flagcdn.com/w320/${pais.sigla}.png`;

  document.getElementById("paisNome").innerText = pais.nome;
  document.getElementById("paisTexto").innerText = pais.texto;

  info.style.display = "block";
  info.scrollIntoView({ behavior: "smooth" });
}

function fecharPais() {
  document.getElementById("infoPais").style.display = "none";
}
