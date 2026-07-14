const brews = [
  {
    id: "side-project",
    name: "Side Project",
    days: 2,
    style: "Sweet Stout",
    tone: "stout",
    label: "SP",
    abv: "5.8%",
    ibu: "28",
    temp: "68°F",
    phase: "Fermentation",
    gravity: "1.018",
    description: "Roasted and chocolate malts with a soft lactose finish. Built for coffee, caramel, and a slower evening pour.",
    recipe: {
      grain: ["8 lb Maris Otter", "1 lb chocolate malt", "12 oz roasted barley", "10 oz lactose"],
      hops: ["1 oz East Kent Goldings · 60 min", "0.5 oz Fuggle · 15 min"],
      yeast: "English Ale yeast",
      mash: "154°F for 60 min",
    },
    schedule: [
      { step: "Mash rest", duration: "60 min", temp: "154°F", status: "done" },
      { step: "Boil", duration: "60 min", temp: "Rolling", status: "done" },
      { step: "Primary fermentation", duration: "10 days", temp: "68°F", status: "active" },
      { step: "Cold crash", duration: "24 hr", temp: "38°F", status: "next" },
    ],
  },
  {
    id: "red-fox",
    name: "Red Fox IPA",
    days: 15,
    style: "IPA",
    tone: "ipa",
    label: "RF",
    abv: "6.4%",
    ibu: "62",
    temp: "66°F",
    phase: "Primary",
    gravity: "1.030",
    description: "A piney, citrus-forward IPA with enough malt backbone to keep the hop bite friendly.",
    recipe: {
      grain: ["10 lb pale malt", "1 lb Munich", "8 oz crystal 40"],
      hops: ["1 oz Chinook · 60 min", "2 oz Citra · whirlpool", "2 oz Mosaic · dry hop"],
      yeast: "American Ale yeast",
      mash: "152°F for 60 min",
    },
    schedule: [
      { step: "Mash rest", duration: "60 min", temp: "152°F", status: "done" },
      { step: "Whirlpool hops", duration: "20 min", temp: "180°F", status: "done" },
      { step: "Primary fermentation", duration: "14 days", temp: "66°F", status: "active" },
      { step: "Dry hop", duration: "72 hr", temp: "66°F", status: "next" },
    ],
  },
  {
    id: "first-contact",
    name: "1st Contact",
    days: 24,
    style: "Pale Ale",
    tone: "pale",
    label: "1C",
    abv: "5.1%",
    ibu: "38",
    temp: "65°F",
    phase: "Conditioning",
    gravity: "1.012",
    description: "A bright, easy pale ale with biscuit malt, floral hops, and a clean finish.",
    recipe: {
      grain: ["9 lb 2-row", "12 oz biscuit malt", "8 oz carapils"],
      hops: ["1 oz Cascade · 45 min", "1 oz Willamette · 10 min"],
      yeast: "California Ale yeast",
      mash: "150°F for 60 min",
    },
    schedule: [
      { step: "Mash rest", duration: "60 min", temp: "150°F", status: "done" },
      { step: "Boil", duration: "60 min", temp: "Rolling", status: "done" },
      { step: "Conditioning", duration: "21 days", temp: "65°F", status: "active" },
      { step: "Bottle chill", duration: "12 hr", temp: "38°F", status: "next" },
    ],
  },
  {
    id: "edward-pale-ale",
    name: "Edward Pale Ale",
    style: "Pale Ale",
    days: 24,
    tone: "pale",
    label: "EP",
    abv: "5.3%",
    ibu: "87",
    temp: "65°F",
    phase: "Conditioning",
    gravity: "1.012",
    description: "A hop-forward pale ale with a firm bitter edge, caramel malt, and Centennial dry hop aroma.",
    recipe: {
      grain: ["2 lb U.S. Pale 2-Row Malt", "4 oz Caramel Malt (40L)"],
      hops: ["Simcoe and Warrior · 60 min", "Chinook and Columbus · 30 min", "Chinook, Columbus, Simcoe, Warrior · 2 min", "0.60 oz Centennial · dry hop"],
      yeast: "American Ale Yeast · Wyeast 1056",
      mash: "152°F for 75 min",
    },
    schedule: [
      { step: "Mash rest", duration: "75 min", temp: "152°F", status: "done" },
      { step: "Boil", duration: "60 min", temp: "Rolling", status: "done" },
      { step: "Conditioning", duration: "24 days", temp: "65°F", status: "active" },
      { step: "Bottle chill", duration: "12 hr", temp: "38°F", status: "next" },
    ],
  },
];

const completedBatches = [
  ["Side Project", "Sweet Stout", "May 18", "Bottled", "4.8", "Coffee, caramel, smooth body. Rebrew with slightly less lactose."],
  ["Red Fox IPA", "IPA", "Apr 26", "Kegged", "4.4", "Great citrus nose. Push dry hop 24 hours earlier next time."],
  ["1st Contact", "Pale Ale", "Mar 11", "Bottled", "3.9", "Easy drinker, clean finish. Needs a little more biscuit malt."],
  ["Porch Light", "Blonde Ale", "Feb 22", "Bottled", "4.2", "Crisp, bright, and built for warm afternoons."],
  ["Midnight Mash", "Stout", "Feb 02", "Kegged", "4.6", "Roasty without getting harsh. Great head retention."],
  ["Copper Lantern", "Amber Ale", "Jan 19", "Bottled", "4.1", "Balanced malt and caramel. Could use a touch more aroma hop."],
  ["Citrus Signal", "IPA", "Jan 05", "Kegged", "4.7", "Juicy orange peel and soft bitterness. Crowd favorite."],
  ["Barn Cat Brown", "Brown Ale", "Dec 18", "Bottled", "4.0", "Nutty and mellow. Slightly thin body."],
  ["Steam Whistle", "California Common", "Dec 03", "Kegged", "4.3", "Toasty, clean, and pleasantly rustic."],
  ["Hop Ticket", "Session IPA", "Nov 14", "Bottled", "3.8", "Good aroma, but bitterness faded faster than expected."],
  ["Old Orchard", "Cider", "Oct 29", "Bottled", "4.5", "Dry apple, bright acidity, great carbonation."],
  ["Grain Elevator", "Hefeweizen", "Oct 08", "Kegged", "4.2", "Banana and clove landed nicely."],
  ["Brass Rail", "Porter", "Sep 17", "Bottled", "4.6", "Chocolate, toast, and a clean finish."],
  ["Picnic Table", "Cream Ale", "Aug 30", "Bottled", "4.1", "Light, crisp, and dangerously easy."],
  ["Yard Sale Saison", "Saison", "Aug 12", "Kegged", "3.7", "Peppery and dry. Fermented a bit warmer than ideal."],
  ["Basement Radio", "Pale Ale", "Jul 25", "Bottled", "4.0", "Floral hops with a soft malt base."],
  ["Handlebar Honey", "Honey Ale", "Jul 02", "Bottled", "4.4", "Subtle honey, clean body, nice summer pour."],
  ["Rail Yard Red", "Red Ale", "Jun 18", "Kegged", "4.2", "Good color and malt snap. Slightly sweet finish."],
  ["Mash Paddle", "ESB", "Jun 01", "Bottled", "4.3", "Biscuit, marmalade, and proper pub energy."],
  ["Smoke Stack", "Smoked Porter", "May 13", "Bottled", "3.6", "Fun experiment, smoke dominated the finish."],
  ["Sunday Shoes", "Kolsch", "Apr 28", "Kegged", "4.5", "Clean, delicate, and nicely carbonated."],
  ["Tin Roof", "Pilsner", "Apr 10", "Bottled", "4.1", "Snappy bitterness. Needs colder lagering next time."],
  ["Peach Crate", "Wheat Ale", "Mar 27", "Bottled", "3.9", "Fruit came through softly. Could use more aroma."],
  ["Black Ledger", "Dry Stout", "Mar 02", "Kegged", "4.4", "Dry roast, low sweetness, excellent nitro candidate."],
  ["Market Street", "Amber Lager", "Feb 14", "Bottled", "4.0", "Clean malt profile. Carbonation ran a little high."],
  ["Hollow Oak", "Brown Porter", "Jan 31", "Bottled", "4.2", "Smooth chocolate and walnut notes."],
  ["Golden Hour", "Golden Ale", "Jan 16", "Kegged", "4.3", "Bright, simple, and very repeatable."],
  ["Crate Digger", "West Coast IPA", "Dec 28", "Bottled", "4.6", "Pine, grapefruit, firm bitterness. Best IPA batch yet."],
  ["Furnace Room", "Winter Warmer", "Dec 09", "Bottled", "4.1", "Spiced gently. Alcohol warmth stayed pleasant."],
  ["Little Victory", "Table Beer", "Nov 21", "Kegged", "3.8", "Low ABV and refreshing. Needs more body."],
  ["Cask No. 4", "English Mild", "Nov 04", "Bottled", "4.0", "Toffee and toast. Nice low-gravity pub beer."],
  ["Green Cap", "Fresh Hop Ale", "Oct 20", "Kegged", "4.7", "Fresh, grassy, and lively. Drink young."],
  ["Silo Seven", "Farmhouse Ale", "Sep 29", "Bottled", "3.9", "Dry and expressive. Slight phenolic edge."],
  ["Nickel Plate", "Steam Beer", "Sep 08", "Bottled", "4.2", "Rustic lager character with firm malt."],
  ["Bottle Rocket", "Double IPA", "Aug 19", "Kegged", "4.5", "Big aroma, big body, surprisingly balanced."],
].map(([name, style, date, packageType, score, note]) => ({ name, style, date, packageType, score, note }));

