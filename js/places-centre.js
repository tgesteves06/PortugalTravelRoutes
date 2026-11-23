/* PLACES – Centre of Portugal. See places-north.js for the format. */
window.PLACES = window.PLACES || {};
(function () {
  const r = (te, tp, de, dp) => ({ t: { en: te, pt: tp }, d: { en: de, pt: dp } });
  const x = (en, pt) => ({ en, pt });

  Object.assign(window.PLACES, {
    "serra-estrela": {
      name: "Serra da Estrela", district: "Guarda", lat: 40.4060, lng: -7.5410, icon: "cheese",
      overview: x(
        "The highest mountains of mainland Portugal: glacial valleys, granite villages, lakes and the creamy Serra da Estrela cheese.",
        "As montanhas mais altas de Portugal continental: vales glaciares, aldeias de granito, lagoas e o cremoso queijo da Serra da Estrela."
      ),
      stay: [
        r("Manteigas", "Manteigas", "A village at the bottom of the Zêzere glacial valley, a central base for trails and the Torre.", "Uma vila no fundo do vale glaciar do Zêzere, base central para trilhos e para a Torre."),
        r("Hotels in the mountain", "Hotéis na serra", "Between Penhas da Saúde and the Torre, for those who want to wake up in the mountain landscape.", "Entre as Penhas da Saúde e a Torre, para quem quer acordar na paisagem de montanha."),
        r("Rural tourism and historic villages", "Turismo rural e aldeias históricas", "Stone houses in villages such as Linhares da Beira or Sortelha, quieter and full of character.", "Casas de pedra em aldeias como Linhares da Beira ou Sortelha, mais tranquilas e com carácter.")
      ],
      do: [
        r("Torre and the high plateau (half day)", "Torre e planalto superior (meio dia)", "Drive up to 1,993 m, stopping at the Lagoa Comprida and the Covão do Boi viewpoints. In winter, check if the roads are open.", "Suba até aos 1993 m, parando na Lagoa Comprida e nos miradouros do Covão do Boi. No inverno, confirme se as estradas estão abertas."),
        r("Zêzere glacial valley and Covão d'Ametade (2–3 h)", "Vale glaciar do Zêzere e Covão d'Ametade (2–3 h)", "A U-shaped valley carved by ice, with a picnic area among the birch trees at Covão d'Ametade.", "Um vale em U esculpido pelo gelo, com zona de merendas entre os vidoeiros do Covão d'Ametade."),
        r("Wool museum and Linhares da Beira (within 30 km)", "Museu dos Lanifícios e Linhares da Beira (até 30 km)", "Learn about the wool tradition in Covilhã and visit the historic village of Linhares, a paragliding spot.", "Conheça a tradição dos lanifícios na Covilhã e visite a aldeia histórica de Linhares, ponto de partida de parapente.")
      ],
      eat: [
        r("Serra da Estrela cheese", "Queijo da Serra da Estrela", "Buy it from a local producer and eat it at room temperature, with a spoon when it is buttery.", "Compre a um produtor local e coma à temperatura ambiente, à colher quando estiver amanteigado."),
        r("Mountain cooking", "Cozinha de montanha", "Cabrito, chanfana, bean stews and trout in the restaurants of Manteigas and the villages.", "Cabrito, chanfana, feijoadas e truta nos restaurantes de Manteigas e das aldeias."),
        r("Requeijão with pumpkin jam", "Requeijão com doce de abóbora", "A light dessert typical of the region, perfect after a mountain walk.", "Uma sobremesa leve e típica da região, perfeita depois de uma caminhada na serra.")
      ]
    },

    piodao: {
      name: "Piódão", district: "Coimbra", lat: 40.2297, lng: -7.8251, icon: "schist",
      text: x(
        "A schist village built in terraces on the slope of the Açor mountain, with houses with blue doors and windows. The road is narrow and winding: drive slowly.",
        "Uma aldeia de xisto construída em socalcos na encosta da serra do Açor, com casas de portas e janelas azuis. A estrada é estreita e sinuosa: conduza devagar."
      )
    },

    coimbra: {
      name: "Coimbra", district: "Coimbra", lat: 40.2077, lng: -8.4265, icon: "university",
      overview: x(
        "A university city since 1290, climbing the hill above the Mondego river. Students in black capes, fado sung by men and a library that is one of the most beautiful in the world.",
        "Cidade universitária desde 1290, a subir a colina sobre o Mondego. Estudantes de capa negra, fado cantado por homens e uma das bibliotecas mais bonitas do mundo."
      ),
      stay: [
        r("Baixa", "Baixa", "Practical for a short stay, close to restaurants and the river.", "Prática para uma estadia curta, perto de restaurantes e do rio."),
        r("Alta and Sé Velha", "Alta e Sé Velha", "A historic atmosphere next to the University, but with steep streets and difficult access with luggage.", "Ambiente histórico junto à Universidade, mas com subidas e acessos menos cómodos com bagagem."),
        r("Santa Clara, near the bridge", "Santa Clara, perto da ponte", "An alternative on the opposite bank, with a walking path to the Baixa and views over the city.", "Alternativa na margem oposta, com acesso pedonal à Baixa e vista sobre a cidade.")
      ],
      do: [
        r("University and Joanina Library (2 h)", "Universidade e Biblioteca Joanina (2 h)", "The Paço das Escolas, the Sala dos Capelos and the baroque library. Book a time slot for the library.", "O Paço das Escolas, a Sala dos Capelos e a biblioteca barroca. Reserve horário para a biblioteca."),
        r("Sé Velha, Santa Cruz and Coimbra fado (evening)", "Sé Velha, Santa Cruz e fado de Coimbra (noite)", "Walk down from the Romanesque cathedral to the Santa Cruz monastery and listen to Coimbra fado, if the schedule allows.", "Desça da Sé Velha românica até ao Mosteiro de Santa Cruz e ouça fado de Coimbra, se o horário permitir."),
        r("Mondego and Conímbriga (within 20 km)", "Mondego e Conímbriga (até 20 km)", "Walk along the river and visit Conímbriga, one of the largest Roman towns in Portugal, with mosaics still in place.", "Caminhe junto ao rio e visite Conímbriga, uma das maiores cidades romanas de Portugal, com mosaicos no local.")
      ],
      eat: [
        r("Baixa", "Baixa", "Between Praça do Comércio and Praça 8 de Maio: traditional cooking and historic cafés.", "Entre a Praça do Comércio e a Praça 8 de Maio: cozinha tradicional e cafés históricos."),
        r("Alta, near the Sé Velha", "Alta, junto à Sé Velha", "Small restaurants for a meal during the visit to the University.", "Pequenos restaurantes para uma refeição durante a visita à Universidade."),
        r("Typical flavours", "Sabores típicos", "Chanfana, leitão from nearby Mealhada and the pastéis de Santa Clara and arrufadas for dessert.", "Chanfana, leitão da vizinha Mealhada e, à sobremesa, pastéis de Santa Clara e arrufadas.")
      ]
    },

    aveiro: {
      name: "Aveiro", district: "Aveiro", lat: 40.6405, lng: -8.6538, icon: "moliceiro",
      text: x(
        "Canals, painted moliceiro boats and the old fishermen's quarter of Beira-Mar. Take a boat trip, taste ovos moles and have lunch in Beira-Mar.",
        "Canais, moliceiros pintados e o antigo bairro piscatório da Beira-Mar. Faça um passeio de moliceiro, prove ovos moles e almoce na Beira-Mar."
      ),
      overview: x(
        "A city of canals and colourful moliceiro boats, Art Nouveau houses and the sweet ovos moles, between the lagoon and the sea.",
        "Uma cidade de canais e moliceiros coloridos, casas Arte Nova e doces ovos moles, entre a ria e o mar."
      ),
      stay: [
        r("City centre and canals", "Centro e canais", "To walk everywhere, close to the boats and the restaurants.", "Para fazer tudo a pé, perto dos barcos e dos restaurantes."),
        r("Costa Nova and Barra", "Costa Nova e Barra", "Apartments and hotels by the beach, 10 km away, for a summer stay.", "Apartamentos e hotéis junto à praia, a 10 km, para uma estadia de verão."),
        r("Near the lagoon", "Junto à ria", "Quieter hotels with parking, a short drive from the centre.", "Hotéis mais tranquilos e com estacionamento, a poucos minutos do centro.")
      ],
      do: [
        r("Moliceiro boat trip (45 min)", "Passeio de moliceiro (45 min)", "A short trip along the canals. No need to book ahead outside high season.", "Um passeio curto pelos canais. Fora da época alta não é preciso reservar."),
        r("Beira-Mar and Art Nouveau (1–2 h)", "Beira-Mar e Arte Nova (1–2 h)", "The old fishermen's quarter, the fish market and the Art Nouveau façades of the centre.", "O antigo bairro piscatório, o mercado do peixe e as fachadas Arte Nova do centro."),
        r("Costa Nova and Vista Alegre (within 15 km)", "Costa Nova e Vista Alegre (até 15 km)", "The striped houses of Costa Nova, the Barra lighthouse and the Vista Alegre porcelain museum.", "As casas às riscas da Costa Nova, o farol da Barra e o museu da porcelana Vista Alegre.")
      ],
      eat: [
        r("Beira-Mar", "Beira-Mar", "Eel stew, caldeirada and grilled fish in the old fishermen's quarter.", "Caldeirada de enguias e peixe grelhado no antigo bairro piscatório."),
        r("Ovos moles", "Ovos moles", "The famous sweet of egg yolk and sugar in wafer shells. Buy them from a traditional producer.", "O famoso doce de gema e açúcar em hóstia. Compre a um produtor tradicional."),
        r("Costa Nova", "Costa Nova", "Seafood and fish restaurants by the lagoon, with a sunset view.", "Restaurantes de peixe e marisco junto à ria, com vista para o pôr do sol.")
      ]
    },

    "costa-nova": {
      name: "Costa Nova", district: "Aveiro", lat: 40.6110, lng: -8.7510, icon: "striped",
      text: x("A row of striped wooden houses facing the lagoon. Perfect for photos before heading south.", "Uma fila de casas às riscas viradas para a ria. Ideal para fotografias antes de seguir para sul.")
    },

    obidos: {
      name: "Óbidos", district: "Leiria", lat: 39.3606, lng: -9.1571, icon: "castle",
      overview: x(
        "A walled medieval town of white houses trimmed in blue and yellow, with bookshops in unexpected places and ginja served in a chocolate cup.",
        "Uma vila medieval muralhada de casas brancas com barras azuis e amarelas, livrarias em sítios inesperados e ginja servida em copo de chocolate."
      ),
      stay: [
        r("Inside the walls", "Dentro das muralhas", "To feel the atmosphere of the town at the end of the day. Plan to carry your luggage on foot.", "Para viver o ambiente da vila ao final do dia. Prever transporte da bagagem a pé."),
        r("By the Porta da Vila, outside the walls", "Junto à Porta da Vila, fora das muralhas", "A compromise between being close and having easy access to the car parks.", "Compromisso entre proximidade e acesso aos parques de estacionamento."),
        r("Immediate surroundings", "Arredores imediatos", "For those who prefer more space and a place with parking, such as a rural house or a hotel with a garden.", "Para quem prefere mais espaço e alojamento com estacionamento, como uma casa rural ou um hotel com jardim.")
      ],
      do: [
        r("Porta da Vila, Rua Direita and castle (2 h)", "Porta da Vila, Rua Direita e castelo (2 h)", "Enter through the tiled gate, walk the main street to the Church of Santa Maria and the castle, and walk on the walls at sunset.", "Entre pela porta com azulejos, percorra a Rua Direita até à Igreja de Santa Maria e ao castelo e caminhe nas muralhas ao pôr do sol."),
        r("Bookshops and ginja", "Livrarias e ginja", "Óbidos is a UNESCO City of Literature: look for bookshops in a church and a market. Taste ginja in a chocolate cup.", "Óbidos é Cidade Literária da UNESCO: procure livrarias numa igreja e num mercado. Prove ginja em copo de chocolate."),
        r("Óbidos lagoon and Foz do Arelho (within 15 km)", "Lagoa de Óbidos e Foz do Arelho (até 15 km)", "Calm waters for swimming, kayaking and kitesurfing, where the lagoon meets the sea.", "Águas calmas para banhos, caiaque e kitesurf, onde a lagoa encontra o mar.")
      ],
      eat: [
        r("Rua Direita and side streets", "Rua Direita e ruas adjacentes", "Meals inside the town walls, in small restaurants with traditional cooking.", "Refeições dentro da vila, em pequenos restaurantes de cozinha tradicional."),
        r("Around the Church of São Pedro", "Largo e envolvente da Igreja de São Pedro", "Another area to explore on foot, a little quieter.", "Outra zona a explorar a pé, um pouco mais tranquila."),
        r("Outside the walls, near the entrance", "Fora das muralhas, junto à entrada", "An alternative to compare menus before choosing. Nearby Caldas da Rainha is famous for its sweets.", "Alternativa para comparar ementas antes de escolher. Nas vizinhas Caldas da Rainha, prove as cavacas e as trouxas.")
      ]
    },

    nazare: {
      name: "Nazaré", district: "Leiria", lat: 39.6012, lng: -9.0700, icon: "wave",
      text: x(
        "The beach, the seafront promenade and the Sítio viewpoint, reached by funicular. Book lunch on the promenade or in the streets near the beach.",
        "Praia, marginal e miradouro do Sítio, a que se chega de funicular. Reserve o almoço na marginal ou nas ruas próximas da praia."
      ),
      overview: x(
        "A fishing town famous for the biggest waves ever surfed, with a long beach, a funicular to the Sítio cliff and women still drying fish in the sun.",
        "Uma vila piscatória famosa pelas maiores ondas alguma vez surfadas, com uma longa praia, um funicular até ao Sítio e mulheres que ainda secam peixe ao sol."
      ),
      stay: [
        r("By the beach", "Junto à praia", "Apartments and hotels on the seafront, to enjoy the town in the evening.", "Apartamentos e hotéis na marginal, para aproveitar a vila ao fim do dia."),
        r("Sítio", "Sítio", "On top of the cliff, quieter and with views over the bay.", "No alto da falésia, mais tranquilo e com vista sobre a baía."),
        r("São Martinho do Porto, 13 km away", "São Martinho do Porto, a 13 km", "A calm shell-shaped bay, ideal for families.", "Uma baía calma em forma de concha, ideal para famílias.")
      ],
      do: [
        r("Funicular and Sítio viewpoint (1 h)", "Funicular e miradouro do Sítio (1 h)", "Go up for the view over the beach and visit the Nossa Senhora da Nazaré sanctuary.", "Suba para ver a praia lá de cima e visite o santuário de Nossa Senhora da Nazaré."),
        r("Big waves at the lighthouse (1 h)", "Ondas gigantes no farol (1 h)", "Between October and March, watch the giant waves of Praia do Norte from the fort.", "Entre outubro e março, veja as ondas gigantes da Praia do Norte a partir do forte."),
        r("Alcobaça and São Martinho (within 15 km)", "Alcobaça e São Martinho (até 15 km)", "The Cistercian monastery of Alcobaça, a UNESCO site, and the bay of São Martinho do Porto.", "O Mosteiro de Alcobaça, Património Mundial, e a baía de São Martinho do Porto.")
      ],
      eat: [
        r("Seafront", "Marginal", "Grilled fish, caldeirada and seafood with a sea view.", "Peixe grelhado, caldeirada e marisco com vista para o mar."),
        r("Streets near the beach", "Ruas junto à praia", "Smaller and more traditional restaurants, often cheaper than the seafront.", "Restaurantes mais pequenos e tradicionais, muitas vezes mais em conta do que a marginal."),
        r("Dried fish", "Peixe seco", "Taste the fish dried on the beach, a centuries-old tradition of Nazaré.", "Prove o peixe seco na praia, uma tradição secular da Nazaré.")
      ]
    },

    batalha: {
      name: "Mosteiro da Batalha", district: "Leiria", lat: 39.6589, lng: -8.8260, icon: "monastery",
      text: x("A masterpiece of Portuguese Gothic, built to celebrate the victory at Aljubarrota in 1385. Don't miss the Unfinished Chapels.", "Uma obra-prima do gótico português, construída para celebrar a vitória de Aljubarrota em 1385. Não perca as Capelas Imperfeitas.")
    },
    alcobaca: {
      name: "Mosteiro de Alcobaça", district: "Leiria", lat: 39.5486, lng: -8.9797, icon: "monastery",
      text: x("The largest church in Portugal and the tombs of Pedro and Inês, the country's most famous love story.", "A maior igreja de Portugal e os túmulos de D. Pedro e D. Inês, a história de amor mais famosa do país.")
    },
    fatima: {
      name: "Fátima", district: "Santarém", lat: 39.6317, lng: -8.6727, icon: "sanctuary",
      text: x("One of the largest Marian sanctuaries in the world. Visit the Chapel of the Apparitions and the basilicas, and walk to the shepherd children's village of Aljustrel.", "Um dos maiores santuários marianos do mundo. Visite a Capelinha das Aparições e as basílicas e caminhe até Aljustrel, a aldeia dos pastorinhos.")
    },

    tomar: {
      name: "Tomar", district: "Santarém", lat: 39.6036, lng: -8.4190, icon: "templar",
      overview: x(
        "The city of the Knights Templar, dominated by the Convent of Christ, with a pretty historic centre by the Nabão river.",
        "A cidade dos Templários, dominada pelo Convento de Cristo, com um bonito centro histórico junto ao rio Nabão."
      ),
      stay: [
        r("Historic centre", "Centro histórico", "Near Praça da República and the river, to walk to everything.", "Perto da Praça da República e do rio, para ir a pé a todo o lado."),
        r("Castelo de Bode reservoir", "Albufeira de Castelo de Bode", "Hotels and houses by the water, 15 km away, for swimming and water sports.", "Hotéis e casas junto à água, a 15 km, para banhos e desportos náuticos."),
        r("Rural tourism", "Turismo rural", "Quintas in the countryside around the city, with space and parking.", "Quintas no campo em redor da cidade, com espaço e estacionamento.")
      ],
      do: [
        r("Convent of Christ (2 h)", "Convento de Cristo (2 h)", "The Templar round church and the Manueline window, a UNESCO site.", "A Charola templária e a janela manuelina, Património Mundial."),
        r("Historic centre and Mouchão park (1–2 h)", "Centro histórico e Mouchão (1–2 h)", "The Synagogue, the Church of São João Baptista and the waterwheel in the park by the river.", "A Sinagoga, a Igreja de São João Baptista e a roda de água no parque junto ao rio."),
        r("Almourol castle and Castelo de Bode (within 25 km)", "Castelo de Almourol e Castelo de Bode (até 25 km)", "A castle on an island in the Tagus, and a reservoir for swimming and kayaking.", "Um castelo numa ilha do Tejo e uma albufeira para banhos e caiaque.")
      ],
      eat: [
        r("Historic centre", "Centro histórico", "Traditional restaurants around Corredoura street.", "Restaurantes tradicionais em torno da Rua da Corredoura."),
        r("Fatias de Tomar", "Fatias de Tomar", "A unique egg sweet cooked in a special pan. Buy them in a pastry shop in the centre.", "Um doce de ovos único, cozido num tacho especial. Compre numa pastelaria do centro."),
        r("River fish", "Peixe do rio", "Near the reservoir, look for restaurants serving river fish and açorda.", "Perto da albufeira, procure restaurantes com peixe do rio e açorda.")
      ]
    },

    santarem: {
      name: "Santarém", district: "Santarém", lat: 39.2362, lng: -8.6868, icon: "wheat",
      text: x("The capital of Gothic in Portugal, above the Tagus and the fields of the Ribatejo. Enjoy the view from the Portas do Sol garden.", "A capital do gótico em Portugal, sobre o Tejo e as lezírias do Ribatejo. Aprecie a vista do jardim das Portas do Sol.")
    },
    abrantes: {
      name: "Abrantes", district: "Santarém", lat: 39.4633, lng: -8.1975, icon: "castle",
      text: x("A town on a hill above the Tagus. Climb to the castle for a wide view over the river and the plains.", "Uma cidade num monte sobre o Tejo. Suba ao castelo para uma vista ampla sobre o rio e a planície.")
    },

    monsanto: {
      name: "Monsanto", district: "Castelo Branco", lat: 40.0390, lng: -7.1140, icon: "boulder",
      text: x("A village built between giant granite boulders, where some houses use a rock as their roof. Climb to the castle for the view.", "Uma aldeia construída entre penedos gigantes, com casas que usam uma rocha como telhado. Suba ao castelo pela vista."),
      overview: x(
        "A village built between giant granite boulders, crowned by a castle with views over the plains to Spain. One of Portugal's historic villages.",
        "Uma aldeia construída entre penedos gigantes, coroada por um castelo com vista sobre a planície até Espanha. Uma das Aldeias Históricas de Portugal."
      ),
      stay: [
        r("Inside the village", "Dentro da aldeia", "Stone houses turned into guesthouses, to see the village quiet at night. Leave the car at the entrance.", "Casas de pedra recuperadas em alojamento, para ver a aldeia em silêncio à noite. Deixe o carro à entrada."),
        r("At the foot of the hill", "No sopé do monte", "Rural tourism with parking and space, a short drive from the village.", "Turismo rural com estacionamento e espaço, a poucos minutos da aldeia."),
        r("Idanha-a-Nova, 25 km away", "Idanha-a-Nova, a 25 km", "A small town with more services, for those who prefer a larger base.", "Uma vila com mais serviços, para quem prefere uma base maior.")
      ],
      do: [
        r("Climb to the castle (1–2 h)", "Subida ao castelo (1–2 h)", "Follow the stone paths between the boulders to the top. Wear good shoes.", "Siga os caminhos de pedra entre os penedos até ao topo. Use calçado confortável."),
        r("Idanha-a-Velha (within 10 km)", "Idanha-a-Velha (até 10 km)", "A historic village with Roman walls and an old cathedral, on the site of an ancient city.", "Uma aldeia histórica com muralhas romanas e uma antiga catedral, no lugar de uma cidade antiga."),
        r("Penha Garcia (within 25 km)", "Penha Garcia (até 25 km)", "Fossil trail with trilobite tracks, a river beach and water mills.", "Rota dos Fósseis com rastos de trilobites, uma praia fluvial e moinhos de água.")
      ],
      eat: [
        r("Village tavern", "Taberna da aldeia", "Small restaurants with views, for cabrito, maranhos and regional sausages.", "Pequenos restaurantes com vista, para cabrito, maranhos e enchidos regionais."),
        r("Beira Baixa cheese", "Queijo da Beira Baixa", "Taste the local sheep and goat cheeses, some of them with a protected designation of origin.", "Prove os queijos de ovelha e cabra da região, alguns com denominação de origem protegida."),
        r("Olive oil", "Azeite", "The Beira Baixa produces excellent olive oil: buy a bottle from a local producer.", "A Beira Baixa produz excelente azeite: compre uma garrafa a um produtor local.")
      ]
    },

    "castelo-branco": {
      name: "Castelo Branco", district: "Castelo Branco", lat: 39.8222, lng: -7.4931, icon: "garden",
      text: x("Walk through the baroque garden of the Episcopal Palace, with its stairways of granite kings, and see the famous embroidered silk bedspreads.", "Passeie pelo Jardim do Paço Episcopal, com as escadarias dos reis em granito, e veja as famosas colchas bordadas de Castelo Branco.")
    },
    "castelo-de-vide": {
      name: "Castelo de Vide", district: "Portalegre", lat: 39.4167, lng: -7.4566, icon: "whitehouse",
      text: x("The 'Sintra of the Alentejo': white streets, the old Jewish quarter with its medieval synagogue, and the Fonte da Vila.", "A 'Sintra do Alentejo': ruas brancas, a antiga judiaria com a sinagoga medieval e a Fonte da Vila.")
    },

    marvao: {
      name: "Marvão", district: "Portalegre", lat: 39.3940, lng: -7.3760, icon: "castle",
      overview: x(
        "A white village on top of a granite cliff, surrounded by castle walls, with views far into Spain. At night, the silence and the stars are unforgettable.",
        "Uma aldeia branca no topo de uma escarpa, cercada por muralhas, com vista até Espanha. À noite, o silêncio e as estrelas são inesquecíveis."
      ),
      stay: [
        r("Inside the walls", "Dentro das muralhas", "To see the sunset and the stars from the village. Parking is limited inside.", "Para ver o pôr do sol e as estrelas a partir da vila. O estacionamento dentro das muralhas é limitado."),
        r("Serra de São Mamede", "Serra de São Mamede", "Rural tourism in the natural park, among chestnut and cork trees.", "Turismo rural no parque natural, entre castanheiros e sobreiros."),
        r("Castelo de Vide, 10 km away", "Castelo de Vide, a 10 km", "A bigger village with more restaurants and accommodation.", "Uma vila maior, com mais restaurantes e alojamento.")
      ],
      do: [
        r("Castle and walls (1–2 h)", "Castelo e muralhas (1–2 h)", "Walk along the walls to the castle keep, with a view over the Alentejo and Spain.", "Percorra as muralhas até à torre de menagem, com vista sobre o Alentejo e Espanha."),
        r("Ammaia Roman city (within 10 km)", "Cidade romana de Ammaia (até 10 km)", "Remains of a Roman city at the foot of the mountain, with a small museum.", "Ruínas de uma cidade romana no sopé da serra, com um pequeno museu."),
        r("Castelo de Vide (within 10 km)", "Castelo de Vide (até 10 km)", "The Jewish quarter, the synagogue and the Fonte da Vila.", "A judiaria, a sinagoga e a Fonte da Vila.")
      ],
      eat: [
        r("Inside the walls", "Dentro das muralhas", "Small restaurants with views over the plain. Book for dinner.", "Pequenos restaurantes com vista sobre a planície. Reserve para jantar."),
        r("Alentejo cooking", "Cozinha alentejana", "Migas, black pork and açorda in the villages of the Serra de São Mamede.", "Migas, porco preto e açorda nas aldeias da Serra de São Mamede."),
        r("Chestnuts", "Castanhas", "In autumn, Marvão celebrates its chestnuts with a festival in November.", "No outono, Marvão celebra a castanha com uma feira em novembro.")
      ]
    },

    portalegre: {
      name: "Portalegre", district: "Portalegre", lat: 39.2967, lng: -7.4285, icon: "monastery",
      text: x("A city at the foot of the Serra de São Mamede, with a cathedral and a museum of tapestries, a unique Portuguese art.", "Uma cidade no sopé da Serra de São Mamede, com Sé e um museu de tapeçaria, uma arte única portuguesa.")
    }
  });
})();
