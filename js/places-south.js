/* PLACES – Lisbon region, Alentejo and Algarve. See places-north.js for the format. */
window.PLACES = window.PLACES || {};
(function () {
  const r = (te, tp, de, dp) => ({ t: { en: te, pt: tp }, d: { en: de, pt: dp } });
  const x = (en, pt) => ({ en, pt });

  Object.assign(window.PLACES, {
    /* ---------------------------------------------------------- LISBON AREA */
    lisboa: {
      name: { en: "Lisbon", pt: "Lisboa", es: "Lisboa", fr: "Lisbonne" }, district: "Lisboa", lat: 38.7110, lng: -9.1366, icon: "tram",
      overview: x(
        "The city of seven hills and golden light over the Tagus: trams climbing narrow streets, viewpoints at every corner, fado in the taverns and pastéis de nata still warm.",
        "A cidade das sete colinas e da luz dourada sobre o Tejo: elétricos a subir ruas estreitas, miradouros a cada esquina, fado nas tabernas e pastéis de nata ainda quentes."
      ),
      stay: [
        r("Baixa and Chiado", "Baixa e Chiado", "To explore the centre on foot, close to the river, the shops and the viewpoints.", "Para explorar o centro a pé, perto do rio, do comércio e dos miradouros."),
        r("Avenida da Liberdade and Marquês de Pombal", "Avenida da Liberdade e Marquês de Pombal", "A good base to combine walks and public transport, with more hotels with parking.", "Boa base para combinar passeios e transportes, com mais hotéis com estacionamento."),
        r("Parque das Nações", "Parque das Nações", "A modern alternative by the river, close to the airport and with easy car access.", "Alternativa moderna junto ao rio, perto do aeroporto e com acessos fáceis de carro.")
      ],
      do: [
        r("Baixa, Chiado and Alfama (1 day)", "Baixa, Chiado e Alfama (1 dia)", "Praça do Comércio, the São Jorge castle and the viewpoints of Santa Luzia and Senhora do Monte. End the evening listening to fado.", "Praça do Comércio, Castelo de São Jorge e os miradouros de Santa Luzia e da Senhora do Monte. Termine a noite a ouvir fado."),
        r("Belém (half day)", "Belém (meio dia)", "The Jerónimos Monastery and the Tower of Belém, UNESCO sites, and the riverside walk. Buy tickets online to avoid queues.", "O Mosteiro dos Jerónimos e a Torre de Belém, Património Mundial, e o passeio junto ao rio. Compre os bilhetes online para evitar filas."),
        r("Parque das Nações and the Tagus (2–3 h)", "Parque das Nações e o Tejo (2–3 h)", "The Oceanarium, the cable car along the river and the Vasco da Gama bridge at sunset.", "O Oceanário, o teleférico junto ao rio e a ponte Vasco da Gama ao pôr do sol.")
      ],
      eat: [
        r("Alfama and Mouraria", "Alfama e Mouraria", "Look for tascas, petiscos and Portuguese cooking. In June, grilled sardines fill the streets.", "Procure tascas, petiscos e cozinha portuguesa. Em junho, as sardinhas assadas enchem as ruas."),
        r("Chiado and Bairro Alto", "Chiado e Bairro Alto", "Variety for dinner, with lively streets at night.", "Variedade para jantar, com ruas mais animadas à noite."),
        r("Belém", "Belém", "A pastry break during the visit: the original pastéis de Belém, with cinnamon and icing sugar.", "Pausa para pastelaria durante a visita: os pastéis de Belém, com canela e açúcar em pó.")
      ]
    },

    belem: {
      name: "Belém", district: "Lisboa", lat: 38.6916, lng: -9.2160, icon: "belem",
      text: x("The Jerónimos Monastery, the Tower of Belém and a warm pastel de Belém before leaving the city.", "O Mosteiro dos Jerónimos, a Torre de Belém e um pastel de Belém quente antes de sair da cidade.")
    },
    carcavelos: {
      name: "Carcavelos", district: "Lisboa", lat: 38.6780, lng: -9.3360, icon: "surf",
      text: x("A long sandy beach on the way to Cascais, popular for surf lessons and sunset walks by the São Julião fort.", "Uma longa praia de areia a caminho de Cascais, muito procurada para aulas de surf e passeios ao pôr do sol junto ao forte de São Julião.")
    },

    cascais: {
      name: "Cascais", district: "Lisboa", lat: 38.6968, lng: -9.4215, icon: "beach",
      overview: x(
        "An elegant seaside town with a fishing harbour, small beaches and a promenade to Estoril, between the sea and the Sintra mountains.",
        "Uma elegante vila à beira-mar, com porto de pesca, pequenas praias e um passeio marítimo até ao Estoril, entre o mar e a serra de Sintra."
      ),
      stay: [
        r("Historic centre and bay", "Centro histórico e baía", "To walk to the beaches, the harbour and the restaurants.", "Para ir a pé às praias, ao porto e aos restaurantes."),
        r("Estoril", "Estoril", "Classic hotels near the casino and the seafront promenade, 3 km from Cascais.", "Hotéis clássicos junto ao casino e ao paredão, a 3 km de Cascais."),
        r("Towards Guincho", "A caminho do Guincho", "Quieter hotels and houses with sea views, ideal if you travel by car.", "Hotéis e casas mais tranquilos com vista para o mar, ideais para quem viaja de carro.")
      ],
      do: [
        r("Centre, Citadel and Boca do Inferno (2–3 h)", "Centro, Cidadela e Boca do Inferno (2–3 h)", "Walk from the harbour to the Citadel and the Casa das Histórias Paula Rego, and on to the Boca do Inferno cliffs.", "Caminhe do porto até à Cidadela e à Casa das Histórias Paula Rego, e depois até às falésias da Boca do Inferno."),
        r("Promenade to Estoril (1–2 h)", "Paredão até ao Estoril (1–2 h)", "A seafront walk past small beaches, best at sunset.", "Um passeio à beira-mar entre pequenas praias, melhor ao pôr do sol."),
        r("Guincho and Cabo da Roca (within 15 km)", "Guincho e Cabo da Roca (até 15 km)", "A wild beach for kitesurf and the westernmost point of mainland Europe.", "Uma praia selvagem para kitesurf e o ponto mais ocidental da Europa continental.")
      ],
      eat: [
        r("By the harbour", "Junto ao porto", "Fresh fish and seafood near the fish market.", "Peixe fresco e marisco perto da lota."),
        r("Guincho road", "Estrada do Guincho", "Restaurants by the sea, famous for fish and seafood with an Atlantic view. Book ahead.", "Restaurantes à beira-mar, famosos pelo peixe e marisco com vista para o Atlântico. Reserve com antecedência."),
        r("Ice cream and pastry", "Gelados e pastelaria", "End the walk with an ice cream in the centre, a Cascais tradition.", "Termine o passeio com um gelado no centro, uma tradição de Cascais.")
      ]
    },

    sintra: {
      name: "Sintra", district: "Lisboa", lat: 38.7976, lng: -9.3905, icon: "palace",
      text: x(
        "Choose one palace and walk through the historic centre. Pena, Regaleira and the Moorish Castle all need time: buy tickets online.",
        "Escolha um palácio e passeie pelo centro histórico. Pena, Regaleira e Castelo dos Mouros levam tempo: compre os bilhetes online."
      ),
      overview: x(
        "Fairytale palaces in a misty forest, a UNESCO cultural landscape: the colourful Pena Palace, the Moorish Castle and the mysterious Quinta da Regaleira.",
        "Palácios de conto de fadas numa serra cheia de nevoeiro, Paisagem Cultural da UNESCO: o colorido Palácio da Pena, o Castelo dos Mouros e a misteriosa Quinta da Regaleira."
      ),
      stay: [
        r("Historic centre", "Centro histórico", "Wake up next to the palaces and enjoy the village without day visitors.", "Acorde junto aos palácios e aproveite a vila sem os visitantes do dia."),
        r("Quintas in the hills", "Quintas na serra", "Historic manor houses among the trees, between Sintra and Colares.", "Casas senhoriais históricas entre o arvoredo, entre Sintra e Colares."),
        r("Near the coast", "Perto da costa", "Guesthouses in Colares, Azenhas do Mar or Praia das Maçãs, for beach and countryside.", "Alojamentos em Colares, Azenhas do Mar ou Praia das Maçãs, para praia e campo.")
      ],
      do: [
        r("Pena Palace and park (3 h)", "Palácio e Parque da Pena (3 h)", "The colourful palace on the top of the hill. Book a time slot online and go early.", "O palácio colorido no alto da serra. Reserve horário online e vá cedo."),
        r("Quinta da Regaleira and Moorish Castle (3 h)", "Quinta da Regaleira e Castelo dos Mouros (3 h)", "The initiation well and the tunnels of the Regaleira, and the walls of the Moorish Castle with views to the sea.", "O poço iniciático e os túneis da Regaleira e as muralhas do Castelo dos Mouros com vista até ao mar."),
        r("Capuchos, Colares and the coast (within 15 km)", "Capuchos, Colares e a costa (até 15 km)", "The cork-lined Capuchos convent, the Colares wineries and the cliffside village of Azenhas do Mar.", "O Convento dos Capuchos forrado a cortiça, as adegas de Colares e a aldeia de Azenhas do Mar sobre a falésia.")
      ],
      eat: [
        r("Travesseiros and queijadas", "Travesseiros e queijadas", "Sintra's famous pastries, in the historic pastry shops of the centre.", "Os doces mais famosos de Sintra, nas pastelarias históricas do centro."),
        r("Historic centre", "Centro histórico", "Traditional restaurants for lunch between palaces. Compare menus: it is a busy area.", "Restaurantes tradicionais para almoçar entre palácios. Compare ementas: é uma zona movimentada."),
        r("Coast and Colares", "Costa e Colares", "Fresh fish by the sea in Azenhas do Mar or Praia das Maçãs, with a Colares wine.", "Peixe fresco à beira-mar nas Azenhas do Mar ou na Praia das Maçãs, com um vinho de Colares.")
      ]
    },

    "cabo-da-roca": {
      name: "Cabo da Roca", district: "Lisboa", lat: 38.7804, lng: -9.4989, icon: "lighthouse",
      text: x("The westernmost point of mainland Europe, with cliffs 140 metres above the Atlantic.", "O ponto mais ocidental da Europa continental, com falésias a 140 metros sobre o Atlântico.")
    },
    ericeira: {
      name: "Ericeira", district: "Lisboa", lat: 38.9631, lng: -9.4170, icon: "surf",
      text: x("A white and blue fishing village and Europe's only World Surfing Reserve. Stop for lunch with a sea view.", "Uma vila piscatória branca e azul e a única Reserva Mundial de Surf da Europa. Pare para almoçar com vista para o mar.")
    },
    azenhas: {
      name: "Azenhas do Mar e Colares", district: "Lisboa", lat: 38.8399, lng: -9.4612, icon: "whitehouse",
      text: x("White houses hanging over a cliff and a natural sea pool, next to the Colares wineries, where vines grow in the sand.", "Casas brancas penduradas na falésia e uma piscina natural, junto às adegas de Colares, onde a vinha cresce na areia.")
    },
    guincho: {
      name: "Praia do Guincho", district: "Lisboa", lat: 38.7330, lng: -9.4730, icon: "surf",
      text: x("A wild beach with dunes, wind and waves, popular with kitesurfers. The coastal road from Cascais is a classic drive.", "Uma praia selvagem com dunas, vento e ondas, muito procurada para kitesurf. A estrada costeira desde Cascais é um passeio clássico.")
    },
    mafra: {
      name: "Palácio de Mafra", district: "Lisboa", lat: 38.9369, lng: -9.3260, icon: "palace",
      text: x("A huge baroque palace and basilica, a UNESCO site, with one of the most beautiful libraries in Europe.", "Um enorme palácio e basílica barrocos, Património Mundial, com uma das bibliotecas mais bonitas da Europa.")
    },
    capuchos: {
      name: "Convento dos Capuchos", district: "Lisboa", lat: 38.7840, lng: -9.4380, icon: "monastery",
      text: x("A tiny 16th-century convent hidden in the forest, with cells lined with cork. A peaceful contrast to the palaces.", "Um pequeno convento do século XVI escondido na floresta, com celas forradas a cortiça. Um contraste tranquilo com os palácios.")
    },

    /* ---------------------------------------------------- SETÚBAL PENINSULA */
    palmela: {
      name: "Palmela", district: "Setúbal", lat: 38.5687, lng: -8.9010, icon: "castle",
      text: x("A castle on a hill with views over the Arrábida, the Sado and Lisbon on a clear day. The region is famous for its Moscatel wine.", "Um castelo num monte com vista sobre a Arrábida, o Sado e, em dias limpos, Lisboa. A região é famosa pelo Moscatel.")
    },
    setubal: {
      name: "Setúbal", district: "Setúbal", lat: 38.5244, lng: -8.8882, icon: "sardine",
      text: x("Lunch by the harbour: fried cuttlefish (choco frito) and grilled fish straight from the boats. The Livramento market is one of the most beautiful in Portugal.", "Almoço junto ao porto: choco frito e peixe grelhado acabado de chegar dos barcos. O Mercado do Livramento é um dos mais bonitos do país.")
    },
    arrabida: {
      name: "Serra da Arrábida", district: "Setúbal", lat: 38.4870, lng: -8.9800, icon: "viewpoint",
      text: x("A green mountain that drops into turquoise water. Drive the coastal road and stop at Portinho da Arrábida for a swim.", "Uma serra verde que cai sobre água turquesa. Siga pela estrada da costa e pare no Portinho da Arrábida para um mergulho.")
    },
    azeitao: {
      name: "Arrábida e Azeitão", district: "Setúbal", lat: 38.5180, lng: -9.0150, icon: "wine",
      overview: x(
        "Between the Arrábida natural park and the wine estates of Azeitão: turquoise beaches, limestone cliffs, Moscatel wine and the creamy Azeitão cheese.",
        "Entre o Parque Natural da Arrábida e as quintas de Azeitão: praias de água turquesa, falésias calcárias, Moscatel e o cremoso queijo de Azeitão."
      ),
      stay: [
        r("Wine estates in Azeitão", "Quintas em Azeitão", "Manor houses and wine estates with gardens and pools, a quiet base with tastings at the door.", "Casas senhoriais e quintas vinícolas com jardim e piscina, uma base tranquila com provas à porta."),
        r("Setúbal", "Setúbal", "More choice of hotels and restaurants, close to the boats along the coast and the Sado estuary.", "Mais oferta de hotéis e restaurantes, perto dos barcos ao longo da costa e do estuário do Sado."),
        r("Sesimbra", "Sesimbra", "A fishing town by the sea, for those who want the beach at the door.", "Uma vila piscatória à beira-mar, para quem quer a praia à porta.")
      ],
      do: [
        r("Beaches of the Arrábida (half day)", "Praias da Arrábida (meio dia)", "Portinho, Galapinhos and Creiro. In summer, access by car is restricted: use the shuttle bus or go early.", "Portinho, Galapinhos e Creiro. No verão, o acesso de carro é condicionado: use o autocarro de ligação ou vá cedo."),
        r("Wine tasting in Azeitão (1–2 h)", "Prova de vinhos em Azeitão (1–2 h)", "Visit one of the historic wineries and taste Setúbal Moscatel. Booking recommended.", "Visite uma das adegas históricas e prove o Moscatel de Setúbal. Reserva recomendada."),
        r("Sesimbra and Cabo Espichel (within 20 km)", "Sesimbra e Cabo Espichel (até 20 km)", "The fishing town and its castle, and the dramatic cape with a sanctuary and dinosaur footprints.", "A vila piscatória e o seu castelo e o cabo dramático com um santuário e pegadas de dinossauro.")
      ],
      eat: [
        r("Azeitão cheese and tortas", "Queijo e tortas de Azeitão", "Taste the creamy sheep's cheese and the tortas de Azeitão, a rolled sponge with egg cream.", "Prove o queijo de ovelha amanteigado e as tortas de Azeitão."),
        r("Fish in Setúbal or Sesimbra", "Peixe em Setúbal ou Sesimbra", "Choco frito in Setúbal and grilled fish or caldeirada by the sea in Sesimbra.", "Choco frito em Setúbal e peixe grelhado ou caldeirada à beira-mar em Sesimbra."),
        r("Moscatel", "Moscatel", "End the meal with a glass of Moscatel de Setúbal, the region's sweet wine.", "Termine a refeição com um cálice de Moscatel de Setúbal.")
      ]
    },
    sado: {
      name: "Passeio de barco na Arrábida", district: "Setúbal", lat: 38.5180, lng: -8.8960, icon: "rabelo",
      text: x("Boat trips leave from Setúbal along the Arrábida coast, to see the beaches from the sea and, with luck, the dolphins of the Sado. Booking required.", "Os barcos saem de Setúbal ao longo da costa da Arrábida, para ver as praias a partir do mar e, com sorte, os golfinhos do Sado. Exige reserva.")
    },
    galapinhos: {
      name: "Galapinhos e Portinho", district: "Setúbal", lat: 38.4870, lng: -8.9800, icon: "beach",
      text: x("Some of the most beautiful beaches in Portugal, with clear water and a green mountain behind. Go early in summer: access is limited.", "Algumas das praias mais bonitas de Portugal, com água transparente e a serra verde por trás. Vá cedo no verão: o acesso é limitado.")
    },
    sesimbra: {
      name: "Sesimbra", district: "Setúbal", lat: 38.4445, lng: -9.1015, icon: "sardine",
      text: x("A fishing town with a castle on the hill and a long beach. Have grilled fish on the seafront.", "Uma vila piscatória com castelo no monte e uma longa praia. Coma peixe grelhado na marginal.")
    },
    "cabo-espichel": {
      name: "Cabo Espichel", district: "Setúbal", lat: 38.4140, lng: -9.2160, icon: "lighthouse",
      text: x("A wild cape with a pilgrims' sanctuary, a lighthouse and dinosaur footprints on the cliffs. Beautiful at sunset.", "Um cabo selvagem com um santuário de peregrinos, um farol e pegadas de dinossauro nas falésias. Lindo ao pôr do sol.")
    },
    troia: {
      name: "Tróia", district: "Setúbal", lat: 38.4890, lng: -8.8990, icon: "beach",
      overview: x(
        "A long peninsula of white sand and calm water between the Sado estuary and the sea, reached by ferry from Setúbal.",
        "Uma longa península de areia branca e água calma entre o estuário do Sado e o mar, a que se chega de ferry a partir de Setúbal."
      ),
      stay: [
        r("Tróia resort", "Tróia", "Hotels and apartments by the beach, with the marina and restaurants within walking distance.", "Hotéis e apartamentos junto à praia, com a marina e os restaurantes a pé."),
        r("Comporta and Carvalhal", "Comporta e Carvalhal", "Rural houses and boutique hotels among rice fields and pine forests, 20–30 km south.", "Casas rurais e hotéis boutique entre arrozais e pinhais, 20–30 km a sul."),
        r("Setúbal", "Setúbal", "A city option on the other side of the river, linked by ferry.", "Uma opção urbana do outro lado do rio, com ligação de ferry.")
      ],
      do: [
        r("Beaches of the peninsula (1 day)", "Praias da península (1 dia)", "Calm water on the estuary side and wilder beaches facing the sea.", "Águas calmas do lado do estuário e praias mais selvagens viradas ao mar."),
        r("Dolphins of the Sado (2–3 h)", "Golfinhos do Sado (2–3 h)", "Boat trips to see the resident dolphins of the estuary. Booking required.", "Passeios de barco para ver os golfinhos residentes do estuário. Exige reserva."),
        r("Roman ruins and Carrasqueira (within 20 km)", "Ruínas romanas e Carrasqueira (até 20 km)", "Remains of a Roman fish-salting factory, and the stilt fishing pier of Carrasqueira.", "Ruínas de uma fábrica romana de salga de peixe e o cais palafítico da Carrasqueira.")
      ],
      eat: [
        r("Marina", "Marina", "Restaurants with a view over the Sado and the Arrábida, for fish and seafood.", "Restaurantes com vista sobre o Sado e a Arrábida, para peixe e marisco."),
        r("Comporta", "Comporta", "Arroz de marisco and rice dishes made with rice from the local fields.", "Arroz de marisco e pratos com o arroz dos campos da região."),
        r("Beach bars", "Bares de praia", "Simple meals and drinks at sunset, facing the sea.", "Refeições simples e bebidas ao pôr do sol, em frente ao mar.")
      ]
    },
    alcacer: {
      name: "Alcácer do Sal", district: "Setúbal", lat: 38.3722, lng: -8.5137, icon: "whitehouse",
      text: x("A white town by the Sado river with a castle on the hill, storks and rice fields. Have lunch on the riverside.", "Uma vila branca junto ao Sado, com castelo no monte, cegonhas e arrozais. Almoce junto ao rio.")
    },

    /* ------------------------------------------------------------ ALENTEJO */
    comporta: {
      name: "Comporta", district: "Setúbal", lat: 38.3800, lng: -8.7830, icon: "beach",
      text: x("Rice fields, storks and endless beaches backed by dunes. Stop at the Carrasqueira stilt pier and have lunch by the sea.", "Arrozais, cegonhas e praias sem fim com dunas. Pare no cais palafítico da Carrasqueira e almoce junto ao mar."),
      overview: x(
        "Rice fields, storks, wooden stilt piers and endless beaches backed by dunes. Comporta is the relaxed side of the Portuguese summer.",
        "Arrozais, cegonhas, cais palafíticos e praias sem fim com dunas. A Comporta é o lado descontraído do verão português."
      ),
      stay: [
        r("Comporta and Carvalhal", "Comporta e Carvalhal", "Boutique hotels and houses among the pine trees, a few minutes from the beach.", "Hotéis boutique e casas entre os pinheiros, a poucos minutos da praia."),
        r("Rural tourism", "Turismo rural", "Herdades and farms among rice fields, with space and quiet.", "Herdades e montes entre arrozais, com espaço e sossego."),
        r("Melides", "Melides", "A small village with a lagoon by the sea, a little further south.", "Uma pequena aldeia com uma lagoa junto ao mar, um pouco mais a sul.")
      ],
      do: [
        r("Beaches (1 day)", "Praias (1 dia)", "Comporta, Carvalhal and Pego: long, wide and uncrowded beaches.", "Comporta, Carvalhal e Pego: praias longas, largas e sem multidões."),
        r("Carrasqueira stilt pier (30 min)", "Cais palafítico da Carrasqueira (30 min)", "Wooden piers on stilts over the Sado, best at sunset.", "Cais de madeira sobre estacas no Sado, melhor ao pôr do sol."),
        r("Horse riding and cycling (2 h)", "Passeios a cavalo e de bicicleta (2 h)", "Rides on the beach or through the rice fields and pine forests. Booking recommended.", "Passeios na praia ou entre arrozais e pinhais. Reserva recomendada.")
      ],
      eat: [
        r("Arroz de marisco", "Arroz de marisco", "Rice from the local fields cooked with seafood, the classic dish of the region.", "Arroz dos campos da região com marisco, o prato clássico da Comporta."),
        r("Beach restaurants", "Restaurantes de praia", "Grilled fish facing the sea. Book in summer.", "Peixe grelhado em frente ao mar. Reserve no verão."),
        r("Village cafés", "Cafés da aldeia", "Simple and local, for breakfast or a quick lunch.", "Simples e locais, para o pequeno-almoço ou um almoço rápido.")
      ]
    },

    evora: {
      name: "Évora", district: "Évora", lat: 38.5714, lng: -7.9135, icon: "temple",
      overview: x(
        "A whitewashed city inside medieval walls, a UNESCO site, with a Roman temple at its centre, a Gothic cathedral and the famous Chapel of Bones.",
        "Uma cidade caiada dentro de muralhas medievais, Património Mundial, com um templo romano no centro, uma Sé gótica e a famosa Capela dos Ossos."
      ),
      stay: [
        r("Inside the walls", "Dentro das muralhas", "To walk everywhere and enjoy the quiet streets at night. Confirm parking.", "Para fazer tudo a pé e aproveitar as ruas tranquilas à noite. Confirme o estacionamento."),
        r("Wine estates nearby", "Herdades nos arredores", "Herdades with vineyards and pools, a few kilometres from the city.", "Herdades com vinha e piscina, a poucos quilómetros da cidade."),
        r("Just outside the walls", "Junto às muralhas, do lado de fora", "Hotels with easy parking, a short walk from Praça do Giraldo.", "Hotéis com estacionamento fácil, a poucos passos da Praça do Giraldo.")
      ],
      do: [
        r("Roman temple, cathedral and Chapel of Bones (half day)", "Templo romano, Sé e Capela dos Ossos (meio dia)", "Climb to the cathedral roof for the view and visit the Chapel of Bones in the Church of São Francisco.", "Suba ao terraço da Sé pela vista e visite a Capela dos Ossos na Igreja de São Francisco."),
        r("Wine tasting (1–2 h)", "Prova de vinhos (1–2 h)", "Visit a herdade or a wine house in the city to taste Alentejo wines. Booking recommended.", "Visite uma herdade ou uma enoteca na cidade para provar vinhos alentejanos. Reserva recomendada."),
        r("Almendres stone circle (within 15 km)", "Cromeleque dos Almendres (até 15 km)", "Nearly 100 standing stones among cork oaks, older than Stonehenge. Free access, dirt road at the end.", "Quase 100 menires entre sobreiros, mais antigos do que Stonehenge. Acesso livre, com estrada de terra no final.")
      ],
      eat: [
        r("Historic centre", "Centro histórico", "Alentejo cooking: migas, açorda, black pork and lamb stew.", "Cozinha alentejana: migas, açorda, porco preto e ensopado de borrego."),
        r("Wine bars", "Enotecas", "Taste Alentejo wines by the glass with cheese and sausages.", "Prove vinhos alentejanos a copo com queijos e enchidos."),
        r("Convent sweets", "Doçaria conventual", "Pão de rala and queijadas, made with eggs and almonds.", "Pão de rala e queijadas, feitos com ovos e amêndoa.")
      ]
    },
    arraiolos: {
      name: "Arraiolos", district: "Évora", lat: 38.7236, lng: -7.9895, icon: "whitehouse",
      text: x("A white village with a round castle, famous for its hand-embroidered wool carpets. Visit the Carpet Interpretation Centre.", "Uma vila branca com um castelo circular, famosa pelos tapetes de lã bordados à mão. Visite o Centro Interpretativo do Tapete.")
    },
    estremoz: {
      name: "Estremoz", district: "Évora", lat: 38.8440, lng: -7.5866, icon: "castle",
      text: x("A marble town with a castle keep and clay figurines (bonecos) listed by UNESCO. On Saturdays, don't miss the market in the main square.", "Uma cidade de mármore com torre de menagem e bonecos de Estremoz, Património Imaterial. Ao sábado, não perca o mercado no Rossio.")
    },
    "vila-vicosa": {
      name: "Vila Viçosa", district: "Évora", lat: 38.7783, lng: -7.4176, icon: "palace",
      overview: x(
        "A marble town and home of the Bragança dukes, with the Ducal Palace, a castle and streets paved in white marble.",
        "A vila do mármore e casa dos Duques de Bragança, com o Paço Ducal, um castelo e ruas calcetadas de mármore branco."
      ),
      stay: [
        r("Historic centre", "Centro histórico", "Close to the Ducal Palace and the main square, to walk everywhere.", "Perto do Paço Ducal e do Terreiro, para fazer tudo a pé."),
        r("Rural tourism", "Turismo rural", "Herdades and manor houses among olive groves and vineyards.", "Herdades e casas senhoriais entre olivais e vinhas."),
        r("Estremoz or Borba", "Estremoz ou Borba", "Nearby marble towns with more accommodation, within 15 km.", "Vilas do mármore vizinhas com mais alojamento, a menos de 15 km.")
      ],
      do: [
        r("Ducal Palace (1–2 h)", "Paço Ducal (1–2 h)", "The palace of the Bragança dukes, with its art collections and the royal kitchen.", "O palácio dos Duques de Bragança, com as suas coleções e a cozinha real."),
        r("Castle and marble quarries (1–2 h)", "Castelo e pedreiras de mármore (1–2 h)", "Visit the castle and see the impressive marble quarries around the town; some offer guided visits.", "Visite o castelo e veja as impressionantes pedreiras de mármore; algumas têm visitas guiadas."),
        r("Borba and Estremoz (within 20 km)", "Borba e Estremoz (até 20 km)", "Wine in Borba and the castle and Saturday market of Estremoz.", "Vinho em Borba e o castelo e o mercado de sábado de Estremoz.")
      ],
      eat: [
        r("Alentejo taverns", "Tabernas alentejanas", "Petiscos, cheese and sausages with a jug of local wine.", "Petiscos, queijo e enchidos com um jarro de vinho da casa."),
        r("Regional restaurants", "Restaurantes regionais", "Black pork, lamb and açorda in the centre of the town.", "Porco preto, borrego e açorda no centro da vila."),
        r("Borba wines", "Vinhos de Borba", "Pair your meal with a wine from the Borba sub-region.", "Acompanhe a refeição com um vinho da sub-região de Borba.")
      ]
    },
    monsaraz: {
      name: "Monsaraz", district: "Évora", lat: 38.4433, lng: -7.3807, icon: "castle",
      overview: x(
        "A walled hilltop village with white streets of schist and a castle above the great Alqueva lake. One of the most beautiful places in the Alentejo.",
        "Uma vila muralhada no alto de um monte, com ruas brancas de xisto e um castelo sobre o grande lago do Alqueva. Um dos lugares mais bonitos do Alentejo."
      ),
      stay: [
        r("Inside the walls", "Dentro das muralhas", "To feel the atmosphere of the village at the end of the day.", "Para sentir o ambiente da vila ao final do dia."),
        r("Countryside nearby", "Nos arredores", "A rural stay with space and views over the landscape and the lake.", "Uma estadia rural com espaço e vistas sobre a paisagem e o lago."),
        r("Reguengos de Monsaraz", "Reguengos de Monsaraz", "If you prefer an urban base, with more services, 15 km away.", "Se preferir uma base urbana, com mais serviços, a 15 km.")
      ],
      do: [
        r("Village and castle (1–2 h)", "Vila e castelo (1–2 h)", "Walk through the streets of the village and climb the castle for the view over the Alqueva.", "Percorra as ruas da vila e visite o castelo, com vista sobre o Alqueva."),
        r("São Pedro do Corval potteries (1 h)", "Olarias de São Pedro do Corval (1 h)", "One of the largest pottery centres in Portugal, with workshops open to visitors.", "Um dos maiores centros oleiros de Portugal, com oficinas abertas a visitas."),
        r("Alqueva lake and stargazing (within 20 km)", "Alqueva e observação do céu (até 20 km)", "A boat trip on the lake and a night at a dark-sky observatory complete the visit. Booking required.", "Um passeio de barco no lago e uma experiência de observação do céu completam a visita. Exige reserva.")
      ],
      eat: [
        r("In the village", "Na vila", "Look for a meal with a view over the landscape.", "Procure uma refeição com vista sobre a paisagem."),
        r("Reguengos and nearby villages", "Reguengos e aldeias próximas", "Explore the regional cooking in small family restaurants.", "Explore a cozinha regional em pequenos restaurantes familiares."),
        r("Flavours to try", "Sabores a conhecer", "Migas, ensopado de borrego and Alentejo cheeses, with wines from the Reguengos wineries.", "Migas, ensopado de borrego e queijos alentejanos, com vinhos das adegas de Reguengos.")
      ]
    },
    moura: {
      name: "Moura", district: "Beja", lat: 38.1400, lng: -7.4485, icon: "olive",
      text: x("A town of olive oil and Moorish legends, with a castle, an old Moorish quarter and thermal springs.", "Uma cidade de azeite e de lendas mouras, com castelo, um antigo bairro mouro e águas termais.")
    },
    serpa: {
      name: "Serpa", district: "Beja", lat: 37.9439, lng: -7.5980, icon: "cheese",
      text: x("A white walled town with an aqueduct along the walls. Taste the famous Serpa cheese and listen to cante alentejano, a UNESCO heritage.", "Uma vila branca e muralhada, com um aqueduto junto às muralhas. Prove o famoso queijo de Serpa e ouça cante alentejano, Património Imaterial.")
    },
    mertola: {
      name: "Mértola", district: "Beja", lat: 37.6406, lng: -7.6614, icon: "castle",
      overview: x(
        "A 'museum town' on a hill above the Guadiana, where a mosque became a church and Roman, Islamic and medieval layers meet.",
        "Uma 'vila-museu' num monte sobre o Guadiana, onde uma mesquita se tornou igreja e se cruzam camadas romanas, islâmicas e medievais."
      ),
      stay: [
        r("Old town", "Vila velha", "Inside the walls, with views over the Guadiana.", "Dentro das muralhas, com vista sobre o Guadiana."),
        r("By the river", "Junto ao rio", "Guesthouses at the foot of the town, close to the riverside walk.", "Alojamentos no sopé da vila, perto do passeio junto ao rio."),
        r("Guadiana Valley natural park", "Parque Natural do Vale do Guadiana", "Rural houses in the natural park, for nature and birdwatching.", "Casas rurais no parque natural, para natureza e observação de aves.")
      ],
      do: [
        r("Museum town (half day)", "Vila-museu (meio dia)", "The Mother Church (former mosque), the castle and the Islamic and Roman museum sites.", "A Igreja Matriz (antiga mesquita), o castelo e os núcleos museológicos islâmico e romano."),
        r("Pulo do Lobo waterfall (within 20 km)", "Pulo do Lobo (até 20 km)", "The highest waterfall in southern Portugal, where the Guadiana squeezes between rocks.", "A maior queda de água do sul de Portugal, onde o Guadiana se aperta entre rochas."),
        r("Mina de São Domingos (within 20 km)", "Mina de São Domingos (até 20 km)", "An abandoned copper mine with colourful landscapes and a river beach.", "Uma antiga mina de cobre com paisagens coloridas e uma praia fluvial.")
      ],
      eat: [
        r("Game and river fish", "Caça e peixe do rio", "Wild boar, partridge and fish from the Guadiana, depending on the season.", "Javali, perdiz e peixe do Guadiana, conforme a época."),
        r("Riverside restaurants", "Restaurantes junto ao rio", "Simple meals with a view of the town and the bridge.", "Refeições simples com vista para a vila e a ponte."),
        r("Honey and herbs", "Mel e ervas aromáticas", "Mértola is known for its honey and aromatic herbs, good souvenirs to take home.", "Mértola é conhecida pelo mel e pelas ervas aromáticas, boas lembranças para levar.")
      ]
    },
    beja: {
      name: "Beja", district: "Beja", lat: 38.0151, lng: -7.8632, icon: "castle",
      text: x("The capital of the Baixo Alentejo, with one of the tallest castle keeps in Portugal and the Convent of Conceição, now the regional museum.", "A capital do Baixo Alentejo, com uma das torres de menagem mais altas de Portugal e o Convento da Conceição, hoje Museu Regional.")
    },
    alvito: {
      name: "Alvito", district: "Beja", lat: 38.2566, lng: -7.9919, icon: "whitehouse",
      text: x("A quiet white village with a castle-palace and streets of Manueline windows. A peaceful last stop before Lisbon.", "Uma vila branca e tranquila, com um castelo-palácio e ruas de janelas manuelinas. Uma última paragem serena antes de Lisboa.")
    },

    /* ---------------------------------------------- ALENTEJO COAST & ALGARVE */
    "porto-covo": {
      name: "Porto Covo", district: "Setúbal", lat: 37.8520, lng: -8.7920, icon: "whitehouse",
      text: x("A white and blue fishing village above small coves, with the Pessegueiro island and its fort just offshore.", "Uma aldeia piscatória branca e azul sobre pequenas enseadas, com a ilha do Pessegueiro e o seu forte ao largo.")
    },
    milfontes: {
      name: "Vila Nova de Milfontes", district: "Beja", lat: 37.7250, lng: -8.7830, icon: "wave",
      overview: x(
        "Where the Mira river meets the Atlantic: calm river beaches, wild cliffs and the start of the Fishermen's Trail.",
        "Onde o rio Mira encontra o Atlântico: praias fluviais calmas, falésias selvagens e o início do Trilho dos Pescadores."
      ),
      stay: [
        r("Village centre", "Centro da vila", "To walk to the river, the beaches and the restaurants.", "Para ir a pé ao rio, às praias e aos restaurantes."),
        r("Rural tourism", "Turismo rural", "Montes and farmhouses in the countryside, with pools and space.", "Montes e casas de campo, com piscina e espaço."),
        r("By the river", "Junto ao rio", "Apartments and houses near the Mira, for families.", "Apartamentos e casas perto do Mira, para famílias.")
      ],
      do: [
        r("River and sea beaches (1 day)", "Praias de rio e de mar (1 dia)", "Swim in the calm Mira or at Praia do Malhão, one of the wildest beaches on the coast.", "Nade no Mira tranquilo ou na Praia do Malhão, uma das mais selvagens da costa."),
        r("Fishermen's Trail (2–3 h)", "Trilho dos Pescadores (2–3 h)", "Walk a stretch of the cliff-top trail of the Rota Vicentina towards Almograve.", "Percorra um troço do trilho sobre as falésias da Rota Vicentina em direção ao Almograve."),
        r("Kayak or boat on the Mira (2 h)", "Caiaque ou barco no Mira (2 h)", "Paddle upriver among the green banks. Rental available in the village.", "Reme rio acima entre margens verdes. Há aluguer na vila.")
      ],
      eat: [
        r("Percebes and fish", "Percebes e peixe", "Barnacles from the rocks and grilled fish, the treasures of the coast.", "Percebes das rochas e peixe grelhado, os tesouros desta costa."),
        r("Village centre", "Centro da vila", "Restaurants and terraces for dinner after the beach.", "Restaurantes e esplanadas para jantar depois da praia."),
        r("Alentejo petiscos", "Petiscos alentejanos", "Cheese, sausages and açorda de marisco in the local taverns.", "Queijos, enchidos e açorda de marisco nas tabernas locais.")
      ]
    },
    zambujeira: {
      name: "Zambujeira do Mar", district: "Beja", lat: 37.5236, lng: -8.7856, icon: "cliffs",
      overview: x(
        "A small village on top of the cliffs, with a chapel facing the ocean and some of the wildest beaches of the Alentejo coast.",
        "Uma pequena aldeia no alto das falésias, com uma capela virada ao mar e algumas das praias mais selvagens da costa alentejana."
      ),
      stay: [
        r("In the village", "Na aldeia", "Guesthouses a few steps from the cliffs and the beach.", "Alojamentos a poucos passos das falésias e da praia."),
        r("Countryside nearby", "Arredores", "Rural houses and montes with space and quiet.", "Casas rurais e montes com espaço e sossego."),
        r("Almograve", "Almograve", "A quiet alternative 15 km north, close to the trails.", "Alternativa tranquila 15 km a norte, perto dos trilhos.")
      ],
      do: [
        r("Almograve beach", "Praia do Almograve", "A long beach with dark rocks and dunes, perfect for a morning swim.", "Uma longa praia com rochas escuras e dunas, perfeita para um banho de manhã."),
        r("Cabo Sardão (within 15 km)", "Cabo Sardão (até 15 km)", "A lighthouse on the cliffs where white storks nest on sea stacks, unique in the world.", "Um farol nas falésias onde as cegonhas fazem ninho nos rochedos sobre o mar, caso único no mundo."),
        r("Fishermen's Trail at sunset (2 h)", "Trilho dos Pescadores ao pôr do sol (2 h)", "Walk along the cliffs between Zambujeira and Cavaleiro.", "Caminhe pelas falésias entre a Zambujeira e o Cavaleiro.")
      ],
      eat: [
        r("Harbour of Entrada da Barca", "Porto da Entrada da Barca", "Fish and seafood straight from the boats, in the small harbour south of the village.", "Peixe e marisco acabado de chegar, no pequeno porto a sul da aldeia."),
        r("Village restaurants", "Restaurantes da aldeia", "Simple meals with a sea view.", "Refeições simples com vista para o mar."),
        r("Percebes", "Percebes", "The barnacles of this coast are among the most prized in Portugal.", "Os percebes desta costa estão entre os mais apreciados de Portugal.")
      ]
    },
    odeceixe: {
      name: "Odeceixe", district: "Faro", lat: 37.4410, lng: -8.7700, icon: "beach",
      text: x("A white village on a hill and a beach where the river meets the sea, between the Alentejo and the Algarve.", "Uma aldeia branca num monte e uma praia onde o rio encontra o mar, entre o Alentejo e o Algarve.")
    },
    "monte-clerigo": {
      name: "Monte Clérigo", district: "Faro", lat: 37.3400, lng: -8.8590, icon: "wave",
      overview: x(
        "A small beach village with colourful houses on the west coast of the Algarve, in the heart of the Southwest Alentejo and Vicentine Coast natural park.",
        "Uma pequena aldeia de praia com casas coloridas na costa oeste do Algarve, no coração do Parque Natural do Sudoeste Alentejano e Costa Vicentina."
      ),
      stay: [
        r("By the beach", "Junto à praia", "Houses and apartments a few steps from the sand.", "Casas e apartamentos a poucos passos da areia."),
        r("Aljezur", "Aljezur", "A historic village 8 km away, with a castle and more services.", "Uma vila histórica a 8 km, com castelo e mais serviços."),
        r("Rural tourism", "Turismo rural", "Farmhouses and eco-houses in the countryside of the natural park.", "Casas de campo e eco-alojamentos no interior do parque natural.")
      ],
      do: [
        r("Odeceixe on the way south", "Odeceixe a caminho do sul", "Stop at the beach where the river meets the sea.", "Pare na praia onde o rio encontra o mar."),
        r("Amoreira and Arrifana (1 day)", "Amoreira e Arrifana (1 dia)", "Amoreira, where the river forms a lagoon, and Arrifana, a bay under the cliffs, popular for surfing.", "A Amoreira, onde a ribeira forma uma lagoa, e a Arrifana, uma baía sob as falésias, muito procurada para surf."),
        r("Aljezur castle (within 10 km)", "Castelo de Aljezur (até 10 km)", "The ruins of a Moorish castle with a view over the valley.", "As ruínas de um castelo mouro com vista sobre o vale.")
      ],
      eat: [
        r("Sweet potato from Aljezur", "Batata-doce de Aljezur", "Try it roasted or in sweets: it has a protected designation of origin.", "Prove-a assada ou em doces: tem indicação geográfica protegida."),
        r("Beach restaurants", "Restaurantes de praia", "Grilled fish facing the sea in Monte Clérigo and Arrifana.", "Peixe grelhado em frente ao mar no Monte Clérigo e na Arrifana."),
        r("Aljezur", "Aljezur", "Small restaurants and cafés in the village.", "Pequenos restaurantes e cafés na vila.")
      ]
    },
    carrapateira: {
      name: "Carrapateira", district: "Faro", lat: 37.1920, lng: -8.9020, icon: "surf",
      overview: x(
        "A surfing village surrounded by some of the wildest beaches in Europe, with dunes, cliffs and constant Atlantic swell.",
        "Uma aldeia de surf rodeada por algumas das praias mais selvagens da Europa, com dunas, falésias e ondulação constante do Atlântico."
      ),
      stay: [
        r("In the village", "Na aldeia", "Surf houses and guesthouses close to Bordeira and Amado.", "Casas de surf e alojamentos perto da Bordeira e do Amado."),
        r("Vila do Bispo", "Vila do Bispo", "A larger village 15 km south, close to Cordoama and Castelejo.", "Uma vila maior, 15 km a sul, perto da Cordoama e do Castelejo."),
        r("Rural houses", "Casas rurais", "Quiet stays in the countryside, among the hills of the park.", "Estadias tranquilas no campo, entre os montes do parque natural.")
      ],
      do: [
        r("Bordeira and Amado (half day)", "Bordeira e Amado (meio dia)", "A huge beach with dunes and a river, and Amado, one of the best surf beaches. Take the cliff-top road between them.", "Uma enorme praia com dunas e ribeira e o Amado, uma das melhores praias de surf. Siga pela estrada sobre as falésias entre as duas."),
        r("Cordoama or Castelejo (2–3 h)", "Cordoama ou Castelejo (2–3 h)", "Dark cliffs and long beaches. Go down for a walk on the sand.", "Falésias escuras e praias longas. Desça para caminhar na areia."),
        r("Sunset at Cabo de São Vicente (within 25 km)", "Pôr do sol no Cabo de São Vicente (até 25 km)", "End the day at the south-western tip of Europe, once called the end of the world.", "Termine o dia no extremo sudoeste da Europa, em tempos chamado o fim do mundo.")
      ],
      eat: [
        r("Fish and percebes", "Peixe e percebes", "Small restaurants in the village with fish from the coast.", "Pequenos restaurantes na aldeia com peixe da costa."),
        r("Vila do Bispo", "Vila do Bispo", "Known for its barnacles, celebrated with a festival.", "Conhecida pelos percebes, celebrados com um festival."),
        r("Beach bars", "Bares de praia", "Simple meals after a day of surf.", "Refeições simples depois de um dia de surf.")
      ]
    },
    "cabo-sao-vicente": {
      name: "Cabo de São Vicente", district: "Faro", lat: 37.0227, lng: -8.9960, icon: "lighthouse",
      text: x("The south-western tip of Europe, once called the end of the world. Come for the cliffs and stay for the sunset.", "A ponta sudoeste da Europa, em tempos chamada o fim do mundo. Venha pelas falésias e fique pelo pôr do sol.")
    },
    lagos: {
      name: "Lagos", district: "Faro", lat: 37.1028, lng: -8.6730, icon: "cliffs",
      overview: x(
        "Golden cliffs, rock arches and clear water, with a historic town centre from the age of the Discoveries.",
        "Falésias douradas, arcos de pedra e água transparente, com um centro histórico da época dos Descobrimentos."
      ),
      stay: [
        r("Historic centre", "Centro histórico", "To walk to restaurants, the marina and the beaches.", "Para ir a pé aos restaurantes, à marina e às praias."),
        r("Near Ponta da Piedade", "Perto da Ponta da Piedade", "Hotels and apartments near the cliffs and the small beaches.", "Hotéis e apartamentos perto das falésias e das pequenas praias."),
        r("Meia Praia", "Meia Praia", "A long sandy beach, ideal for families.", "Uma longa praia de areia, ideal para famílias.")
      ],
      do: [
        r("Ponta da Piedade by kayak or boat (2 h)", "Ponta da Piedade de caiaque ou barco (2 h)", "Grottoes and rock arches seen from the water. Booking recommended in summer.", "Grutas e arcos de pedra vistos a partir da água. Reserva recomendada no verão."),
        r("Beaches (1 day)", "Praias (1 dia)", "Camilo, Dona Ana and Pinhão, small coves under the cliffs.", "Camilo, Dona Ana e Pinhão, pequenas enseadas sob as falésias."),
        r("Sagres and Burgau (within 25 km)", "Sagres e Burgau (até 25 km)", "The Sagres fortress and the fishing village of Burgau.", "A Fortaleza de Sagres e a aldeia piscatória de Burgau.")
      ],
      eat: [
        r("Historic centre", "Centro histórico", "Fish, seafood and cataplana in the old streets.", "Peixe, marisco e cataplana nas ruas antigas."),
        r("Marina and riverside", "Marina e avenida", "Restaurants and terraces with a view of the boats.", "Restaurantes e esplanadas com vista para os barcos."),
        r("Dom Rodrigo", "Dom Rodrigo", "An Algarve sweet with egg threads and almonds, wrapped in colourful foil.", "Um doce algarvio de fios de ovos e amêndoa, embrulhado em papel colorido.")
      ]
    },
    benagil: {
      name: "Benagil", district: "Faro", lat: 37.0875, lng: -8.4268, icon: "cliffs",
      text: x("Take a boat or kayak to the famous Benagil sea cave, with its round opening to the sky. Access rules change: check before going.", "Apanhe um barco ou caiaque até à famosa gruta de Benagil, com a sua abertura redonda para o céu. As regras de acesso mudam: confirme antes de ir.")
    },
    olhao: {
      name: "Olhão", district: "Faro", lat: 37.0260, lng: -7.8410, icon: "cataplana",
      text: x("Lunch in a fishing town on the Ria Formosa: a seafood cataplana to share, cooked in its copper pan.", "Almoço numa vila piscatória da Ria Formosa: uma cataplana de marisco para partilhar.")
    },
    tavira: {
      name: "Tavira", district: "Faro", lat: 37.1275, lng: -7.6506, icon: "bridge",
      overview: x(
        "The prettiest town of the eastern Algarve, with a Roman bridge, churches and hipped roofs, and an island beach reached by a small ferry.",
        "A vila mais bonita do Algarve oriental, com ponte romana, igrejas e telhados de tesouro, e uma praia na ilha a que se chega de barco."
      ),
      stay: [
        r("Historic centre", "Centro histórico", "To walk by the river, the market and the restaurants.", "Para passear junto ao rio, ao mercado e aos restaurantes."),
        r("Cabanas and Santa Luzia", "Cabanas e Santa Luzia", "Fishing villages on the Ria Formosa, quieter and close to the beaches.", "Aldeias piscatórias na Ria Formosa, mais tranquilas e perto das praias."),
        r("Countryside", "Campo", "Quintas among orange groves, with pools and space.", "Quintas entre laranjais, com piscina e espaço.")
      ],
      do: [
        r("Ilha de Tavira (1 day)", "Ilha de Tavira (1 dia)", "Take the small ferry to the island for a lazy day on the beach.", "Apanhe o barco para a ilha e passe um dia descansado na praia."),
        r("Historic centre and castle (2 h)", "Centro histórico e castelo (2 h)", "The Roman bridge, the castle garden and the churches of the old town.", "A ponte romana, o jardim do castelo e as igrejas do centro."),
        r("Praia do Barril and Cacela Velha (within 15 km)", "Praia do Barril e Cacela Velha (até 15 km)", "The anchor cemetery at Barril and the village of Cacela Velha above the lagoon.", "O cemitério das âncoras no Barril e a aldeia de Cacela Velha sobre a ria.")
      ],
      eat: [
        r("Santa Luzia, the octopus capital", "Santa Luzia, capital do polvo", "Octopus rice and grilled octopus by the Ria.", "Arroz de polvo e polvo grelhado junto à ria."),
        r("Riverside", "Junto ao rio", "Restaurants and terraces in the centre, for fish and cataplana.", "Restaurantes e esplanadas no centro, para peixe e cataplana."),
        r("Algarve sweets", "Doces algarvios", "Figs, almonds and carob in the traditional sweets of the Algarve.", "Figo, amêndoa e alfarroba na doçaria tradicional algarvia.")
      ]
    }
  });
})();
