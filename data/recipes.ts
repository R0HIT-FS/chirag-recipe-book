export type Recipe = {
  name: string;
  ingredients: string[];
};

export const recipes: Record<string, Recipe[]> = {
  Chai: [
    {
      name: "Masala Chai",
      ingredients: [
        "Tea powder - 2 tsp",
        "Water - 150 ml",
        "Milk - 100 ml",
        "Sugar - 2 tsp",
        "Ginger (crushed) - 1 tsp",
        "Cardamom - 1 pod",
      ],
    },
    {
      name: "Ginger Chai",
      ingredients: [
        "Tea powder - 2 tsp",
        "Water - 150 ml",
        "Milk - 100 ml",
        "Sugar - 2 tsp",
        "Ginger - 1 tsp",
      ],
    },
  ],

  "Herbal teas": [
    {
      name: "Lemon Honey Tea",
      ingredients: [
        "Hot water - 200 ml",
        "Lemon juice - 20 ml",
        "Honey - 1 tbsp",
      ],
    },
    {
      name: "Green Tea",
      ingredients: [
        "Green tea bag - 1",
        "Hot water - 200 ml",
      ],
    },
  ],

  "Cold coffee": [
    {
      name: "Classic Cold Coffee",
      ingredients: [
        "Coffee powder - 2 tsp",
        "Milk - 200 ml",
        "Sugar - 2 tsp",
        "Ice cubes - 4",
      ],
    },
    {
      name: "Chocolate Cold Coffee",
      ingredients: [
        "Coffee powder - 2 tsp",
        "Milk - 200 ml",
        "Chocolate syrup - 20 ml",
        "Sugar - 2 tsp",
        "Ice cubes - 4",
      ],
    },
  ],

  "Hot Coffee": [
    {
      name: "Black Coffee",
      ingredients: [
        "Coffee powder - 2 tsp",
        "Hot water - 200 ml",
      ],
    },
    {
      name: "Milk Coffee",
      ingredients: [
        "Coffee powder - 2 tsp",
        "Milk - 200 ml",
        "Sugar - 2 tsp",
      ],
    },
  ],

  "Hot Milk": [
    {
      name: "Plain Hot Milk",
      ingredients: [
        "Milk - 250 ml",
        "Sugar - 1 tsp",
      ],
    },
    {
      name: "Turmeric Milk",
      ingredients: [
        "Milk - 250 ml",
        "Turmeric - 1/2 tsp",
        "Honey - 1 tbsp",
      ],
    },
  ],

  "Milk Shakes": [
    {
      name: "Chocolate Milkshake",
      ingredients: [
        "Milk - 250 ml",
        "Chocolate syrup - 30 ml",
        "Sugar - 2 tsp",
        "Ice cream - 1 scoop",
      ],
    },
    {
      name: "Banana Milkshake",
      ingredients: [
        "Milk - 250 ml",
        "Banana - 1",
        "Sugar - 2 tsp",
        "Ice cubes - 3",
      ],
    },
  ],

  "Ice Tea": [
    {
      name: "Lemon Ice Tea",
      ingredients: [
        "Tea brew - 200 ml",
        "Lemon juice - 20 ml",
        "Sugar syrup - 20 ml",
        "Ice cubes - 5",
      ],
    },
    {
      name: "Peach Ice Tea",
      ingredients: [
        "Tea brew - 200 ml",
        "Peach syrup - 30 ml",
        "Ice cubes - 5",
      ],
    },
  ],

  Omelettes: [
    {
      name: "Plain Omelette",
      ingredients: [
        "Eggs - 2",
        "Salt - 1/2 tsp",
        "Oil/Butter - 1 tbsp",
      ],
    },
    {
      name: "Veg Omelette",
      ingredients: [
        "Eggs - 2",
        "Onion - 30 g",
        "Tomato - 30 g",
        "Green chili - 1",
        "Salt - 1/2 tsp",
        "Oil - 1 tbsp",
      ],
    },
  ],

  Sandwiches: [
    {
      name: "Veg Sandwich",
      ingredients: [
        "Bread slices - 2",
        "Butter - 10 g",
        "Cucumber - 30 g",
        "Tomato - 30 g",
        "Salt - 1/2 tsp",
      ],
    },
    {
      name: "Grilled Cheese Sandwich",
      ingredients: [
        "Bread slices - 2",
        "Cheese - 2 slices",
        "Butter - 10 g",
      ],
    },
  ],

  Maggie: [
    {
      name: "Plain Maggie",
      ingredients: [
        "Maggie noodles - 1 pack",
        "Water - 400 ml",
        "Maggie masala - 1 pack",
      ],
    },
    {
      name: "Veg Maggie",
      ingredients: [
        "Maggie noodles - 1 pack",
        "Water - 400 ml",
        "Maggie masala - 1 pack",
        "Mixed vegetables - 50 g",
      ],
    },
  ],

  Breads: [
    {
      name: "Peanut Butter Sandwich",
      ingredients: [
        "Bread slices - 2",
        "Peanut butter - 20 g",
      ],
    },
    {
      name: "Jam Sandwich",
      ingredients: [
        "Bread slices - 2",
        "Strawberry jam - 20 g",
      ],
    },
  ],

  Burgers: [
    {
      name: "Veg Burger",
      ingredients: [
        "Burger bun - 1",
        "Veg patty - 100 g",
        "Lettuce - 2 leaves",
        "Sauce - 20 g",
      ],
    },
    {
      name: "Chicken Burger",
      ingredients: [
        "Burger bun - 1",
        "Chicken patty - 120 g",
        "Lettuce - 2 leaves",
        "Mayonnaise - 20 g",
      ],
    },
  ],

  Coolers: [
    {
      name: "Lemonade",
      ingredients: [
        "Lemon juice - 30 ml",
        "Water - 200 ml",
        "Sugar - 2 tsp",
        "Ice cubes - 5",
      ],
    },
    {
      name: "Virgin Mojito",
      ingredients: [
        "Lemon juice - 20 ml",
        "Fresh mint leaves - 5 leaves",
        "Sugar syrup - 20 ml",
        "Soda - 150 ml",
        "Ice cubes - 6",
      ],
    },
  ],
};