const realRecipes = [
  {
    id: "edward-pale-ale",
    name: "Edward Pale Ale",
    style: "Pale Ale",
    method: "1 gallon BIAB · single stage",
    profile: [
      ["OG", "1.052"],
      ["FG", "1.012"],
      ["IBU", "87"],
      ["ABV", "5.3%"],
      ["Boil", "60 min"],
      ["Batch", "1.3 gal post-boil"],
    ],
    ingredients: {
      fermentables: ["2 lb U.S. Pale 2-Row Malt", "4 oz Caramel Malt (40L)"],
      boilHops: [
        "0.05 oz Simcoe · 60 min",
        "0.05 oz Warrior · 60 min",
        "0.10 oz Chinook · 30 min",
        "0.10 oz Columbus · 30 min",
        "0.25 oz Chinook · 2 min",
        "0.25 oz Columbus · 2 min",
        "0.25 oz Simcoe · 2 min",
        "0.25 oz Warrior · 2 min",
      ],
      dryHops: ["0.60 oz Centennial · 7 days"],
      yeast: "American Ale Yeast · Wyeast 1056 · pitch half pack",
      priming: "0.59 oz (17 g) corn sugar",
    },
    steps: [
      {
        title: "Mash",
        timer: "75 min",
        temp: "152°F",
        note: "Heat 9 litres to 157°F, stir in grains, shut off heat, cover, and steep until the mash looks oatmeal-thick.",
      },
      {
        title: "Mash out",
        timer: "7 min",
        temp: "168°F",
        note: "Return heat, raise to 168°F while stirring, then hold before removing the grains.",
      },
      {
        title: "Gravity check",
        timer: "Before boil",
        temp: "68 points",
        note: "Check gravity and correct if needed. Target is 68 gravity points for 1.3 gallons post-boil.",
      },
      {
        title: "Boil",
        timer: "60 min",
        temp: "Rolling",
        note: "Add Simcoe and Warrior at 60 min, Chinook and Columbus at 30 min, then Chinook, Columbus, Simcoe, and Warrior at 2 min.",
      },
      {
        title: "Chill & transfer",
        timer: "To pitch temp",
        temp: "Yeast pack target",
        note: "Ice bath the pot, sanitize transfer gear, strain into carboy, and do not fill above the one-gallon mark.",
      },
      {
        title: "Fermentation",
        timer: "14-21 days",
        temp: "Dark quiet spot",
        note: "Aerate, pitch half the Wyeast 1056 pack, seal with airlock, and ferment away from household commotion.",
      },
      {
        title: "Dry hop",
        timer: "7 days",
        temp: "Fermentation temp",
        note: "Add 0.60 oz Centennial according to the hop schedule.",
      },
      {
        title: "Bottle condition",
        timer: "30 days",
        temp: "65°F",
        note: "Prime with corn sugar, bottle quietly, cap, and condition upright. Try for 30 days; 14 days minimum if curiosity wins.",
      },
    ],
  },
  {
    id: "one-gallon-hazy-ipa",
    name: "1 Gallon Hazy IPA",
    style: "New England IPA",
    method: "1 gallon BIAB · single stage",
    profile: [
      ["OG", "1.068"],
      ["FG", "1.017"],
      ["IBU", "35"],
      ["ABV", "6.7%"],
      ["Boil", "30 min"],
      ["Batch", "1.3 gal post-boil"],
    ],
    ingredients: {
      fermentables: ["1 lb 7 oz Pale Malt", "1 lb 7 oz Malted Oats"],
      boilHops: ["0.35 oz Amarillo · 15 min", "0.35 oz Mosaic · 5 min", "0.40 oz Citra · flameout"],
      dryHops: ["1.25 oz Mosaic · 5 days", "0.40 oz Amarillo · 5 days", "0.40 oz Citra · 5 days"],
      yeast: "London Ale Yeast III · Wyeast Labs 1318",
      priming: "0.59 oz (17 g) corn sugar",
    },
    steps: [
      {
        title: "Mash",
        timer: "30 min",
        temp: "152°F",
        note: "Heat 7.4 litres to 159°F, stir in grains, shut off heat, cover, and steep. Pull the bag and let it drip near-dry.",
      },
      {
        title: "Gravity check",
        timer: "Before boil",
        temp: "88 points",
        note: "Check gravity and correct if needed. Target is 88 gravity points for 1.3 gallons post-boil.",
      },
      {
        title: "Boil",
        timer: "30 min",
        temp: "Rolling",
        note: "Start timer once boiling. Add Amarillo at 15 min, Mosaic at 5 min, and Citra at flameout.",
      },
      {
        title: "Chill & transfer",
        timer: "To pitch temp",
        temp: "Yeast pack target",
        note: "Ice bath the pot, sanitize transfer gear, strain into carboy, aerate, and pitch yeast.",
      },
      {
        title: "Fermentation",
        timer: "14-21 days",
        temp: "Dark quiet spot",
        note: "Seal with sanitizer-filled airlock. Keep the fermenter away from daily commotion.",
      },
      {
        title: "Dry hop",
        timer: "5 days",
        temp: "Fermentation temp",
        note: "Five days before bottling, add Mosaic, Amarillo, and Citra dry hops.",
      },
      {
        title: "Bottle condition",
        timer: "7 days",
        temp: "65°F",
        note: "Prime with corn sugar, bottle quietly, cap, and keep upright. Drink fresh.",
      },
    ],
  },
  {
    id: "san-diego-lager",
    name: "San Diego Lager",
    style: "Lager-inspired Ale",
    method: "1 gallon BIAB · single stage",
    profile: [
      ["OG", "1.054"],
      ["FG", "1.013"],
      ["IBU", "27"],
      ["ABV", "5.5%"],
      ["Boil", "60 min"],
      ["Batch", "1.3 gal post-boil"],
    ],
    ingredients: {
      fermentables: ["2 lb Vienna Malt", "2.5 oz Munich Malt", "2.5 oz Caramunich Malt", "1 oz German Wheat Malt"],
      boilHops: ["0.40 oz Hallertauer · 60 min"],
      dryHops: ["None"],
      yeast: "San Diego Super Yeast · WLP090",
      priming: "0.59 oz (17 g) corn sugar",
    },
    steps: [
      {
        title: "Mash",
        timer: "60 min",
        temp: "156°F",
        note: "Heat 9 litres to 162°F, stir in grains, shut off heat, cover, and steep until the mash looks oatmeal-thick.",
      },
      {
        title: "Mash out",
        timer: "7 min",
        temp: "168°F",
        note: "Return heat, raise to 168°F while stirring, then remove the grains and preserve the wort.",
      },
      {
        title: "Gravity check",
        timer: "Before boil",
        temp: "70 points",
        note: "Check gravity and correct if needed. Target is 70 gravity points for 1.3 gallons post-boil.",
      },
      {
        title: "Boil",
        timer: "60 min",
        temp: "Rolling",
        note: "Start timer once boiling and add 0.40 oz Hallertauer as the bittering addition.",
      },
      {
        title: "Chill & transfer",
        timer: "To pitch temp",
        temp: "Yeast pack target",
        note: "Ice bath the pot, sanitize transfer gear and thermometer, then strain into the carboy.",
      },
      {
        title: "Fermentation",
        timer: "14-21 days",
        temp: "Dark quiet spot",
        note: "Aerate, pitch San Diego Super Yeast, seal with sanitizer-filled airlock, and ferment quietly.",
      },
      {
        title: "Bottle condition",
        timer: "30 days",
        temp: "65°F",
        note: "Prime with corn sugar, bottle quietly, cap, and condition upright. Try for 30 days; 14 days minimum if curiosity wins.",
      },
    ],
  },
  {
    id: "spiced-saison",
    name: "Spiced Saison",
    style: "Saison",
    method: "1 gallon BIAB · single stage",
    profile: [
      ["OG", "1.055"],
      ["FG", "1.018"],
      ["IBU", "23"],
      ["ABV", "5.2%"],
      ["Boil", "90 min"],
      ["Batch", "1.3 gal post-boil"],
    ],
    ingredients: {
      fermentables: ["1.5 lb Belgian Pilsner Malt", "8 oz Vienna Malt", "6 oz Munich Malt (10L)"],
      boilHops: [
        "0.25 oz Hallertauer · 60 min",
        "0.10 oz East Kent Goldings · 15 min",
        "1.5 g fresh cut ginger root · flameout",
        "1.5 g bitter orange peel · flameout",
        "1.5 g star anise · flameout",
        "1.5 g black peppercorn · flameout",
      ],
      dryHops: ["None"],
      yeast: "Belgian Saison Yeast · WLP565 · pitch half pack",
      priming: "0.59 oz (17 g) corn sugar",
    },
    steps: [
      {
        title: "Mash",
        timer: "60 min",
        temp: "156°F",
        note: "Heat 10.5 litres to 162°F, stir in grains, shut off heat, cover, and steep until the mash looks oatmeal-thick.",
      },
      {
        title: "Mash out",
        timer: "7 min",
        temp: "168°F",
        note: "Return heat, raise to 168°F while stirring, then remove the grains and preserve the wort.",
      },
      {
        title: "Gravity check",
        timer: "Before boil",
        temp: "72 points",
        note: "Check gravity and correct if needed. Target is 72 gravity points for 1.3 gallons post-boil.",
      },
      {
        title: "Boil",
        timer: "90 min",
        temp: "Rolling",
        note: "Add Hallertauer at 60 min, East Kent Goldings at 15 min, then ginger, orange peel, star anise, and peppercorn at flameout.",
      },
      {
        title: "Chill & transfer",
        timer: "To pitch temp",
        temp: "Yeast pack target",
        note: "Ice bath the pot, sanitize transfer gear and thermometer, strain into the carboy, and keep below the one-gallon mark.",
      },
      {
        title: "Fermentation",
        timer: "14-21 days",
        temp: "Dark quiet spot",
        note: "Aerate, pitch half the WLP565 pack, seal with sanitizer-filled airlock, and ferment away from household commotion.",
      },
      {
        title: "Bottle condition",
        timer: "30 days",
        temp: "65°F",
        note: "Prime with corn sugar, bottle quietly, cap, and condition upright. Try for 30 days; 14 days minimum if curiosity wins.",
      },
    ],
  },
  {
    id: "breakfast-porter",
    name: "Breakfast Porter",
    style: "Porter",
    method: "1 gallon BIAB · single stage",
    profile: [
      ["OG", "1.070"],
      ["FG", "1.021"],
      ["IBU", "50"],
      ["ABV", "7.5%"],
      ["Boil", "60 min"],
      ["Batch", "1.3 gal post-boil"],
    ],
    ingredients: {
      fermentables: [
        "3 lb Pale Malt (2-Row)",
        "6 oz Flaked Oats",
        "4 oz Chocolate Malt",
        "3 oz Roasted Barley",
        "2 oz Black Malt",
        "1 oz Caramel Malt (120L)",
      ],
      boilHops: [
        "0.25 oz Nugget · 60 min",
        "0.15 oz Willamette · 30 min",
        "0.15 oz Willamette · flameout",
        "25 g organic dark hot chocolate powder · flameout",
        "25 g freshly ground dark roast coffee beans · flameout",
      ],
      dryHops: ["None"],
      yeast: "White Labs California Ale Yeast · WLP001",
      priming: "0.59 oz (17 g) corn sugar",
    },
    steps: [
      {
        title: "Mash",
        timer: "60 min",
        temp: "155°F",
        note: "Heat 10 litres to 164°F, stir in grains, shut off heat, cover, and steep until the mash looks oatmeal-thick.",
      },
      {
        title: "Mash out",
        timer: "7 min",
        temp: "168°F",
        note: "Return heat, raise to 168°F while stirring, then remove the grains and preserve the wort.",
      },
      {
        title: "Gravity check",
        timer: "Before boil",
        temp: "91 points",
        note: "Check gravity and correct if needed. Target is 91 gravity points for 1.3 gallons post-boil.",
      },
      {
        title: "Boil",
        timer: "60 min",
        temp: "Rolling",
        note: "Add Nugget at 60 min, Willamette at 30 min, then Willamette, hot chocolate powder, and ground coffee at flameout.",
      },
      {
        title: "Chill & transfer",
        timer: "To pitch temp",
        temp: "Yeast pack target",
        note: "Ice bath the pot, sanitize transfer gear and thermometer, then strain into the carboy.",
      },
      {
        title: "Fermentation",
        timer: "14-21 days",
        temp: "Dark quiet spot",
        note: "Aerate, pitch WLP001, seal with sanitizer-filled airlock, and ferment away from household commotion.",
      },
      {
        title: "Bottle condition",
        timer: "30 days",
        temp: "65°F",
        note: "Prime with corn sugar, bottle quietly, cap, and condition upright. Try for 30 days; 14 days minimum if curiosity wins.",
      },
    ],
  },
  {
    id: "chocolate-stout",
    name: "Chocolate Stout",
    style: "Stout",
    method: "1 gallon BIAB · single stage",
    profile: [
      ["OG", "1.054"],
      ["FG", "1.015"],
      ["IBU", "39"],
      ["ABV", "5.1%"],
      ["Boil", "90 min"],
      ["Batch", "1.3 gal post-boil"],
    ],
    ingredients: {
      fermentables: [
        "1.75 lb Maris Otter",
        "3 oz Chocolate Malt",
        "2 oz Torrified Wheat",
        "1.5 oz Caramunich Malt",
        "1.5 oz Roasted Barley",
      ],
      boilHops: ["0.2 oz Northern Brewer · 90 min", "10 g cocoa powder · 15 min"],
      dryHops: ["None"],
      yeast: "American Ale Yeast · Wyeast 1056 · pitch half pack",
      priming: "0.59 oz (17 g) corn sugar",
    },
    steps: [
      {
        title: "Mash",
        timer: "60 min",
        temp: "156°F",
        note: "Heat 10.7 litres to 162°F, stir in grains, shut off heat, cover, and steep until the mash looks oatmeal-thick.",
      },
      {
        title: "Mash out",
        timer: "7 min",
        temp: "168°F",
        note: "Return heat, raise to 168°F while stirring, then remove the grains and preserve the wort.",
      },
      {
        title: "Gravity check",
        timer: "Before boil",
        temp: "70 points",
        note: "Check gravity and correct if needed. Target is 70 gravity points for 1.3 gallons post-boil.",
      },
      {
        title: "Boil",
        timer: "90 min",
        temp: "Rolling",
        note: "Add Northern Brewer at 90 min, then cocoa powder with 15 min left in the boil.",
      },
      {
        title: "Chill & transfer",
        timer: "To pitch temp",
        temp: "Yeast pack target",
        note: "Ice bath the pot, sanitize transfer gear and thermometer, strain into the carboy, and keep below the one-gallon mark.",
      },
      {
        title: "Fermentation",
        timer: "14-21 days",
        temp: "Dark quiet spot",
        note: "Aerate, pitch half the Wyeast 1056 pack, seal with sanitizer-filled airlock, and ferment away from household commotion.",
      },
      {
        title: "Bottle condition",
        timer: "30 days",
        temp: "65°F",
        note: "Prime with corn sugar, bottle quietly, cap, and condition upright. Try for 30 days; 14 days minimum if curiosity wins.",
      },
    ],
  },
  {
    id: "ginger-saison",
    name: "Ginger Saison",
    style: "Saison",
    method: "1 gallon BIAB · single stage",
    profile: [
      ["OG", "1.066"],
      ["FG", "1.012"],
      ["IBU", "45"],
      ["ABV", "7.2%"],
      ["Boil", "90 min"],
      ["Batch", "1.3 gal post-boil"],
    ],
    ingredients: {
      fermentables: ["1.75 lb Belgian Pilsner Malt", "8 oz Munich Malt", "4 oz Caramel Wheat Malt"],
      boilHops: [
        "0.40 oz Hallertauer · 60 min",
        "4 oz Clear Candi Sugar · 15 min",
        "1 oz fresh ginger root, chopped · 12 min",
        "0.20 oz Styrian Goldings · 5 min",
      ],
      dryHops: ["None"],
      yeast: "Belgian Saison I Yeast · WLP565 · pitch half pack",
      priming: "0.59 oz (17 g) corn sugar",
    },
    steps: [
      {
        title: "Mash",
        timer: "90 min",
        temp: "147°F",
        note: "Heat 10.7 litres to 154°F, stir in grains, shut off heat, cover, and steep until the mash looks oatmeal-thick.",
      },
      {
        title: "Mash out",
        timer: "7 min",
        temp: "168°F",
        note: "Return heat, raise to 168°F while stirring, then remove the grains and preserve the wort.",
      },
      {
        title: "Gravity check",
        timer: "Before boil",
        temp: "86 points",
        note: "Check gravity and correct if needed. Target is 86 gravity points for 1.3 gallons post-boil.",
      },
      {
        title: "Boil",
        timer: "90 min",
        temp: "Rolling",
        note: "Add Hallertauer at 60 min, candi sugar at 15 min, chopped ginger at 12 min, and Styrian Goldings at 5 min.",
      },
      {
        title: "Chill & transfer",
        timer: "To pitch temp",
        temp: "Yeast pack target",
        note: "Ice bath the pot, sanitize transfer gear and thermometer, strain into the carboy, and keep below the one-gallon mark.",
      },
      {
        title: "Fermentation",
        timer: "14-21 days",
        temp: "Dark quiet spot",
        note: "Aerate, pitch half the WLP565 pack, seal with sanitizer-filled airlock, and ferment away from household commotion.",
      },
      {
        title: "Bottle condition",
        timer: "30 days",
        temp: "65°F",
        note: "Prime with corn sugar, bottle quietly, cap, and condition upright. Try for 30 days; 14 days minimum if curiosity wins.",
      },
    ],
  },
  {
    id: "coconut-brown-ale",
    name: "Coconut Brown Ale",
    style: "Brown Ale",
    method: "1 gallon BIAB · single stage",
    profile: [
      ["OG", "1.051"],
      ["FG", "1.014"],
      ["IBU", "28"],
      ["ABV", "4.8%"],
      ["Boil", "60 min"],
      ["Batch", "1.3 gal post-boil"],
    ],
    ingredients: {
      fermentables: [
        "1.75 lb Pale Malt (2-Row)",
        "4 oz Crystal Malt (60L)",
        "2 oz Chocolate Malt",
        "2 oz Victory Malt",
        "0.25 lb toasted coconut chips",
      ],
      boilHops: ["0.20 oz Northern Brewer · 60 min", "0.25 lb toasted coconut chips · 10 min"],
      dryHops: ["None"],
      yeast: "American Ale Yeast · Wyeast 1056",
      priming: "0.59 oz (17 g) corn sugar with coconut-infused priming solution",
    },
    steps: [
      {
        title: "Toast coconut",
        timer: "5-10 min",
        temp: "325°F",
        note: "Spread coconut chips on a cookie sheet and toast carefully until fragrant; they can burn quickly.",
      },
      {
        title: "Mash",
        timer: "60 min",
        temp: "156°F",
        note: "Heat 9 litres to 163°F, stir in grains, shut off heat, cover, and steep until the mash looks oatmeal-thick.",
      },
      {
        title: "Mash out",
        timer: "7 min",
        temp: "168°F",
        note: "Return heat, raise to 168°F while stirring, then remove the grains and preserve the wort.",
      },
      {
        title: "Gravity check",
        timer: "Before boil",
        temp: "66 points",
        note: "Check gravity and correct if needed. Target is 66 gravity points for 1.3 gallons post-boil.",
      },
      {
        title: "Boil",
        timer: "60 min",
        temp: "Rolling",
        note: "Add Northern Brewer at 60 min, then toasted coconut chips with 10 min left in the boil.",
      },
      {
        title: "Chill & transfer",
        timer: "To pitch temp",
        temp: "Yeast pack target",
        note: "Ice bath the pot, sanitize transfer gear and thermometer, then strain into the carboy.",
      },
      {
        title: "Fermentation",
        timer: "14-21 days",
        temp: "Dark quiet spot",
        note: "Aerate, pitch Wyeast 1056, seal with sanitizer-filled airlock, and ferment away from household commotion.",
      },
      {
        title: "Bottle condition",
        timer: "30 days",
        temp: "65°F",
        note: "Steep 45 g untoasted coconut chips in 750 ml just-off-boil water for 20 min, strain, add priming sugar, boil down to 185 ml, then bottle and condition upright.",
      },
    ],
  },
  {
    id: "bog-myrtle-gruit",
    name: "Bog Myrtle Gruit",
    style: "Gruit",
    method: "1 gallon BIAB · single stage",
    profile: [
      ["OG", "1.070"],
      ["FG", "1.016"],
      ["IBU", "20"],
      ["ABV", "6.4%"],
      ["Boil", "90 min"],
      ["Batch", "1.3 gal post-boil"],
    ],
    ingredients: {
      fermentables: [
        "1 lb 10 oz Pilsner Malt (2-Row)",
        "1 lb 3 oz Vienna Malt",
        "7 oz Munich Malt",
        "3 oz Acid Malt",
        "2 oz Carafoam Malt",
      ],
      boilHops: [
        "0.15 oz Perle · 90 min",
        "7 g Bog Myrtle · 90 min",
        "2.5 g Bog Myrtle · flameout",
        "9.5 g Labrador Tea · flameout",
      ],
      dryHops: ["None"],
      yeast: "Scottish Ale Yeast · Wyeast 1728",
      priming: "0.59 oz (17 g) corn sugar",
    },
    steps: [
      {
        title: "Mash",
        timer: "60 min",
        temp: "156°F",
        note: "Heat 11.5 litres to 165°F, stir in grains, shut off heat, cover, and steep until the mash looks oatmeal-thick.",
      },
      {
        title: "Mash out",
        timer: "7 min",
        temp: "168°F",
        note: "Return heat, raise to 168°F while stirring, then remove the grains and preserve the wort.",
      },
      {
        title: "Gravity check",
        timer: "Before boil",
        temp: "91 points",
        note: "Check gravity and correct if needed. Target is 91 gravity points for 1.3 gallons post-boil.",
      },
      {
        title: "Boil",
        timer: "90 min",
        temp: "Rolling",
        note: "Add Perle and 7 g Bog Myrtle at 90 min, then 2.5 g Bog Myrtle and 9.5 g Labrador Tea at flameout.",
      },
      {
        title: "Chill & transfer",
        timer: "To pitch temp",
        temp: "Yeast pack target",
        note: "Ice bath the pot, sanitize transfer gear and thermometer, then strain into the carboy.",
      },
      {
        title: "Fermentation",
        timer: "14-21 days",
        temp: "Dark quiet spot",
        note: "Aerate, pitch Wyeast 1728, seal with sanitizer-filled airlock, and ferment away from household commotion.",
      },
      {
        title: "Bottle condition",
        timer: "30 days",
        temp: "65°F",
        note: "Prime with corn sugar, bottle quietly, cap, and condition upright. Try for 30 days; 14 days minimum if curiosity wins.",
      },
    ],
  },
  {
    id: "pumpkin-ale",
    name: "Pumpkin Ale",
    style: "Pumpkin Ale",
    method: "1 gallon BIAB · single stage",
    profile: [
      ["OG", "1.060"],
      ["FG", "1.017"],
      ["IBU", "44"],
      ["ABV", "5.7%"],
      ["Boil", "60 min"],
      ["Batch", "1.3 gal post-boil"],
    ],
    ingredients: {
      fermentables: ["2 lb US Pale Malt (6-row)", "8 oz Caramunich Malt", "4 oz Special B Malt", "1 lb Pumpkin Puree · end of mash"],
      boilHops: [
        "0.20 oz Simcoe · 60 min",
        "0.20 oz Saaz · 15 min",
        "0.20 oz fresh cut ginger root · 12 min",
        "1 cinnamon stick · 12 min",
        "1 clove · 12 min",
        "0.20 oz Saaz · flameout",
      ],
      dryHops: ["None"],
      yeast: "Safale English Ale Yeast · Fermentis S-04 · pitch half pack",
      priming: "0.59 oz (17 g) corn sugar",
    },
    steps: [
      {
        title: "Mash",
        timer: "60 min",
        temp: "154°F",
        note: "Heat 9 litres to 160°F, stir in grains, shut off heat, cover, and steep. Add pumpkin puree at the end of the mash.",
      },
      {
        title: "Mash out",
        timer: "7 min",
        temp: "168°F",
        note: "Return heat, raise to 168°F while stirring, then remove the grains and preserve the wort.",
      },
      {
        title: "Gravity check",
        timer: "Before boil",
        temp: "78 points",
        note: "Check gravity and correct if needed. Target is 78 gravity points for 1.3 gallons post-boil.",
      },
      {
        title: "Boil",
        timer: "60 min",
        temp: "Rolling",
        note: "Add Simcoe at 60 min, Saaz at 15 min, ginger, cinnamon, and clove at 12 min, then Saaz at flameout.",
      },
      {
        title: "Chill & transfer",
        timer: "To pitch temp",
        temp: "Yeast pack target",
        note: "Ice bath the pot, sanitize transfer gear and thermometer, strain into the carboy, and keep below the one-gallon mark.",
      },
      {
        title: "Fermentation",
        timer: "14-21 days",
        temp: "Dark quiet spot",
        note: "Aerate, pitch half the S-04 pack, seal with sanitizer-filled airlock, and ferment away from household commotion.",
      },
      {
        title: "Bottle condition",
        timer: "30 days",
        temp: "65°F",
        note: "Prime with corn sugar, bottle quietly, cap, and condition upright. Try for 30 days; 14 days minimum if curiosity wins.",
      },
    ],
  },
  {
    id: "american-wheat-beer",
    name: "American Wheat Beer",
    style: "Wheat Beer",
    method: "1 gallon BIAB · single stage",
    profile: [
      ["OG", "1.049"],
      ["FG", "1.009"],
      ["IBU", "23"],
      ["ABV", "5.2%"],
      ["Boil", "60 min"],
      ["Batch", "1.3 gal post-boil"],
    ],
    ingredients: {
      fermentables: ["1 lb US Pale Ale Malt (2-row)", "1 lb White Wheat Malt"],
      boilHops: ["0.50 oz Motueka · 5 min", "0.20 oz Sorachi Ace · 5 min"],
      dryHops: ["None"],
      yeast: "American Ale Yeast · Wyeast 1056 · pitch half pack",
      priming: "0.59 oz (17 g) corn sugar",
    },
    steps: [
      {
        title: "Mash",
        timer: "90 min",
        temp: "148°F",
        note: "Heat 9 litres to 153°F, stir in grains, shut off heat, cover, and steep until the mash looks oatmeal-thick.",
      },
      {
        title: "Mash out",
        timer: "7 min",
        temp: "168°F",
        note: "Return heat, raise to 168°F while stirring, then remove the grains and preserve the wort.",
      },
      {
        title: "Gravity check",
        timer: "Before boil",
        temp: "64 points",
        note: "Check gravity and correct if needed. Target is 64 gravity points for 1.3 gallons post-boil.",
      },
      {
        title: "Boil",
        timer: "60 min",
        temp: "Rolling",
        note: "Start the boil, then add Motueka and Sorachi Ace with 5 minutes left for a bright citrus hop profile.",
      },
      {
        title: "Chill & transfer",
        timer: "To pitch temp",
        temp: "Yeast pack target",
        note: "Ice bath the pot, sanitize transfer gear and thermometer, strain into the carboy, and keep below the one-gallon mark.",
      },
      {
        title: "Fermentation",
        timer: "14-21 days",
        temp: "Dark quiet spot",
        note: "Aerate, pitch half the Wyeast 1056 pack, seal with sanitizer-filled airlock, and ferment away from household commotion.",
      },
      {
        title: "Bottle condition",
        timer: "30 days",
        temp: "65°F",
        note: "Prime with corn sugar, bottle quietly, cap, and condition upright. Try for 30 days; 14 days minimum if curiosity wins.",
      },
    ],
  },
  {
    id: "scottish-export-80",
    name: "Scottish Export 80",
    style: "Scottish Export",
    method: "1 gallon BIAB · single stage",
    profile: [
      ["OG", "1.044"],
      ["FG", "1.012"],
      ["IBU", "27"],
      ["ABV", "4.4%"],
      ["Boil", "60 min"],
      ["Batch", "1.3 gal post-boil"],
    ],
    ingredients: {
      fermentables: ["2 lb 2 oz Pale Malt (2-Row)", "4 oz Caramel Malt (80L)", "2 oz Brown Malt"],
      boilHops: ["0.25 oz Challenger · 60 min"],
      dryHops: ["None"],
      yeast: "Scottish Ale Yeast · Wyeast 1728",
      priming: "0.59 oz (17 g) corn sugar",
    },
    steps: [
      {
        title: "Mash",
        timer: "60 min",
        temp: "156°F",
        note: "Heat 9.5 litres to 162°F, stir in grains, shut off heat, cover, and steep until the mash looks oatmeal-thick.",
      },
      {
        title: "Mash out",
        timer: "7 min",
        temp: "168°F",
        note: "Return heat, raise to 168°F while stirring, then remove the grains and preserve the wort.",
      },
      {
        title: "Gravity check",
        timer: "Before boil",
        temp: "57 points",
        note: "Check gravity and correct if needed. Target is 57 gravity points for 1.3 gallons post-boil.",
      },
      {
        title: "Boil",
        timer: "60 min",
        temp: "Rolling",
        note: "Start the boil, then add Challenger as the 60-minute bittering addition.",
      },
      {
        title: "Chill & transfer",
        timer: "To pitch temp",
        temp: "Yeast pack target",
        note: "Ice bath the pot, sanitize transfer gear and thermometer, then strain into the carboy.",
      },
      {
        title: "Fermentation",
        timer: "14-21 days",
        temp: "Dark quiet spot",
        note: "Aerate, pitch Wyeast 1728, seal with sanitizer-filled airlock, and ferment away from household commotion.",
      },
      {
        title: "Bottle condition",
        timer: "30 days",
        temp: "65°F",
        note: "Prime with corn sugar, bottle quietly, cap, and condition upright. Try for 30 days; 14 days minimum if curiosity wins.",
      },
    ],
  },
  {
    id: "mojito-witbier",
    name: "Mojito Witbier",
    style: "Witbier",
    method: "1 gallon BIAB · single stage",
    profile: [
      ["OG", "1.051"],
      ["FG", "1.012"],
      ["IBU", "20"],
      ["ABV", "5.1%"],
      ["Boil", "90 min"],
      ["Batch", "1.3 gal post-boil"],
    ],
    ingredients: {
      fermentables: [
        "1 lb Belgian Pilsner Malt",
        "1 lb Flaked Wheat Malt",
        "2 oz Flaked Oats",
        "2 oz Acid Malt · optional",
      ],
      boilHops: ["0.35 oz Perle · 10 min", "0.50 oz Motueka · flameout"],
      dryHops: ["None"],
      yeast: "Belgian Witbier Yeast · Wyeast 3944",
      priming: "0.59 oz (17 g) corn sugar",
    },
    steps: [
      {
        title: "Mash",
        timer: "75 min",
        temp: "152°F",
        note: "Heat 10.5 litres to 158°F, stir in grains, shut off heat, cover, and steep until the mash looks oatmeal-thick.",
      },
      {
        title: "Mash out",
        timer: "7 min",
        temp: "168°F",
        note: "Return heat, raise to 168°F while stirring, then remove the grains and preserve the wort.",
      },
      {
        title: "Gravity check",
        timer: "Before boil",
        temp: "66 points",
        note: "Check gravity and correct if needed. Target is 66 gravity points for 1.3 gallons post-boil.",
      },
      {
        title: "Boil",
        timer: "90 min",
        temp: "Rolling",
        note: "Start the boil, add Perle with 10 minutes left, then add Motueka at flameout for minty lime-like aroma.",
      },
      {
        title: "Chill & transfer",
        timer: "To pitch temp",
        temp: "Yeast pack target",
        note: "Ice bath the pot, sanitize transfer gear and thermometer, then strain into the carboy.",
      },
      {
        title: "Fermentation",
        timer: "14-21 days",
        temp: "Dark quiet spot",
        note: "Aerate, pitch Wyeast 3944, seal with sanitizer-filled airlock, and ferment away from household commotion.",
      },
      {
        title: "Bottle condition",
        timer: "30 days",
        temp: "65°F",
        note: "Prime with corn sugar, bottle quietly, cap, and condition upright. Try for 30 days; 14 days minimum if curiosity wins.",
      },
    ],
  },
  {
    id: "blanche-de-leslieville",
    name: "Blanche de Leslieville",
    style: "Witbier",
    method: "1 gallon BIAB · single stage",
    profile: [
      ["OG", "1.047"],
      ["FG", "1.009"],
      ["IBU", "12"],
      ["ABV", "5.0%"],
      ["Boil", "90 min"],
      ["Batch", "1.3 gal post-boil"],
    ],
    ingredients: {
      fermentables: ["1 lb Belgian Pilsner 2-Row Malt", "1 lb Wheat Malt"],
      boilHops: [
        "0.20 oz Saaz · 30 min",
        "3 g grated ginger root · 30 min",
        "3 g Coriander Seed · 5 min",
        "3 g Bitter Orange Peel · 5 min",
      ],
      dryHops: ["None"],
      yeast: "Belgian Witbier Yeast · Wyeast 3944 · pitch half pack",
      priming: "0.59 oz (17 g) corn sugar",
    },
    steps: [
      {
        title: "Mash",
        timer: "90 min",
        temp: "148°F",
        note: "Heat 10.5 litres to 153°F, stir in grains, shut off heat, cover, and steep until the mash looks oatmeal-thick.",
      },
      {
        title: "Mash out",
        timer: "7 min",
        temp: "168°F",
        note: "Return heat, raise to 168°F while stirring, then remove the grains and preserve the wort.",
      },
      {
        title: "Gravity check",
        timer: "Before boil",
        temp: "61 points",
        note: "Check gravity and correct if needed. Target is 61 gravity points for 1.3 gallons post-boil.",
      },
      {
        title: "Boil",
        timer: "90 min",
        temp: "Rolling",
        note: "Start the boil, add Saaz and grated ginger at 30 min, then coriander seed and bitter orange peel at 5 min.",
      },
      {
        title: "Chill & transfer",
        timer: "To pitch temp",
        temp: "Yeast pack target",
        note: "Ice bath the pot, sanitize transfer gear and thermometer, strain into the carboy, and keep below the one-gallon mark.",
      },
      {
        title: "Fermentation",
        timer: "14-21 days",
        temp: "Dark quiet spot",
        note: "Aerate, pitch half the Wyeast 3944 pack, seal with sanitizer-filled airlock, and ferment away from household commotion.",
      },
      {
        title: "Bottle condition",
        timer: "30 days",
        temp: "65°F",
        note: "Prime with corn sugar, bottle quietly, cap, and condition upright. Try for 30 days; 14 days minimum if curiosity wins.",
      },
    ],
  },
  {
    id: "tokyo-rose-saison",
    name: "Tokyo Rose Saison",
    style: "Saison",
    method: "1 gallon BIAB · single stage",
    profile: [
      ["OG", "1.062"],
      ["FG", "1.011"],
      ["IBU", "24"],
      ["ABV", "6.8%"],
      ["Boil", "90 min"],
      ["Batch", "1.3 gal post-boil"],
    ],
    ingredients: {
      fermentables: [
        "2 lb Pilsner Malt (2-row)",
        "3 oz White Wheat Malt",
        "1.5 oz Munich Malt",
        "1 oz Flaked Wheat",
        "0.5 oz Caramunich Malt",
      ],
      boilHops: [
        "0.03 oz Hallertauer · 90 min",
        "0.07 oz Sorachi Ace · 15 min",
        "0.08 oz Sorachi Ace · 5 min",
        "10 g Rosehip · flameout",
        "3 oz corn sugar · flameout",
        "0.09 oz Sorachi Ace · 30 min whirlpool",
        "0.04 oz Hallertauer · 30 min whirlpool",
      ],
      dryHops: ["None"],
      yeast: "French Saison Yeast · Wyeast 3711 · pitch half pack",
      priming: "0.59 oz (17 g) corn sugar",
    },
    steps: [
      {
        title: "Mash",
        timer: "60 min",
        temp: "156°F",
        note: "Heat 9 litres to 163°F, stir in grains, shut off heat, cover, and steep until the mash looks oatmeal-thick.",
      },
      {
        title: "Mash out",
        timer: "7 min",
        temp: "168°F",
        note: "Return heat, raise to 168°F while stirring, then remove the grains and preserve the wort.",
      },
      {
        title: "Gravity check",
        timer: "Before boil",
        temp: "81 points",
        note: "Check gravity and correct if needed. Target is 81 gravity points for 1.3 gallons post-boil.",
      },
      {
        title: "Boil",
        timer: "90 min",
        temp: "Rolling",
        note: "Add Hallertauer at 90 min, Sorachi Ace at 15 and 5 min, then rosehip and corn sugar at flameout.",
      },
      {
        title: "Whirlpool",
        timer: "30 min",
        temp: "185-210°F",
        note: "Shut off heat, hold the wort between 185-210°F, and steep Sorachi Ace plus Hallertauer for 30 minutes.",
      },
      {
        title: "Chill & transfer",
        timer: "To pitch temp",
        temp: "Yeast pack target",
        note: "Ice bath the pot, sanitize transfer gear and thermometer, strain into the carboy, and keep below the one-gallon mark.",
      },
      {
        title: "Fermentation",
        timer: "14-21 days",
        temp: "Dark quiet spot",
        note: "Aerate, pitch half the Wyeast 3711 pack, seal with sanitizer-filled airlock, and ferment away from household commotion.",
      },
      {
        title: "Bottle condition",
        timer: "30 days",
        temp: "65°F",
        note: "Prime with corn sugar, bottle quietly, cap, and condition upright. Try for 30 days; 14 days minimum if curiosity wins.",
      },
    ],
  },
  {
    id: "belgian-wit-beer",
    name: "Belgian Wit Beer",
    style: "Witbier",
    method: "1 gallon BIAB · single stage",
    profile: [
      ["OG", "1.047"],
      ["FG", "1.009"],
      ["IBU", "17"],
      ["ABV", "5.0%"],
      ["Boil", "90 min"],
      ["Batch", "1.3 gal post-boil"],
    ],
    ingredients: {
      fermentables: [
        "12 oz Belgian Pilsner 2-Row Malt",
        "12 oz White Wheat Malt",
        "4 oz Flaked Barley",
        "4 oz Flaked Wheat",
      ],
      boilHops: ["0.25 oz Saaz · 40 min"],
      dryHops: ["None"],
      yeast: "Belgian Witbier Yeast · Wyeast 3944 · pitch half pack",
      priming: "0.59 oz (17 g) corn sugar",
    },
    steps: [
      {
        title: "Mash",
        timer: "90 min",
        temp: "148°F",
        note: "Heat 10.5 litres to 153°F, stir in grains, shut off heat, cover, and steep until the mash looks oatmeal-thick.",
      },
      {
        title: "Mash out",
        timer: "7 min",
        temp: "168°F",
        note: "Return heat, raise to 168°F while stirring, then remove the grains and preserve the wort.",
      },
      {
        title: "Gravity check",
        timer: "Before boil",
        temp: "61 points",
        note: "Check gravity and correct if needed. Target is 61 gravity points for 1.3 gallons post-boil.",
      },
      {
        title: "Boil",
        timer: "90 min",
        temp: "Rolling",
        note: "Start the boil, then add Saaz with 40 minutes left as the restrained bittering addition.",
      },
      {
        title: "Chill & transfer",
        timer: "To pitch temp",
        temp: "Yeast pack target",
        note: "Ice bath the pot, sanitize transfer gear and thermometer, strain into the carboy, and keep below the one-gallon mark.",
      },
      {
        title: "Fermentation",
        timer: "14-21 days",
        temp: "Dark quiet spot",
        note: "Aerate, pitch half the Wyeast 3944 pack, seal with sanitizer-filled airlock, and ferment away from household commotion.",
      },
      {
        title: "Bottle condition",
        timer: "30 days",
        temp: "65°F",
        note: "Prime with corn sugar, bottle quietly, cap, and condition upright. Try for 30 days; 14 days minimum if curiosity wins.",
      },
    ],
  },
  {
    id: "dortmunder",
    name: "Dortmunder",
    style: "Lager",
    method: "1 gallon BIAB · single stage",
    profile: [
      ["OG", "1.049"],
      ["FG", "1.009"],
      ["IBU", "25"],
      ["ABV", "5.2%"],
      ["Boil", "60 min"],
      ["Batch", "1.3 gal post-boil"],
    ],
    ingredients: {
      fermentables: ["1 lb 12 oz Pilsner Malt", "8 oz Vienna Malt", "2 oz Munich Malt"],
      boilHops: [
        "0.25 oz Hallertauer Mittelfrueh · 60 min",
        "0.25 oz Hallertauer Mittelfrueh · 10 min",
        "0.25 oz Hallertauer Mittelfrueh · 5 min",
      ],
      dryHops: ["None"],
      yeast: "Fermentis S-23 Safale West European Lager Yeast",
      priming: "0.59 oz (17 g) corn sugar",
    },
    steps: [
      {
        title: "Mash",
        timer: "60 min",
        temp: "152°F",
        note: "Heat 9.5 litres to 160°F, stir in grains, shut off heat, cover, and steep until the mash looks oatmeal-thick.",
      },
      {
        title: "Mash out",
        timer: "7 min",
        temp: "168°F",
        note: "Return heat, raise to 168°F while stirring, then remove the grains and preserve the wort.",
      },
      {
        title: "Gravity check",
        timer: "Before boil",
        temp: "64 points",
        note: "Check gravity and correct if needed. Target is 64 gravity points for 1.3 gallons post-boil.",
      },
      {
        title: "Boil",
        timer: "60 min",
        temp: "Rolling",
        note: "Add Hallertauer Mittelfrueh at 60 min, 10 min, and 5 min.",
      },
      {
        title: "Chill & transfer",
        timer: "To pitch temp",
        temp: "Yeast pack target",
        note: "Ice bath the pot, sanitize transfer gear and thermometer, then strain into the carboy.",
      },
      {
        title: "Cold fermentation",
        timer: "7 days",
        temp: "50°F",
        note: "Aerate, pitch S-23, seal with sanitizer-filled airlock, and hold at 50°F for the first week.",
      },
      {
        title: "Free-rise",
        timer: "7 days",
        temp: "60°F",
        note: "Let fermentation rise to 60°F for another week before bottling.",
      },
      {
        title: "Bottle lager",
        timer: "60 days",
        temp: "Fridge after 14 days",
        note: "Prime with corn sugar, bottle quietly, keep upright at 65°F for 14 days, then move bottles to the fridge. Wait 60 days if you can.",
      },
    ],
  },
  {
    id: "black-ipa",
    name: "Black IPA",
    style: "IPA",
    method: "1 gallon BIAB · single stage",
    profile: [
      ["OG", "1.065"],
      ["FG", "1.017"],
      ["IBU", "59"],
      ["ABV", "6.3%"],
      ["Boil", "60 min"],
      ["Batch", "1.3 gal post-boil"],
    ],
    ingredients: {
      fermentables: ["2.25 lb Pale Malt (2-Row)", "4 oz Munich Malt (10L)", "2.5 oz Carafa III", "2.5 oz Caramunich Malt"],
      boilHops: ["0.25 oz Columbus · 55 min", "0.25 oz Columbus · flameout", "0.50 oz Centennial · flameout"],
      dryHops: ["0.40 oz Chinook · 5 days", "0.50 oz Centennial · 5 days"],
      yeast: "Safale American Yeast · Fermentis US-05 · pitch half pack",
      priming: "0.59 oz (17 g) corn sugar",
    },
    steps: [
      {
        title: "Mash",
        timer: "60 min",
        temp: "156°F",
        note: "Heat 9 litres to 163°F, stir in grains, shut off heat, cover, and steep until the mash looks oatmeal-thick.",
      },
      {
        title: "Mash out",
        timer: "7 min",
        temp: "168°F",
        note: "Return heat, raise to 168°F while stirring, then remove the grains and preserve the wort.",
      },
      {
        title: "Gravity check",
        timer: "Before boil",
        temp: "85 points",
        note: "Check gravity and correct if needed. Target is 85 gravity points for 1.3 gallons post-boil.",
      },
      {
        title: "Boil",
        timer: "60 min",
        temp: "Rolling",
        note: "Add Columbus at 55 min, then Columbus and Centennial at flameout.",
      },
      {
        title: "Chill & transfer",
        timer: "To pitch temp",
        temp: "Yeast pack target",
        note: "Ice bath the pot, sanitize transfer gear and thermometer, strain into the carboy, and keep below the one-gallon mark.",
      },
      {
        title: "Fermentation",
        timer: "14-21 days",
        temp: "Dark quiet spot",
        note: "Aerate, pitch half the US-05 pack, seal with sanitizer-filled airlock, and ferment away from household commotion.",
      },
      {
        title: "Dry hop",
        timer: "5 days",
        temp: "Fermentation temp",
        note: "Add Chinook and Centennial according to the dry hop schedule.",
      },
      {
        title: "Bottle condition",
        timer: "30 days",
        temp: "65°F",
        note: "Prime with corn sugar, bottle quietly, cap, and condition upright. Try for 30 days; 14 days minimum if curiosity wins.",
      },
    ],
  },
  {
    id: "dark-kveik",
    name: "Dark Kveik",
    style: "Kveik",
    method: "1 gallon BIAB · single stage",
    profile: [
      ["OG", "1.061"],
      ["FG", "1.015"],
      ["IBU", "38"],
      ["ABV", "6.1%"],
      ["Boil", "60 min"],
      ["Batch", "1.3 gal post-boil"],
    ],
    ingredients: {
      fermentables: ["1 lb 8 oz Pale Malt", "1 oz Chocolate Malt", "1 oz Rye Malt", "0.5 oz Roasted Barley"],
      boilHops: ["0.20 oz Apollo · 20 min"],
      dryHops: ["None"],
      yeast: "Voss Kveik Yeast",
      priming: "0.59 oz (17 g) corn sugar",
    },
    steps: [
      {
        title: "Mash",
        timer: "60 min",
        temp: "156°F",
        note: "Heat 9 litres to 162°F, stir in grains, shut off heat, cover, and steep until the mash looks oatmeal-thick.",
      },
      {
        title: "Mash out",
        timer: "7 min",
        temp: "168°F",
        note: "Return heat, raise to 168°F while stirring, then remove the grains and preserve the wort.",
      },
      {
        title: "Gravity check",
        timer: "Before boil",
        temp: "79 points",
        note: "Check gravity and correct if needed. Target is 79 gravity points for 1.3 gallons post-boil.",
      },
      {
        title: "Boil",
        timer: "60 min",
        temp: "Rolling",
        note: "Start the boil, then add Apollo with 20 minutes left.",
      },
      {
        title: "Chill & transfer",
        timer: "To pitch temp",
        temp: "Yeast pack target",
        note: "Ice bath the pot, sanitize transfer gear and thermometer, then strain into the carboy.",
      },
      {
        title: "Warm fermentation",
        timer: "14-21 days",
        temp: "Warm room friendly",
        note: "Aerate, pitch Voss Kveik, seal with sanitizer-filled airlock, and ferment warm if needed; this yeast tolerates high temperatures well.",
      },
      {
        title: "Bottle condition",
        timer: "30 days",
        temp: "65°F",
        note: "Prime with corn sugar, bottle quietly, cap, and condition upright. Try for 30 days; 14 days minimum if curiosity wins.",
      },
    ],
  },
  {
    id: "kolsch-style-ale",
    name: "Kölsch-Style Ale",
    style: "Kölsch-Style Ale",
    method: "1 gallon BIAB · single stage",
    profile: [
      ["OG", "1.045"],
      ["FG", "1.009"],
      ["IBU", "22"],
      ["ABV", "4.6%"],
      ["Boil", "60 min"],
      ["Batch", "1.3 gal post-boil"],
    ],
    ingredients: {
      fermentables: ["1 lb 12 oz Pilsner Malt", "7 oz Vienna Malt"],
      boilHops: ["0.25 oz Tettnang · 60 min", "0.25 oz Tettnang · 10 min"],
      dryHops: ["None"],
      yeast: "Fermentis K-97 Safale German Ale Yeast",
      priming: "0.59 oz (17 g) corn sugar",
    },
    steps: [
      {
        title: "Mash rest",
        timer: "60 min",
        temp: "142°F",
        note: "Heat 9.5 litres to 150°F, stir in grains, shut off heat, cover, and steep until the mash looks oatmeal-thick.",
      },
      {
        title: "Mash ramp",
        timer: "80 min",
        temp: "154°F",
        note: "Slowly ramp the mash to 154°F over 60 minutes, then rest for 20 minutes.",
      },
      {
        title: "Mash out",
        timer: "7 min",
        temp: "168°F",
        note: "Return heat, raise to 168°F while stirring, then remove the grains and preserve the wort.",
      },
      {
        title: "Gravity check",
        timer: "Before boil",
        temp: "60 points",
        note: "Check gravity and correct if needed. Target is 60 gravity points for 1.3 gallons post-boil.",
      },
      {
        title: "Boil",
        timer: "60 min",
        temp: "Rolling",
        note: "Add Tettnang at 60 minutes, then again with 10 minutes left.",
      },
      {
        title: "Chill & transfer",
        timer: "To pitch temp",
        temp: "Yeast pack target",
        note: "Ice bath the pot, sanitize transfer gear and thermometer, then strain into the carboy.",
      },
      {
        title: "Fermentation",
        timer: "14-21 days",
        temp: "67°F",
        note: "Aerate, pitch K-97, seal with sanitizer-filled airlock, and ferment around 67°F.",
      },
      {
        title: "Bottle lager",
        timer: "45-60 days",
        temp: "Fridge after 14 days",
        note: "Prime with corn sugar, bottle quietly, keep upright at 65°F for 14 days, then move bottles to the fridge for 45-60 days.",
      },
    ],
  },
  {
    id: "mild-ale",
    name: "Mild Ale",
    style: "Mild Ale",
    method: "1 gallon BIAB · single stage",
    profile: [
      ["OG", "1.037"],
      ["FG", "1.008"],
      ["IBU", "23"],
      ["ABV", "3.7%"],
      ["Boil", "90 min"],
      ["Batch", "1.3 gal post-boil"],
    ],
    ingredients: {
      fermentables: [
        "14 oz Maris Otter Pale Malt",
        "6 oz Caramel Malt (30L)",
        "4 oz Caramel Malt (80L)",
        "1 oz Chocolate Malt",
      ],
      boilHops: ["0.20 oz Fuggles · 90 min", "0.20 oz East Kent Goldings · 5 min"],
      dryHops: ["None"],
      yeast: "London Ale Yeast · Wyeast 1028 · pitch half pack",
      priming: "0.59 oz (17 g) corn sugar",
    },
    steps: [
      {
        title: "Mash",
        timer: "75 min",
        temp: "152°F",
        note: "Heat 8.75 litres to 157°F, stir in grains, shut off heat, cover, and steep until the mash looks oatmeal-thick.",
      },
      {
        title: "Mash out",
        timer: "7 min",
        temp: "168°F",
        note: "Return heat, raise to 168°F while stirring, then remove the grains and preserve the wort.",
      },
      {
        title: "Gravity check",
        timer: "Before boil",
        temp: "48 points",
        note: "Check gravity and correct if needed. Target is 48 gravity points for 1.3 gallons post-boil.",
      },
      {
        title: "Boil",
        timer: "90 min",
        temp: "Rolling",
        note: "Add Fuggles at 90 minutes, then East Kent Goldings with 5 minutes left.",
      },
      {
        title: "Chill & transfer",
        timer: "To pitch temp",
        temp: "Yeast pack target",
        note: "Ice bath the pot, sanitize transfer gear and thermometer, strain into the carboy, and keep below the one-gallon mark.",
      },
      {
        title: "Fermentation",
        timer: "14-21 days",
        temp: "Dark quiet spot",
        note: "Aerate, pitch half the Wyeast 1028 pack, seal with sanitizer-filled airlock, and ferment away from household commotion.",
      },
      {
        title: "Bottle condition",
        timer: "30 days",
        temp: "65°F",
        note: "Prime with corn sugar, bottle quietly, cap, and condition upright. Try for 30 days; 14 days minimum if curiosity wins.",
      },
    ],
  },
  {
    id: "hefeweizen",
    name: "Hefeweizen",
    style: "Hefeweizen",
    method: "1 gallon BIAB · single stage",
    profile: [
      ["OG", "1.047"],
      ["FG", "1.009"],
      ["IBU", "14"],
      ["ABV", "5.1%"],
      ["Boil", "90 min"],
      ["Batch", "1.3 gal post-boil"],
    ],
    ingredients: {
      fermentables: ["1.75 lb German Pilsner Malt", "4 oz Caramel Wheat Malt"],
      boilHops: ["0.15 oz Hallertauer Hersbrucker · 60 min", "0.05 oz Hallertauer Hersbrucker · 15 min"],
      dryHops: ["None"],
      yeast: "Weihenstephan Weizen · Wyeast 3068 · pitch half pack",
      priming: "0.59 oz (16.7 g) corn sugar",
    },
    steps: [
      {
        title: "Mash",
        timer: "90 min",
        temp: "158°F",
        note: "Heat 10.75 litres to 155°F, stir in grains, shut off heat, cover, and steep until the mash looks oatmeal-thick.",
      },
      {
        title: "Mash out",
        timer: "7 min",
        temp: "168°F",
        note: "Return heat, raise to 168°F while stirring, then remove the grains and preserve the wort.",
      },
      {
        title: "Gravity check",
        timer: "Before boil",
        temp: "62 points",
        note: "Check gravity and correct if needed. Target is 62 gravity points for 1.3 gallons post-boil.",
      },
      {
        title: "Boil",
        timer: "90 min",
        temp: "Rolling",
        note: "Add Hallertauer Hersbrucker at 60 minutes, then again with 15 minutes left.",
      },
      {
        title: "Chill & transfer",
        timer: "To pitch temp",
        temp: "Yeast pack target",
        note: "Ice bath the pot, sanitize transfer gear and thermometer, strain into the carboy, and keep below the one-gallon mark.",
      },
      {
        title: "Fermentation",
        timer: "14-21 days",
        temp: "Dark quiet spot",
        note: "Aerate, pitch half the Wyeast 3068 pack, seal with sanitizer-filled airlock, and ferment for banana, clove, and spice character.",
      },
      {
        title: "Bottle condition",
        timer: "30 days",
        temp: "65°F",
        note: "Prime with corn sugar, bottle quietly, cap, and condition upright. Try for 30 days; 14 days minimum if curiosity wins.",
      },
    ],
  },
  {
    id: "imperial-ipa",
    name: "Imperial IPA",
    style: "IPA",
    method: "1 gallon BIAB · single stage",
    profile: [
      ["OG", "1.093"],
      ["FG", "1.025"],
      ["IBU", "104"],
      ["ABV", "9.1%"],
      ["Boil", "60 min"],
      ["Batch", "1.3 gal post-boil"],
    ],
    ingredients: {
      fermentables: ["3.5 lb US Pale Malt (2-row)", "6 oz Caramel Malt (10L)", "2 oz Caramel Malt (60L)"],
      boilHops: [
        "0.30 oz Motueka · 60 min",
        "0.50 oz Motueka · 30 min",
        "0.25 oz Nelson Sauvin · 10 min",
        "0.25 oz Nelson Sauvin · 5 min",
        "1 oz Motueka · 1 min",
        "0.50 oz Nelson Sauvin · 1 min",
      ],
      dryHops: ["None"],
      yeast: "Safale American Yeast · Fermentis US-05 · pitch half pack",
      priming: "0.59 oz (17 g) corn sugar",
    },
    steps: [
      {
        title: "Mash",
        timer: "60 min",
        temp: "High-gravity rest",
        note: "Heat 9 litres to 165°F, stir in grains, shut off heat, cover, and steep until the mash looks oatmeal-thick.",
      },
      {
        title: "Mash out",
        timer: "7 min",
        temp: "168°F",
        note: "Return heat, raise to 168°F while stirring, then remove the grains and preserve the wort.",
      },
      {
        title: "Boil",
        timer: "60 min",
        temp: "Rolling",
        note: "Add Motueka at 60 and 30 min, Nelson Sauvin at 10 and 5 min, then Motueka and Nelson Sauvin at 1 min.",
      },
      {
        title: "Chill & transfer",
        timer: "To pitch temp",
        temp: "Yeast pack target",
        note: "Ice bath the pot, sanitize transfer gear and thermometer, strain into the carboy, and keep below the one-gallon mark.",
      },
      {
        title: "Fermentation",
        timer: "14-21 days",
        temp: "Dark quiet spot",
        note: "Aerate, pitch half the US-05 pack, seal with sanitizer-filled airlock, and ferment away from household commotion.",
      },
      {
        title: "Bottle condition",
        timer: "30 days",
        temp: "65°F",
        note: "Prime with corn sugar, bottle quietly, cap, and condition upright. Try for 30 days; 14 days minimum if curiosity wins.",
      },
    ],
  },
];

