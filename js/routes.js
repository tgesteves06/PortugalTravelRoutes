/* =====================================================================
   ROUTES
   ---------------------------------------------------------------------
   type:  "long" (7–12 days) | "medium" (5 days) | "getaway"
   Stops, in travel order, point to a place in js/places-*.js:
     { place: "lisboa", kind: "main", dayFrom: 1, dayTo: 2, nights: 2, km: 30 }
       kind "main"  – where you sleep (shows stay / do / eat)
       kind "via"   – a must-see on the way (short text + photo)
       kind "base"  – getaway hotel; the next stops are "activity" around it
     km: road km from the previous stop (estimated from the map if missing)
     daysText / text: optional texts just for this route
   returnTo: last leg back to a place (e.g. the airport city), with or
             without a final night.
   advice:   road tips shown at the end of the route.
   Texts: { en, pt } (titles also es, fr). Missing languages fall back to English.
   ===================================================================== */
(function () {
  const x = (en, pt, es, fr) => ({ en, pt, es, fr });

  window.ROUTES = [
    /* ================================================== LONG ROUTES */
    {
      id: "lisbon-to-porto",
      type: "long", days: 7, nights: 6, photo: "lisbon-alfama",
      title: x("From Lisbon to Porto through Historic Towns and the Atlantic Coast", "De Lisboa ao Porto por Vilas Históricas e pela Costa Atlântica", "De Lisboa a Oporto por villas históricas y la costa atlántica", "De Lisbonne à Porto par les villes historiques et la côte atlantique"),
      tagline: x("Palaces, medieval towns, the Atlantic, a university city and the Douro", "Palácios, vilas medievais, o Atlântico, uma cidade universitária e o Douro"),
      logistics: x("Arrival in Lisbon and departure from Porto", "Chegada a Lisboa e partida do Porto"),
      summary: x(
        "A journey between the light of Lisbon, the palaces of Sintra and the medieval streets of Óbidos. On the way, the Atlantic reveals itself in Nazaré, Coimbra invites you to discover its university heritage and Aveiro adds canals, moliceiro boats and sweet flavours. The route ends in Porto, among the façades of the Ribeira, the bridges over the Douro and the wine cellars of Gaia. A route that combines heritage, landscapes and food, with time for the small pleasures of travelling: walking the streets, tasting regional specialities and enjoying local life.",
        "Uma viagem entre a luz de Lisboa, os palácios de Sintra e as ruas medievais de Óbidos. Pelo caminho, o Atlântico revela-se na Nazaré, Coimbra convida a descobrir a sua herança universitária e Aveiro acrescenta canais, moliceiros e sabores doces. A rota termina no Porto, entre as fachadas da Ribeira, as pontes sobre o Douro e as caves de vinho de Gaia. Um percurso que combina património, paisagens e gastronomia, com tempo para os pequenos prazeres de viajar: passear pelas ruas, provar especialidades regionais e apreciar a vida local."
      ),
      stops: [
        { place: "lisboa", kind: "main", dayFrom: 1, dayTo: 2, nights: 2 },
        { place: "sintra", kind: "via", km: 30 },
        { place: "obidos", kind: "main", dayFrom: 3, dayTo: 4, nights: 1, km: 87, daysText: x("Day 3 and morning of day 4", "Dia 3 e manhã do dia 4") },
        { place: "nazare", kind: "via", km: 35 },
        { place: "coimbra", kind: "main", dayFrom: 4, dayTo: 5, nights: 1, km: 105, daysText: x("Day 4 and morning of day 5", "Dia 4 e manhã do dia 5") },
        { place: "aveiro", kind: "via", km: 60 },
        { place: "porto", kind: "main", dayFrom: 5, dayTo: 7, nights: 2, km: 70 }
      ],
      advice: [
        x("Spend the first two days in Lisbon on foot and by public transport, and pick up the car only when you leave the city.", "Passe os dois primeiros dias em Lisboa a pé e de transportes públicos e levante o carro apenas à saída da cidade."),
        x("The A8 and A1 motorways make the route quick, but the national roads between Sintra, Óbidos and Nazaré are more scenic. Most motorways have electronic tolls: ask the rental company about a toll device.", "As autoestradas A8 e A1 tornam o percurso rápido, mas as estradas nacionais entre Sintra, Óbidos e Nazaré são mais bonitas. A maioria das autoestradas tem portagens eletrónicas: peça à rent-a-car um dispositivo de portagem."),
        x("In Sintra, leave the car in the car parks outside the centre or use the bus to the palaces: the roads up the hill are narrow and parking is scarce.", "Em Sintra, deixe o carro nos parques fora do centro ou use o autocarro para os palácios: as estradas da serra são estreitas e há pouco estacionamento."),
        x("Book the palaces of Sintra and the Joanina Library in Coimbra in advance, with a time slot.", "Reserve com antecedência os palácios de Sintra e a Biblioteca Joanina em Coimbra, com horário marcado."),
        x("Confirm parking at the accommodation in Óbidos, Coimbra and Porto: the historic centres have narrow streets and restricted access.", "Confirme o estacionamento no alojamento em Óbidos, Coimbra e Porto: os centros históricos têm ruas estreitas e acesso condicionado."),
        x("Return the car when you arrive in Porto and explore the city on foot and by metro.", "Entregue o carro quando chegar ao Porto e explore a cidade a pé e de metro."),
        x("Wear comfortable shoes: Lisbon, Coimbra and Porto are cities of hills and cobbled streets.", "Use calçado confortável: Lisboa, Coimbra e Porto são cidades de subidas e calçada.")
      ]
    },

    {
      id: "wonders-of-the-interior",
      type: "long", days: 9, nights: 8, photo: "marvao-castle",
      title: x("Wonders of the Northern and Central Interior", "Maravilhas do Interior Norte e Centro", "Maravillas del Interior Norte y Centro", "Merveilles de l'intérieur Nord et Centre"),
      tagline: x("Mountains, granite villages and castles from Gerês to Lisbon", "Serras, aldeias de granito e castelos do Gerês a Lisboa"),
      logistics: x("Start in the Gerês (from Porto) and end in Lisbon", "Início no Gerês (a partir do Porto) e fim em Lisboa"),
      summary: x(
        "Nine days through the Portugal few tourists see: the only national park, the Douro hills of Lamego, the highest mountains, villages built between boulders and a white village on a cliff, before ending in Lisbon.",
        "Nove dias pelo Portugal que poucos turistas conhecem: o único parque nacional, as encostas durienses de Lamego, as serras mais altas, aldeias entre penedos e uma vila branca no alto de uma escarpa, terminando em Lisboa."
      ),
      stops: [
        { place: "geres", kind: "main", dayFrom: 1, dayTo: 2, nights: 2 },
        { place: "guimaraes", kind: "via" },
        { place: "lamego", kind: "main", dayFrom: 3, dayTo: 3, nights: 1 },
        { place: "viseu", kind: "via" },
        { place: "serra-estrela", kind: "main", dayFrom: 4, dayTo: 5, nights: 2 },
        { place: "monsanto", kind: "main", dayFrom: 6, dayTo: 6, nights: 1 },
        { place: "castelo-branco", kind: "via" },
        { place: "marvao", kind: "main", dayFrom: 7, dayTo: 7, nights: 1 },
        { place: "santarem", kind: "via" },
        { place: "lisboa", kind: "main", dayFrom: 8, dayTo: 9, nights: 1 }
      ],
      advice: [
        x("Pick up the car in Porto and drop it off in Lisbon: check the one-way fee with the rental company.", "Levante o carro no Porto e entregue-o em Lisboa: confirme a taxa de entrega noutra cidade com a rent-a-car."),
        x("Drive in daylight in the mountains. In the Gerês, the Douro and the Serra da Estrela, expect bends, narrow sections and slower journeys than the kilometres suggest.", "Conduza de dia nas zonas de montanha. No Gerês, no Douro e na Serra da Estrela, conte com curvas, troços estreitos e viagens mais lentas do que os quilómetros sugerem."),
        x("In winter, check the state of the roads to the Torre before going up the Serra da Estrela: they can close because of snow.", "No inverno, confirme o estado das estradas para a Torre antes de subir a Serra da Estrela: podem fechar por causa da neve."),
        x("In Monsanto and Marvão, leave the car at the entrance of the village and walk: the streets are steep and narrow.", "Em Monsanto e Marvão, deixe o carro à entrada da aldeia e siga a pé: as ruas são íngremes e estreitas."),
        x("Fill up the tank before the inner stretches: in the interior, petrol stations can be far apart, especially on Sundays.", "Abasteça antes dos troços mais interiores: no interior, os postos de combustível podem ficar distantes, sobretudo ao domingo."),
        x("Bring layers and a waterproof: the weather changes quickly in the mountains, even in summer.", "Leve roupa por camadas e um impermeável: o tempo muda depressa na montanha, mesmo no verão.")
      ]
    },

    {
      id: "portuguese-summer",
      type: "long", days: 12, nights: 11, photo: "milfontes-river",
      title: x("Portuguese Summer", "Verão Português", "Verano Portugués", "Été portugais"),
      tagline: x("From Lisbon to the Algarve along wild beaches and white villages", "De Lisboa ao Algarve por praias selvagens e aldeias brancas"),
      logistics: x("Arrival in Lisbon and departure from Faro", "Chegada a Lisboa e partida de Faro"),
      summary: x(
        "Twelve days of sun, sea and long lunches. Leave Lisbon for the rice fields of Comporta, follow the wild Alentejo coast from beach to beach, discover the surf villages of the west Algarve and finish among golden cliffs and the calm lagoon of Tavira.",
        "Doze dias de sol, mar e almoços longos. Saia de Lisboa para os arrozais da Comporta, siga a costa alentejana de praia em praia, descubra as aldeias de surf do barlavento e termine entre falésias douradas e a ria tranquila de Tavira."
      ),
      stops: [
        { place: "lisboa", kind: "main", dayFrom: 1, dayTo: 1, nights: 1 },
        { place: "arrabida", kind: "via" },
        { place: "setubal", kind: "via" },
        { place: "comporta", kind: "main", dayFrom: 2, dayTo: 2, nights: 1 },
        { place: "porto-covo", kind: "via" },
        { place: "milfontes", kind: "main", dayFrom: 3, dayTo: 3, nights: 1 },
        { place: "zambujeira", kind: "main", dayFrom: 4, dayTo: 4, nights: 1 },
        { place: "odeceixe", kind: "via" },
        { place: "monte-clerigo", kind: "main", dayFrom: 5, dayTo: 6, nights: 2 },
        { place: "carrapateira", kind: "main", dayFrom: 7, dayTo: 7, nights: 1 },
        { place: "cabo-sao-vicente", kind: "via" },
        { place: "lagos", kind: "main", dayFrom: 8, dayTo: 9, nights: 2 },
        { place: "benagil", kind: "via" },
        { place: "olhao", kind: "via" },
        { place: "tavira", kind: "main", dayFrom: 10, dayTo: 12, nights: 2 }
      ],
      advice: [
        x("Book accommodation early: in July and August the coast fills up and small villages have few places to stay.", "Reserve o alojamento cedo: em julho e agosto a costa enche e as aldeias pequenas têm pouca oferta."),
        x("Choose the coastal roads (N261, N120, N268) rather than the motorways: they are slower but cross the most beautiful landscapes.", "Escolha as estradas costeiras (N261, N120, N268) em vez das autoestradas: são mais lentas, mas atravessam as paisagens mais bonitas."),
        x("Some beaches are reached by dirt roads. Drive slowly and park only in the marked areas: the coast is a protected natural park.", "Algumas praias têm acesso por estradas de terra. Conduza devagar e estacione apenas nas zonas marcadas: a costa é parque natural protegido."),
        x("The Atlantic on the west coast is cold and has strong currents. Swim only on beaches with lifeguards and respect the flags.", "O Atlântico na costa oeste é frio e tem correntes fortes. Nade só em praias vigiadas e respeite as bandeiras."),
        x("The A22 in the Algarve has electronic tolls only: rent a car with a toll device or register your plate.", "A A22 no Algarve só tem portagens eletrónicas: alugue o carro com dispositivo de portagem ou registe a matrícula."),
        x("Bring sunscreen, a hat and water on the trails: there is little shade on the cliffs.", "Leve protetor solar, chapéu e água nos trilhos: há pouca sombra nas falésias."),
        x("Return the car in Faro, 30 km from Tavira, and leave time for the airport.", "Entregue o carro em Faro, a 30 km de Tavira, e deixe margem para o aeroporto.")
      ]
    },

    {
      id: "wonders-of-the-north",
      type: "long", days: 7, nights: 6, photo: "douro-valley-1",
      title: x("Wonders of the North", "Maravilhas do Norte", "Maravillas del Norte", "Merveilles du Nord"),
      tagline: x("Porto, the Minho, the Gerês and the Douro vineyards", "O Porto, o Minho, o Gerês e o Douro Vinhateiro"),
      logistics: x("Start and end in Porto", "Início e fim no Porto"),
      summary: x(
        "A seven-day route that combines Porto, the Invicta city, with the historic cities of the Minho, the coast, the towns along the Lima, the nature of the Gerês and the landscape of the Douro.",
        "Uma rota de 7 dias que combina o Porto, a cidade Invicta, as cidades históricas do Minho, o litoral, as vilas junto ao Lima, a natureza do Gerês e a paisagem do Douro."
      ),
      stops: [
        { place: "porto", kind: "main", dayFrom: 1, dayTo: 1, nights: 1 },
        { place: "braga", kind: "via" },
        { place: "viana", kind: "main", dayFrom: 2, dayTo: 2, nights: 1 },
        { place: "ponte-de-lima", kind: "via" },
        { place: "ponte-da-barca", kind: "via" },
        { place: "geres", kind: "main", dayFrom: 3, dayTo: 4, nights: 2 },
        { place: "guimaraes", kind: "via" },
        { place: "douro", kind: "main", dayFrom: 5, dayTo: 6, nights: 2 }
      ],
      returnTo: { place: "porto", day: 7 },
      advice: [
        x("Plan 7 days and 6 nights to see everything without rushing, including a full day in the Gerês and another in the Douro.", "Reserve 7 dias e 6 noites para conhecer os locais sem pressa, incluindo um dia completo no Gerês e outro no Douro."),
        x("Explore Porto on foot and by public transport, and pick up the rental car only when you leave the city.", "Explore o Porto a pé e de transportes públicos e alugue o carro apenas à saída da cidade."),
        x("Choose one specific base in the Gerês and organise the visits nearby, to avoid long drives inside the park.", "Escolha uma base concreta no Gerês, organizando as visitas nas proximidades para evitar deslocações demoradas dentro do parque."),
        x("Drive in daylight in the mountains. In the Gerês and the Douro, expect bends, narrow sections and slower journeys than the kilometres suggest.", "Conduza de dia nas zonas de montanha. No Gerês e no Douro, conte com curvas, troços estreitos e viagens mais lentas do que os quilómetros sugerem."),
        x("Confirm parking and access at the accommodation, especially in historic centres and on the Douro wine estates.", "Confirme o estacionamento e os acessos aos alojamentos, sobretudo nos centros históricos e nas quintas do Douro."),
        x("Book the experiences you care about most in advance, such as quinta visits, wine tastings and boat trips. At tastings, arrange transport or have a driver who doesn't drink.", "Reserve antecipadamente as experiências que mais lhe interessam, como visitas a quintas, provas de vinho e passeios de barco. Nas provas, organize transporte ou tenha um condutor que não beba."),
        x("Bring comfortable shoes, a waterproof and layers, and adapt the walks to the weather forecast.", "Leve calçado confortável, um impermeável e roupa por camadas, adaptando os passeios à previsão meteorológica."),
        x("Leave time for the return to Porto airport, avoiding a very early flight after the last night in the Douro.", "Deixe margem para o regresso ao aeroporto do Porto, evitando um voo muito cedo após a última noite no Douro.")
      ]
    },

    {
      id: "secrets-of-the-beiras",
      type: "long", days: 7, nights: 6, photo: "serra-estrela-1",
      title: x("Secrets of the Northern Interior and the Beiras", "Segredos do Interior Norte e das Beiras", "Secretos del Interior Norte y las Beiras", "Secrets de l'intérieur Nord et des Beiras"),
      tagline: x("Historic cities, mountain villages, food and inland landscapes", "Cidades históricas, aldeias de montanha, gastronomia e paisagens do interior"),
      logistics: x("Start and end in Porto", "Início e fim no Porto"),
      summary: x(
        "A seven-day route that combines historic cities, mountain villages, food and the landscapes of the interior: Vila Real and the Alvão, the Dão wines of Viseu, the Serra da Estrela, the schist village of Piódão and the university city of Coimbra.",
        "Uma rota de 7 dias que combina cidades históricas, aldeias de montanha, gastronomia e paisagens do interior: Vila Real e o Alvão, os vinhos do Dão em Viseu, a Serra da Estrela, a aldeia de xisto do Piódão e a cidade universitária de Coimbra."
      ),
      stops: [
        { place: "porto", kind: "main", dayFrom: 1, dayTo: 1, nights: 1 },
        { place: "vila-real", kind: "main", dayFrom: 2, dayTo: 2, nights: 1 },
        { place: "viseu", kind: "main", dayFrom: 3, dayTo: 3, nights: 1 },
        { place: "serra-estrela", kind: "main", dayFrom: 4, dayTo: 5, nights: 2 },
        { place: "piodao", kind: "via" },
        { place: "coimbra", kind: "main", dayFrom: 6, dayTo: 6, nights: 1 },
        { place: "aveiro", kind: "via" }
      ],
      returnTo: { place: "porto", day: 7 },
      advice: [
        x("Explore Porto on foot on the first day and pick up the car when you leave for Vila Real.", "Explore o Porto a pé no primeiro dia e levante o carro à saída para Vila Real."),
        x("The A4 and A24 are fast and scenic, but the mountain roads to the Serra da Estrela and Piódão are slow: count on more time than the kilometres suggest.", "A A4 e a A24 são rápidas e bonitas, mas as estradas de montanha para a Serra da Estrela e o Piódão são lentas: conte com mais tempo do que os quilómetros sugerem."),
        x("The road to Piódão is narrow and winding, with steep drops. Drive in daylight and slowly, and avoid it in fog.", "A estrada para o Piódão é estreita e sinuosa, com ravinas. Conduza de dia e devagar e evite-a com nevoeiro."),
        x("In winter, check the roads to the Torre before going up: they can close because of snow or ice.", "No inverno, confirme as estradas para a Torre antes de subir: podem fechar por causa da neve ou do gelo."),
        x("Fill up the tank before the mountain stretches and carry water and snacks.", "Abasteça antes dos troços de montanha e leve água e alguma coisa para comer."),
        x("Book the Joanina Library in Coimbra and the Dão wine tastings in advance.", "Reserve com antecedência a Biblioteca Joanina em Coimbra e as provas de vinho do Dão.")
      ]
    },

    {
      id: "wonders-of-the-centre",
      type: "long", days: 7, nights: 6, photo: "monsanto-1",
      title: x("Wonders of the Central Interior", "Maravilhas do Interior Centro", "Maravillas del Interior Centro", "Merveilles de l'intérieur Centre"),
      tagline: x("Religious and Templar heritage, historic villages and fortified towns", "Património religioso e templário, aldeias históricas e cidades fortificadas"),
      logistics: x("Start and end in Lisbon", "Início e fim em Lisboa"),
      summary: x(
        "A seven-day route through religious and Templar heritage, historic villages and fortified towns, with the Alentejo heritage of Estremoz and Évora on the way back to Lisbon.",
        "Uma rota de 7 dias com património religioso e templário, aldeias históricas, cidades fortificadas e património alentejano no regresso, por Estremoz e Évora."
      ),
      stops: [
        { place: "lisboa", kind: "main", dayFrom: 1, dayTo: 1, nights: 1 },
        { place: "santarem", kind: "via" },
        { place: "fatima", kind: "via" },
        { place: "tomar", kind: "main", dayFrom: 2, dayTo: 2, nights: 1 },
        { place: "abrantes", kind: "via" },
        { place: "monsanto", kind: "main", dayFrom: 3, dayTo: 3, nights: 1 },
        { place: "castelo-de-vide", kind: "via" },
        { place: "marvao", kind: "main", dayFrom: 4, dayTo: 4, nights: 1 },
        { place: "portalegre", kind: "via" },
        { place: "estremoz", kind: "via" },
        { place: "evora", kind: "main", dayFrom: 5, dayTo: 5, nights: 1 }
      ],
      returnTo: { place: "lisboa", day: 6, dayTo: 7, nights: 1 },
      advice: [
        x("The longest day is between Tomar and Monsanto: leave early and stop in Abrantes to break the journey.", "O dia mais longo é entre Tomar e Monsanto: saia cedo e pare em Abrantes para dividir a viagem."),
        x("Visit Fátima outside the big pilgrimage dates (12–13 May and October), when the roads and car parks are full.", "Visite Fátima fora das grandes peregrinações (12–13 de maio e outubro), quando as estradas e os parques ficam cheios."),
        x("In Monsanto, Marvão and Castelo de Vide, leave the car at the entrance of the village: the streets are steep and narrow.", "Em Monsanto, Marvão e Castelo de Vide, deixe o carro à entrada da vila: as ruas são íngremes e estreitas."),
        x("In summer, the Alentejo is very hot: plan visits in the morning and late afternoon and always carry water.", "No verão, o Alentejo é muito quente: faça as visitas de manhã e ao fim da tarde e leve sempre água."),
        x("Fill up the tank before the inland stretches: petrol stations can be far apart.", "Abasteça antes dos troços do interior: os postos de combustível podem ficar distantes."),
        x("Book the Convent of Christ and the Évora restaurants in advance at weekends.", "Ao fim de semana, reserve com antecedência o Convento de Cristo e os restaurantes de Évora.")
      ]
    },

    {
      id: "secrets-of-the-south",
      type: "long", days: 7, nights: 6, photo: "evora-temple-1",
      title: x("Secrets of the Southern Interior", "Segredos do Interior Sul", "Secretos del Interior Sur", "Secrets de l'intérieur Sud"),
      tagline: x("Marble towns, the Alqueva lake and the Guadiana valley", "Vilas do mármore, o Alqueva e o vale do Guadiana"),
      logistics: x("Start and end in Lisbon", "Início e fim em Lisboa"),
      summary: x(
        "A seven-day route across the marble towns, the Alqueva lake and the Guadiana valley, returning through the plains of the Baixo Alentejo.",
        "Uma rota de 7 dias atravessando as vilas do mármore, o Alqueva e o vale do Guadiana, regressando pelas planícies do Baixo Alentejo."
      ),
      stops: [
        { place: "lisboa", kind: "main", dayFrom: 1, dayTo: 1, nights: 1 },
        { place: "arraiolos", kind: "via" },
        { place: "evora", kind: "main", dayFrom: 2, dayTo: 2, nights: 1 },
        { place: "estremoz", kind: "via" },
        { place: "vila-vicosa", kind: "main", dayFrom: 3, dayTo: 3, nights: 1 },
        { place: "monsaraz", kind: "main", dayFrom: 4, dayTo: 4, nights: 1 },
        { place: "moura", kind: "via" },
        { place: "serpa", kind: "via" },
        { place: "mertola", kind: "main", dayFrom: 5, dayTo: 5, nights: 1 },
        { place: "beja", kind: "via" },
        { place: "alvito", kind: "via" }
      ],
      returnTo: { place: "lisboa", day: 6, dayTo: 7, nights: 1 },
      advice: [
        x("Avoid the hottest months (July and August) or plan the visits for the morning and late afternoon: inland Alentejo can exceed 40 °C.", "Evite os meses mais quentes (julho e agosto) ou faça as visitas de manhã e ao fim da tarde: o interior alentejano pode passar dos 40 °C."),
        x("The roads are quiet and straight, but watch out for agricultural machinery and animals, especially at dusk.", "As estradas são tranquilas e retas, mas atenção às máquinas agrícolas e aos animais, sobretudo ao anoitecer."),
        x("Fill up the tank in the larger towns: between Moura, Serpa and Mértola there are few petrol stations.", "Abasteça nas vilas maiores: entre Moura, Serpa e Mértola há poucos postos de combustível."),
        x("Book the boat trip on the Alqueva and the stargazing experience in advance.", "Reserve com antecedência o passeio de barco no Alqueva e a observação do céu."),
        x("Many small museums and monuments close on Mondays and at lunchtime: check the opening hours.", "Muitos pequenos museus e monumentos fecham à segunda-feira e à hora de almoço: confirme os horários."),
        x("If you visit wineries, have a designated driver who doesn't drink.", "Se visitar adegas, combine um condutor que não beba.")
      ]
    },

    /* ================================================== 5-DAY ROUTES */
    {
      id: "silver-coast",
      type: "medium", days: 5, nights: 4, photo: "obidos-castle",
      title: x("Silver Coast to Lisbon", "Costa de Prata até Lisboa", "De la Costa de Plata a Lisboa", "De la Côte d'Argent à Lisbonne"),
      tagline: x("Canals, giant waves, a walled town and palaces on the way south", "Canais, ondas gigantes, uma vila muralhada e palácios a caminho do sul"),
      logistics: x("Start in Aveiro and end in Lisbon", "Início em Aveiro e fim em Lisboa"),
      summary: x(
        "Five days down the Atlantic coast, from the colourful boats of Aveiro to the hills of Lisbon, with two UNESCO monasteries, surf towns and the westernmost point of Europe on the way.",
        "Cinco dias pela costa atlântica, dos barcos coloridos de Aveiro às colinas de Lisboa, com dois mosteiros Património Mundial, vilas de surf e o ponto mais ocidental da Europa pelo caminho."
      ),
      stops: [
        { place: "aveiro", kind: "main", dayFrom: 1, dayTo: 1, nights: 1 },
        { place: "costa-nova", kind: "via" },
        { place: "batalha", kind: "via" },
        { place: "nazare", kind: "main", dayFrom: 2, dayTo: 2, nights: 1 },
        { place: "alcobaca", kind: "via" },
        { place: "obidos", kind: "main", dayFrom: 3, dayTo: 3, nights: 1 },
        { place: "ericeira", kind: "via" },
        { place: "sintra", kind: "main", dayFrom: 4, dayTo: 4, nights: 1 },
        { place: "cabo-da-roca", kind: "via" },
        { place: "lisboa", kind: "main", dayFrom: 5, dayTo: 5 }
      ],
      advice: [
        x("Use the national roads along the coast for the most beautiful stretches and the A8 when you need to save time.", "Use as estradas nacionais junto à costa nos troços mais bonitos e a A8 quando precisar de ganhar tempo."),
        x("Between October and March, check the wave forecast for Nazaré: the big days are announced in advance.", "Entre outubro e março, consulte a previsão de ondulação para a Nazaré: os dias grandes são anunciados com antecedência."),
        x("In Sintra, leave the car in the car parks outside the centre and use the bus to the palaces.", "Em Sintra, deixe o carro nos parques fora do centro e use o autocarro para os palácios."),
        x("Book the palaces of Sintra online with a time slot.", "Reserve os palácios de Sintra online, com horário marcado."),
        x("Return the car when you arrive in Lisbon and explore the city on foot and by public transport.", "Entregue o carro quando chegar a Lisboa e explore a cidade a pé e de transportes públicos.")
      ]
    },

    {
      id: "arrabida-and-troia",
      type: "medium", days: 5, nights: 4, photo: null,
      title: x("From the Arrábida to Comporta", "Da Arrábida à Comporta", "De la Arrábida a Comporta", "De l'Arrábida à Comporta"),
      tagline: x("Castles, Moscatel, dolphins and white beaches south of Lisbon", "Castelos, Moscatel, golfinhos e praias brancas a sul de Lisboa"),
      logistics: x("Start and end in Lisbon", "Início e fim em Lisboa"),
      summary: x(
        "Five days just south of Lisbon: the castle and wines of Palmela, the fish of Setúbal, the white sand of the Tróia peninsula, the rice fields of Comporta and the riverside town of Alcácer do Sal.",
        "Cinco dias logo a sul de Lisboa: o castelo e os vinhos de Palmela, o peixe de Setúbal, a areia branca da península de Tróia, os arrozais da Comporta e a vila ribeirinha de Alcácer do Sal."
      ),
      stops: [
        { place: "lisboa", kind: "main", dayFrom: 1, dayTo: 1, nights: 1 },
        { place: "palmela", kind: "via" },
        { place: "setubal", kind: "via" },
        { place: "troia", kind: "main", dayFrom: 2, dayTo: 3, nights: 2 },
        { place: "comporta", kind: "via" },
        { place: "alcacer", kind: "via" }
      ],
      returnTo: { place: "lisboa", day: 4, dayTo: 5, nights: 1 },
      advice: [
        x("To reach Tróia, take the car ferry from Setúbal (about 30 minutes). Check the times and buy the ticket in advance in summer.", "Para chegar a Tróia, apanhe o ferry com carro a partir de Setúbal (cerca de 30 minutos). Confirme os horários e compre o bilhete com antecedência no verão."),
        x("Cross the 25 de Abril bridge outside rush hours: the traffic leaving Lisbon on Friday afternoons and returning on Sunday evenings is heavy.", "Atravesse a ponte 25 de Abril fora das horas de ponta: o trânsito à sexta-feira à tarde e ao domingo à noite é intenso."),
        x("In summer, car access to the Arrábida beaches is restricted: use the shuttle bus from Setúbal or arrive very early.", "No verão, o acesso de carro às praias da Arrábida é condicionado: use o autocarro a partir de Setúbal ou chegue muito cedo."),
        x("Book the dolphin-watching boat trip in advance.", "Reserve com antecedência o passeio de barco para ver golfinhos."),
        x("Watch out for storks' nests and cyclists on the straight roads between Comporta and Alcácer.", "Atenção às cegonhas e aos ciclistas nas estradas retas entre a Comporta e Alcácer.")
      ]
    },

    {
      id: "lisbon-and-cascais",
      type: "medium", days: 5, nights: 4, photo: "lisbon-portas-do-sol",
      title: x("Lisbon and the Cascais Coast", "Lisboa e a Linha de Cascais", "Lisboa y la costa de Cascais", "Lisbonne et la côte de Cascais"),
      tagline: x("Two days in the capital and two by the sea", "Dois dias na capital e dois à beira-mar"),
      logistics: x("Start and end in Lisbon", "Início e fim em Lisboa"),
      summary: x(
        "Five days to get to know Lisbon calmly and then move to the sea in Cascais, with beaches, a promenade, the Guincho and the Sintra mountains nearby. It can be done without a car, by train along the coast.",
        "Cinco dias para conhecer Lisboa com calma e depois mudar para o mar, em Cascais, com praias, paredão, o Guincho e a serra de Sintra por perto. Pode fazer-se sem carro, de comboio pela linha."
      ),
      stops: [
        { place: "lisboa", kind: "main", dayFrom: 1, dayTo: 2, nights: 2 },
        { place: "belem", kind: "via" },
        { place: "carcavelos", kind: "via" },
        { place: "cascais", kind: "main", dayFrom: 3, dayTo: 4, nights: 2 }
      ],
      returnTo: { place: "lisboa", day: 5 },
      advice: [
        x("This route can be done without a car: the Cais do Sodré–Cascais train runs along the sea in about 40 minutes.", "Esta rota pode fazer-se sem carro: o comboio Cais do Sodré–Cascais segue junto ao mar em cerca de 40 minutos."),
        x("If you drive, use the Marginal (N6) along the coast instead of the A5 motorway: it is slower but much more beautiful.", "Se for de carro, use a Marginal (N6) junto ao mar em vez da A5: é mais lenta, mas muito mais bonita."),
        x("Parking in Lisbon and Cascais is expensive and scarce: choose accommodation with a garage or leave the car outside the centre.", "O estacionamento em Lisboa e Cascais é caro e escasso: escolha alojamento com garagem ou deixe o carro fora do centro."),
        x("Buy the Belém monuments tickets online to avoid queues.", "Compre online os bilhetes para os monumentos de Belém para evitar filas."),
        x("The Guincho is very windy: bring a jacket even in summer.", "O Guincho tem muito vento: leve um casaco mesmo no verão.")
      ]
    },

    /* ================================================== GETAWAYS */
    {
      id: "douro-getaway",
      type: "getaway", days: 2, nights: 1, photo: "douro-valley-1",
      title: x("Douro Valley Getaway", "Escapadinha no Douro", "Escapada al valle del Duero", "Escapade dans la vallée du Douro"),
      tagline: x("Sleep in a wine estate and explore the valley around it", "Dormir numa quinta e descobrir o vale à volta"),
      summary: x(
        "Two days in the oldest demarcated wine region in the world. Stay at a quinta among the terraced vineyards and spend the days on the river, at viewpoints and in a baroque palace.",
        "Dois dias na região vinícola demarcada mais antiga do mundo. Fique numa quinta entre os socalcos e passe os dias no rio, nos miradouros e num palácio barroco."
      ),
      stops: [
        { place: "douro", kind: "base" },
        { place: "regua", kind: "activity", category: "boat" },
        { place: "mateus", kind: "activity", category: "monument" },
        { place: "sao-salvador", kind: "activity", category: "viewpoint" },
        { place: "coa", kind: "activity", category: "activity" }
      ],
      advice: [
        x("The roads of the Douro are winding and narrow: drive in daylight and count on more time than the kilometres suggest.", "As estradas do Douro são sinuosas e estreitas: conduza de dia e conte com mais tempo do que os quilómetros sugerem."),
        x("At tastings, have a driver who doesn't drink, or book a tour with transport.", "Nas provas, tenha um condutor que não beba ou reserve um passeio com transporte."),
        x("The harvest (September) is the most beautiful time, but also the busiest: book early.", "As vindimas (setembro) são a época mais bonita, mas também a mais procurada: reserve cedo.")
      ]
    },

    {
      id: "cascais-getaway",
      type: "getaway", days: 2, nights: 1, photo: null,
      title: x("Cascais Getaway", "Escapadinha em Cascais", "Escapada en Cascais", "Escapade à Cascais"),
      tagline: x("By the sea, with Sintra and Colares around the corner", "À beira-mar, com Sintra e Colares ali ao lado"),
      summary: x(
        "A weekend based in Cascais, with the sea at the door and day trips to the palaces of Sintra, the vineyards of Colares, Cabo da Roca and the Guincho.",
        "Um fim de semana com base em Cascais, com o mar à porta e visitas aos palácios de Sintra, às vinhas de Colares, ao Cabo da Roca e ao Guincho."
      ),
      stops: [
        { place: "cascais", kind: "base" },
        { place: "sintra", kind: "activity", category: "monument" },
        { place: "azenhas", kind: "activity", category: "wine" },
        { place: "cabo-da-roca", kind: "activity", category: "viewpoint" },
        { place: "guincho", kind: "activity", category: "beach" }
      ],
      advice: [
        x("The road between Cascais, Guincho and Cabo da Roca is beautiful but busy on summer weekends: go early.", "A estrada entre Cascais, Guincho e Cabo da Roca é bonita, mas tem muito movimento ao fim de semana no verão: vá cedo."),
        x("In Sintra, leave the car outside the centre and book the palaces online.", "Em Sintra, deixe o carro fora do centro e reserve os palácios online."),
        x("Bring a jacket: the wind in the Guincho and at Cabo da Roca can be strong even in summer.", "Leve um casaco: o vento no Guincho e no Cabo da Roca pode ser forte mesmo no verão.")
      ]
    },

    {
      id: "sintra-getaway",
      type: "getaway", days: 2, nights: 1, photo: "sintra-palace",
      title: x("Sintra Getaway", "Escapadinha em Sintra", "Escapada en Sintra", "Escapade à Sintra"),
      tagline: x("Palaces, forest and the wild coast around them", "Palácios, floresta e a costa selvagem à volta"),
      summary: x(
        "Sleep in Sintra and enjoy the village when the day visitors are gone. Around it: a hidden convent, villages over the sea, the westernmost cape of Europe, the palace of Mafra and the surf town of Ericeira.",
        "Durma em Sintra e aproveite a vila quando os visitantes do dia já partiram. À volta: um convento escondido, aldeias sobre o mar, o cabo mais ocidental da Europa, o palácio de Mafra e a vila de surf da Ericeira."
      ),
      stops: [
        { place: "sintra", kind: "base" },
        { place: "capuchos", kind: "activity", category: "monument" },
        { place: "azenhas", kind: "activity", category: "village" },
        { place: "mafra", kind: "activity", category: "monument" },
        { place: "ericeira", kind: "activity", category: "beach" }
      ],
      advice: [
        x("Book the palaces online with a time slot and visit the busiest ones (Pena, Regaleira) early in the morning.", "Reserve os palácios online com horário marcado e visite os mais procurados (Pena, Regaleira) logo de manhã."),
        x("The roads in the Sintra mountains are narrow and winding, with little parking: use the bus to the palaces.", "As estradas da serra de Sintra são estreitas e sinuosas, com pouco estacionamento: use o autocarro para os palácios."),
        x("Sintra is cooler and more humid than Lisbon: bring a jacket.", "Sintra é mais fresca e húmida do que Lisboa: leve um casaco.")
      ]
    },

    {
      id: "arrabida-getaway",
      type: "getaway", days: 2, nights: 1, photo: null,
      title: x("Summer in the Arrábida", "Verão na Arrábida", "Verano en la Arrábida", "Été dans l'Arrábida"),
      tagline: x("Wine estates, turquoise beaches and a boat along the coast", "Quintas, praias de água turquesa e um passeio de barco pela costa"),
      summary: x(
        "A summer getaway based at a wine estate in Azeitão, discovering the wonderful beaches of the Arrábida from the sea, the fishing town of Sesimbra and the wild Cabo Espichel.",
        "Uma escapadinha de verão com base numa quinta em Azeitão, para conhecer a partir do mar as maravilhosas praias da Arrábida, a vila piscatória de Sesimbra e o selvagem Cabo Espichel."
      ),
      stops: [
        { place: "azeitao", kind: "base" },
        { place: "sado", kind: "activity", category: "boat" },
        { place: "galapinhos", kind: "activity", category: "beach" },
        { place: "sesimbra", kind: "activity", category: "food" },
        { place: "cabo-espichel", kind: "activity", category: "viewpoint" }
      ],
      advice: [
        x("In summer, car access to the Arrábida beaches is restricted: use the shuttle bus from Setúbal or arrive very early.", "No verão, o acesso de carro às praias da Arrábida é condicionado: use o autocarro a partir de Setúbal ou chegue muito cedo."),
        x("The mountain road along the coast is narrow and winding: drive slowly and stop only in the marked areas.", "A estrada da serra junto à costa é estreita e sinuosa: conduza devagar e pare só nos locais marcados."),
        x("Book the boat trip and the winery visits in advance.", "Reserve com antecedência o passeio de barco e as visitas às adegas.")
      ]
    },

    {
      id: "porto-and-braga",
      type: "getaway", days: 5, nights: 4, photo: null,
      title: x("Porto and Braga", "Porto e Braga", "Oporto y Braga", "Porto et Braga"),
      tagline: x("Two days in Porto and two in Braga, the heart of the Minho", "Dois dias no Porto e dois em Braga, no coração do Minho"),
      logistics: x("Start and end in Porto", "Início e fim no Porto"),
      summary: x(
        "A relaxed getaway between two cities: the river, bridges and wine cellars of Porto, and the baroque sanctuaries, historic centre and green landscapes of Braga, with Guimarães on the way.",
        "Uma escapadinha tranquila entre duas cidades: o rio, as pontes e as caves do Porto, e os santuários barrocos, o centro histórico e as paisagens verdes de Braga, com Guimarães pelo caminho."
      ),
      stops: [
        { place: "porto", kind: "main", dayFrom: 1, dayTo: 2, nights: 2 },
        { place: "guimaraes", kind: "via" },
        { place: "braga", kind: "main", dayFrom: 3, dayTo: 4, nights: 2 }
      ],
      returnTo: { place: "porto", day: 5 },
      advice: [
        x("This getaway can be done without a car: there are frequent trains between Porto (São Bento) and Braga, and buses to Guimarães.", "Esta escapadinha pode fazer-se sem carro: há comboios frequentes entre o Porto (São Bento) e Braga e autocarros para Guimarães."),
        x("If you drive, the A3 links Porto to Braga in about 45 minutes. The motorways have tolls.", "Se for de carro, a A3 liga o Porto a Braga em cerca de 45 minutos. As autoestradas têm portagens."),
        x("Confirm parking at the accommodation: the historic centres of Porto and Braga have restricted access.", "Confirme o estacionamento no alojamento: os centros históricos do Porto e de Braga têm acesso condicionado.")
      ]
    }
  ];

  /* Resolve each stop against its place card */
  const P = window.PLACES || {};
  window.ROUTES.forEach((route) => {
    route.stops = route.stops.map((s) => {
      const p = P[s.place];
      if (!p) console.warn("Missing place", s.place);
      return Object.assign({}, p, s, { text: s.text || (p && p.text) || (p && p.overview) });
    });
    if (route.returnTo) route.returnTo = Object.assign({}, P[route.returnTo.place], route.returnTo);
  });
})();
