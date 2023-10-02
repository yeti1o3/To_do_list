const data = {
  recipes: [
    {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: true,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      lowFodmap: false,
      weightWatcherSmartPoints: 24,
      gaps: "no",
      preparationMinutes: -1,
      cookingMinutes: -1,
      aggregateLikes: 3,
      healthScore: 12,
      creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      license: "CC BY 3.0",
      sourceName: "Foodista",
      pricePerServing: 260.37,
      extendedIngredients: [
        {
          id: 2001,
          aisle: "Spices and Seasonings",
          image: "allspice-ground.jpg",
          consistency: "SOLID",
          name: "all spice powder",
          nameClean: "allspice",
          original: "1/4 teaspoon all spice powder",
          originalName: "all spice powder",
          amount: 0.25,
          unit: "teaspoon",
          meta: [],
          measures: {
            us: {
              amount: 0.25,
              unitShort: "tsps",
              unitLong: "teaspoons",
            },
            metric: {
              amount: 0.25,
              unitShort: "tsps",
              unitLong: "teaspoons",
            },
          },
        },
        {
          id: 20081,
          aisle: "Baking",
          image: "flour.png",
          consistency: "SOLID",
          name: "all purpose flour",
          nameClean: "wheat flour",
          original: "1 cup all purpose flour",
          originalName: "all purpose flour",
          amount: 1.0,
          unit: "cup",
          meta: [],
          measures: {
            us: {
              amount: 1.0,
              unitShort: "cup",
              unitLong: "cup",
            },
            metric: {
              amount: 125.0,
              unitShort: "g",
              unitLong: "grams",
            },
          },
        },
        {
          id: 18369,
          aisle: "Baking",
          image: "white-powder.jpg",
          consistency: "SOLID",
          name: "baking powder",
          nameClean: "baking powder",
          original: "1 tablespoon baking powder",
          originalName: "baking powder",
          amount: 1.0,
          unit: "tablespoon",
          meta: [],
          measures: {
            us: {
              amount: 1.0,
              unitShort: "Tbsp",
              unitLong: "Tbsp",
            },
            metric: {
              amount: 1.0,
              unitShort: "Tbsp",
              unitLong: "Tbsp",
            },
          },
        },
        {
          id: 4582,
          aisle: "Oil, Vinegar, Salad Dressing",
          image: "vegetable-oil.jpg",
          consistency: "LIQUID",
          name: "oil",
          nameClean: "cooking oil",
          original: "some oil for frying",
          originalName: "3oil for frying",
          amount: 4.0,
          unit: "servings",
          meta: ["for frying"],
          measures: {
            us: {
              amount: 4.0,
              unitShort: "servings",
              unitLong: "servings",
            },
            metric: {
              amount: 4.0,
              unitShort: "servings",
              unitLong: "servings",
            },
          },
        },
        {
          id: 20027,
          aisle: "Baking",
          image: "white-powder.jpg",
          consistency: "SOLID",
          name: "cornstarch",
          nameClean: "corn starch",
          original: "1 tablespoon cornstarch",
          originalName: "cornstarch",
          amount: 1.0,
          unit: "tablespoon",
          meta: [],
          measures: {
            us: {
              amount: 1.0,
              unitShort: "Tbsp",
              unitLong: "Tbsp",
            },
            metric: {
              amount: 1.0,
              unitShort: "Tbsp",
              unitLong: "Tbsp",
            },
          },
        },
        {
          id: 2015,
          aisle: "Spices and Seasonings",
          image: "curry-powder.jpg",
          consistency: "SOLID",
          name: "curry powder",
          nameClean: "curry powder",
          original: "1 tablespoon curry powder (optional)",
          originalName: "curry powder (optional)",
          amount: 1.0,
          unit: "tablespoon",
          meta: [],
          measures: {
            us: {
              amount: 1.0,
              unitShort: "Tbsp",
              unitLong: "Tbsp",
            },
            metric: {
              amount: 1.0,
              unitShort: "Tbsp",
              unitLong: "Tbsp",
            },
          },
        },
        {
          id: 1124,
          aisle: "Milk, Eggs, Other Dairy",
          image: "egg-white.jpg",
          consistency: "SOLID",
          name: "egg white",
          nameClean: "egg whites",
          original: "1 egg white",
          originalName: "egg white",
          amount: 1.0,
          unit: "",
          meta: [],
          measures: {
            us: {
              amount: 1.0,
              unitShort: "",
              unitLong: "",
            },
            metric: {
              amount: 1.0,
              unitShort: "",
              unitLong: "",
            },
          },
        },
        {
          id: 1002030,
          aisle: "Spices and Seasonings",
          image: "pepper.jpg",
          consistency: "SOLID",
          name: "ground pepper",
          nameClean: "black pepper",
          original: "1/2 teaspoon ground pepper",
          originalName: "ground pepper",
          amount: 0.5,
          unit: "teaspoon",
          meta: [],
          measures: {
            us: {
              amount: 0.5,
              unitShort: "tsps",
              unitLong: "teaspoons",
            },
            metric: {
              amount: 0.5,
              unitShort: "tsps",
              unitLong: "teaspoons",
            },
          },
        },
        {
          id: 2028,
          aisle: "Spices and Seasonings",
          image: "paprika.jpg",
          consistency: "SOLID",
          name: "paprika",
          nameClean: "paprika",
          original: "1 teaspoon paprika",
          originalName: "paprika",
          amount: 1.0,
          unit: "teaspoon",
          meta: [],
          measures: {
            us: {
              amount: 1.0,
              unitShort: "tsp",
              unitLong: "teaspoon",
            },
            metric: {
              amount: 1.0,
              unitShort: "tsp",
              unitLong: "teaspoon",
            },
          },
        },
        {
          id: 1002030,
          aisle: "Spices and Seasonings",
          image: "pepper.jpg",
          consistency: "SOLID",
          name: "salt",
          nameClean: "black pepper",
          original: "Salt, pepper to taste",
          originalName: "Salt, pepper to taste",
          amount: 4.0,
          unit: "servings",
          meta: ["to taste"],
          measures: {
            us: {
              amount: 4.0,
              unitShort: "servings",
              unitLong: "servings",
            },
            metric: {
              amount: 4.0,
              unitShort: "servings",
              unitLong: "servings",
            },
          },
        },
        {
          id: 15175,
          aisle: "Seafood",
          image: "calamari-or-squid.jpg",
          consistency: "SOLID",
          name: "squid rings",
          nameClean: "squid",
          original: "500 grams fresh squid rings",
          originalName: "fresh squid rings",
          amount: 500.0,
          unit: "grams",
          meta: ["fresh"],
          measures: {
            us: {
              amount: 1.102,
              unitShort: "lb",
              unitLong: "pounds",
            },
            metric: {
              amount: 500.0,
              unitShort: "g",
              unitLong: "grams",
            },
          },
        },
        {
          id: 19335,
          aisle: "Baking",
          image: "sugar-in-bowl.png",
          consistency: "SOLID",
          name: "sugar",
          nameClean: "sugar",
          original: "1 1/2 cups sugar",
          originalName: "sugar",
          amount: 1.5,
          unit: "cups",
          meta: [],
          measures: {
            us: {
              amount: 1.5,
              unitShort: "cups",
              unitLong: "cups",
            },
            metric: {
              amount: 300.0,
              unitShort: "g",
              unitLong: "grams",
            },
          },
        },
      ],
      id: 652825,
      title: "My Asian Calamari",
      readyInMinutes: 45,
      servings: 4,
      sourceUrl: "http://www.foodista.com/recipe/T64CXDRZ/my-asian-calamari",
      image: "https://spoonacular.com/recipeImages/652825-556x370.jpg",
      imageType: "jpg",
      summary:
        'My Asian Calamari requires around <b>45 minutes</b> from start to finish. Watching your figure? This dairy free and pescatarian recipe has <b>563 calories</b>, <b>24g of protein</b>, and <b>5g of fat</b> per serving. For <b>$2.6 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. This recipe is typical of Asian cuisine. A mixture of all spice powder, cornstarch, squid rings, and a handful of other ingredients are all it takes to make this recipe so delicious. 3 people have made this recipe and would make it again. It works well as a rather inexpensive hor d\'oeuvre. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 59%</b>, which is solid. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/asian-calamari-salad-586727">Asian Calamari Salad</a>, <a href="https://spoonacular.com/recipes/southeast-asian-rice-noodles-with-calamari-and-herbs-188585">Southeast Asian Rice Noodles with Calamari and Herbs</a>, and <a href="https://spoonacular.com/recipes/christmas-eve-calamari-calamari-in-umido-per-la-vigilia-di-natale-597284">Christmas Eve Calamari | Calamari in Umido per la Vigilia di Natale</a>.',
      cuisines: ["Asian"],
      dishTypes: [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre",
      ],
      diets: ["dairy free", "pescatarian"],
      occasions: [],
      instructions:
        "<ol><li>In a bowl mix the ff: salt, sugar, pepper,egg white, curry powder,all spice and cornstarch.</li><li>Mix well and put squid rings, mix again and marinate for one hour or overnight if you like.</li><li>When you're about to cook, in a plastic or freezer bag, mix the ff: flour, baking powder and salt.</li><li>Shake well and start to put inside the squid rings by batches.</li><li>Fry them at once and make sure the oil is hot!</li></ol>",
      analyzedInstructions: [
        {
          name: "",
          steps: [
            {
              number: 1,
              step: "In a bowl mix the ff: salt, sugar, pepper,egg white, curry powder,all spice and cornstarch.",
              ingredients: [
                {
                  id: 2015,
                  name: "curry powder",
                  localizedName: "curry powder",
                  image: "curry-powder.jpg",
                },
                {
                  id: 20027,
                  name: "corn starch",
                  localizedName: "corn starch",
                  image: "white-powder.jpg",
                },
                {
                  id: 2001,
                  name: "allspice",
                  localizedName: "allspice",
                  image: "allspice-ground.jpg",
                },
                {
                  id: 1124,
                  name: "egg whites",
                  localizedName: "egg whites",
                  image: "egg-white.jpg",
                },
                {
                  id: 1002030,
                  name: "pepper",
                  localizedName: "pepper",
                  image: "pepper.jpg",
                },
                {
                  id: 19335,
                  name: "sugar",
                  localizedName: "sugar",
                  image: "sugar-in-bowl.png",
                },
                {
                  id: 2047,
                  name: "salt",
                  localizedName: "salt",
                  image: "salt.jpg",
                },
              ],
              equipment: [
                {
                  id: 404783,
                  name: "bowl",
                  localizedName: "bowl",
                  image: "bowl.jpg",
                },
              ],
            },
            {
              number: 2,
              step: "Mix well and put squid rings, mix again and marinate for one hour or overnight if you like.When you're about to cook, in a plastic or freezer bag, mix the ff: flour, baking powder and salt.Shake well and start to put inside the squid rings by batches.Fry them at once and make sure the oil is hot!",
              ingredients: [
                {
                  id: 18369,
                  name: "baking powder",
                  localizedName: "baking powder",
                  image: "white-powder.jpg",
                },
                {
                  id: 20081,
                  name: "all purpose flour",
                  localizedName: "all purpose flour",
                  image: "flour.png",
                },
                {
                  id: 0,
                  name: "shake",
                  localizedName: "shake",
                  image: "",
                },
                {
                  id: 15175,
                  name: "squid",
                  localizedName: "squid",
                  image: "calamari-or-squid.jpg",
                },
                {
                  id: 2047,
                  name: "salt",
                  localizedName: "salt",
                  image: "salt.jpg",
                },
                {
                  id: 4582,
                  name: "cooking oil",
                  localizedName: "cooking oil",
                  image: "vegetable-oil.jpg",
                },
              ],
              equipment: [],
              length: {
                number: 60,
                unit: "minutes",
              },
            },
          ],
        },
      ],
      originalId: null,
      spoonacularSourceUrl: "https://spoonacular.com/my-asian-calamari-652825",
    },
  ],
};