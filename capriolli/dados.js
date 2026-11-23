/* ==========================================================================
   PLANEJAMENTO CAPRIOLLI · DADOS
   --------------------------------------------------------------------------
   Para atualizar o mês: copie o objeto do mês dentro de `meses`, cole no
   INÍCIO da lista e edite os textos. A página abre sempre no primeiro mês da
   lista e mostra os demais no seletor do topo.
   Tipos aceitos na agenda: "reel" · "stories" · "carrossel" · "ads"
   ========================================================================== */
window.CAPRIOLLI = {
  cliente: {
    nome: "Pizzaria Capriolli",
    instagram: "pizza_capriolli",
    perfilUrl: "https://www.instagram.com/pizza_capriolli/",
    cardapioUrl: "https://capriolli.menudino.com"
  },
  agencia: { nome: "NC Comunicação" },

  // Meses que ainda vão ser planejados (aparecem bloqueados no seletor)
  proximos: ["Janeiro 2027"],

  meses: [
    {
      id: "2026-12",
      rotulo: "Dezembro 2026",
      curto: "Dez",
      numero: 1,
      ano: 2026,
      mesIndex: 11, // 0 = janeiro … 11 = dezembro
      tema: "Reacender",
      titulo: "O forno voltou a acender",
      resumo:
        "O perfil ficou parado e o alcance despencou. Em dezembro a Capriolli volta a aparecer todos os dias, com pizza de verdade na tela: queijo puxando, borda escorrendo e forno estalando.",
      atualizado: "23/11/2026",

      metas: [
        { rotulo: "Visualizações em 30 dias", de: "5,4 mil", para: "15 mil" },
        { rotulo: "Reels publicados", de: "—", para: "14" },
        { rotulo: "Dias com Stories", de: "—", para: "31 de 31" },
        { rotulo: "Novos seguidores", de: "6.456", para: "+250" }
      ],

      /* ---------------- DIAGNÓSTICO ---------------- */
      diagnostico: {
        periodo: "Últimos 90 dias · 25 ago – 22 nov 2026",
        kpis: [
          { valor: 9536, rotulo: "Visualizações", variacao: "-43,1%", nota: "vs. 90 dias anteriores" },
          { valor: 838, rotulo: "Contas alcançadas", variacao: "-62,9%", nota: "vs. 90 dias anteriores" },
          { valor: 6456, rotulo: "Seguidores", variacao: null, nota: "456 posts no perfil" }
        ],
        alcanceBase: { alcancadas: 838, seguidores: 6456 },
        porTipo: [
          { tipo: "Reels", valor: 4500, rotulo: "4,5 mil" },
          { tipo: "Stories", valor: 3200, rotulo: "3,2 mil" },
          { tipo: "Posts", valor: 1800, rotulo: "1,8 mil" },
          { tipo: "Lives", valor: 0, rotulo: "0" }
        ],
        achados: [
          {
            titulo: "Só 13% da base viu algo",
            texto: "Em 90 dias, 838 contas viram o conteúdo da Capriolli. São 6.456 seguidores. A maioria esqueceu que a pizzaria existe no Instagram."
          },
          {
            titulo: "Reels seguram o perfil",
            texto: "Mesmo com pouca postagem, os Reels trouxeram 47% de todas as visualizações e são o formato que mais chega em quem ainda não segue."
          },
          {
            titulo: "Quando posta, o público responde",
            texto: "O gráfico diário ficou quase todo abaixo de 200 visualizações, mas em novembro teve picos de até 738. A audiência está lá; falta frequência."
          },
          {
            titulo: "Flyer não abre o apetite",
            texto: "Os posts recentes do grid são artes gráficas (Combo, Sextou, Agosto). Elas informam, mas não mostram a pizza. Comida real é o que faz parar o dedo."
          }
        ]
      },

      /* ---------------- O QUE PRECISA MELHORAR ---------------- */
      melhorias: [
        {
          titulo: "Constância de postagem",
          problema: "O perfil ficou parado e as contas alcançadas caíram 62,9%. O algoritmo deixa de mostrar quem some.",
          acao: "Calendário fixo: 3 a 4 Reels por semana, Stories todos os dias e 1 carrossel por semana. Este painel é o roteiro.",
          quando: "A partir de 1º/dez"
        },
        {
          titulo: "Food porn como carro-chefe",
          problema: "Os Reels já são o formato que mais entrega, mas ainda não mostram a pizza de perto.",
          acao: "Close no queijo esticando, borda recheada escorrendo, ingredientes caindo em câmera lenta. Os 2 primeiros segundos com a cena mais apetitosa.",
          quando: "Todo Reel"
        },
        {
          titulo: "Pizza real no lugar de flyer",
          problema: "Promoções aparecem como arte gráfica. A pessoa vê texto, não vê comida.",
          acao: "Toda oferta ganha vídeo ou foto real do produto. A arte vira só a capa ou o texto na tela.",
          quando: "Já no Combo"
        },
        {
          titulo: "Nome e bio que aparecem na busca",
          problema: "O nome do perfil diz \"A Mais Sofisticada da Região\", mas não diz onde fica nem o que a pessoa procura. Hoje o Instagram funciona como buscador.",
          acao: "Nome: \"Pizzaria Capriolli | Pizza artesanal em [bairro]\". Bio com bairro, horário e a chamada \"Peça pelo link 👇\".",
          quando: "Semana 1"
        },
        {
          titulo: "Destaques organizados",
          problema: "Há destaques com nome cortado (\"Linha mom…\") e um identificado só por emoji. Quem chega no perfil não acha o cardápio.",
          acao: "Cinco destaques com capa preta e laranja: Cardápio · Promoções · Clientes · Drinks · Bastidores.",
          quando: "Semana 1"
        },
        {
          titulo: "Stories com conversa",
          problema: "Foram 3,2 mil visualizações de Stories em 90 dias, cerca de 35 por dia. Fica pouco para um restaurante aberto todos os dias.",
          acao: "De 4 a 7 Stories por dia, seguindo a rotina abaixo, com enquete, quiz, caixinha e figurinha de link do cardápio.",
          quando: "Diário"
        },
        {
          titulo: "Rostos da casa",
          problema: "O perfil mostra o produto e a promoção, mas não mostra quem faz.",
          acao: "O pizzaiolo e a equipe viram personagens: abrindo a massa, tirando do forno, recomendando o sabor do dia.",
          quando: "Semana 3"
        },
        {
          titulo: "Prova social (UGC)",
          problema: "O destaque \"Clientes\" existe, mas precisa de conteúdo novo e constante.",
          acao: "Repostar clientes que marcam a Capriolli, sempre com autorização. Um mimo simples para quem marcar o perfil na mesa incentiva novos posts.",
          quando: "Contínuo"
        },
        {
          titulo: "Tráfego pago inteligente",
          problema: "Impulsionar post sem critério gasta verba com conteúdo que nem no orgânico funcionou.",
          acao: "Só vira anúncio o Reel que já foi bem no orgânico. Raio de 3 a 5 km e objetivo de mensagens no WhatsApp ou Direct.",
          quando: "A partir da semana 2"
        },
        {
          titulo: "Responder rápido e medir",
          problema: "Comentário e Direct sem resposta viram pedido perdido.",
          acao: "Responder em até 1 hora no horário de funcionamento. Todo mês este painel traz as métricas novas e ajusta a rota.",
          quando: "Contínuo"
        }
      ],

      /* ---------------- PESQUISA DE MERCADO ---------------- */
      pesquisa: {
        organico: [
          { titulo: "Reels são a vitrine", texto: "O alcance orgânico médio caiu cerca de 12% em um ano, e os Reels viraram o principal canal para chegar em quem ainda não segue o perfil." },
          { titulo: "Instagram virou buscador", texto: "As pessoas pesquisam como no Google. Palavras-chave no nome, na legenda e no texto na tela, como o bairro e o tipo de pizza, pesam mais que hashtag." },
          { titulo: "Bastidor vende", texto: "Em 2026 a tendência é autenticidade: cozinha de verdade, rostos reais e menos peça superproduzida." },
          { titulo: "Frequência de Reels", texto: "Guias do setor recomendam de 3 a 5 Reels de comida por semana, mantendo poucos formatos que já funcionam." },
          { titulo: "Cliente como mídia", texto: "Repostar conteúdo de clientes é uma das táticas mais citadas por pizzarias, sempre com autorização por escrito e crédito ao autor." },
          { titulo: "Link direto para pedir", texto: "Para delivery, o ganho está em levar a pessoa direto ao cardápio. Cada clique a mais perde pedido." }
        ],
        pago: [
          { titulo: "Impulsionar o que já venceu", texto: "Anunciar só os posts que já engajaram acima da média no orgânico." },
          { titulo: "Clique para WhatsApp", texto: "Anúncio que abre conversa no WhatsApp. No início, otimizar por conversa; com volume, otimizar por compra." },
          { titulo: "Ocasião e novidade", texto: "Os melhores usos de verba são datas especiais, ofertas por tempo limitado e sabores novos." }
        ],
        fontes: [
          { nome: "Sebrae PR · Crescimento orgânico no Instagram 2026", url: "https://sebraepr.com.br/comunidade/artigo/estrategia-de-crescimento-organico-no-instagram-o-guia-de-2026" },
          { nome: "Mundo do Marketing · Tendências Instagram 2026", url: "https://mundodomarketing.com.br/8-tendencias-que-devem-redefinir-conteudo-anuncios-e-vendas-no-instagram-em-2026" },
          { nome: "Pizza Today · How pizzerias succeed on social", url: "https://pizzatoday.com/news/how-and-where-pizzerias-succeed-on-social-media/146282/" },
          { nome: "AppInstitute · Instagram for takeaways 2026", url: "https://appinstitute.com/instagram-for-takeaways/" },
          { nome: "Saipos · Pizza nas redes sociais", url: "https://saipos.com/cardapio-digital/marketing/pizza-social-media" },
          { nome: "Enrich Labs · WhatsApp advertising 2026", url: "https://www.enrichlabs.ai/blog/whatsapp-advertising-complete-guide-2026" }
        ]
      },

      /* ---------------- SEMANAS ---------------- */
      semanas: [
        { n: 1, inicio: 1, fim: 6, tema: "O forno reacendeu", descricao: "Anunciar a volta com fogo, massa e o primeiro queijo puxando. Arrumar bio e destaques." },
        { n: 2, inicio: 7, fim: 13, tema: "Food porn sem filtro", descricao: "Semana de closes: borda recheada, ingredientes em câmera lenta, drinks. Começa o impulsionamento." },
        { n: 3, inicio: 14, fim: 20, tema: "Quem faz a Capriolli", descricao: "Pizzaiolo, equipe e clientes na tela. Abertura das encomendas de fim de ano." },
        { n: 4, inicio: 21, fim: 27, tema: "Natal com pizza", descricao: "Encomendas para a ceia, mensagem da casa e o melhor do mês." },
        { n: 5, inicio: 28, fim: 31, tema: "Virada na Capriolli", descricao: "Pizza e drinks para o Réveillon. Fechar 2026 com retrospectiva." }
      ],

      /* ---------------- AGENDA DIÁRIA ---------------- */
      agenda: [
        {
          dia: 1, tipo: "reel", horario: "18h",
          titulo: "O forno reacendeu",
          objetivo: "Anunciar a volta do perfil com impacto visual.",
          roteiro: [
            "Tela escura. Fósforo ou maçarico acendendo a lenha (som real).",
            "Close nas chamas crescendo dentro do forno.",
            "Pá entrando com a pizza crua, corte para a pizza saindo borbulhando.",
            "Fatia puxada em câmera lenta com o queijo esticando.",
            "Texto final: \"A Capriolli voltou. E voltou com fome.\""
          ],
          legenda: "O forno nunca apagou. Só estava esquentando pra você. 🔥🍕 A partir de hoje tem Capriolli todo dia por aqui. Ativa o sininho e já escolhe: qual sabor você quer ver primeiro?",
          dica: "Grave o fogo com a luz do salão apagada. O laranja das chamas vira a cor do vídeo."
        },
        {
          dia: 2, tipo: "stories", horario: "Ao longo do dia",
          titulo: "Enquete: qual sabor aparece primeiro?",
          objetivo: "Puxar conversa e decidir o próximo Reel com o público.",
          roteiro: ["Foto real de 4 sabores do cardápio.", "Enquete com as 4 opções.", "Caixinha: \"Qual pizza você pede de olho fechado?\"", "Figurinha de link para o cardápio."],
          legenda: "",
          dica: "Use o resultado da enquete no Reel do dia 3 e conte isso no vídeo."
        },
        {
          dia: 3, tipo: "reel", horario: "18h",
          titulo: "Cheese pull em câmera lenta",
          objetivo: "Primeiro food porn puro, feito para alcançar quem não segue.",
          roteiro: [
            "Abrir já no corte da pizza recém-saída do forno.",
            "Fatia subindo devagar, queijo esticando (câmera lenta 120 fps).",
            "Macro no queijo borbulhando e no vapor.",
            "Texto: \"Vocês escolheram. A gente entregou.\" + nome do sabor."
          ],
          legenda: "Vocês votaram e o queijo respondeu. 🧀 Qual vai ser o próximo? #pizza #pizzaartesanal",
          dica: "Fundo escuro e luz lateral fazem o queijo brilhar. Puxe a fatia bem devagar."
        },
        {
          dia: 4, tipo: "reel", horario: "17h",
          titulo: "Sextou em ASMR",
          objetivo: "Despertar vontade antes do jantar de sexta.",
          roteiro: ["Massa batendo na bancada.", "Molho espalhado em espiral.", "Queijo caindo (câmera de cima).", "Forno estalando.", "Faca cortando a borda crocante."],
          legenda: "Aumenta o som. 🔊 Sexta é dia de Capriolli. Peça pelo link da bio ou vem pra cá.",
          dica: "Sem música: só o som real da cozinha. Grave o áudio de perto."
        },
        {
          dia: 5, tipo: "stories", horario: "19h–22h",
          titulo: "Bastidores da noite cheia",
          objetivo: "Mostrar movimento: casa viva atrai cliente.",
          roteiro: ["Comandas saindo.", "Pizzas lado a lado no balcão.", "Salão com clientes (sem expor rostos sem autorização).", "Figurinha \"Ainda dá tempo de pedir\" + link."],
          legenda: "",
          dica: "Vídeos curtos de 3 a 5 segundos cada, gravados ao longo do serviço."
        },
        {
          dia: 6, tipo: "carrossel", horario: "12h",
          titulo: "Cardápio em fotos reais",
          objetivo: "Substituir flyer por comida de verdade no grid.",
          roteiro: ["Capa: \"Os 5 mais pedidos da Capriolli\".", "Uma foto de perto por sabor, com nome e ingredientes.", "Último card: \"Peça pelo link da bio\"."],
          legenda: "Salva esse post pra hora da fome. 📌 Qual desses é o seu?",
          dica: "Fotografe todas as pizzas no mesmo fundo e no mesmo ângulo para o carrossel ter unidade."
        },
        {
          dia: 8, tipo: "reel", horario: "18h",
          titulo: "Borda recheada escorrendo",
          objetivo: "O vídeo-assinatura do mês: o recheio escorrendo da borda.",
          roteiro: [
            "Close extremo na borda inteira.",
            "Faca cortando a borda ao meio.",
            "Recheio escorrendo em câmera lenta.",
            "Mordida na borda (mão ou cliente).",
            "Texto: \"Pizza com borda recheada em [bairro]\"."
          ],
          legenda: "Isso aqui deveria ser proibido. 🤤 Borda recheada da Capriolli: você come primeiro ou deixa pro final?",
          dica: "Corte a borda ainda bem quente, logo que sair do forno."
        },
        {
          dia: 9, tipo: "stories", horario: "Ao longo do dia",
          titulo: "Quiz da borda",
          objetivo: "Engajar e levar para o cardápio.",
          roteiro: ["Repost do Reel de ontem.", "Quiz: \"Qual o recheio da borda mais pedido?\"", "Resposta com vídeo curto.", "Link do cardápio."],
          legenda: "",
          dica: "Quiz e enquete aumentam o tempo que a pessoa passa nos seus Stories."
        },
        {
          dia: 10, tipo: "reel", horario: "18h",
          titulo: "Da bancada ao forno em 15 segundos",
          objetivo: "Mostrar os ingredientes selecionados da bio na prática.",
          roteiro: ["Câmera fixa de cima da bancada.", "Ingredientes caindo um a um, com corte no ritmo da batida.", "Pizza montada entrando no forno.", "Saindo pronta, com close final."],
          legenda: "Ingredientes selecionados não é só frase de bio. 🍅🧀🌿",
          dica: "Use tripé e não mova a câmera. A mágica está nos cortes."
        },
        {
          dia: 11, tipo: "reel", horario: "17h",
          titulo: "Sextou com drinks",
          objetivo: "Reforçar o lado bar e restaurante da Capriolli.",
          roteiro: ["Drink sendo preparado (gelo caindo, calda).", "Brinde em câmera lenta.", "Pizza chegando à mesa.", "Texto: \"Sexta pede Capriolli\"."],
          legenda: "Pizza + drink = sextou do jeito certo. 🍹🍕 Marca quem vem com você.",
          dica: "Aproveite as gravações para renovar o destaque \"Drinks\"."
        },
        {
          dia: 12, tipo: "stories", horario: "Noite",
          titulo: "Repost de clientes",
          objetivo: "Prova social e incentivo para marcar o perfil.",
          roteiro: ["Repostar marcações da semana (com autorização).", "Caixinha: \"Marca a gente e aparece aqui\".", "Salvar no destaque Clientes."],
          legenda: "",
          dica: "Um QR code na mesa com \"Marque @pizza_capriolli\" multiplica as marcações."
        },
        {
          dia: 13, tipo: "carrossel", horario: "12h",
          titulo: "Por que a nossa pizza é diferente",
          objetivo: "Posicionar a Capriolli como a mais sofisticada, com provas.",
          roteiro: ["Capa: \"O que tem dentro de uma Capriolli\".", "Um card por diferencial: massa, molho, queijo, forno.", "Fotos macro de cada ingrediente.", "Fechamento com CTA."],
          legenda: "Sofisticação mora nos detalhes. Arrasta pro lado. 👉",
          dica: "Confirme com a casa quais diferenciais são reais antes de publicar."
        },
        {
          dia: 7, tipo: "ads", horario: "Semana 2",
          titulo: "Primeiro impulsionamento",
          objetivo: "Levar o melhor Reel da semana 1 para quem mora perto.",
          roteiro: ["Comparar retenção, compartilhamentos e salvamentos dos Reels dos dias 1, 3 e 4.", "Impulsionar o vencedor: raio de 3 a 5 km, 18 a 55 anos.", "Objetivo: mensagens no WhatsApp ou Direct."],
          legenda: "",
          dica: "Pergunte em todo pedido: \"Como você conheceu a gente?\". É assim que medimos o anúncio."
        },
        {
          dia: 15, tipo: "reel", horario: "18h",
          titulo: "Conheça o pizzaiolo",
          objetivo: "Dar rosto à marca e criar conexão.",
          roteiro: ["Pizzaiolo abrindo a massa no ar.", "Ele fala uma frase: há quanto tempo faz pizza e qual é o sabor favorito.", "Tirando a pizza do forno e olhando para a câmera."],
          legenda: "Por trás de cada pizza tem alguém que leva isso a sério. Conheça quem faz a sua Capriolli. 👨‍🍳",
          dica: "Deixe a fala natural. Errar e rir também funciona."
        },
        {
          dia: 16, tipo: "stories", horario: "Ao longo do dia",
          titulo: "Um dia na Capriolli",
          objetivo: "Sequência de bastidores do início ao fim do dia.",
          roteiro: ["Chegada e acendimento do forno.", "Preparo da massa e dos ingredientes.", "Primeiro pedido do dia.", "Encerramento."],
          legenda: "",
          dica: "Salve no destaque Bastidores."
        },
        {
          dia: 17, tipo: "reel", horario: "18h",
          titulo: "POV: a primeira mordida",
          objetivo: "Trend de reação com cliente real.",
          roteiro: ["Pizza chegando à mesa.", "Cliente pegando a fatia, queijo esticando.", "Reação na primeira mordida.", "Texto: \"POV: você pediu a pizza mais sofisticada da região\"."],
          legenda: "A reação diz tudo. 😮‍💨 Vem provar você também.",
          dica: "Peça autorização por escrito ao cliente antes de gravar."
        },
        {
          dia: 18, tipo: "reel", horario: "17h",
          titulo: "A fatia perfeita",
          objetivo: "Food porn comparativo para gerar comentários.",
          roteiro: ["4 sabores lado a lado.", "Cortador passando (som crocante).", "Uma fatia de cada subindo em câmera lenta.", "Texto: \"Qual você escolhe?\"."],
          legenda: "Só pode escolher uma. Qual? 👇",
          dica: "Pergunta no final aumenta os comentários."
        },
        {
          dia: 19, tipo: "stories", horario: "Ao longo do dia",
          titulo: "Encomendas de fim de ano abertas",
          objetivo: "Começar a vender Natal e Réveillon.",
          roteiro: ["Enquete: \"Pizza no Natal: sim ou com certeza?\"", "Como encomendar, passo a passo.", "Link e contato."],
          legenda: "",
          dica: "Fixe uma figurinha de contagem regressiva para o dia 24."
        },
        {
          dia: 20, tipo: "carrossel", horario: "12h",
          titulo: "Combo de fim de ano",
          objetivo: "Oferta com foto real, sem flyer.",
          roteiro: ["Capa com foto do combo montado na mesa.", "O que vem no combo.", "Como e até quando encomendar.", "CTA para o link."],
          legenda: "Fim de ano é com a família na mesa e Capriolli no meio. 🎄🍕 Encomendas pelo link da bio.",
          dica: "Defina com a casa o combo, os preços e o prazo antes de gravar."
        },
        {
          dia: 14, tipo: "ads", horario: "Semanas 3–5",
          titulo: "Campanha de encomendas",
          objetivo: "Anunciar as encomendas de Natal e Réveillon.",
          roteiro: ["Criativo: Reel da borda recheada ou da fatia perfeita.", "Texto do anúncio com prazo de encomenda.", "Botão de mensagem no WhatsApp."],
          legenda: "",
          dica: "Pause o anúncio que ficar com custo por conversa muito acima da média."
        },
        {
          dia: 22, tipo: "reel", horario: "18h",
          titulo: "A pizza da ceia",
          objetivo: "Vender a encomenda de Natal.",
          roteiro: ["Mesa de Natal montada.", "Pizza chegando no centro da mesa.", "Corte e fatia puxada.", "Texto com o prazo de encomenda."],
          legenda: "Esse ano a ceia tem pizza. 🎄 Encomende até o dia 23 pelo link da bio.",
          dica: "Luz quente e pisca-pisca desfocado ao fundo."
        },
        {
          dia: 23, tipo: "stories", horario: "Ao longo do dia",
          titulo: "Últimas encomendas e horários",
          objetivo: "Urgência e informação.",
          roteiro: ["Contagem regressiva.", "Horário de funcionamento nos dias 24 e 25.", "Link de pedido."],
          legenda: "",
          dica: "Repita o horário em mais de um Story. Muita gente só vê um."
        },
        {
          dia: 24, tipo: "reel", horario: "11h",
          titulo: "Feliz Natal, família Capriolli",
          objetivo: "Fortalecer o vínculo com a comunidade.",
          roteiro: ["Equipe reunida em frente ao forno.", "Cada um fala uma palavra ou dá um aceno.", "Final com o logo sobre as chamas."],
          legenda: "Obrigado por cada pedido, cada mesa e cada marcação este ano. Feliz Natal! 🎄",
          dica: "Vídeo curto, até 15 segundos."
        },
        {
          dia: 26, tipo: "reel", horario: "18h",
          titulo: "Melhores momentos de dezembro",
          objetivo: "Reaproveitar as melhores cenas e reforçar o food porn.",
          roteiro: ["Compilação dos closes mais apetitosos do mês.", "Cortes rápidos no ritmo da música do momento.", "Texto: \"Dezembro em 20 segundos\"."],
          legenda: "Se esse vídeo te deu fome, a culpa é nossa. 🍕",
          dica: "Use os takes que sobraram das gravações do mês."
        },
        {
          dia: 27, tipo: "carrossel", horario: "12h",
          titulo: "Os mais pedidos de dezembro",
          objetivo: "Prova social com números da casa.",
          roteiro: ["Ranking dos 5 sabores mais vendidos no mês.", "Foto real de cada um.", "CTA: \"Qual falta você provar?\"."],
          legenda: "Vocês escolheram e o ranking saiu. 🏆",
          dica: "Peça os números reais de venda ao caixa."
        },
        {
          dia: 29, tipo: "reel", horario: "18h",
          titulo: "Pizza e drinks para a virada",
          objetivo: "Vender as encomendas do Réveillon.",
          roteiro: ["Drinks brilhando.", "Pizza saindo do forno.", "Brinde.", "Texto com o prazo de encomenda do dia 31."],
          legenda: "A virada já tem cardápio. 🥂🍕 Encomendas para o dia 31 pelo link da bio.",
          dica: "Use brilho e luz dourada para dar clima de festa."
        },
        {
          dia: 30, tipo: "stories", horario: "Ao longo do dia",
          titulo: "Última chamada do ano",
          objetivo: "Fechar as vendas de fim de ano.",
          roteiro: ["Prazo final das encomendas.", "Horário do dia 31.", "Link de pedido."],
          legenda: "",
          dica: "Responda todas as mensagens antes do fim do expediente."
        },
        {
          dia: 31, tipo: "reel", horario: "12h",
          titulo: "2026 acabou. O forno não.",
          objetivo: "Retrospectiva e promessa para 2027.",
          roteiro: ["Cenas do ano em sequência rápida.", "Forno aceso no final.", "Texto: \"Em 2027 tem mais Capriolli\"."],
          legenda: "Obrigado, 2026. Em 2027 o forno continua aceso. 🔥 Feliz Ano Novo!",
          dica: "Publique cedo: no dia 31 as pessoas ficam menos no celular à noite."
        }
      ],

      /* ---------------- ROTINA DE STORIES ---------------- */
      storiesRotina: [
        { momento: "Abertura", ideia: "Forno acendendo ou massa sendo aberta: \"Já estamos no fogo\"." },
        { momento: "Preparo", ideia: "Um bastidor curto: ingrediente fresco, montagem, pizza entrando." },
        { momento: "Interação", ideia: "Enquete, quiz ou caixinha. Uma por dia, no mínimo." },
        { momento: "Pico do jantar", ideia: "Pedido saindo, salão cheio, pizza chegando à mesa." },
        { momento: "Prova social", ideia: "Repost de cliente que marcou a Capriolli." },
        { momento: "Chamada", ideia: "Figurinha de link do cardápio: \"Peça agora\"." }
      ],

      /* ---------------- MANUAL DE GRAVAÇÃO ---------------- */
      producao: [
        "Grave na vertical (9:16), em 4K e 60 fps. No queijo puxando, use câmera lenta.",
        "Luz lateral (janela ou LED) e fundo escuro: o vapor e o queijo brilham.",
        "Os 2 primeiros segundos mostram a cena mais apetitosa. Nada de logo na abertura.",
        "Chegue perto: macro na borda, no recheio e na fatia subindo.",
        "Som real da cozinha (ASMR): crocância, faca cortando, forno estalando.",
        "Vídeos de 7 a 20 segundos, com cortes no ritmo do áudio.",
        "Texto na tela curto e com palavra-chave: tipo de pizza + bairro.",
        "Capa do Reel com título na fonte da marca, para o grid ficar organizado."
      ],

      /* ---------------- REFERÊNCIAS DE TREND ----------------
         Para usar uma capa fixa, salve a imagem em assets/ e preencha "capa". */
      referencias: [
        { codigo: "DSFwF__iRip", url: "https://www.instagram.com/reel/DSFwF__iRip/", titulo: "Referência 01", tag: "Food porn", capa: "" },
        { codigo: "DSQfFb7kvJ8", url: "https://www.instagram.com/reel/DSQfFb7kvJ8/", titulo: "Referência 02", tag: "Food porn", capa: "" },
        { codigo: "DZ8Ob50Bib6", url: "https://www.instagram.com/reel/DZ8Ob50Bib6/", titulo: "Referência 03", tag: "Food porn", capa: "" },
        { codigo: "DBpFOXoPN_u", url: "https://www.instagram.com/reel/DBpFOXoPN_u/", titulo: "Referência 04", tag: "Food porn", capa: "" },
        { codigo: "DUrQrt9ic7G", url: "https://www.instagram.com/reel/DUrQrt9ic7G/", titulo: "Referência 05", tag: "Food porn", capa: "" },
        { codigo: "DSDkoPGka-a", url: "https://www.instagram.com/reel/DSDkoPGka-a/", titulo: "Referência 06", tag: "Food porn", capa: "" }
      ],

      /* ---------------- TRÁFEGO PAGO ---------------- */
      trafego: {
        fases: [
          { periodo: "Semana 1", titulo: "Só orgânico", texto: "Publicar e medir. Sem anúncio: os números mostram quais Reels prendem mais." },
          { periodo: "Semanas 2 e 3", titulo: "Impulsionar os vencedores", texto: "Os 2 Reels com melhor retenção, compartilhamentos e salvamentos viram anúncio de mensagens." },
          { periodo: "Semanas 4 e 5", titulo: "Encomendas de fim de ano", texto: "Campanha de Natal e Réveillon com Reel food porn e botão para o WhatsApp." }
        ],
        config: [
          { rotulo: "Raio", valor: "3 a 5 km da pizzaria" },
          { rotulo: "Idade", valor: "18 a 55 anos" },
          { rotulo: "Horário", valor: "17h às 23h" },
          { rotulo: "Onde aparece", valor: "Reels e Stories" },
          { rotulo: "Objetivo", valor: "Mensagens (WhatsApp/Direct)" },
          { rotulo: "Criativo", valor: "Sempre vídeo real" }
        ],
        orcamento: { valor: "R$ 20 a R$ 30 por dia", detalhe: "Do dia 7 ao dia 31, cerca de R$ 500 a R$ 750 no mês. É uma sugestão inicial: o valor final é alinhado com a Capriolli." },
        kpis: ["Custo por conversa", "Pedidos vindos do anúncio", "Visitas ao perfil", "Novos seguidores"]
      }
    }
  ]
};