const inventoryCategories = {
  equipment: {
    title: "Equipment",
    icon: "local_drink",
    scanAllowed: false,
    addHint: "Equipment is tracked by setup, capacity, and condition instead of barcode.",
    summary: "3 vessels · 2 burners · 1 needs cleaning",
    recommendation: "Your 5 gal kettle limits all-grain batches above 1.065 OG.",
    items: [
      ["5 gal kettle", "1", "Good", "Cleaned after last stout"],
      ["Propane burner", "1", "Good", "Ready for brew day"],
      ["Auto-siphon", "1", "Check soon", "Tubing should be replaced"],
    ],
  },
  packaging: {
    title: "Bottles/Kegs",
    icon: "inventory_2",
    scanAllowed: false,
    addHint: "Bottles and kegs are counted manually because individual barcodes are not useful here.",
    summary: "142 bottles · 3 kegs · 48 caps",
    recommendation: "Enough packaging for two 5 gal batches before restocking caps.",
    items: [
      ["12 oz bottles", "142", "Good", "Washed and boxed"],
      ["Corny kegs", "3", "Good", "Two are empty"],
      ["Bottle caps", "48", "Low", "Buy before next bottling day"],
    ],
  },
  grains: {
    title: "Grains",
    icon: "grain",
    scanAllowed: true,
    addHint: "Scan bag labels when available, or manually enter malt, weight, and crush date.",
    summary: "31.5 lb on hand · 4 malt types",
    recommendation: "You can brew Porch Light or Market Street without buying base malt.",
    items: [
      ["Maris Otter", "8 lb", "Good", "Opened 16 days ago"],
      ["2-row", "14 lb", "Good", "Enough for two pale ales"],
      ["Chocolate malt", "1.5 lb", "Good", "Best for stout/porter"],
      ["Crystal 40", "8 lb", "Aging", "Use within 30 days"],
    ],
  },
  hops: {
    title: "Hops",
    icon: "psychiatry",
    scanAllowed: true,
    addHint: "Scan hop packs to capture variety, crop year, alpha acid, and package weight.",
    summary: "18 oz on hand · 2 packs aging",
    recommendation: "Citra and Cascade are fresh enough for aroma-heavy recipes.",
    items: [
      ["Citra", "4 oz", "Good", "Vacuum sealed"],
      ["Cascade", "6 oz", "Good", "Use for pale ale"],
      ["Fuggle", "2 oz", "Aging", "Use soon in porter"],
      ["Mosaic", "6 oz", "Good", "Great IPA candidate"],
    ],
  },
  yeast: {
    title: "Yeast",
    icon: "science",
    scanAllowed: true,
    addHint: "Scan yeast packs to track strain, date, viability, and starter needs.",
    summary: "5 packs · 1 likely expired",
    recommendation: "American Ale is ready for Red Fox IPA; English Ale needs a starter.",
    items: [
      ["American Ale", "2 packs", "Good", "Best by Sep 2026"],
      ["English Ale", "1 pack", "Starter", "Viability around 72%"],
      ["California Ale", "1 pack", "Good", "Ready for pale ale"],
      ["Belgian Saison", "1 pack", "Risk", "Possibly past prime"],
    ],
  },
};

