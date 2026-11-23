/* =====================================================================
   PLACES – one card per place, shared by every route that passes there.
   Main places (where you sleep): overview + stay / do / eat (3 tips each).
   Places on the way: text (short).
   Texts: { en, pt } – Spanish and French fall back to English for now.
   r(titleEN, titlePT, textEN, textPT) builds one tip.
   ===================================================================== */
window.PLACES = window.PLACES || {};
(function () {
  const r = (te, tp, de, dp) => ({ t: { en: te, pt: tp }, d: { en: de, pt: dp } });
  const x = (en, pt) => ({ en, pt });

  Object.assign(window.PLACES, {
    /* ------------------------------------------------------------ PORTO */
    porto: {
      name: "Porto", district: "Porto", lat: 41.1408, lng: -8.6110, icon: "rabelo",
      overview: x(
        "Granite hills, tiled façades and the Douro river at its feet. Porto is best discovered on foot, from the Ribeira to the port wine cellars across the bridge in Gaia.",
        "Colinas de granito, fachadas de azulejo e o Douro a seus pés. O Porto descobre-se a pé, da Ribeira às caves de vinho do Porto, do outro lado da ponte, em Gaia."
      ),
      stay: [
        r("Baixa, Aliados and Bolhão", "Baixa, Aliados e Bolhão", "A central base for a first visit, with the main sights, cafés and the metro within walking distance.", "Base central para uma primeira visita, com os principais pontos de interesse, cafés e metro a poucos passos."),
        r("Cedofeita", "Cedofeita", "Independent shops, cafés and galleries. A good choice for those who like to explore on foot, away from the busiest streets.", "Comércio independente, cafés e galerias. Boa escolha para quem gosta de passear a pé, longe das ruas mais movimentadas."),
        r("Boavista", "Boavista", "Better for travelling by car: hotels with garages and easy access, using the metro to reach the historic centre.", "Melhor opção para quem viaja de carro: hotéis com garagem e acessos fáceis, usando o metro para chegar ao centro histórico.")
      ],
      do: [
        r("Historic centre and Ribeira (half day)", "Centro histórico e Ribeira (meio dia)", "São Bento station and its azulejo panels, the Cathedral, Clérigos Tower and the Ribeira by the river. No booking needed.", "Estação de São Bento e os seus painéis de azulejo, Sé, Torre dos Clérigos e Ribeira junto ao rio. Não precisa de reserva."),
        r("Port wine cellars in Gaia (1–2 h)", "Caves de vinho do Porto em Gaia (1–2 h)", "Cross the Luís I bridge on foot and visit a cellar with a tasting. Booking recommended, especially at weekends.", "Atravesse a ponte Luís I a pé e visite uma cave com prova. Reserva recomendada, sobretudo ao fim de semana."),
        r("Foz, Serralves and Matosinhos (within 10 km)", "Foz, Serralves e Matosinhos (até 10 km)", "Walk along the river mouth to the sea in Foz, visit the Serralves museum and gardens, and end the day by the beach in Matosinhos.", "Passeie junto à foz do Douro até ao mar, visite o museu e os jardins de Serralves e termine o dia junto à praia de Matosinhos.")
      ],
      eat: [
        r("Bolhão and Baixa", "Bolhão e Baixa", "Look for Porto cooking and petisco houses: tripas à moda do Porto, bifanas and the famous francesinha.", "Procure cozinha portuense e casas de petiscos: tripas à moda do Porto, bifanas e a famosa francesinha."),
        r("Ribeira", "Ribeira", "For a meal by the Douro with a view of the bridge and the boats. Compare menus before choosing, as it is a very touristy area.", "Para uma refeição junto ao Douro, com vista para a ponte e para os barcos. Compare ementas antes de escolher, por ser uma zona muito turística."),
        r("Matosinhos", "Matosinhos", "Next to the fish market and on Rua Heróis de França: grilled fish and seafood, a short trip from the centre.", "Junto à lota e na Rua Heróis de França: peixe grelhado e marisco, a uma curta deslocação do centro.")
      ]
    },

    braga: {
      name: "Braga", district: "Braga", lat: 41.5503, lng: -8.4201, icon: "sanctuary",
      text: x(
        "Portugal's religious capital. Climb the baroque stairway of Bom Jesus do Monte, a UNESCO site, and walk through the historic centre around the Cathedral.",
        "A capital religiosa de Portugal. Suba a escadaria barroca do Bom Jesus do Monte, Património Mundial, e passeie pelo centro histórico em torno da Sé."
      ),
      overview: x(
        "One of the oldest cities in Portugal, with a lively historic centre, baroque churches and the famous sanctuary of Bom Jesus on the hill.",
        "Uma das cidades mais antigas de Portugal, com um centro histórico animado, igrejas barrocas e o famoso santuário do Bom Jesus no monte."
      ),
      stay: [
        r("Historic centre", "Centro histórico", "Stay between the Cathedral and Avenida Central to do everything on foot, with cafés and restaurants on the doorstep.", "Fique entre a Sé e a Avenida Central para fazer tudo a pé, com cafés e restaurantes à porta."),
        r("Bom Jesus hill", "Monte do Bom Jesus", "Hotels among the trees, with views over the city. Quieter, and ideal if you are travelling by car.", "Hotéis entre o arvoredo, com vista sobre a cidade. Mais tranquilo e ideal para quem viaja de carro."),
        r("Rural tourism in the Minho", "Turismo rural no Minho", "Manor houses and farm stays within 20 minutes of the city, for green landscapes and Vinho Verde.", "Casas senhoriais e quintas a menos de 20 minutos da cidade, para paisagens verdes e vinho verde.")
      ],
      do: [
        r("Bom Jesus do Monte (2 h)", "Bom Jesus do Monte (2 h)", "Go up by the water-powered funicular, the oldest in the world still working, and come down the baroque stairway.", "Suba no elevador movido a água, o mais antigo do mundo em funcionamento, e desça pela escadaria barroca."),
        r("Cathedral and historic centre (half day)", "Sé e centro histórico (meio dia)", "Visit the oldest cathedral in Portugal, the Biscainhos garden and the Arco da Porta Nova.", "Visite a Sé mais antiga de Portugal, o jardim dos Biscainhos e o Arco da Porta Nova."),
        r("Sameiro and Guimarães (within 20 km)", "Sameiro e Guimarães (até 20 km)", "Enjoy the view from the Sameiro sanctuary and spend an afternoon in Guimarães, the birthplace of Portugal.", "Aprecie a vista do santuário do Sameiro e passe uma tarde em Guimarães, o berço de Portugal.")
      ],
      eat: [
        r("Historic centre", "Centro histórico", "Minho cooking in family restaurants: bacalhau à Braga, rojões and arroz de pato.", "Cozinha minhota em restaurantes familiares: bacalhau à Braga, rojões e arroz de pato."),
        r("Historic cafés", "Cafés históricos", "Stop for coffee and a pastry in one of the old cafés on Avenida Central. Try the pudim abade de Priscos.", "Pare para um café e um doce num dos cafés antigos da Avenida Central. Prove o pudim abade de Priscos."),
        r("Vinho Verde", "Vinho verde", "Ask for a local Vinho Verde with your meal. It is light, fresh and pairs well with the regional food.", "Peça um vinho verde da região à refeição. É leve, fresco e acompanha bem a comida regional.")
      ]
    },

    guimaraes: {
      name: "Guimarães", district: "Braga", lat: 41.4479, lng: -8.2900, icon: "castle",
      text: x(
        "The birthplace of Portugal, where the first king, Afonso Henriques, was born. Visit the castle and the Palace of the Dukes, and walk through the medieval centre, a UNESCO site.",
        "O berço de Portugal, onde nasceu D. Afonso Henriques. Visite o castelo e o Paço dos Duques e passeie pelo centro medieval, Património Mundial."
      )
    },

    viana: {
      name: "Viana do Castelo", district: "Viana do Castelo", lat: 41.6932, lng: -8.8329, icon: "monastery",
      overview: x(
        "An elegant town where the Lima river meets the Atlantic, known for its gold filigree, its colourful traditional costumes and the view from Santa Luzia.",
        "Uma cidade elegante onde o rio Lima encontra o Atlântico, conhecida pela filigrana em ouro, pelos trajes tradicionais coloridos e pela vista de Santa Luzia."
      ),
      stay: [
        r("Historic centre", "Centro histórico", "Around Praça da República, to walk everywhere and enjoy the town in the evening.", "Junto à Praça da República, para fazer tudo a pé e aproveitar a cidade ao fim do dia."),
        r("Santa Luzia hill", "Monte de Santa Luzia", "Hotels at the top of the hill, with one of the most beautiful views in Portugal over the river and the sea.", "Hotéis no alto do monte, com uma das vistas mais bonitas de Portugal sobre o rio e o mar."),
        r("By the beach", "Junto à praia", "Apartments and guesthouses near Cabedelo or Praia Norte, for those who prefer the sea and surf.", "Apartamentos e alojamentos locais junto ao Cabedelo ou à Praia Norte, para quem prefere o mar e o surf.")
      ],
      do: [
        r("Santa Luzia (1–2 h)", "Santa Luzia (1–2 h)", "Go up by funicular to the basilica and climb to the dome for the view over the Lima estuary.", "Suba de funicular até à basílica e vá à cúpula para ver o estuário do Lima."),
        r("Historic centre and Gil Eannes ship (2 h)", "Centro histórico e navio Gil Eannes (2 h)", "Praça da República, the Costume Museum and the old hospital ship moored in the harbour.", "Praça da República, Museu do Traje e o antigo navio-hospital atracado no porto."),
        r("Beaches and Caminha (within 25 km)", "Praias e Caminha (até 25 km)", "Cabedelo for surf and kitesurf, Moledo for long walks, and the small town of Caminha at the mouth of the Minho river.", "Cabedelo para surf e kitesurf, Moledo para longas caminhadas e a vila de Caminha, na foz do rio Minho.")
      ],
      eat: [
        r("Historic centre", "Centro histórico", "Family restaurants with Minho cooking: arroz de sarrabulho, bacalhau and grilled meat.", "Restaurantes familiares com cozinha minhota: arroz de sarrabulho, bacalhau e carnes grelhadas."),
        r("By the harbour", "Junto ao porto", "Fresh fish and seafood near the fishing harbour, with Vinho Verde from the Lima valley.", "Peixe fresco e marisco perto do porto de pesca, com vinho verde do vale do Lima."),
        r("Sweets", "Doçaria", "Try the bolas de Berlim of Viana, famous across the north, and the local convent sweets.", "Prove as bolas de Berlim de Viana, famosas em todo o norte, e a doçaria conventual local.")
      ]
    },

    "ponte-de-lima": {
      name: "Ponte de Lima", district: "Viana do Castelo", lat: 41.7673, lng: -8.5838, icon: "bridge",
      text: x(
        "One of the oldest towns in Portugal, with a medieval bridge over the Lima river and sandy riverbanks. Walk along the river and taste arroz de sarrabulho.",
        "Uma das vilas mais antigas de Portugal, com uma ponte medieval sobre o rio Lima e margens de areia. Passeie junto ao rio e prove o arroz de sarrabulho."
      )
    },

    "ponte-da-barca": {
      name: "Ponte da Barca", district: "Viana do Castelo", lat: 41.8067, lng: -8.4170, icon: "bridge",
      text: x(
        "A quiet riverside town with a 15th-century bridge and a pretty garden by the Lima. The gateway to the Peneda-Gerês national park.",
        "Uma vila tranquila junto ao rio, com uma ponte do século XV e um bonito jardim junto ao Lima. A porta de entrada do Parque Nacional da Peneda-Gerês."
      )
    },

    geres: {
      name: "Peneda-Gerês", district: "Braga", lat: 41.7280, lng: -8.1610, icon: "espigueiro",
      overview: x(
        "Portugal's only national park: granite mountains, waterfalls, wild horses and villages where time seems to have stopped.",
        "O único parque nacional de Portugal: serras de granito, cascatas, garranos e aldeias onde o tempo parece ter parado."
      ),
      stay: [
        r("Gerês village (Termas do Gerês)", "Vila do Gerês (Termas do Gerês)", "The most practical base, with hotels, restaurants and easy access to the waterfalls and trails in the south of the park.", "A base mais prática, com hotéis, restaurantes e acesso fácil às cascatas e trilhos do sul do parque."),
        r("Soajo and Lindoso", "Soajo e Lindoso", "Stone houses turned into rural tourism, next to the famous granaries. Ideal for silence and nature.", "Casas de pedra recuperadas em turismo rural, junto aos famosos espigueiros. Ideal para silêncio e natureza."),
        r("Caniçada reservoir", "Albufeira da Caniçada", "Hotels and houses with views over the water, for swimming, kayaking and boat trips.", "Hotéis e casas com vista para a água, para banhos, caiaque e passeios de barco.")
      ],
      do: [
        r("Waterfalls and river pools (half day)", "Cascatas e lagoas (meio dia)", "Arado, Tahiti and Portela do Homem. In summer, go early: parking is limited and some areas have access rules.", "Arado, Tahiti e Portela do Homem. No verão, vá cedo: o estacionamento é limitado e algumas zonas têm regras de acesso."),
        r("Soajo and Lindoso granaries (2 h)", "Espigueiros do Soajo e do Lindoso (2 h)", "Stone granaries on granite outcrops and the Lindoso castle, two of the most photographed places in the north.", "Espigueiros de pedra sobre lajes de granito e o castelo do Lindoso, dois dos lugares mais fotografados do norte."),
        r("Trails and the Roman road (2–4 h)", "Trilhos e Geira romana (2–4 h)", "Walk a stretch of the Roman road with its milestones or one of the marked trails, such as Trilho da Preguiça.", "Percorra um troço da Geira romana com os seus marcos miliários ou um dos trilhos marcados, como o Trilho da Preguiça.")
      ],
      eat: [
        r("Barrosã beef", "Carne barrosã", "The local beef is the star: posta barrosã grilled over wood, served with potatoes and greens.", "A carne da região é a estrela: posta barrosã grelhada na brasa, com batata e grelos."),
        r("Village restaurants", "Restaurantes de aldeia", "In Soajo, Lindoso and Campo do Gerês, look for small family restaurants with cabrito and smoked meats.", "No Soajo, Lindoso e Campo do Gerês, procure pequenos restaurantes familiares com cabrito e fumeiro."),
        r("Picnic with a view", "Piquenique com vista", "Take bread, cheese and local smoked sausage for a picnic by a river pool or a viewpoint.", "Leve pão, queijo e fumeiro da região para um piquenique junto a uma lagoa ou a um miradouro.")
      ]
    },

    douro: {
      name: "Douro Vinhateiro", district: "Vila Real", lat: 41.1920, lng: -7.5468, icon: "wine",
      overview: x(
        "Terraced vineyards along the river, in the oldest demarcated wine region in the world. A UNESCO landscape to enjoy slowly, between viewpoints, wine estates and the river.",
        "Socalcos de vinha ao longo do rio, na região vinícola demarcada mais antiga do mundo. Uma paisagem Património Mundial para apreciar devagar, entre miradouros, quintas e o rio."
      ),
      stay: [
        r("Wine estate (quinta)", "Quinta vinícola", "Wake up among the vineyards, with tastings in the cellar. Confirm the access road and parking, as some quintas are on steep roads.", "Acorde entre as vinhas, com provas na adega. Confirme o acesso e o estacionamento, porque algumas quintas ficam em estradas íngremes."),
        r("Pinhão", "Pinhão", "A small village by the river, at the heart of the region, with the train station and boat trips at the door.", "Uma pequena vila junto ao rio, no coração da região, com a estação de comboio e os passeios de barco à porta."),
        r("Peso da Régua", "Peso da Régua", "A small town with more services and restaurants, and a good base to combine the Douro with Lamego and Vila Real.", "Uma cidade pequena com mais serviços e restaurantes e boa base para combinar o Douro com Lamego e Vila Real.")
      ],
      do: [
        r("Visit and tasting at a quinta (1–2 h)", "Visita e prova numa quinta (1–2 h)", "Visit the vineyards and the cellar and taste port and Douro wines. Booking required.", "Visite as vinhas e a adega e prove vinhos do Porto e do Douro. Exige reserva."),
        r("Boat trip on the river (1–2 h)", "Passeio de barco no rio (1–2 h)", "A rabelo boat or cruise from Pinhão or Régua, to see the terraces from the water.", "Barco rabelo ou cruzeiro a partir do Pinhão ou da Régua, para ver os socalcos a partir do rio."),
        r("Viewpoints and the N222 (within 20 km)", "Miradouros e a N222 (até 20 km)", "Casal de Loivos, São Leonardo de Galafura and the riverside N222 between Régua and Pinhão, one of the most beautiful roads in the world.", "Casal de Loivos, São Leonardo de Galafura e a N222 junto ao rio, entre a Régua e o Pinhão, uma das estradas mais bonitas do mundo.")
      ],
      eat: [
        r("Lunch at a quinta", "Almoço numa quinta", "Several wine estates serve lunch with a view and wine pairing. Book ahead.", "Várias quintas servem almoço com vista e vinhos a acompanhar. Reserve com antecedência."),
        r("Regional cooking", "Cozinha regional", "Cabrito assado, posta, bola de carne and Douro olive oil in the family restaurants of the villages.", "Cabrito assado, posta, bola de carne e azeite do Douro nos restaurantes familiares das aldeias."),
        r("By the river", "Junto ao rio", "In Pinhão and Régua, choose a terrace by the Douro for a late lunch or a sunset glass of wine.", "No Pinhão e na Régua, escolha uma esplanada junto ao Douro para um almoço tardio ou um copo ao pôr do sol.")
      ]
    },

    "vila-real": {
      name: "Vila Real", district: "Vila Real", lat: 41.3006, lng: -7.7441, icon: "palace",
      overview: x(
        "A mountain city on the edge of the Douro, home to the baroque Casa de Mateus and close to the Alvão natural park.",
        "Uma cidade de montanha à beira do Douro, onde fica a barroca Casa de Mateus, perto do Parque Natural do Alvão."
      ),
      stay: [
        r("City centre", "Centro da cidade", "Practical for a short stay, near restaurants, the cathedral and the viewpoint over the Corgo gorge.", "Prático para uma estadia curta, perto de restaurantes, da Sé e do miradouro sobre o vale do Corgo."),
        r("Near Casa de Mateus", "Junto à Casa de Mateus", "Quieter hotels and guesthouses on the outskirts, with parking and green surroundings.", "Hotéis e alojamentos mais tranquilos na periferia, com estacionamento e envolvente verde."),
        r("Rural tourism in Alvão", "Turismo rural no Alvão", "Stone houses in mountain villages such as Lamas de Olo, for nature and starry skies.", "Casas de pedra em aldeias de montanha como Lamas de Olo, para natureza e céus estrelados.")
      ],
      do: [
        r("Casa de Mateus (1–2 h)", "Casa de Mateus (1–2 h)", "Baroque palace with formal gardens and a mirror lake, the house on the famous rosé label.", "Palácio barroco com jardins e lago espelhado, a casa do famoso rótulo do Mateus Rosé."),
        r("Fisgas de Ermelo (within 30 km)", "Fisgas de Ermelo (até 30 km)", "One of the highest waterfalls in Portugal, in the Alvão natural park. Good walking shoes recommended.", "Uma das quedas de água mais altas de Portugal, no Parque Natural do Alvão. Leve calçado próprio para caminhar."),
        r("Bisalhães black pottery", "Olaria negra de Bisalhães", "Look for the black clay pottery, an intangible heritage of humanity, made in the village of Bisalhães.", "Procure a louça preta de Bisalhães, Património Imaterial da Humanidade, feita na aldeia com o mesmo nome.")
      ],
      eat: [
        r("Cristas de galo", "Cristas de galo", "The city's famous pastry, filled with egg and almond. Try it in one of the traditional pastry shops.", "O doce mais famoso da cidade, recheado de ovo e amêndoa. Prove numa das pastelarias tradicionais."),
        r("Trás-os-Montes cooking", "Cozinha transmontana", "Cabrito, posta and smoked meats in the restaurants of the centre.", "Cabrito, posta e fumeiro nos restaurantes do centro."),
        r("Douro wines", "Vinhos do Douro", "Vila Real is at the edge of the Douro: ask for a local red or a port with dessert.", "Vila Real fica à porta do Douro: peça um tinto da região ou um Porto à sobremesa.")
      ]
    },

    lamego: {
      name: "Lamego", district: "Viseu", lat: 41.0965, lng: -7.8090, icon: "sanctuary",
      overview: x(
        "A noble city at the gates of the Douro, crowned by the baroque stairway of Nossa Senhora dos Remédios and known for its sparkling wine and smoked ham.",
        "Uma cidade nobre à porta do Douro, coroada pela escadaria barroca de Nossa Senhora dos Remédios e conhecida pelo espumante e pelo presunto."
      ),
      stay: [
        r("Historic centre", "Centro histórico", "Close to the Cathedral and the foot of the sanctuary stairway, to explore on foot.", "Perto da Sé e do início da escadaria do santuário, para explorar a pé."),
        r("Wine estates nearby", "Quintas nos arredores", "Quintas with views over the vineyards, between Lamego and the Douro river.", "Quintas com vista sobre as vinhas, entre Lamego e o rio Douro."),
        r("Régua, 12 km away", "Régua, a 12 km", "An alternative by the river, with more choice of hotels.", "Alternativa junto ao rio, com mais oferta de hotéis.")
      ],
      do: [
        r("Sanctuary of Nossa Senhora dos Remédios (1–2 h)", "Santuário de Nossa Senhora dos Remédios (1–2 h)", "Climb the 686 steps decorated with azulejos and fountains, or drive up and walk down.", "Suba os 686 degraus decorados com azulejos e fontes, ou vá de carro e desça a pé."),
        r("Sparkling wine cellars (1 h)", "Caves de espumante (1 h)", "Visit one of the cellars that produce Lamego's sparkling wine, with a tasting. Booking recommended.", "Visite uma das caves de espumante de Lamego, com prova. Reserva recomendada."),
        r("Ucanha and Salzedas (within 20 km)", "Ucanha e Salzedas (até 20 km)", "A medieval fortified bridge and a Cistercian monastery in the Varosa valley.", "Uma ponte fortificada medieval e um mosteiro cisterciense no vale do Varosa.")
      ],
      eat: [
        r("Presunto and bola de Lamego", "Presunto e bola de Lamego", "Taste the smoked ham and the bola, a bread filled with meat, in the cafés of the centre.", "Prove o presunto e a bola de Lamego, um pão recheado com carne, nos cafés do centro."),
        r("Regional restaurants", "Restaurantes regionais", "Cabrito assado and dishes from the Douro and Beira mountains.", "Cabrito assado e pratos das serras do Douro e da Beira."),
        r("Douro wines", "Vinhos do Douro", "Pair your meal with a Douro red or the local sparkling wine.", "Acompanhe com um tinto do Douro ou com o espumante da região.")
      ]
    },

    viseu: {
      name: "Viseu", district: "Viseu", lat: 40.6566, lng: -7.9125, icon: "wine",
      text: x(
        "The garden city of the Dão wine region, with a beautiful cathedral square and the Grão Vasco museum. A good lunch stop: vitela de Lafões and a glass of Dão red.",
        "A cidade-jardim da região do Dão, com um belo Largo da Sé e o Museu Grão Vasco. Boa paragem para almoço: vitela de Lafões e um copo de tinto do Dão."
      ),
      overview: x(
        "The garden city of the Dão wine region, with a well-kept historic centre, the Grão Vasco museum and a relaxed pace of life.",
        "A cidade-jardim da região do Dão, com um centro histórico cuidado, o Museu Grão Vasco e um ritmo de vida tranquilo."
      ),
      stay: [
        r("Historic centre", "Centro histórico", "Close to the Cathedral and Rua Direita, to enjoy the city on foot.", "Perto da Sé e da Rua Direita, para aproveitar a cidade a pé."),
        r("Dão wine estates", "Quintas do Dão", "Wine tourism in quintas around the city, with tastings and vineyard views.", "Enoturismo em quintas em redor da cidade, com provas e vista sobre as vinhas."),
        r("Near the Fontelo park", "Junto ao parque do Fontelo", "Quieter hotels with parking, a short walk from the centre.", "Hotéis mais tranquilos e com estacionamento, a pouca distância do centro.")
      ],
      do: [
        r("Cathedral and Grão Vasco Museum (2 h)", "Sé e Museu Grão Vasco (2 h)", "The cathedral square and the museum with paintings by Vasco Fernandes, master of the Viseu school.", "O Largo da Sé e o museu com a pintura de Vasco Fernandes, mestre da escola de Viseu."),
        r("Dão wine tasting (1–2 h)", "Prova de vinhos do Dão (1–2 h)", "Visit a quinta or the Solar do Vinho do Dão. Booking recommended.", "Visite uma quinta ou o Solar do Vinho do Dão. Reserva recomendada."),
        r("Ecopista do Dão (within 20 km)", "Ecopista do Dão (até 20 km)", "A cycling and walking path along an old railway line, through pine forests and villages.", "Um percurso para bicicleta e caminhada numa antiga linha de comboio, entre pinhais e aldeias.")
      ],
      eat: [
        r("Vitela de Lafões", "Vitela de Lafões", "The region's veal, roasted in the oven, is a must in the restaurants of the centre.", "A vitela da região, assada no forno, é obrigatória nos restaurantes do centro."),
        r("Rua Direita and surroundings", "Rua Direita e envolvente", "Small restaurants and tascas in the old streets of the city.", "Pequenos restaurantes e tascas nas ruas antigas da cidade."),
        r("Viriatos and Dão wine", "Viriatos e vinho do Dão", "Try the viriato pastry and end the meal with a glass of Dão.", "Prove o doce viriato e termine a refeição com um copo de Dão.")
      ]
    },

    mateus: {
      name: "Casa de Mateus", district: "Vila Real", lat: 41.2966, lng: -7.7155, icon: "palace",
      text: x("A baroque palace with formal gardens and a mirror lake, the house on the label of the famous Mateus rosé.", "Um palácio barroco com jardins e um lago espelhado, a casa que aparece no rótulo do famoso Mateus Rosé.")
    },
    regua: {
      name: "Peso da Régua", district: "Vila Real", lat: 41.1615, lng: -7.7860, icon: "rabelo",
      text: x("Board a rabelo boat, the traditional boat that carried port wine barrels down the river, for a cruise between Régua and Pinhão.", "Embarque num barco rabelo, o barco que levava as pipas de vinho do Porto rio abaixo, para um cruzeiro entre a Régua e o Pinhão.")
    },
    "sao-salvador": {
      name: "São Salvador do Mundo", district: "Viseu", lat: 41.1265, lng: -7.4108, icon: "viewpoint",
      text: x("Small chapels on a hill above a bend of the Douro, with one of the widest views of the valley.", "Pequenas capelas num monte sobre uma curva do Douro, com uma das vistas mais amplas do vale.")
    },
    coa: {
      name: "Vale do Côa", district: "Guarda", lat: 41.0815, lng: -7.1395, icon: "rockart",
      text: x("Open-air Palaeolithic rock art, engraved more than 20,000 years ago and listed by UNESCO. Guided visits must be booked.", "Arte rupestre paleolítica ao ar livre, gravada há mais de 20 000 anos e Património Mundial. As visitas guiadas exigem reserva.")
    }
  });
})();
