/* =====================================================================
   ROUTES
   ---------------------------------------------------------------------
   type:  "getaway" (2 days, one base) | "medium" (5 days) | "long" (7 days)
   Stops are listed in travel order (north to south).
   Each stop is either:
     kind: "main"  – a base where you sleep (Gerês, Évora…). Has days,
                     overview text, pictures, stay / do / eat tabs.
     kind: "via"   – a must-see on the way (castle, viewpoint,
                     restaurant…). Short text + directions.
   icon:  key from js/icons.js (castle, belem, pastry, wine…)
   km:    optional road km from the previous stop. If missing, an
          estimate is calculated from the coordinates.
   Texts: { en, pt, es, fr }
   ===================================================================== */
window.ROUTES = [
  /* ------------------------------------------------- GETAWAY (2 days)
     First stop = kind "base" (the hotel). The others = kind "activity",
     drawn around the base. km = distance from the base.            */
  {
    id: "douro-getaway",
    type: "getaway",
    days: 2,
    title: { en: "Douro Valley Getaway", pt: "Escapadinha no Douro", es: "Escapada al valle del Duero", fr: "Escapade dans la vallée du Douro" },
    tagline: {
      en: "Sleep in a wine estate and explore the valley around it",
      pt: "Dormir numa quinta e descobrir o vale à volta",
      es: "Dormir en una quinta y descubrir el valle a su alrededor",
      fr: "Dormir dans un domaine viticole et explorer la vallée autour"
    },
    summary: {
      en: "Two days in the oldest demarcated wine region in the world. Stay at a quinta in Pinhão, among the terraced vineyards, and spend the days on the river, at viewpoints and in a baroque palace.",
      pt: "Dois dias na região vinícola demarcada mais antiga do mundo. Fique numa quinta no Pinhão, entre os socalcos, e passe os dias no rio, nos miradouros e num palácio barroco.",
      es: "Dos días en la región vinícola demarcada más antigua del mundo. Alójate en una quinta en Pinhão, entre las terrazas de viñedos, y pasa los días en el río, en miradores y en un palacio barroco.",
      fr: "Deux jours dans la plus ancienne région viticole délimitée au monde. Séjournez dans une quinta à Pinhão, parmi les vignes en terrasses, et passez vos journées sur le fleuve, aux points de vue et dans un palais baroque."
    },
    stops: [
      {
        kind: "base", icon: "wine", name: "Pinhão", district: "Vila Real", lat: 41.1920, lng: -7.5468,
        overview: {
          en: "Your base is a wine estate (quinta) above the river. Wake up among the vineyards, taste port and Douro wines in the cellar and watch the sunset over the terraces.",
          pt: "A sua base é uma quinta sobre o rio. Acorde entre as vinhas, prove vinho do Porto e do Douro na adega e veja o pôr do sol sobre os socalcos.",
          es: "Tu base es una quinta sobre el río. Despierta entre viñedos, prueba vinos de Oporto y del Duero en la bodega y mira el atardecer sobre las terrazas.",
          fr: "Votre base est un domaine viticole (quinta) au-dessus du fleuve. Réveillez-vous parmi les vignes, goûtez porto et vins du Douro au chai et admirez le coucher du soleil sur les terrasses."
        }
      },
      {
        kind: "activity", category: "boat", icon: "rabelo", name: "Peso da Régua", lat: 41.1615, lng: -7.7860,
        text: {
          en: "Board a rabelo boat, the traditional boat that carried port wine barrels down the river, for a cruise between Régua and Pinhão.",
          pt: "Embarque num barco rabelo, o barco que levava as pipas de vinho do Porto rio abaixo, para um cruzeiro entre a Régua e o Pinhão.",
          es: "Sube a un barco rabelo, el barco que llevaba los barriles de oporto río abajo, para un crucero entre Régua y Pinhão.",
          fr: "Embarquez sur un rabelo, le bateau qui transportait les fûts de porto sur le fleuve, pour une croisière entre Régua et Pinhão."
        }
      },
      {
        kind: "activity", category: "monument", icon: "palace", name: "Casa de Mateus", lat: 41.2966, lng: -7.7155,
        text: {
          en: "A baroque palace with formal gardens and a mirror lake, the house on the label of the famous Mateus rosé.",
          pt: "Um palácio barroco com jardins e um lago espelhado, a casa que aparece no rótulo do famoso Mateus Rosé.",
          es: "Un palacio barroco con jardines y un estanque espejo, la casa de la etiqueta del famoso Mateus Rosé.",
          fr: "Un palais baroque avec jardins et bassin miroir, la maison qui figure sur l'étiquette du célèbre Mateus rosé."
        }
      },
      {
        kind: "activity", category: "viewpoint", icon: "viewpoint", name: "São Salvador do Mundo", lat: 41.1265, lng: -7.4108,
        text: {
          en: "Small chapels on a hill above a bend of the Douro, with one of the widest views of the valley.",
          pt: "Pequenas capelas num monte sobre uma curva do Douro, com uma das vistas mais amplas do vale.",
          es: "Pequeñas capillas en un monte sobre una curva del Duero, con una de las vistas más amplias del valle.",
          fr: "De petites chapelles sur une colline au-dessus d'un méandre du Douro, avec l'une des plus belles vues sur la vallée."
        }
      },
      {
        kind: "activity", category: "activity", icon: "rockart", name: "Vale do Côa", lat: 41.0815, lng: -7.1395,
        text: {
          en: "Visit the open-air Palaeolithic rock art of the Côa Valley, engraved more than 20,000 years ago and listed by UNESCO.",
          pt: "Visite a arte rupestre ao ar livre do Vale do Côa, gravada há mais de 20 000 anos e Património Mundial.",
          es: "Visita el arte rupestre al aire libre del valle del Côa, grabado hace más de 20 000 años y Patrimonio Mundial.",
          fr: "Découvrez l'art rupestre en plein air de la vallée du Côa, gravé il y a plus de 20 000 ans et classé à l'UNESCO."
        }
      }
    ]
  },

  /* ------------------------------------------------------------ 5 DAYS */
  {
    id: "silver-coast",
    type: "medium",
    days: 5,
    title: { en: "Silver Coast to Lisbon", pt: "Costa de Prata até Lisboa", es: "De la Costa de Plata a Lisboa", fr: "De la Côte d'Argent à Lisbonne" },
    tagline: {
      en: "Canals, giant waves, a walled town and palaces on the way south",
      pt: "Canais, ondas gigantes, uma vila muralhada e palácios a caminho do sul",
      es: "Canales, olas gigantes, un pueblo amurallado y palacios rumbo al sur",
      fr: "Canaux, vagues géantes, village fortifié et palais en route vers le sud"
    },
    summary: {
      en: "Five days down the Atlantic coast, from the colourful boats of Aveiro to the hills of Lisbon, with two UNESCO monasteries, surf towns and the westernmost point of Europe on the way.",
      pt: "Cinco dias pela costa atlântica, dos barcos coloridos de Aveiro às colinas de Lisboa, com dois mosteiros Património Mundial, vilas de surf e o ponto mais ocidental da Europa pelo caminho.",
      es: "Cinco días por la costa atlántica, de los barcos de colores de Aveiro a las colinas de Lisboa, con dos monasterios Patrimonio Mundial, pueblos surferos y el punto más occidental de Europa.",
      fr: "Cinq jours le long de la côte atlantique, des bateaux colorés d'Aveiro aux collines de Lisbonne, avec deux monastères classés à l'UNESCO, des villages de surf et le point le plus occidental de l'Europe."
    },
    stops: [
      {
        kind: "main", icon: "moliceiro", name: "Aveiro", district: "Aveiro", lat: 40.6405, lng: -8.6538, dayFrom: 1, dayTo: 1,
        overview: {
          en: "Ride a painted moliceiro boat along the canals, walk past Art Nouveau houses and taste ovos moles, a sweet egg cream in wafer shells.",
          pt: "Passeie de moliceiro pelos canais, veja as casas Arte Nova e prove os ovos moles.",
          es: "Pasea en moliceiro por los canales, mira las casas modernistas y prueba los ovos moles, una crema dulce de huevo.",
          fr: "Naviguez en moliceiro sur les canaux, admirez les maisons Art nouveau et goûtez les ovos moles, une crème d'œufs sucrée."
        }
      },
      {
        kind: "via", category: "village", icon: "striped", name: "Costa Nova", lat: 40.6110, lng: -8.7510,
        text: {
          en: "A row of striped wooden houses facing the lagoon. Perfect for photos before heading south.",
          pt: "Uma fila de casas às riscas viradas para a ria. Ideal para fotografias antes de seguir para sul.",
          es: "Una fila de casas de madera a rayas frente a la ría. Ideal para fotos antes de seguir al sur.",
          fr: "Une rangée de maisons en bois à rayures face à la lagune. Parfait pour des photos avant de partir vers le sud."
        }
      },
      {
        kind: "via", category: "monument", icon: "monastery", name: "Mosteiro da Batalha", lat: 39.6589, lng: -8.8260,
        text: {
          en: "A masterpiece of Portuguese Gothic, built to celebrate the victory at Aljubarrota in 1385. Don't miss the Unfinished Chapels.",
          pt: "Uma obra-prima do gótico português, construída para celebrar a vitória de Aljubarrota em 1385. Não perca as Capelas Imperfeitas.",
          es: "Una obra maestra del gótico portugués, construida para celebrar la victoria de Aljubarrota en 1385. No te pierdas las Capillas Imperfectas.",
          fr: "Un chef-d'œuvre du gothique portugais, construit pour célébrer la victoire d'Aljubarrota en 1385. Ne manquez pas les Chapelles inachevées."
        }
      },
      {
        kind: "main", icon: "wave", name: "Nazaré", district: "Leiria", lat: 39.6012, lng: -9.0700, dayFrom: 2, dayTo: 2,
        overview: {
          en: "Home of the biggest waves ever surfed. Take the funicular to Sítio, walk to the lighthouse fort and eat fresh fish by the beach.",
          pt: "A casa das maiores ondas alguma vez surfadas. Suba de funicular ao Sítio, vá ao forte do farol e coma peixe fresco junto à praia.",
          es: "El hogar de las olas más grandes jamás surfeadas. Sube en funicular al Sítio, camina hasta el faro y come pescado fresco junto a la playa.",
          fr: "Le berceau des plus grandes vagues jamais surfées. Montez en funiculaire au Sítio, allez jusqu'au phare et mangez du poisson frais sur la plage."
        }
      },
      {
        kind: "via", category: "monument", icon: "monastery", name: "Mosteiro de Alcobaça", lat: 39.5486, lng: -8.9797,
        text: {
          en: "The largest church in Portugal and the tombs of Pedro and Inês, the country's most famous love story.",
          pt: "A maior igreja de Portugal e os túmulos de D. Pedro e D. Inês, a história de amor mais famosa do país.",
          es: "La iglesia más grande de Portugal y las tumbas de Pedro e Inés, la historia de amor más famosa del país.",
          fr: "La plus grande église du Portugal et les tombeaux de Pierre et Inês, la plus célèbre histoire d'amour du pays."
        }
      },
      {
        kind: "main", icon: "castle", name: "Óbidos", district: "Leiria", lat: 39.3606, lng: -9.1571, dayFrom: 3, dayTo: 3,
        overview: {
          en: "A medieval town inside castle walls. Walk on top of the walls at sunset and taste ginjinha, a cherry liqueur served in a chocolate cup.",
          pt: "Uma vila medieval dentro das muralhas. Caminhe sobre as muralhas ao pôr do sol e prove a ginjinha em copo de chocolate.",
          es: "Un pueblo medieval dentro de las murallas. Camina sobre la muralla al atardecer y prueba la ginjinha en vaso de chocolate.",
          fr: "Une ville médiévale entourée de remparts. Marchez sur les murailles au coucher du soleil et goûtez la ginjinha dans un verre en chocolat."
        }
      },
      {
        kind: "via", category: "beach", icon: "surf", name: "Ericeira", lat: 38.9631, lng: -9.4170,
        text: {
          en: "A white and blue fishing village and Europe's only World Surfing Reserve. Stop for lunch with a sea view.",
          pt: "Uma vila piscatória branca e azul e a única Reserva Mundial de Surf da Europa. Pare para almoçar com vista para o mar.",
          es: "Un pueblo pesquero blanco y azul y la única Reserva Mundial de Surf de Europa. Para a comer con vistas al mar.",
          fr: "Un village de pêcheurs blanc et bleu, seule réserve mondiale de surf d'Europe. Arrêtez-vous déjeuner face à la mer."
        }
      },
      {
        kind: "main", icon: "palace", name: "Sintra", district: "Lisboa", lat: 38.7976, lng: -9.3905, dayFrom: 4, dayTo: 4,
        overview: {
          en: "Fairytale palaces in a misty forest: the colourful Pena Palace, the Moorish Castle and Quinta da Regaleira. Try a travesseiro pastry.",
          pt: "Palácios de conto de fadas numa serra cheia de nevoeiro: a Pena, o Castelo dos Mouros e a Quinta da Regaleira. Prove um travesseiro.",
          es: "Palacios de cuento en un bosque con niebla: el colorido Palacio da Pena, el Castillo de los Moros y la Quinta da Regaleira. Prueba un travesseiro.",
          fr: "Des palais de conte de fées dans une forêt brumeuse : le palais de Pena, le château des Maures et la Quinta da Regaleira. Goûtez un travesseiro."
        }
      },
      {
        kind: "via", category: "viewpoint", icon: "lighthouse", name: "Cabo da Roca", lat: 38.7804, lng: -9.4989,
        text: {
          en: "The westernmost point of mainland Europe, with cliffs 140 metres above the Atlantic.",
          pt: "O ponto mais ocidental da Europa continental, com falésias a 140 metros sobre o Atlântico.",
          es: "El punto más occidental de la Europa continental, con acantilados a 140 metros sobre el Atlántico.",
          fr: "Le point le plus occidental de l'Europe continentale, avec des falaises à 140 mètres au-dessus de l'Atlantique."
        }
      },
      {
        kind: "main", icon: "belem", name: { en: "Lisbon", pt: "Lisboa", es: "Lisboa", fr: "Lisbonne" }, district: "Lisboa", lat: 38.7110, lng: -9.1366, dayFrom: 5, dayTo: 5,
        overview: {
          en: "Ride tram 28 through Alfama, see the Tower of Belém and the Jerónimos Monastery, eat a warm pastel de nata and end the night with fado.",
          pt: "Ande no elétrico 28 por Alfama, veja a Torre de Belém e os Jerónimos, coma um pastel de nata quente e termine a noite com fado.",
          es: "Sube al tranvía 28 por Alfama, visita la Torre de Belém y los Jerónimos, come un pastel de nata caliente y termina la noche con fado.",
          fr: "Prenez le tram 28 dans l'Alfama, voyez la tour de Belém et les Hiéronymites, mangez un pastel de nata tiède et finissez la soirée avec du fado."
        }
      }
    ]
  },

  /* ------------------------------------------------------- 7–10 DAYS */
  {
    id: "wonders-of-the-interior",
    type: "long",
    days: 7,
    title: { en: "Wonders of the Interior", pt: "Maravilhas do Interior", es: "Maravillas del Interior", fr: "Merveilles de l'intérieur" },
    tagline: {
      en: "Mountains, granite villages and castles from Gerês to the Alentejo",
      pt: "Serras, aldeias de granito e castelos do Gerês ao Alentejo",
      es: "Montañas, aldeas de granito y castillos del Gerês al Alentejo",
      fr: "Montagnes, villages de granit et châteaux du Gerês à l'Alentejo"
    },
    summary: {
      en: "Seven days through the Portugal few tourists see: the only national park, the highest mountains, villages built between boulders, hilltop castles and the plains of the Alentejo.",
      pt: "Sete dias pelo Portugal que poucos turistas conhecem: o único parque nacional, as serras mais altas, aldeias entre penedos, castelos no alto dos montes e as planícies do Alentejo.",
      es: "Siete días por el Portugal que pocos turistas conocen: el único parque nacional, las montañas más altas, aldeas entre rocas, castillos en lo alto y las llanuras del Alentejo.",
      fr: "Sept jours dans le Portugal que peu de touristes connaissent : l'unique parc national, les plus hautes montagnes, des villages entre les rochers, des châteaux perchés et les plaines de l'Alentejo."
    },
    stops: [
      {
        kind: "main", icon: "espigueiro", name: "Peneda-Gerês", district: "Braga", lat: 41.7280, lng: -8.1610, dayFrom: 1, dayTo: 2,
        overview: {
          en: "Portugal's only national park: waterfalls, wild horses and granite villages. See the stone granaries (espigueiros) of Soajo and Lindoso and swim in the river pools.",
          pt: "O único parque nacional de Portugal: cascatas, garranos e aldeias de granito. Veja os espigueiros do Soajo e do Lindoso e mergulhe nas lagoas.",
          es: "El único parque nacional de Portugal: cascadas, caballos salvajes y aldeas de granito. Visita los hórreos de Soajo y Lindoso y báñate en las pozas.",
          fr: "L'unique parc national du Portugal : cascades, chevaux sauvages et villages de granit. Découvrez les greniers en pierre de Soajo et Lindoso et baignez-vous dans les bassins naturels."
        }
      },
      {
        kind: "via", category: "monument", icon: "castle", name: "Castelo de Guimarães", lat: 41.4479, lng: -8.2900,
        text: {
          en: "The birthplace of Portugal. The first king, Afonso Henriques, was born here. Walk the medieval centre, a UNESCO site.",
          pt: "O berço de Portugal, onde nasceu D. Afonso Henriques. Passeie pelo centro histórico, Património Mundial.",
          es: "La cuna de Portugal, donde nació el primer rey, Afonso Henriques. Pasea por el centro medieval, Patrimonio Mundial.",
          fr: "Le berceau du Portugal, où naquit le premier roi, Afonso Henriques. Promenez-vous dans le centre médiéval classé à l'UNESCO."
        }
      },
      {
        kind: "via", category: "food", icon: "wine", name: "Viseu", lat: 40.6566, lng: -7.9125,
        text: {
          en: "Lunch stop in the Dão wine region: veal from Lafões and a glass of red, next to the cathedral square.",
          pt: "Paragem para almoço na região do Dão: vitela de Lafões e um copo de tinto, junto ao largo da Sé.",
          es: "Parada para comer en la región del Dão: ternera de Lafões y una copa de tinto, junto a la plaza de la catedral.",
          fr: "Pause déjeuner dans la région viticole du Dão : veau de Lafões et un verre de rouge, près de la place de la cathédrale."
        }
      },
      {
        kind: "main", icon: "cheese", name: "Serra da Estrela", district: "Guarda", lat: 40.4060, lng: -7.5410, dayFrom: 3, dayTo: 4,
        overview: {
          en: "The highest mountains of mainland Portugal. Drive to the Torre summit, walk the glacier valley of Zêzere and taste the creamy Serra da Estrela cheese.",
          pt: "As montanhas mais altas de Portugal continental. Suba à Torre, percorra o vale glaciar do Zêzere e prove o queijo da Serra da Estrela.",
          es: "Las montañas más altas del Portugal continental. Sube a la Torre, recorre el valle glaciar del Zêzere y prueba el queso de la Serra da Estrela.",
          fr: "Les plus hautes montagnes du Portugal continental. Montez jusqu'à la Torre, parcourez la vallée glaciaire du Zêzere et goûtez le fromage de la Serra da Estrela."
        }
      },
      {
        kind: "via", category: "village", icon: "boulder", name: "Monsanto", lat: 40.0390, lng: -7.1140,
        text: {
          en: "A village built between giant granite boulders, some houses use a rock as their roof. Climb to the castle for the view.",
          pt: "Uma aldeia construída entre penedos gigantes, com casas que usam uma rocha como telhado. Suba ao castelo pela vista.",
          es: "Una aldea construida entre rocas gigantes, con casas que usan una roca como tejado. Sube al castillo por las vistas.",
          fr: "Un village bâti entre des rochers géants, certaines maisons ont un rocher pour toit. Montez au château pour la vue."
        }
      },
      {
        kind: "via", category: "monument", icon: "garden", name: "Castelo Branco", lat: 39.8222, lng: -7.4931,
        text: {
          en: "Walk through the baroque garden of the Episcopal Palace, with its stairways of granite kings, and see the famous embroidered silk bedspreads.",
          pt: "Passeie pelo Jardim do Paço Episcopal, com as escadarias dos reis em granito, e veja as famosas colchas bordadas de Castelo Branco.",
          es: "Pasea por el jardín barroco del Palacio Episcopal, con sus escaleras de reyes de granito, y descubre las famosas colchas bordadas.",
          fr: "Promenez-vous dans le jardin baroque du palais épiscopal, avec ses escaliers de rois en granit, et découvrez les célèbres couvre-lits brodés."
        }
      },
      {
        kind: "main", icon: "castle", name: "Marvão", district: "Portalegre", lat: 39.3940, lng: -7.3760, dayFrom: 5, dayTo: 5,
        overview: {
          en: "A white village on top of a granite cliff, surrounded by castle walls, with views far into Spain. Stay the night to see the sunset and the stars.",
          pt: "Uma aldeia branca no topo de uma escarpa, cercada por muralhas, com vista até Espanha. Durma cá para ver o pôr do sol e as estrelas.",
          es: "Un pueblo blanco en lo alto de un risco, rodeado de murallas, con vistas hasta España. Duerme aquí para ver el atardecer y las estrellas.",
          fr: "Un village blanc perché sur une falaise, entouré de remparts, avec vue jusqu'en Espagne. Restez la nuit pour le coucher du soleil et les étoiles."
        }
      },
      {
        kind: "via", category: "monument", icon: "templar", name: "Convento de Cristo, Tomar", lat: 39.6036, lng: -8.4190,
        text: {
          en: "The castle and convent of the Knights Templar, with the famous round church and the Manueline window.",
          pt: "O castelo e convento dos Templários, com a famosa Charola e a janela manuelina.",
          es: "El castillo y convento de los templarios, con la famosa iglesia redonda y la ventana manuelina.",
          fr: "Le château et couvent des Templiers, avec la célèbre église ronde et la fenêtre manuéline."
        }
      },
      {
        kind: "main", icon: "wheat", name: "Santarém", district: "Santarém", lat: 39.2362, lng: -8.6868, dayFrom: 6, dayTo: 6,
        overview: {
          en: "The capital of Gothic in Portugal, above the Tagus river and the fields of the Ribatejo. Watch the sunset from the Portas do Sol garden.",
          pt: "A capital do gótico em Portugal, sobre o Tejo e as lezírias do Ribatejo. Veja o pôr do sol no jardim das Portas do Sol.",
          es: "La capital del gótico en Portugal, sobre el río Tajo y los campos del Ribatejo. Mira el atardecer desde el jardín de Portas do Sol.",
          fr: "La capitale du gothique au Portugal, au-dessus du Tage et des plaines du Ribatejo. Admirez le coucher du soleil depuis le jardin des Portas do Sol."
        }
      },
      {
        kind: "via", category: "food", icon: "soup", name: "Almeirim", lat: 39.2090, lng: -8.6290,
        text: {
          en: "Restaurant stop for sopa da pedra, the 'stone soup' with beans, sausage and a stone in the bowl.",
          pt: "Paragem para comer a famosa sopa da pedra, com feijão, enchidos e uma pedra no prato.",
          es: "Parada para comer la famosa sopa da pedra, con alubias, embutidos y una piedra en el plato.",
          fr: "Arrêt gourmand pour la sopa da pedra, la « soupe au caillou » aux haricots et charcuterie, avec une pierre dans l'assiette."
        }
      },
      {
        kind: "main", icon: "temple", name: "Évora", district: "Évora", lat: 38.5714, lng: -7.9135, dayFrom: 7, dayTo: 7,
        overview: {
          en: "A whitewashed city inside medieval walls with a Roman temple at its centre. Visit the Chapel of Bones, taste Alentejo wines and drive among cork oaks to the Almendres stone circle.",
          pt: "Uma cidade caiada dentro de muralhas, com um templo romano no centro. Visite a Capela dos Ossos, prove vinhos alentejanos e siga entre sobreiros até ao Cromeleque dos Almendres.",
          es: "Una ciudad encalada dentro de murallas con un templo romano en el centro. Visita la Capilla de los Huesos, prueba vinos del Alentejo y ve entre alcornoques al crómlech de los Almendres.",
          fr: "Une ville blanchie à la chaux dans ses remparts, avec un temple romain en son centre. Visitez la chapelle des Os, goûtez les vins de l'Alentejo et roulez parmi les chênes-lièges jusqu'au cromlech des Almendres."
        }
      }
    ]
  }
];