const brewList = document.querySelector("#brew-list");
const allBrewList = document.querySelector("#all-brew-list");
const brewDetailPanel = document.querySelector("#brew-detail-panel");
const recipeListPanel = document.querySelector("#recipe-list");
const recipeDetailPanel = document.querySelector("#recipe-detail-panel");
const inventoryDetailPanel = document.querySelector("#inventory-detail-panel");
const recipeSearch = document.querySelector("#recipe-search");
const recipeStyleFilter = document.querySelector("#recipe-style-filter");
const batchSearch = document.querySelector("#batch-search");
const scoreFilter = document.querySelector("#score-filter");
const dateFilter = document.querySelector("#date-filter");
const completedBatchList = document.querySelector("#completed-batch-list");
const navButtons = document.querySelectorAll(".tab-bar button");
const beersBrewedButton = document.querySelector("#beers-brewed-button");
const headerBackButton = document.querySelector("#header-back-button");
const featureSections = [
  document.querySelector(".feature-card"),
  document.querySelector(".summary-grid"),
  document.querySelector(".phone > .section-header"),
  document.querySelector(".brew-list"),
];
const panels = {
  brewList: document.querySelector("#brew-list-panel"),
  brewDetail: brewDetailPanel,
  recipes: document.querySelector("#recipes-panel"),
  recipeDetail: recipeDetailPanel,
  inventory: document.querySelector("#inventory-panel"),
  inventoryDetail: inventoryDetailPanel,
  batches: document.querySelector("#batches-panel"),
  settings: document.querySelector("#settings-panel"),
};
let currentPanel = "home";
const defaultBackTargets = {
  brewList: "home",
  brewDetail: "brewList",
  recipes: "home",
  recipeDetail: "recipes",
  inventory: "home",
  inventoryDetail: "inventory",
  batches: "home",
  settings: "home",
};
const panelNavMap = {
  home: "home",
  brewList: "batches",
  brewDetail: "batches",
  recipes: "recipes",
  recipeDetail: "recipes",
  inventory: "inventory",
  inventoryDetail: "inventory",
  batches: "batches",
  settings: "settings",
};

