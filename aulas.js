/* =========================================================
   BANCO DE AULAS — é SÓ ESTE ARQUIVO que você edita
   ---------------------------------------------------------
   1) Coloque o arquivo .html da aula na pasta certa:
        aulas/matematica/   aulas/fisica/   aulas/quimica/
   2) Copie um bloco { ... } abaixo, cole no fim da lista
      e troque os textos. Pronto: a aula aparece no site.
   ========================================================= */

const CONFIG = {
  professor: "Prof. Jorge Basílio",
  whatsapp: "5561985427780",              // só números, com 55 + DDD
  whatsappTexto: "(61) 98542-7780",
  email: "matematicojorge@gmail.com",
  meet: "https://meet.google.com/ort-dnzm-vhh",  // link fixo da sala do Meet
  drive: {                                 // links das pastas do Drive (opcional; deixe "" para esconder)
    matematica: "",
    fisica: "",
    quimica: ""
  }
};

const AULAS = [
  // ---------- MATEMÁTICA ----------
  { titulo: "Teorema de Pitágoras — aula de exemplo", disciplina: "matematica", assunto: "Geometria plana",
    descricao: "Modelo de aula com passo a passo. Use como referência e apague quando quiser.",
    arquivo: "aulas/matematica/EXEMPLO_PITAGORAS.html" },

  { titulo: "Funções Trigonométricas", disciplina: "matematica", assunto: "Funções",
    descricao: "Seno e cosseno: amplitude, período, frequência, imagem, máximo e mínimo, lei de formação.",
    arquivo: "aulas/matematica/FUNCOES_TRIGONOMETRICAS.html" },

  { titulo: "Funções pares e ímpares", disciplina: "matematica", assunto: "Funções",
    descricao: "Exercícios de funções pares, ímpares, periódicas e composição, com resolução ocultável.",
    arquivo: "aulas/matematica/FUNCOES_PARES_E_IMPARES.html" },

  { titulo: "Lista de questões — Geometria plana", disciplina: "matematica", assunto: "Geometria plana",
    descricao: "Questões de ENEM e vestibulares, uma aba por questão, com resolução ocultável.",
    arquivo: "aulas/matematica/LISTA_DE_QUESTOES.html" },

  { titulo: "Propriedades da adição de vetores", disciplina: "matematica", assunto: "Geometria analítica",
    descricao: "Resoluções do livro Geometria Analítica — um tratamento vetorial (Camargo & Boulos).",
    arquivo: "aulas/matematica/PROPRIEDADES_DA_ADICAO_DE_VETORES.html" },

  // ---------- FÍSICA ----------
  { titulo: "Grandezas escalares e vetoriais", disciplina: "fisica", assunto: "Introdução à Física",
    descricao: "Teoria ampliada sobre grandezas físicas, com questões.",
    arquivo: "aulas/fisica/GRANDEZAS.html" },

  { titulo: "Referencial e trajetória", disciplina: "fisica", assunto: "Cinemática",
    descricao: "Conceitos iniciais de cinemática: repouso, movimento, referencial e trajetória.",
    arquivo: "aulas/fisica/REFERENCIAL_E_TRAJETORIA.html" },

  { titulo: "MU — Função horária da posição", disciplina: "fisica", assunto: "Cinemática",
    descricao: "Movimento uniforme, s = s₀ + v·t e encontro de móveis.",
    arquivo: "aulas/fisica/MU_FUNCAO_HORARIA.html" },

  { titulo: "Vetores", disciplina: "fisica", assunto: "Vetores",
    descricao: "Soma, subtração, produto por escalar, decomposição e versores, com animações.",
    arquivo: "aulas/fisica/VETORES.html" },

  { titulo: "Laboratório: plano inclinado", disciplina: "fisica", assunto: "Dinâmica",
    descricao: "Laboratório animado do plano inclinado, do caso simples ao complexo.",
    arquivo: "aulas/fisica/LABORATORIO_PLANO_INCLINADO.html" },

  { titulo: "Simulador do Ciclo de Carnot", disciplina: "fisica", assunto: "Termodinâmica",
    descricao: "Simulador interativo do ciclo de Carnot.",
    arquivo: "aulas/fisica/CICLO_DE_CARNOT.html" },

  // ---------- QUÍMICA ----------
  { titulo: "Química Orgânica — Lista 1", disciplina: "quimica", assunto: "Química orgânica",
    descricao: "Lista comentada, uma aba por questão.",
    arquivo: "aulas/quimica/LISTA_1_ORGANICA.html" },

  { titulo: "Química Orgânica — Lista 2", disciplina: "quimica", assunto: "Química orgânica",
    descricao: "Lista comentada, uma aba por questão.",
    arquivo: "aulas/quimica/LISTA_2_ORGANICA.html" },

  { titulo: "Química Orgânica — Lista 3", disciplina: "quimica", assunto: "Química orgânica",
    descricao: "Lista comentada, uma aba por questão.",
    arquivo: "aulas/quimica/LISTA_3_ORGANICA.html" },

  { titulo: "Química Orgânica — Lista 4", disciplina: "quimica", assunto: "Química orgânica",
    descricao: "Lista comentada, uma aba por questão.",
    arquivo: "aulas/quimica/LISTA_4_ORGANICA.html" },

  // Para adicionar uma aula nova, copie o modelo abaixo (tire as duas barras // do começo das linhas):
  // { titulo: "Nome da aula", disciplina: "fisica", assunto: "Assunto",
  //   descricao: "Uma frase sobre a aula.",
  //   arquivo: "aulas/fisica/NOME_DO_ARQUIVO.html" },
];
