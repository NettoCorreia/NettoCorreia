/* ==========================================================================
   PLANEJAMENTO CAPRIOLLI · DADOS
   --------------------------------------------------------------------------
   Para atualizar o mês: copie o objeto do mês dentro de `meses`, cole no
   INÍCIO da lista e edite os textos. A página abre sempre no primeiro mês da
   lista e mostra os demais no seletor do topo.
   ========================================================================== */
window.CAPRIOLLI = {
  cliente: {
    nome: "Pizzaria Capriolli",
    instagram: "pizza_capriolli",
    perfilUrl: "https://www.instagram.com/pizza_capriolli/",
    cardapioUrl: "https://capriolli.menudino.com",
    // Foto da pizza no topo (PNG com fundo transparente). Sem o arquivo, aparece a logo.
    fotoPizza: "assets/pizza-calabresa.png"
  },
  agencia: { nome: "NC Comunicação" },

  // Meses que ainda vão ser planejados (aparecem bloqueados no seletor)
  proximos: ["Janeiro 2027"],

  meses: [
    {
      id: "2026-12",
      rotulo: "Dezembro 2026",
      numero: 1,
      tema: "Reacender",
      titulo: "O forno voltou a acender",
      resumo:
        "O perfil ficou parado e o alcance despencou. Agora a Capriolli volta com pizza de verdade na tela: queijo puxando, borda escorrendo e forno estalando.",
      atualizado: "23/11/2026",

      /* ---------------- DIAGNÓSTICO ---------------- */
      diagnostico: {
        periodo: "Últimos 90 dias · 25 ago – 22 nov 2026",
        kpis: [
          { valor: 9536, rotulo: "Visualizações", variacao: "-43,1%" },
          { valor: 838, rotulo: "Contas alcançadas", variacao: "-62,9%" },
          { valor: 6456, rotulo: "Seguidores", variacao: null }
        ],
        alcanceBase: { alcancadas: 838, seguidores: 6456 },
        achados: [
          {
            titulo: "A base esqueceu da Capriolli",
            texto: "Em 90 dias, só 838 das 6.456 pessoas que seguem o perfil viram algum conteúdo."
          },
          {
            titulo: "Reels são o que mais entrega",
            texto: "Os Reels trouxeram 47% das visualizações e são o formato que mais chega em quem ainda não segue."
          },
          {
            titulo: "Flyer não abre o apetite",
            texto: "Os posts recentes são artes gráficas (Combo, Sextou). Elas informam, mas não mostram a pizza."
          }
        ]
      },

      /* ---------------- O QUE PRECISA MELHORAR ---------------- */
      melhorias: [
        {
          titulo: "Food porn como carro-chefe",
          problema: "Os vídeos ainda não mostram a pizza de perto.",
          acao: "Close no queijo esticando, borda recheada escorrendo e ingredientes caindo em câmera lenta. Os 2 primeiros segundos com a cena mais apetitosa."
        },
        {
          titulo: "Pizza real no lugar de flyer",
          problema: "As promoções aparecem como arte gráfica: a pessoa vê texto, não vê comida.",
          acao: "Toda oferta ganha vídeo ou foto real do produto. A arte vira só o texto na tela."
        },
        {
          titulo: "Nome e bio que aparecem na busca",
          problema: "O nome do perfil não diz a cidade nem o que a pessoa procura.",
          acao: "Nome: \"Pizzaria Capriolli | Pizza em Dias d'Ávila\". Bio com cidade, horário e \"Peça pelo link 👇\"."
        },
        {
          titulo: "Destaques organizados",
          problema: "Há destaques com nome cortado (\"Linha mom…\") e um identificado só por emoji.",
          acao: "Cinco destaques com capa preta e laranja: Cardápio · Promoções · Clientes · Drinks · Bastidores."
        },
        {
          titulo: "Rostos da casa",
          problema: "O perfil mostra produto e promoção, mas não mostra quem faz.",
          acao: "O pizzaiolo e a equipe aparecem nos vídeos: abrindo a massa, tirando do forno, indicando o sabor."
        },
        {
          titulo: "Clientes no perfil",
          problema: "O destaque \"Clientes\" precisa de conteúdo novo.",
          acao: "Repostar os clientes que marcam a Capriolli nos Stories e salvar no destaque."
        },
        {
          titulo: "Anúncio só no que deu certo",
          problema: "Impulsionar sem critério gasta verba com vídeo que nem no orgânico funcionou.",
          acao: "Só vira anúncio o vídeo que já foi bem no orgânico, mostrado para quem mora em Dias d'Ávila."
        },
        {
          titulo: "Responder rápido",
          problema: "Comentário e Direct sem resposta viram pedido perdido.",
          acao: "Responder em até 1 hora no horário de funcionamento."
        }
      ],

      /* ---------------- PESQUISA REGIONAL: DIAS D'ÁVILA ---------------- */
      regiao: {
        cidade: "Dias d'Ávila · BA",
        dados: [
          { valor: "75 mil", rotulo: "habitantes (estimativa IBGE 2026)" },
          { valor: "< 50 km", rotulo: "de Salvador, vizinha de Camaçari" },
          { valor: "25/02", rotulo: "aniversário da cidade, feriado municipal" }
        ],
        insights: [
          { titulo: "Cidade onde todo mundo se conhece", texto: "Com cerca de 75 mil moradores, rosto conhecido e boca a boca pesam muito. Equipe e clientes da cidade nos vídeos geram identificação." },
          { titulo: "Concorrência no delivery", texto: "Há várias pizzarias com entrega na cidade. A Capriolli se diferencia como bar, pizzaria e restaurante: experiência e pizza artesanal, não só entrega." },
          { titulo: "Bairros para citar", texto: "Genaro, Parque Petrópolis, Santa Terezinha e Bosque aparecem entre os bairros com mais entrega de comida. Citar o bairro no vídeo e na legenda aproxima o cliente." },
          { titulo: "Busca local", texto: "\"Pizza em Dias d'Ávila\" e \"pizzaria Dias d'Ávila\" no nome do perfil, nas legendas e no texto dos vídeos ajudam a Capriolli a aparecer na busca do Instagram." }
        ],
        datas: [
          { nome: "Aniversário da cidade", quando: "25 de fevereiro", ideia: "Vídeo de parabéns para Dias d'Ávila, com a pizza no centro da festa. A cidade faz shows na Praça do Imbassay." },
          { nome: "Forró d'Ávila (São Pedro)", quando: "Final de junho", ideia: "Pizza com clima junino, aproveitando o movimento do festival na Praça do Rio Imbassay." }
        ],
        fontes: [
          { nome: "IBGE Cidades", url: "https://www.ibge.gov.br/cidades-e-estados/ba/dias-davila.html" },
          { nome: "A Tarde", url: "https://atarde.com.br/bahia/cidades-baianas-celebram-41-anos-de-emancipacao-1380790" },
          { nome: "Prefeitura de Dias d'Ávila", url: "https://diasdavila.ba.gov.br/dias-davila-celebra-40-anos-com-ato-solene-grande-arrastao-e-show-da-timbalada/" },
          { nome: "eNotícias", url: "https://enoticias.com.br/noticia/24654/dias-dravila-inicia-festejos-de-sao-pedro-com-grandes-atracoes-a-partir-desta-quinta-26" },
          { nome: "Trice Leads", url: "https://triceleads.com/segmentos/entrega-de-comida/dias-d-avila" },
          { nome: "Sebrae PR", url: "https://sebraepr.com.br/comunidade/artigo/estrategia-de-crescimento-organico-no-instagram-o-guia-de-2026" }
        ]
      },

      /* ---------------- IDEIAS DE VÍDEO ----------------
         tag: "Food porn" · "Bastidor" · "Cidade" · "Ocasião" */
      ideias: [
        {
          tag: "Food porn",
          titulo: "O forno reacendeu",
          porque: "Marca a volta do perfil com impacto: fogo, pizza saindo e queijo puxando.",
          cenas: [
            "Tela escura e a lenha acendendo, com o som real.",
            "Close nas chamas dentro do forno.",
            "Pá entrando com a pizza crua; corte para a pizza saindo borbulhando.",
            "Fatia puxada em câmera lenta, com o queijo esticando.",
            "Texto final: \"A Capriolli voltou. E voltou com fome.\""
          ],
          legenda: "O forno nunca apagou. Só estava esquentando pra você. 🔥🍕 Qual sabor você quer ver aqui primeiro?"
        },
        {
          tag: "Food porn",
          titulo: "Cheese pull em câmera lenta",
          porque: "O queijo esticando é a cena que mais faz a pessoa parar de rolar a tela.",
          cenas: [
            "Abrir já no corte da pizza recém-saída do forno.",
            "Fatia subindo bem devagar, com o queijo esticando.",
            "Macro no queijo borbulhando e no vapor.",
            "Texto com o nome do sabor."
          ],
          legenda: "Só de olhar já deu fome, né? 🧀 Pizza artesanal em Dias d'Ávila."
        },
        {
          tag: "Food porn",
          titulo: "Borda recheada escorrendo",
          porque: "É o vídeo-assinatura: o recheio escorrendo da borda em close.",
          cenas: [
            "Close extremo na borda inteira.",
            "Faca cortando a borda ao meio.",
            "Recheio escorrendo em câmera lenta.",
            "Mordida na borda."
          ],
          legenda: "Isso aqui deveria ser proibido. 🤤 Borda recheada da Capriolli: você come primeiro ou deixa pro final?"
        },
        {
          tag: "Food porn",
          titulo: "Calabresa da bancada ao forno",
          porque: "Mostra os ingredientes selecionados da bio na prática.",
          cenas: [
            "Câmera fixa de cima da bancada.",
            "Molho, queijo, calabresa e cebola caindo, no ritmo da música.",
            "Pizza entrando no forno.",
            "Saindo pronta, com close na calabresa tostada."
          ],
          legenda: "Ingredientes selecionados não é só frase de bio. 🍕 Da bancada ao forno, do jeito Capriolli."
        },
        {
          tag: "Bastidor",
          titulo: "Quem faz a Capriolli",
          porque: "Em cidade onde todo mundo se conhece, mostrar o pizzaiolo cria conexão.",
          cenas: [
            "Pizzaiolo abrindo a massa no ar.",
            "Ele fala uma frase: há quanto tempo faz pizza e qual o sabor favorito.",
            "Tirando a pizza do forno e olhando para a câmera."
          ],
          legenda: "Por trás de cada pizza tem alguém que leva isso a sério. 👨‍🍳 Conheça quem faz a sua Capriolli."
        },
        {
          tag: "Bastidor",
          titulo: "POV: a primeira mordida",
          porque: "Trend de reação: a pessoa se imagina no lugar de quem está comendo.",
          cenas: [
            "Pizza chegando à mesa.",
            "Cliente pegando a fatia, queijo esticando.",
            "Reação na primeira mordida.",
            "Texto: \"POV: você pediu a pizza mais sofisticada de Dias d'Ávila\"."
          ],
          legenda: "A reação diz tudo. 😮‍💨 Vem provar você também."
        },
        {
          tag: "Food porn",
          titulo: "A fatia perfeita: qual você escolhe?",
          porque: "Pergunta no final puxa comentário, e comentário aumenta o alcance.",
          cenas: [
            "Três ou quatro sabores lado a lado.",
            "Cortador passando, com som crocante.",
            "Uma fatia de cada subindo em câmera lenta.",
            "Texto: \"Qual você escolhe?\""
          ],
          legenda: "Só pode escolher uma. Qual? 👇"
        },
        {
          tag: "Bastidor",
          titulo: "Pizza e drink",
          porque: "Reforça que a Capriolli é bar e restaurante, não só delivery.",
          cenas: [
            "Drink sendo preparado: gelo caindo, calda.",
            "Brinde em câmera lenta.",
            "Pizza chegando à mesa.",
            "Texto: \"Sexta pede Capriolli\"."
          ],
          legenda: "Pizza + drink = sextou do jeito certo. 🍹🍕 Marca quem vem com você."
        },
        {
          tag: "Cidade",
          titulo: "A Capriolli chega no seu bairro",
          porque: "Citar bairros de Dias d'Ávila aproxima e faz o morador se sentir chamado.",
          cenas: [
            "Pizza saindo do forno e indo para a caixa.",
            "Entregador saindo da pizzaria.",
            "Textos rápidos na tela: \"Genaro\", \"Parque Petrópolis\", \"Santa Terezinha\", \"Bosque\"…",
            "Caixa abrindo com a pizza quentinha."
          ],
          legenda: "De Genaro a Santa Terezinha, a Capriolli chega quentinha. 🛵🍕 Qual é o seu bairro?"
        },
        {
          tag: "Ocasião",
          titulo: "Pizza na ceia e na virada",
          porque: "Fim de ano é época de encomenda e de mesa cheia.",
          cenas: [
            "Mesa de festa com luzes desfocadas ao fundo.",
            "Pizza chegando ao centro da mesa.",
            "Corte e fatia puxada.",
            "Brinde e texto com como encomendar."
          ],
          legenda: "Esse fim de ano a mesa tem Capriolli. 🎄🥂 Encomendas pelo link da bio."
        }
      ],

      /* ---------------- REFERÊNCIAS DE TREND ----------------
         Para usar uma capa fixa, salve a imagem em assets/ e preencha "capa". */
      referencias: [
        { codigo: "DSFwF__iRip", url: "https://www.instagram.com/reel/DSFwF__iRip/", titulo: "Referência 01", capa: "" },
        { codigo: "DSQfFb7kvJ8", url: "https://www.instagram.com/reel/DSQfFb7kvJ8/", titulo: "Referência 02", capa: "" },
        { codigo: "DZ8Ob50Bib6", url: "https://www.instagram.com/reel/DZ8Ob50Bib6/", titulo: "Referência 03", capa: "" },
        { codigo: "DBpFOXoPN_u", url: "https://www.instagram.com/reel/DBpFOXoPN_u/", titulo: "Referência 04", capa: "" },
        { codigo: "DUrQrt9ic7G", url: "https://www.instagram.com/reel/DUrQrt9ic7G/", titulo: "Referência 05", capa: "" },
        { codigo: "DSDkoPGka-a", url: "https://www.instagram.com/reel/DSDkoPGka-a/", titulo: "Referência 06", capa: "" }
      ],

      /* ---------------- TRÁFEGO PAGO ---------------- */
      trafego: {
        fases: [
          { titulo: "Primeiro, só orgânico", texto: "Publicar e ver qual vídeo prende mais a atenção." },
          { titulo: "Depois, impulsionar o melhor", texto: "O vídeo com mais retenção e compartilhamentos vira anúncio de mensagens no WhatsApp." },
          { titulo: "Em datas especiais", texto: "Anúncio de encomendas no fim de ano, no aniversário da cidade e no São Pedro." }
        ],
        config: [
          { rotulo: "Alcance", valor: "Dias d'Ávila, 3 a 5 km da pizzaria" },
          { rotulo: "Objetivo", valor: "Mensagens no WhatsApp" }
        ],
        orcamento: { valor: "R$ 20 a R$ 30 por dia", detalhe: "Sugestão inicial. O valor final é alinhado com a Capriolli." }
      }
    }
  ]
};