function brewCardTemplate(brew, compact = false) {
  return `
    <button class="brew-card ${compact ? "compact" : "circle"}" type="button" data-brew-id="${brew.id}">
      <div class="brew-label ${brew.tone}" aria-hidden="true">
        <span class="label-art"></span>
        <span class="label-top">${brew.style}</span>
        <strong>${brew.label}</strong>
        <span class="label-bottom">${brew.name}</span>
      </div>
      <div>
        <h3>${brew.name}</h3>
        <p>${brew.style} · ${brew.phase}</p>
        <span>Days left of fermentation</span>
      </div>
      <strong class="block-number">${brew.days}</strong>
    </button>
  `;
}

function renderBrews() {
  brewList.innerHTML = brews.map((brew) => brewCardTemplate(brew)).join("");
  allBrewList.innerHTML = brews.map((brew) => brewCardTemplate(brew, true)).join("");
}

function recipeCardTemplate(recipe) {
  const stats = recipe.profile.slice(0, 4).map(([label, value]) => `<span><b>${value}</b>${label}</span>`).join("");
  return `
    <button class="recipe-list-card" type="button" data-recipe-id="${recipe.id}">
      <div>
        <span class="mini-badge">${recipe.method}</span>
        <h3>${recipe.name}</h3>
        <p>${recipe.style}</p>
      </div>
      <div class="recipe-stat-row">${stats}</div>
    </button>
  `;
}

