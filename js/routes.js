/* =====================================================================
   ROUTES — add a new route by copying one block below.
   Each stop needs: day, name, region, lat, lng, km (road km from the
   previous stop; 0 for the first), overview text.
   Optional per stop: accommodations, activities, restaurants
   (each item: { name, note, url, partner: true/false }).
   ===================================================================== */
window.ROUTES = [
  {
    id: "portugal-in-7-days",
    title: "Portugal in 7 days",
    tagline: "From Lisbon's hills to the vineyards of the Douro",
    summary:
      "A first taste of the country in one week: the capital, the fairytale palaces of Sintra, a walled medieval town, the giant waves of Nazaré, Portugal's oldest university, Porto and the terraced vineyards of the Douro Valley.",
    season: "All year · best March to October",
    stops: [
      {
        day: 1, name: "Lisbon", region: "Lisbon", lat: 38.7110, lng: -9.1366, km: 0,
        overview:
          "Start in the capital. Ride tram 28 through Alfama and Graça, watch the sunset from a miradouro and end the evening with fado. Belém's Jerónimos Monastery and the Tower of Belém are both UNESCO World Heritage.",
        accommodations: [
          { name: "Boutique hotel in Alfama", note: "Example partner · from €120/night", url: "#", partner: true },
          { name: "Guesthouse in Príncipe Real", note: "Example partner · from €90/night", url: "#", partner: true }
        ],
        activities: [
          { name: "Fado evening in Alfama", note: "Example · 2 h", url: "#", partner: true },
          { name: "Sunset sailing on the Tagus", note: "Example · 2 h", url: "#", partner: true }
        ],
        restaurants: [
          { name: "Traditional tasca in Mouraria", note: "Example partner · grilled sardines, bacalhau", url: "#", partner: true }
        ]
      },
      {
        day: 2, name: "Sintra", region: "Lisbon", lat: 38.7976, lng: -9.3905, km: 28,
        overview:
          "Romantic palaces in a misty forest: the colourful Pena Palace, the Moorish Castle and the mysterious initiation well of Quinta da Regaleira. Try a travesseiro pastry before driving to Cabo da Roca, the westernmost point of mainland Europe.",
        accommodations: [{ name: "Quinta in the Sintra hills", note: "Example partner", url: "#", partner: true }],
        activities: [{ name: "Pena Palace skip-the-line ticket", note: "Example", url: "#", partner: true }],
        restaurants: [{ name: "Pastry shop in the old town", note: "Example partner · travesseiros", url: "#", partner: true }]
      },
      {
        day: 3, name: "Óbidos", region: "Centro", lat: 39.3606, lng: -9.1571, km: 85,
        overview:
          "A walled medieval town of white houses trimmed in blue and yellow. Walk the top of the castle walls and taste ginjinha, a sour cherry liqueur, served in a small chocolate cup.",
        accommodations: [{ name: "Guesthouse inside the walls", note: "Example partner", url: "#", partner: true }],
        activities: [{ name: "Walk on the castle walls", note: "Free · 1 h", url: "#", partner: false }],
        restaurants: [{ name: "Family restaurant by the gate", note: "Example partner", url: "#", partner: true }]
      },
      {
        day: 4, name: "Nazaré", region: "Centro", lat: 39.6012, lng: -9.0700, km: 40,
        overview:
          "A fishing town famous for the biggest surfed waves in the world, at Praia do Norte. Take the funicular up to Sítio for the view and look for women drying fish on the beach.",
        accommodations: [{ name: "Sea-view apartment", note: "Example partner", url: "#", partner: true }],
        activities: [{ name: "Big wave lookout at the lighthouse", note: "October to March", url: "#", partner: false }],
        restaurants: [{ name: "Seafood by the beach", note: "Example partner · caldeirada", url: "#", partner: true }]
      },
      {
        day: 5, name: "Coimbra", region: "Centro", lat: 40.2077, lng: -8.4265, km: 110,
        overview:
          "Home of one of the oldest universities in Europe, founded in 1290. Visit the baroque Joanina Library and listen to Coimbra fado, sung by men in student capes.",
        accommodations: [{ name: "Hotel near the university", note: "Example partner", url: "#", partner: true }],
        activities: [{ name: "University and Joanina Library tour", note: "Example", url: "#", partner: true }],
        restaurants: [{ name: "Leitão (roast suckling pig) in Mealhada", note: "Example partner · on the way north", url: "#", partner: true }]
      },
      {
        day: 6, name: "Porto", region: "Norte", lat: 41.1408, lng: -8.6110, km: 120,
        overview:
          "Climb the Ribeira's colourful streets, cross the Dom Luís I bridge and taste port wine in the cellars of Vila Nova de Gaia. São Bento station's azulejo panels tell the history of Portugal in blue and white.",
        accommodations: [{ name: "Hotel in Ribeira", note: "Example partner", url: "#", partner: true }],
        activities: [{ name: "Port wine cellar tour in Gaia", note: "Example", url: "#", partner: true }],
        restaurants: [{ name: "Francesinha house", note: "Example partner", url: "#", partner: true }]
      },
      {
        day: 7, name: "Douro Valley", region: "Norte", lat: 41.1920, lng: -7.5468, km: 125,
        overview:
          "End among the terraced vineyards of the Douro, the oldest demarcated wine region in the world. Base yourself in Pinhão, take a river cruise and visit a quinta for a tasting.",
        accommodations: [{ name: "Wine estate (quinta) stay", note: "Example partner", url: "#", partner: true }],
        activities: [{ name: "Douro river cruise", note: "Example · 1 h", url: "#", partner: true }],
        restaurants: [{ name: "Lunch at a quinta", note: "Example partner · with tasting", url: "#", partner: true }]
      }
    ]
  }
];
