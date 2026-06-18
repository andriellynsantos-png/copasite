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
{ pergunta: "Qual seleção venceu o Curação por 7x1 em 2026?", opcoes: ["Alemanha","Holanda","França","Argentina"], resposta: "Alemanha" },
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
  { nome: "Brasil", sigla: "br", titulos: "5", destaque: "Vinícius Jr. e Rodrygo", estilo: "Técnico e ofensivo", cores: ["#002147", "#009B38"], texto: "O Brasil é a seleção mais vencedora da história das Copas do Mundo, com cinco títulos conquistados em 1958, 1962, 1970, 1994 e 2002. Conhecido pelo futebol ofensivo e criativo, o país revelou lendas como Pelé, Ronaldo, Ronaldinho Gaúcho, Romário, Kaká e Neymar. A Seleção Brasileira é admirada mundialmente pelo talento de seus jogadores e costuma chegar às Copas como uma das favoritas ao título." },
  { nome: "Argentina", sigla: "ar", titulos: "3", destaque: "Messi e Julián Álvarez", estilo: "Criativo e competitivo", texto: "A Argentina é tricampeã mundial e uma das maiores potências do futebol. O país conquistou os títulos de 1978, 1986 e 2022, além de ter revelado jogadores históricos como Diego Maradona e Lionel Messi. A seleção argentina é conhecida pela raça, técnica e pela enorme paixão de sua torcida, que acompanha a equipe em qualquer lugar do mundo." },
  { nome: "França", sigla: "fr", titulos: "2", destaque: "Mbappé", estilo: "Rápido e ofensivo", texto: "A França conquistou dois títulos mundiais, em 1998 e 2018, e está entre as seleções mais fortes da atualidade. O país possui uma grande tradição na formação de jogadores talentosos e conta com atletas que atuam nos principais clubes do mundo. Seu futebol combina velocidade, força física e qualidade técnica, tornando a equipe uma das mais respeitadas do cenário internacional." },
  { nome: "Alemanha", sigla: "de", titulos: "4", destaque: "Musiala e Wirtz", estilo: "Organizado e coletivo", texto: "A Alemanha é tetracampeã mundial e uma das seleções mais vitoriosas da história do futebol. Seus títulos foram conquistados em 1954, 1974, 1990 e 2014. Conhecida pela disciplina tática, organização e eficiência, a seleção alemã costuma se destacar em grandes competições e raramente deixa de ser considerada uma candidata ao título." },
  { nome: "Espanha", sigla: "es", titulos: "1", destaque: "Pedri e Lamine Yamal", estilo: "Posse de bola", texto: "A Espanha conquistou sua primeira Copa do Mundo em 2010, após uma geração histórica de jogadores que marcou época no futebol mundial. A seleção ficou conhecida pelo estilo baseado em posse de bola, passes rápidos e controle do jogo. Além do título mundial, a Espanha também conquistou importantes títulos europeus e continua revelando jovens talentos." },
  { nome: "Portugal", sigla: "pt", titulos: "0", destaque: "Cristiano Ronaldo e Bernardo Silva", estilo: "Técnico", texto: "Portugal é uma seleção tradicional que ganhou ainda mais destaque nas últimas décadas. O país revelou jogadores históricos como Eusébio e Cristiano Ronaldo, considerado um dos maiores atletas da história do futebol. A equipe portuguesa combina experiência, técnica e jogadores de alto nível, sendo sempre uma adversária perigosa em competições internacionais." },
  { nome: "Inglaterra", sigla: "gb-eng", titulos: "1", destaque: "Bellingham e Harry Kane", estilo: "Forte e ofensivo", texto: "A Inglaterra é considerada o berço do futebol moderno e conquistou sua única Copa do Mundo em 1966. O país possui uma das ligas mais fortes e populares do planeta, a Premier League. Sua seleção reúne atletas de alto nível e costuma chegar às grandes competições com o objetivo de voltar a conquistar um título mundial." },
  { nome: "Uruguai", sigla: "uy", titulos: "2", destaque: "Valverde e Darwin Núñez", estilo: "Raçudo", texto: "A Inglaterra é considerada o berço do futebol moderno e conquistou sua única Copa do Mundo em 1966. O país possui uma das ligas mais fortes e populares do planeta, a Premier League. Sua seleção reúne atletas de alto nível e costuma chegar às grandes competições com o objetivo de voltar a conquistar um título mundial." },
  { nome: "Holanda", sigla: "nl", titulos: "0", destaque: "Van Dijk e Xavi Simons", estilo: "Ofensivo", texto: "A Holanda é famosa por seu futebol técnico e ofensivo. Já teve grandes gerações e costuma ser uma seleção difícil de enfrentar." },
  { nome: "Bélgica", sigla: "be", titulos: "0", destaque: "De Bruyne e Lukaku", estilo: "Experiente", texto: "A Bélgica tem jogadores experientes e muita qualidade no meio-campo. É uma seleção que costuma criar boas chances e jogar com intensidade." },
  { nome: "Croácia", sigla: "hr", titulos: "0", destaque: "Modrić", estilo: "Meio-campo forte", texto: "A Croácia cresceu muito nas últimas Copas. Tem um meio-campo técnico, jogadores experientes e costuma ser muito competitiva em mata-matas." },
  { nome: "Suíça", sigla: "ch", titulos: "0", destaque: "Xhaka", estilo: "Organizada", texto: "A Suíça é uma seleção conhecida por sua organização tática e disciplina dentro de campo. Embora nunca tenha conquistado uma Copa do Mundo, costuma fazer campanhas competitivas e surpreender adversários tradicionais. Sua força está no trabalho coletivo, na defesa sólida e na capacidade de manter o equilíbrio durante as partidas." },
  { nome: "Estados Unidos", sigla: "us", titulos: "0", destaque: "Pulisic", estilo: "Jovem e intenso", texto: "Os Estados Unidos vêm investindo cada vez mais no futebol e serão um dos países-sede da Copa do Mundo de 2026. A seleção tem evoluído rapidamente nos últimos anos, contando com jogadores que atuam em grandes clubes europeus. Seu estilo de jogo é marcado pela velocidade, intensidade física e juventude do elenco." },
  { nome: "México", sigla: "mx", titulos: "0", destaque: "Hirving Lozano", estilo: "Intenso", texto: "O México é uma das seleções mais tradicionais da América do Norte e participa regularmente das Copas do Mundo. Conhecido por sua torcida apaixonada e estádios vibrantes, o país possui uma rica história no futebol. Sua equipe costuma apostar em velocidade, técnica e muita entrega dentro de campo." },
  { nome: "Canadá", sigla: "ca", titulos: "0", destaque: "Alphonso Davies", estilo: "Rápido", texto: "O Canadá vive um dos melhores momentos de sua história no futebol. Com uma geração talentosa liderada por jogadores que atuam nas principais ligas do mundo, a seleção canadense busca se consolidar entre as potências do continente. A Copa de 2026 representa uma grande oportunidade para mostrar sua evolução." },
  { nome: "Colômbia", sigla: "co", titulos: "0", destaque: "Luis Díaz", estilo: "Habilidoso", texto: "A Colômbia é conhecida por seu futebol criativo, ofensivo e cheio de talento. Ao longo dos anos, revelou jogadores de destaque internacional e conquistou o respeito de adversários em todo o mundo. Sua torcida é uma das mais animadas e apaixonadas do futebol sul-americano." },
  { nome: "Equador", sigla: "ec", titulos: "0", destaque: "Moisés Caicedo", estilo: "Físico e rápido", texto: "O Equador tem crescido constantemente no cenário internacional e se tornado presença frequente em grandes competições. A seleção é conhecida pela força física, velocidade e pelo surgimento de jovens talentos. Seu futebol combina intensidade e muita determinação." },
  { nome: "Paraguai", sigla: "py", titulos: "0", destaque: "Miguel Almirón", estilo: "Defensivo e raçudo", texto: "O Paraguai possui uma longa tradição no futebol sul-americano e já protagonizou campanhas memoráveis em Copas do Mundo. Sua seleção é conhecida pela raça, marcação forte e espírito competitivo. Mesmo diante de adversários mais fortes, costuma ser uma equipe difícil de ser derrotada." },
  { nome: "Japão", sigla: "jp", titulos: "0", destaque: "Mitoma", estilo: "Veloz e disciplinado", texto: "O Japão é uma das seleções mais respeitadas da Ásia e vem evoluindo constantemente nas últimas décadas. Conhecido pela disciplina tática, velocidade e trabalho em equipe, o país tem conquistado resultados expressivos contra grandes seleções. Sua organização dentro e fora de campo é admirada mundialmente." },
  { nome: "Coreia do Sul", sigla: "kr", titulos: "0", destaque: "Son Heung-min", estilo: "Intenso", texto: "A Coreia do Sul é uma das principais forças do futebol asiático e ficou mundialmente conhecida pela campanha histórica na Copa de 2002. Sua seleção aposta na velocidade, intensidade e dedicação dos jogadores. O país continua investindo no desenvolvimento do futebol e revelando talentos importantes." },
  { nome: "Austrália", sigla: "au", titulos: "0", destaque: "Mathew Ryan", estilo: "Físico", texto: "A Austrália é conhecida por seu futebol físico e competitivo. Apesar da distância geográfica dos grandes centros do esporte, a seleção conseguiu se estabelecer como uma presença constante em competições internacionais. Seus jogadores costumam demonstrar muita determinação e espírito de equipe." },
  { nome: "Irã", sigla: "ir", titulos: "0", destaque: "Taremi", estilo: "Defensivo", texto: "O Irã é uma das seleções mais tradicionais da Ásia e participa regularmente das eliminatórias para a Copa do Mundo. Conhecida pela organização defensiva e força física, a equipe costuma dificultar a vida de adversários tecnicamente superiores. Sua torcida acompanha a seleção com grande entusiasmo." },
  { nome: "Catar", sigla: "qa", titulos: "0", destaque: "Akram Afif", estilo: "Técnico", texto: "O Catar ganhou destaque internacional ao sediar a Copa do Mundo de 2022. Nos últimos anos, o país investiu fortemente no desenvolvimento do futebol e conquistou importantes resultados no continente asiático. Sua seleção busca continuar evoluindo e ganhar experiência em torneios de alto nível." },
  { nome: "Arábia Saudita", sigla: "sa", titulos: "0", destaque: "Salem Al-Dawsari", estilo: "Rápido", texto: "A Arábia Saudita é uma das seleções mais tradicionais do futebol asiático. Conhecida pela velocidade e pela intensidade de seus jogadores, a equipe já protagonizou grandes momentos em Copas do Mundo. Sua participação constante em competições internacionais demonstra a força do futebol saudita." },
  { nome: "Marrocos", sigla: "ma", titulos: "0", destaque: "Hakimi", estilo: "Organizado", texto: "Marrocos entrou para a história ao se tornar a primeira seleção africana a alcançar uma semifinal de Copa do Mundo. Sua equipe combina organização defensiva, velocidade nos contra-ataques e muita qualidade técnica. O feito conquistou admiração de torcedores em todo o planeta." },
  { nome: "Senegal", sigla: "sn", titulos: "0", destaque: "Mané", estilo: "Forte e veloz", texto: "O Senegal é uma das seleções mais fortes da África e já protagonizou campanhas marcantes em Copas do Mundo. Conhecido pela força física, velocidade e talento individual de seus jogadores, o país continua sendo uma referência do futebol africano." },
  { nome: "Gana", sigla: "gh", titulos: "0", destaque: "Kudus", estilo: "Físico", texto: "Gana possui uma rica tradição no futebol e é conhecida por revelar atletas talentosos. Sua seleção costuma jogar com intensidade, velocidade e muita determinação. Ao longo dos anos, conquistou o respeito internacional por suas campanhas competitivas." },
  { nome: "Costa do Marfim", sigla: "ci", titulos: "0", destaque: "Kessié", estilo: "Forte", texto: "A Costa do Marfim ficou conhecida mundialmente por gerações talentosas que contaram com jogadores de destaque internacional. Sua seleção combina força física, técnica e velocidade, sendo uma das equipes mais respeitadas do continente africano." },
  { nome: "Egito", sigla: "eg", titulos: "0", destaque: "Mohamed Salah", estilo: "Contra-ataque", texto: "O Egito é uma das seleções mais tradicionais da África e possui uma torcida extremamente apaixonada. O país revelou grandes jogadores e conquistou diversos títulos continentais. Sua equipe é conhecida pela organização e pela qualidade técnica." },
  { nome: "Tunísia", sigla: "tn", titulos: "0", destaque: "Skhiri", estilo: "Físico", texto: "A Tunísia participa frequentemente das principais competições africanas e busca crescer cada vez mais no cenário internacional. Sua seleção é conhecida pela disciplina tática, força física e determinação dentro de campo." },
  { nome: "África do Sul", sigla: "za", titulos: "0", destaque: "Percy Tau", estilo: "Veloz", texto: "A África do Sul entrou para a história ao sediar a Copa do Mundo de 2010, a primeira realizada em território africano. Sua seleção representa o crescimento do futebol no continente e busca conquistar resultados cada vez mais expressivos." },
  { nome: "Argélia", sigla: "dz", titulos: "0", destaque: "Mahrez", estilo: "Técnico", texto: "A Argélia é uma seleção respeitada no futebol africano e conhecida pela habilidade de seus jogadores. Ao longo dos anos, conquistou resultados importantes contra seleções tradicionais e continua sendo uma equipe perigosa em qualquer competição." },
  { nome: "Cabo Verde", sigla: "cv", titulos: "0", destaque: "Bebé", estilo: "Competitivo", texto: "Cabo Verde representa uma das histórias mais inspiradoras do futebol africano. Mesmo sendo um país pequeno, conseguiu evoluir rapidamente e competir de igual para igual com seleções mais tradicionais. Sua equipe é marcada pela determinação e espírito coletivo." },
  { nome: "Nova Zelândia", sigla: "nz", titulos: "0", destaque: "Chris Wood", estilo: "Físico", texto: "A Nova Zelândia é a principal representante da Oceania no futebol mundial. Conhecida por sua organização defensiva e força física, a seleção costuma apostar no jogo coletivo e na disciplina tática. Apesar de não ter tradição de títulos mundiais, é uma equipe competitiva e determinada." },
  { nome: "Curaçao", sigla: "cw", titulos: "0", destaque: "Jogadores da liga europeia", estilo: "Surpresa", texto: "Curaçao tem ganhado destaque nos últimos anos graças ao desenvolvimento de seu futebol e à presença de jogadores que atuam em ligas europeias. A seleção busca consolidar seu crescimento internacional e mostrar que pode competir contra equipes mais tradicionais." },
  { nome: "Haiti", sigla: "ht", titulos: "0", destaque: "Equipe coletiva", estilo: "Raça", texto: "O Haiti possui uma história marcada pela superação e pela paixão pelo futebol. Sua seleção é conhecida pela velocidade, dedicação e espírito de luta. Cada participação em grandes torneios representa uma oportunidade de mostrar o talento e a força do país." },
  { nome: "Panamá", sigla: "pa", titulos: "0", destaque: "Equipe coletiva", estilo: "Competitivo", texto: "O Panamá vive um período importante de crescimento no futebol. Após conquistar sua primeira participação em uma Copa do Mundo, a seleção ganhou experiência e confiança. O time é conhecido pela garra e pelo comprometimento de seus jogadores." },
  { nome: "Turquia", sigla: "tr", titulos: "0", destaque: "Çalhanoğlu", estilo: "Técnico e intenso", texto: "A Turquia possui uma torcida extremamente apaixonada e uma rica tradição futebolística. Sua seleção combina técnica, intensidade e espírito competitivo. Ao longo da história, já conquistou resultados importantes contra algumas das maiores equipes do mundo." },
  { nome: "Suécia", sigla: "se", titulos: "0", destaque: "Isak", estilo: "Organizado", texto: "A Suécia é uma das seleções mais tradicionais da Europa e possui uma longa história em Copas do Mundo. Conhecida pela organização, força física e trabalho coletivo, já revelou grandes jogadores e continua sendo uma equipe respeitada internacionalmente." },
  { nome: "Noruega", sigla: "no", titulos: "0", destaque: "Haaland e Ødegaard", estilo: "Ofensivo", texto: "A Noruega vive um momento promissor graças ao surgimento de uma geração talentosa de jogadores. A seleção combina força física, qualidade técnica e juventude, buscando conquistar resultados cada vez mais expressivos nas competições internacionais." },
  { nome: "Áustria", sigla: "at", titulos: "0", destaque: "Alaba", estilo: "Coletivo", texto: "A Áustria possui tradição no futebol europeu e uma seleção conhecida pela disciplina tática e espírito coletivo. Ao longo dos anos, participou de importantes competições e continua investindo na formação de novos talentos." },
  { nome: "Escócia", sigla: "gb-sct", titulos: "0", destaque: "McTominay", estilo: "Raçudo", texto: "A Escócia é uma das seleções mais antigas da história do futebol e possui uma torcida reconhecida mundialmente por sua paixão e lealdade. Seu estilo de jogo é marcado pela determinação, intensidade e orgulho de representar o país." },
  { nome: "República Tcheca", sigla: "cz", titulos: "0", destaque: "Schick", estilo: "Equilibrado", texto: "A República Tcheca tem uma rica tradição futebolística e já revelou grandes jogadores ao longo das décadas. Sua seleção é conhecida pela organização, equilíbrio entre defesa e ataque e pela capacidade de competir contra equipes de alto nível." },
  { nome: "Bósnia", sigla: "ba", titulos: "0", destaque: "Džeko", estilo: "Técnico", texto: "A Bósnia é uma seleção relativamente jovem no cenário internacional, mas já demonstrou grande potencial. O país possui jogadores talentosos e uma torcida apaixonada que acompanha a equipe em todos os desafios." },
  { nome: "Uzbequistão", sigla: "uz", titulos: "0", destaque: "Equipe jovem", estilo: "Disciplinado", texto: "O Uzbequistão representa o crescimento do futebol na Ásia Central. Sua seleção tem investido no desenvolvimento de jovens atletas e busca conquistar espaço entre as principais equipes do continente, apostando em disciplina e organização." },
  { nome: "Jordânia", sigla: "jo", titulos: "0", destaque: "Equipe coletiva", estilo: "Defensivo", texto: "A Jordânia vem evoluindo constantemente no futebol asiático e conquistando resultados importantes. Sua seleção é conhecida pelo comprometimento, pela organização defensiva e pela determinação em enfrentar adversários mais experientes." },
  { nome: "Iraque", sigla: "iq", titulos: "0", destaque: "Equipe coletiva", estilo: "Determinado", texto: "O Iraque possui uma história inspiradora no futebol e uma torcida extremamente apaixonada. Sua seleção é conhecida pela garra e pela capacidade de superar dificuldades, representando com orgulho o país em competições internacionais." },
  { nome: "RD Congo", sigla: "cd", titulos: "0", destaque: "Equipe física", estilo: "Forte e veloz", texto: "A República Democrática do Congo é uma das seleções tradicionais da África e possui grande potencial atlético. Conhecida pela força física, velocidade e talento individual de seus jogadores, busca alcançar resultados cada vez mais importantes no cenário mundial." }
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
  "Cabo Verde": "linear-gradient(135deg,#ffffff,#1b5bda,#f00a0a)",
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