function populateRecipeFilters() {
  const styles = [...new Set(realRecipes.map((recipe) => recipe.style))].sort((a, b) => a.localeCompare(b));
  recipeStyleFilter.innerHTML = `
    <option value="all">All types</option>
    ${styles.map((style) => `<option value="${style}">${style}</option>`).join("")}
  `;
}

function renderRecipes() {
  const normalizedQuery = recipeSearch.value.trim().toLowerCase();
  const styleValue = recipeStyleFilter.value;
  const matches = realRecipes.filter((recipe) => {
    const ingredients = [
      ...recipe.ingredients.fermentables,
      ...recipe.ingredients.boilHops,
      ...recipe.ingredients.dryHops,
      recipe.ingredients.yeast,
    ].join(" ");
    const searchable = `${recipe.name} ${recipe.style} ${recipe.method} ${ingredients}`.toLowerCase();
    const matchesSearch = searchable.includes(normalizedQuery);
    const matchesStyle = styleValue === "all" || recipe.style === styleValue;
    return matchesSearch && matchesStyle;
  });
  recipeListPanel.innerHTML = matches.length
    ? matches.map(recipeCardTemplate).join("")
    : `<div class="empty-results">No recipes match that search.</div>`;
}

function completedBatchTemplate(batch) {
  return `
    <article>
      <div class="score-badge block-number">${batch.score}</div>
      <div>
        <strong>${batch.name}</strong>
        <span>${batch.style} · ${batch.packageType} ${batch.date}</span>
        <p>${batch.note}</p>
      </div>
    </article>
  `;
}

