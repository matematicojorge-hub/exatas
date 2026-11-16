/* =========================================================
   CATÁLOGO DO SITE — é SÓ ESTE ARQUIVO que você edita
   ---------------------------------------------------------
   Setor A: CONFIG    (contatos, Meet, Drive)
   Setor B: AULAS     (não aparecem mais no site; servem ao menu da Sala de aula)
   Setor C: QUESTOES  (não aparecem mais no site; as listas ficam no Classroom)
   Setor D: TURMAS    (turmas do Google Classroom, mostradas na "Área do aluno")

   Campos extras opcionais em cada bloco:
     protegida: true  -> mostra o cadeado (arquivo feito no protetor.html)
     oculta: true     -> não aparece na lista (você manda o link direto ao aluno)
   ========================================================= */

/* ---------------- SETOR A: CONFIGURAÇÕES ---------------- */
const CONFIG = {
  professor: "Prof. Jorge Basílio",
  whatsapp: "5561985427780",              // só números, com 55 + DDD
  whatsappTexto: "(61) 98542-7780",
  email: "matematicojorge@gmail.com",
  meet: "https://meet.google.com/ort-dnzm-vhh",  // link fixo da sala do Meet
  classroom: "https://classroom.google.com/",     // botão "Abrir minhas turmas"
  youtubeCanal: "UC5EPcbC1S64oAOM8dAsbDhg",       // código do canal (seção "Conheça minhas aulas")
  drive: {                                 // links das pastas do Drive (opcional; deixe "" para esconder)
    matematica: "",
    fisica: "",
    quimica: ""
  }
};

/* ---------------- SETOR B: BANCO DE AULAS ---------------- */
const AULAS = [
  // ---------- MATEMÁTICA ----------
  { titulo: "Teorema de Pitágoras — aula de exemplo", disciplina: "matematica", assunto: "Geometria plana",
    descricao: "Modelo de aula com passo a passo. Use como referência e apague quando quiser.",
    arquivo: "aulas/matematica/EXEMPLO_PITAGORAS.html" },

  { titulo: "Teorema de Pitágoras — exemplo com senha", disciplina: "matematica", assunto: "Geometria plana",
    descricao: "Exemplo de aula protegida. Senha de teste: teste1234",
    arquivo: "aulas/matematica/EXEMPLO_PITAGORAS_PROTEGIDO.html", protegida: true },

  { titulo: "Funções Trigonométricas", disciplina: "matematica", assunto: "Funções",
    descricao: "Seno e cosseno: amplitude, período, frequência, imagem, máximo e mínimo, lei de formação.",
    arquivo: "aulas/matematica/FUNCOES_TRIGONOMETRICAS.html" },

  { titulo: "Funções pares e ímpares", disciplina: "matematica", assunto: "Funções",
    descricao: "Exercícios de funções pares, ímpares, periódicas e composição, com resolução ocultável.",
    arquivo: "aulas/matematica/FUNCOES_PARES_E_IMPARES.html" },

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
  // (nenhuma aula ainda)

  // EXEMPLO de aula com senha (tire as // para usar):
  // { titulo: "Vetores — aula do João", disciplina: "fisica", assunto: "Vetores",
  //   descricao: "Aula de 14/11 com os exercícios resolvidos.",
  //   arquivo: "aulas/fisica/VETORES_JOAO_PROTEGIDO.html", protegida: true },
];

/* ---------------- SETOR C: BANCO DE QUESTÕES ---------------- */
const QUESTOES = [
  { titulo: "Lista de questões — Geometria plana", disciplina: "matematica", assunto: "Geometria plana",
    descricao: "Questões de ENEM e vestibulares, uma aba por questão, com resolução ocultável.",
    arquivo: "questoes/matematica/LISTA_DE_QUESTOES.html" },

  { titulo: "Química Orgânica — Lista 1", disciplina: "quimica", assunto: "Química orgânica",
    descricao: "Lista comentada, uma aba por questão.",
    arquivo: "questoes/quimica/LISTA_1_ORGANICA.html" },

  { titulo: "Química Orgânica — Lista 2", disciplina: "quimica", assunto: "Química orgânica",
    descricao: "Lista comentada, uma aba por questão.",
    arquivo: "questoes/quimica/LISTA_2_ORGANICA.html" },

  { titulo: "Química Orgânica — Lista 3", disciplina: "quimica", assunto: "Química orgânica",
    descricao: "Lista comentada, uma aba por questão.",
    arquivo: "questoes/quimica/LISTA_3_ORGANICA.html" },

  { titulo: "Química Orgânica — Lista 4", disciplina: "quimica", assunto: "Química orgânica",
    descricao: "Lista comentada, uma aba por questão.",
    arquivo: "questoes/quimica/LISTA_4_ORGANICA.html" },
];

/* ---------------- SETOR D: TURMAS DO GOOGLE CLASSROOM ----------------
   Cada turma vira um cartão na "Área do aluno", com o botão "Quero participar"
   (abre o WhatsApp com a mensagem pronta). O código de convite NÃO vai aqui:
   você manda só para o aluno que pediu.
     grupo:  título do bloco (disciplina e série)
     status: "aberta" ou "em breve"
------------------------------------------------------------------------ */
const TURMAS = [
  { codigo: "AULA 001", nome: "Grandezas Físicas", grupo: "Física 1 · 1º ano do Ensino Médio", disciplina: "fisica",
    descricao: "Medição, unidades e vetores.", status: "aberta" },

  { codigo: "AULA 002", nome: "Estudo dos Movimentos", grupo: "Física 1 · 1º ano do Ensino Médio", disciplina: "fisica",
    descricao: "Referencial, trajetória, velocidade e movimento uniforme.", status: "aberta" },

  // Modelo para uma turma nova (tire as // do começo):
  // { codigo: "AULA 003", nome: "Nome da turma", grupo: "Física 1 · 1º ano do Ensino Médio", disciplina: "fisica",
  //   descricao: "Uma frase sobre a turma.", status: "em breve" },
];