function getDateBand(date) {
  const month = date.split(" ")[0];
  if (["Jan", "Feb", "Mar"].includes(month)) return "winter";
  if (["Apr", "May", "Jun"].includes(month)) return "spring";
  if (["Jul", "Aug", "Sep"].includes(month)) return "summer";
  return "fall";
}

function batchMatchesScore(batch, scoreValue) {
  const score = Number(batch.score);
  if (scoreValue === "under-4") return score < 4;
  if (scoreValue === "all") return true;
  return score >= Number(scoreValue);
}

function renderCompletedBatches() {
  const normalizedQuery = batchSearch.value.trim().toLowerCase();
  const scoreValue = scoreFilter.value;
  const dateValue = dateFilter.value;
  const matches = completedBatches.filter((batch) => {
    const searchable = `${batch.name} ${batch.style} ${batch.date} ${batch.packageType} ${batch.score} ${batch.note}`.toLowerCase();
    const matchesSearch = searchable.includes(normalizedQuery);
    const matchesScore = batchMatchesScore(batch, scoreValue);
    const matchesDate = dateValue === "all" || getDateBand(batch.date) === dateValue;
    return matchesSearch && matchesScore && matchesDate;
  });

  completedBatchList.innerHTML = matches.length
    ? matches.map(completedBatchTemplate).join("")
    : `<div class="empty-results">No completed beers match that search.</div>`;
}

function setActiveNav(panelName) {
  const navPanel = panelNavMap[panelName] || panelName;
  navButtons.forEach((item) => item.classList.toggle("active", item.dataset.panel === navPanel));
}

function showPanel(panelName, options = {}) {
  if (currentPanel === "recipeDetail" && panelName !== "recipeDetail") {
    stopRecipeTimerInterval();
  }
  currentPanel = panelName;
  const isHome = panelName === "home";
  const topLevelPanels = ["home", "recipes", "batches", "inventory", "settings"];
  featureSections.forEach((section) => section.classList.toggle("hidden", !isHome));
  Object.values(panels).forEach((panel) => panel.classList.add("hidden"));

  if (panels[panelName]) {
    panels[panelName].classList.remove("hidden");
  }

  headerBackButton.classList.toggle("hidden", topLevelPanels.includes(panelName));
  headerBackButton.dataset.backTarget = options.backTo || defaultBackTargets[panelName] || "home";
  setActiveNav(panelName);
}

function showBrewList() {
  showPanel("brewList");
}

function showBatches() {
  showPanel("batches");
}

function inventoryItemTemplate(item) {
  const [name, amount, status, note] = item;
  return `
    <article class="inventory-item">
      <div>
        <strong>${name}</strong>
        <span>${note}</span>
      </div>
      <div>
        <b>${amount}</b>
        <em>${status}</em>
      </div>
    </article>
  `;
}

function showInventoryCategory(categoryKey) {
  const category = inventoryCategories[categoryKey];
  if (!category) return;

  const scanAction = category.scanAllowed
    ? `<button class="small-button" type="button" data-action="scan-item">
        <span class="material-symbols-rounded" aria-hidden="true">barcode_scanner</span>
        Scan item
      </button>`
    : `<button class="small-button disabled-action" type="button" disabled>
        <span class="material-symbols-rounded" aria-hidden="true">barcode_scanner</span>
        Scan not useful
      </button>`;

  inventoryDetailPanel.innerHTML = `
    <div class="section-header">
      <div class="header-title">
        <h2>${category.title}</h2>
      </div>
    </div>
    <section class="inventory-category-card">
      <span class="material-symbols-rounded stock-icon" aria-hidden="true">${category.icon}</span>
      <div>
        <strong>${category.summary}</strong>
        <p>${category.addHint}</p>
      </div>
    </section>
    <div class="add-options">
      ${scanAction}
      <button class="outline-button" type="button" data-action="manual-item">
        <span class="material-symbols-rounded" aria-hidden="true">edit_note</span>
        Manual input
      </button>
    </div>
    <section class="inventory-suggestion">
      <span class="material-symbols-rounded" aria-hidden="true">recommend</span>
      <p>${category.recommendation}</p>
    </section>
    <section class="inventory-list">
      ${category.items.map(inventoryItemTemplate).join("")}
    </section>
  `;

  showPanel("inventoryDetail", { backTo: "inventory" });
}

function formatScaledAmount(value) {
  const rounded = value >= 10 ? value.toFixed(1) : value.toFixed(2);
  return rounded.replace(/\.0+$/, "").replace(/(\.\d*[1-9])0+$/, "$1");
}

function formatScaledUnit(value, unit) {
  const normalizedUnit = unit.toLowerCase();
  if (normalizedUnit.startsWith("lb")) return `${formatScaledAmount(value)} lb`;
  if (normalizedUnit.startsWith("lit")) return `${formatScaledAmount(value)} litres`;
  return `${formatScaledAmount(value)} ${unit}`;
}

function scaleRecipeText(text, batchSize = 1) {
  if (batchSize === 1 || text === "None") return text;

  const mixedWeights = [];
  const protectedText = text.replace(/(\d+(?:\.\d+)?)\s*lbs?\s+(\d+(?:\.\d+)?)\s*oz\b/gi, (_, pounds, ounces) => {
    const scaledOunces = (Number(pounds) * 16 + Number(ounces)) * batchSize;
    const wholePounds = Math.floor(scaledOunces / 16);
    const remainingOunces = scaledOunces - wholePounds * 16;
    const replacement = remainingOunces > 0.01
      ? `${wholePounds} lb ${formatScaledAmount(remainingOunces)} oz`
      : `${wholePounds} lb`;
    const token = `__MIXED_WEIGHT_${mixedWeights.length}__`;
    mixedWeights.push(replacement);
    return token;
  });

  const scaledText = protectedText
    .replace(/(\d+(?:\.\d+)?)\s*(lbs?|oz|g|ml|litres?|liters?)\b/gi, (_, amount, unit) => {
      return formatScaledUnit(Number(amount) * batchSize, unit);
    })
    .replace(/(\d+(?:\.\d+)?)\s+(cinnamon stick|clove)\b/gi, (_, amount, unit) => {
      const scaledAmount = Number(amount) * batchSize;
      const pluralUnit = scaledAmount === 1 ? unit : `${unit}s`;
      return `${formatScaledAmount(scaledAmount)} ${pluralUnit}`;
    });

  return mixedWeights.reduce((result, weight, index) => result.replace(`__MIXED_WEIGHT_${index}__`, weight), scaledText);
}

function recipeList(items, batchSize = 1) {
  return items.map((item) => `<li>${scaleRecipeText(item, batchSize)}</li>`).join("");
}

function scaledIngredientsTemplate(recipe, batchSize = 1) {
  return `
    <h3>Fermentables</h3>
    <ul>${recipeList(recipe.ingredients.fermentables, batchSize)}</ul>
    <h3>Boil hops</h3>
    <ul>${recipeList(recipe.ingredients.boilHops, batchSize)}</ul>
    <h3>Dry hop</h3>
    <ul>${recipeList(recipe.ingredients.dryHops, batchSize)}</ul>
    <h3>Yeast</h3>
    <p>${recipe.ingredients.yeast}</p>
    <h3>Bottling</h3>
    <p>${scaleRecipeText(recipe.ingredients.priming, batchSize)}</p>
  `;
}

function batchSizeOptions(selectedSize = 1, maxGallons = 10) {
  return Array.from({ length: maxGallons }, (_, index) => {
    const gallons = index + 1;
    return `
      <button
        class="${gallons === selectedSize ? "selected" : ""}"
        type="button"
        data-action="set-recipe-scale"
        data-batch-size="${gallons}"
      >
        <span>${gallons} gallon${gallons === 1 ? "" : "s"}</span>
        <span class="material-symbols-rounded" aria-hidden="true">check</span>
      </button>
    `;
  }).join("");
}

function updateRecipeScale(panel, batchSize) {
  const recipe = realRecipes.find((item) => item.id === panel.dataset.currentRecipeId);
  if (!recipe) return;
  const normalizedBatchSize = Math.max(1, Math.round(Number(batchSize) || 1));
  panel.dataset.batchSize = normalizedBatchSize;
  panel.querySelector("[data-scaled-batch]").textContent = `${formatScaledAmount(normalizedBatchSize)} gal`;
  panel.querySelector("[data-scale-label]").textContent = `${normalizedBatchSize} gallon${normalizedBatchSize === 1 ? "" : "s"}`;
  panel.querySelector("[data-scaled-ingredients]").innerHTML = scaledIngredientsTemplate(recipe, normalizedBatchSize);
}

function openRecipeScaleSheet() {
  recipeDetailPanel.querySelector("[data-scale-sheet]")?.classList.remove("hidden");
}

function closeRecipeScaleSheet() {
  recipeDetailPanel.querySelector("[data-scale-sheet]")?.classList.add("hidden");
}

const recipeTimer = {
  intervalId: null,
  stepIndex: 0,
  totalSeconds: 0,
  remainingSeconds: 0,
  elapsedSeconds: 0,
  running: false,
  done: false,
  mode: "countdown",
};

function stopRecipeTimerInterval() {
  if (recipeTimer.intervalId) {
    clearInterval(recipeTimer.intervalId);
    recipeTimer.intervalId = null;
  }
  recipeTimer.running = false;
}

function parseTimerSeconds(timerText) {
  const match = String(timerText).match(/(\d+(?:\.\d+)?)(?:-\d+(?:\.\d+)?)?\s*(day|days|hr|hrs|hour|hours|min|mins|minute|minutes|sec|secs|second|seconds)?/i);
  if (!match) return null;
  const amount = Number(match[1]);
  const unit = (match[2] || "min").toLowerCase();
  if (unit.startsWith("day")) return amount * 24 * 60 * 60;
  if (unit.startsWith("hr") || unit.startsWith("hour")) return amount * 60 * 60;
  if (unit.startsWith("sec") || unit.startsWith("second")) return amount;
  return amount * 60;
}

function formatTimerClock(totalSeconds) {
  const safeSeconds = Math.max(0, Math.floor(totalSeconds));
  const days = Math.floor(safeSeconds / 86400);
  const hours = Math.floor((safeSeconds % 86400) / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const seconds = safeSeconds % 60;
  const clock = [hours, minutes, seconds].map((value) => String(value).padStart(2, "0")).join(":");
  return days ? `${days}d ${clock}` : clock;
}

function getCurrentRecipeTimerStep() {
  const recipe = realRecipes.find((item) => item.id === recipeDetailPanel.dataset.currentRecipeId);
  return recipe?.steps[recipeTimer.stepIndex];
}

function resetRecipeTimerForStep(stepIndex = 0) {
  stopRecipeTimerInterval();
  recipeTimer.stepIndex = stepIndex;
  const step = getCurrentRecipeTimerStep();
  const seconds = parseTimerSeconds(step?.timer);
  recipeTimer.totalSeconds = seconds || 0;
  recipeTimer.remainingSeconds = seconds || 0;
  recipeTimer.elapsedSeconds = 0;
  recipeTimer.mode = seconds ? "countdown" : "elapsed";
  recipeTimer.done = false;
  renderRecipeTimer();
}

function renderRecipeTimer() {
  const step = getCurrentRecipeTimerStep();
  if (!step) return;
  const readout = recipeDetailPanel.querySelector("[data-recipe-timer-readout]");
  const status = recipeDetailPanel.querySelector("[data-recipe-timer-status]");
  const startButton = recipeDetailPanel.querySelector("[data-action='toggle-recipe-timer']");
  const timerCard = recipeDetailPanel.querySelector("[data-recipe-timer-card]");
  if (!readout || !status || !startButton || !timerCard) return;

  const displaySeconds = recipeTimer.mode === "countdown" ? recipeTimer.remainingSeconds : recipeTimer.elapsedSeconds;
  readout.textContent = recipeTimer.done ? "Done" : formatTimerClock(displaySeconds);
  startButton.textContent = recipeTimer.running ? "Pause" : "Start";
  timerCard.classList.toggle("timer-running", recipeTimer.running);
  timerCard.classList.toggle("timer-done", recipeTimer.done);
  status.textContent = recipeTimer.done
    ? `${step.title} marked done`
    : `${step.title} · ${step.timer} · ${step.temp}`;

  recipeDetailPanel.querySelectorAll("[data-recipe-step-index]").forEach((button) => {
    const isSelected = Number(button.dataset.recipeStepIndex) === recipeTimer.stepIndex;
    button.classList.toggle("selected", isSelected);
    button.closest("li")?.classList.toggle("active", isSelected);
    button.closest("li")?.classList.toggle("done", isSelected && recipeTimer.done);
  });
}

function toggleRecipeTimer() {
  if (recipeTimer.done) {
    resetRecipeTimerForStep(recipeTimer.stepIndex);
  }
  if (recipeTimer.running) {
    stopRecipeTimerInterval();
    renderRecipeTimer();
    return;
  }
  recipeTimer.running = true;
  recipeTimer.intervalId = setInterval(() => {
    if (recipeTimer.mode === "countdown") {
      recipeTimer.remainingSeconds -= 1;
      if (recipeTimer.remainingSeconds <= 0) {
        recipeTimer.remainingSeconds = 0;
        recipeTimer.done = true;
        stopRecipeTimerInterval();
      }
    } else {
      recipeTimer.elapsedSeconds += 1;
    }
    renderRecipeTimer();
  }, 1000);
  renderRecipeTimer();
}

function markRecipeTimerDone() {
  stopRecipeTimerInterval();
  recipeTimer.done = true;
  recipeTimer.remainingSeconds = 0;
  renderRecipeTimer();
}

function showRecipeDetail(recipeId) {
  const recipe = realRecipes.find((item) => item.id === recipeId);
  if (!recipe) return;
  stopRecipeTimerInterval();

  recipeDetailPanel.innerHTML = `
    <section class="recipe-hero">
      <span class="material-symbols-rounded" aria-hidden="true">menu_book</span>
      <div>
        <p class="eyebrow">${recipe.method}</p>
        <h1>${recipe.name}</h1>
        <p>${recipe.style} built around oats, soft bitterness, expressive hops, and London Ale III.</p>
      </div>
    </section>

    <section class="profile-grid" aria-label="Recipe profile">
      ${recipe.profile.map(([label, value]) => `<article><span>${label}</span><strong>${value}</strong></article>`).join("")}
    </section>

    <section class="recipe-scale-card">
      <button type="button" data-action="open-recipe-scale">
        <span>Batch size</span>
        <strong data-scale-label>1 gallon</strong>
      </button>
      <div>
        <span>Scaled to</span>
        <strong data-scaled-batch>1 gal</strong>
      </div>
    </section>

    <section class="bottom-sheet hidden" data-scale-sheet aria-label="Batch size options">
      <button class="sheet-scrim" type="button" data-action="close-recipe-scale" aria-label="Close batch size selector"></button>
      <div class="sheet-panel">
        <div class="sheet-header">
          <div>
            <span class="eyebrow">Recipe size</span>
            <h2>Batch size</h2>
          </div>
          <button class="icon-button" type="button" data-action="close-recipe-scale" aria-label="Close">
            <span class="material-symbols-rounded" aria-hidden="true">close</span>
          </button>
        </div>
        <div class="sheet-options" data-scale-options>
          ${batchSizeOptions()}
        </div>
      </div>
    </section>

    <section class="recipe-card">
      <div class="section-header">
        <h2>Ingredients</h2>
      </div>
      <div data-scaled-ingredients>
        ${scaledIngredientsTemplate(recipe)}
      </div>
    </section>

    <section class="timer-card" data-recipe-timer-card>
      <div class="section-header">
        <h2>Brew Day Timing</h2>
        <span class="mini-badge">Phase clock</span>
      </div>
      <div class="timer-readout">
        <span data-recipe-timer-status>${recipe.steps[0].title} · ${recipe.steps[0].timer} · ${recipe.steps[0].temp}</span>
        <strong data-recipe-timer-readout>00:00:00</strong>
        <p>Start, pause, reset, or mark done if timing gets ahead of you.</p>
      </div>
      <div class="timer-controls">
        <button class="small-button" type="button" data-action="toggle-recipe-timer">Start</button>
        <button class="outline-button" type="button" data-action="reset-recipe-timer">Reset</button>
        <button class="outline-button" type="button" data-action="done-recipe-timer">Done</button>
      </div>
      <ol class="process-list recipe-phase-list">
        ${recipe.steps
          .map(
            (step, index) => `
              <li class="${index === 0 ? "active" : ""}">
                <button
                  class="phase-button ${index === 0 ? "selected" : ""}"
                  type="button"
                  data-action="select-recipe-step"
                  data-recipe-step-index="${index}"
                >
                  <span></span>
                  <div>
                    <strong>${step.title}</strong>
                    <p>${step.timer} · ${step.temp}</p>
                    <p>${step.note}</p>
                  </div>
                </button>
              </li>
            `,
          )
          .join("")}
      </ol>
    </section>
  `;
  recipeDetailPanel.dataset.currentRecipeId = recipe.id;
  recipeDetailPanel.dataset.batchSize = "1";
  resetRecipeTimerForStep(0);

  showPanel("recipeDetail", { backTo: "recipes" });
}

function showBrewDetail(brewId) {
  const brew = brews.find((item) => item.id === brewId);
  if (!brew) return;
  const activeStep = brew.schedule.find((step) => step.status === "active");

  brewDetailPanel.innerHTML = `
    <div class="detail-hero ${brew.tone}">
      <div class="brew-label ${brew.tone}" aria-hidden="true">
        <span class="label-top">${brew.style}</span>
        <strong>${brew.label}</strong>
        <span class="label-bottom">${brew.name}</span>
      </div>
      <div>
        <p class="eyebrow">${brew.phase}</p>
        <h1>${brew.name}</h1>
        <p>${brew.description}</p>
      </div>
    </div>

    <section class="stat-strip" aria-label="${brew.name} stats">
      <article><span>ABV</span><strong>${brew.abv}</strong></article>
      <article><span>IBU</span><strong>${brew.ibu}</strong></article>
      <article><span>Temp</span><strong>${brew.temp}</strong></article>
      <article><span>SG</span><strong>${brew.gravity}</strong></article>
    </section>

    <section class="recipe-card">
      <div class="section-header">
        <h2>Recipe</h2>
        <span class="mini-badge">${brew.recipe.mash}</span>
      </div>
      <h3>Grain bill</h3>
      <ul>${recipeList(brew.recipe.grain)}</ul>
      <h3>Hops</h3>
      <ul>${recipeList(brew.recipe.hops)}</ul>
      <h3>Yeast</h3>
      <p>${brew.recipe.yeast}</p>
    </section>

    <section class="timer-card">
      <div class="section-header">
        <h2>Timing & Temp</h2>
        <button
          class="small-button"
          type="button"
          data-action="start-step"
          data-step="${activeStep?.step || "Next step"}"
          data-duration="${activeStep?.duration || "Ready"}"
          data-temp="${activeStep?.temp || brew.temp}"
        >Start active step</button>
      </div>
      <div class="timer-readout">
        <span>Current target</span>
        <strong>${activeStep?.duration || "Ready"}</strong>
        <p>${brew.temp} fermentation hold</p>
      </div>
      <ol class="process-list">
        ${brew.schedule
          .map(
            (step) => `
              <li class="${step.status}">
                <span></span>
                <div>
                  <strong>${step.step}</strong>
                  <p>${step.duration} · ${step.temp}</p>
                </div>
              </li>
            `,
          )
          .join("")}
      </ol>
    </section>
  `;

  showPanel("brewDetail", { backTo: currentPanel === "brewList" ? "brewList" : "home" });
}

document.addEventListener("click", (event) => {
  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    showInventoryCategory(categoryButton.dataset.category);
    return;
  }

  const recipeButton = event.target.closest("[data-recipe-id]");
  if (recipeButton) {
    showRecipeDetail(recipeButton.dataset.recipeId);
    return;
  }

  const brewButton = event.target.closest("[data-brew-id]");
  if (brewButton) {
    showBrewDetail(brewButton.dataset.brewId);
    return;
  }

  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action === "back-home") {
    showPanel("home");
    return;
  }
  if (action === "show-brew-list") {
    showBrewList();
    return;
  }
  if (action === "back-inventory") {
    showPanel("inventory");
    return;
  }
  if (action === "scan-item" || action === "manual-item") {
    const button = event.target.closest("button");
    button.textContent = action === "scan-item" ? "Scanner ready" : "Manual form ready";
    return;
  }
  if (action === "open-recipe-scale") {
    openRecipeScaleSheet();
    return;
  }
  if (action === "close-recipe-scale") {
    closeRecipeScaleSheet();
    return;
  }
  if (action === "set-recipe-scale") {
    const button = event.target.closest("[data-batch-size]");
    if (!button) return;
    const batchSize = Number(button.dataset.batchSize);
    updateRecipeScale(recipeDetailPanel, batchSize);
    recipeDetailPanel.querySelector("[data-scale-options]").innerHTML = batchSizeOptions(batchSize);
    closeRecipeScaleSheet();
    return;
  }
  if (action === "select-recipe-step") {
    const button = event.target.closest("[data-recipe-step-index]");
    if (!button) return;
    resetRecipeTimerForStep(Number(button.dataset.recipeStepIndex));
    return;
  }
  if (action === "toggle-recipe-timer") {
    toggleRecipeTimer();
    return;
  }
  if (action === "reset-recipe-timer") {
    resetRecipeTimerForStep(recipeTimer.stepIndex);
    return;
  }
  if (action === "done-recipe-timer") {
    markRecipeTimerDone();
    return;
  }
  if (action === "start-step" || action === "start-recipe-step") {
    const button = event.target;
    const timerCard = button.closest(".timer-card");
    timerCard.querySelector(".timer-readout span").textContent = `${button.dataset.step} started`;
    timerCard.querySelector(".timer-readout strong").textContent = "Started now";
    timerCard.querySelector(".timer-readout p").textContent = `${button.dataset.duration} target at ${button.dataset.temp}`;
    timerCard.classList.add("timer-set");
    button.textContent = "Timer running";
    button.disabled = true;
    return;
  }
});

beersBrewedButton.addEventListener("click", showBatches);
headerBackButton.addEventListener("click", () => {
  showPanel(headerBackButton.dataset.backTarget || "home");
});
batchSearch.addEventListener("input", (event) => {
  renderCompletedBatches();
});
scoreFilter.addEventListener("change", renderCompletedBatches);
dateFilter.addEventListener("change", renderCompletedBatches);
recipeSearch.addEventListener("input", renderRecipes);
recipeStyleFilter.addEventListener("change", renderRecipes);

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showPanel(button.dataset.panel);
  });
});

renderBrews();
populateRecipeFilters();
renderRecipes();
renderCompletedBatches();
