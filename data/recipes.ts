export type Recipe = {
  name: string;
  prepTime?: string;
  ingredients: string[];
};

export const recipes: Record<string, Recipe[]> = {
  Chai: [
    {
      name: "Elachi Chai",
      prepTime: "5 mins",
      ingredients: [
        "Tea powder - 2 tsp",
        "Water - 150 ml",
        "Milk - 100 ml",
        "Sugar - 2 tsp",
        "Cardamom - 1 pod",
      ],
    },
    {
      name: "Ginger Chai",
      prepTime: "5 mins",
      ingredients: [
        "Tea powder - 2 tsp",
        "Water - 150 ml",
        "Milk - 100 ml",
        "Sugar - 2 tsp",
        "Ginger (crushed) - 1 tsp",
      ],
    },
    //pending masala chai, bellam chai, badam chai
  ],

  "Herbal teas": [
    {
      name: "Black Tea",
      prepTime: "3 mins",
      ingredients: ["Tea Decoction", "Sugar - as needed"],
    },
    {
      name: "Lemon Tea",
      prepTime: "2 mins",
      ingredients: [
        "1 Spoon Powder",
        "10 ml Lemon",
        "1 Spoon Chiya Seeds",
        "4 Mint Leaves",
        "Honey 10 gms",
        "Hot Water",
      ],
    },
    {
      name: "Green Tea",
      prepTime: "2 mins",
      ingredients: [
        "1 pouch",
        "Hot Water 180 ml",
        "Optional Honey",
        "Optional Lemon",
        "Optional Mint Leaves",
      ],
    },
    {
      name: "Hibiscus Green Tea",
      prepTime: "2 mins",
      ingredients: [
        "1 Spoons Powder 3 gms",
        "200 ml Hot Water",
        "Honey",
        "Lemon",
      ],
    },
    {
      name: "Spearmint Green Tea",
      prepTime: "2 mins",
      ingredients: [
        "1 Spoon Powder 3 gms",
        "200 ml Hot Water",
        "Honey",
        "Lemon",
      ],
    },
    {
      name: "Jasmine Green Tea",
      prepTime: "2 mins",
      ingredients: [
        "1 Spoon Powder 3 gms",
        "200 ml Hot Water",
        "Honey",
        "Lemon",
      ],
    },
    {
      name: "Chamomile Green Tea",
      prepTime: "2 mins",
      ingredients: [
        "1 Spoon Powder 3 gms",
        "200 ml Hot Water",
        "Honey",
        "Lemon",
      ],
    },
  ],

  "Cold Coffee": [
    {
      name: "Classic",
      prepTime: "3 mins",
      ingredients: [
        "70 gms Ice",
        "100 ml Milk",
        "30 gms Milk Maid",
        "40 ml Coffee",
        "Vanilla Frappe 15 gms",
      ],
    },
    {
      name: "Mocha Cold Coffee",
      prepTime: "5 mins",
      ingredients: [
        "70 gms Ice",
        "80 ml Milk",
        "30 gms Chocolate Syrup",
        "40 ml Coffee",
        "Frappe 15 gms",
      ],
    },
    {
      name: "Hazelnut Cold Coffee",
      prepTime: "5 mins",
      ingredients: [
        "70 gms Ice",
        "100 ml Milk",
        "30 gms Syrup",
        "40 ml Coffee",
        "Vanilla Frappe 15 gms",
      ],
    },
    {
      name: "Vanilla Cold Coffee",
      prepTime: "5 mins",
      ingredients: [
        "70 gms Ice",
        "100 ml Milk",
        "30 gms Syrup",
        "40 ml Coffee",
        "Vanilla Frappe 15 gms",
      ],
    },
    {
      name: "Biscoff Cold Coffee",
      prepTime: "5 mins",
      ingredients: [
        "70 gms Ice",
        "100 ml Milk",
        "50 gms Syrup",
        "40 ml Coffee",
        "Vanilla Frappe 15 gms",
      ],
    },
    {
      name: "Rose Cold Coffee",
      prepTime: "5 mins",
      ingredients: [
        "70 gms Ice",
        "100 ml Milk",
        "30 gms Syrup",
        "40 ml Coffee",
        "Vanilla Frappe 15 gms",
      ],
    },
    {
      name: "Chocolate Cold Coffee",
      prepTime: "5 mins",
      ingredients: [
        "Chocolate Syrup 30 gms",
        "Milk 100 ml",
        "Vanilla Frappe 15 gms",
        "Ice 70 gms",
        "Coffee 40 ml",
      ],
    },
    {
      name: "Oreo Cold Coffee",
      prepTime: "5 mins",
      ingredients: [
        "5 Oreo Biscuits 40 gms (only chocolate)",
        "Chocolate 30 gms",
        "milk 100 ml",
        "Ice 70 gms",
        "Vanilla Frappe 15 gms",
        "Coffee 40 ml",
      ],
    },
    {
      name: "Filter Cold Coffee",
      prepTime: "5 mins",
      ingredients: [
        "8 ml Coffee Decoction",
        "Ice 50 gms",
        "30 gms Milk Maid",
        "Milk 120 ml",
        "Frappe 15 gms",
        "Topping Whipping Cream",
      ],
    },
  ],

  "Hot Coffee": [
    // pending classic, vanilla, hazelnut
  ],

  "Hot Milk": [
    {
      name: "Plain Milk",
      ingredients: ["Milk - 250 ml", "Sugar - 1 tsp"],
    },
    {
      name: "Pepper Milk",
      ingredients: ["Milk - 250 ml", "Pepper - 1/2 tsp", "Sugar - 1 tsp"],
    },
    //pending badam milk, hot rose milk
  ],

  "Milk Shakes": [
    {
      name: "Vanilla",
      prepTime: "3 mins",
      ingredients: [
        "30 gms Vanilla Frappe",
        "100 ml Milk",
        "30 gms Syrup",
        "70 gms Ice",
      ],
    },
    {
      name: "Strawberry",
      prepTime: "3 mins",
      ingredients: [
        "30 gms Vanilla Frappe",
        "100 ml Milk",
        "30 gms Syrup",
        "70 gms Ice",
      ],
    },
    // {
    //   name: "Mango",
    //   prepTime: "3 mins",
    //   ingredients: [
    //     "30 gms Vanilla Frappe",
    //     "100 ml Milk",
    //     "30 gms Syrup",
    //     "70 gms Ice",
    //   ],
    // },
    // {
    //   name: "Strawberry Banana",
    //   prepTime: "3 mins",
    //   ingredients: [
    //     "30 gms Vanilla Frappe",
    //     "100 ml Milk",
    //     "30 gms Syrup",
    //     "70 gms Ice",
    //   ],
    // },
    // {
    //   name: "Fruit Blast",
    //   prepTime: "3 mins",
    //   ingredients: [
    //     "30 gms Vanilla Frappe",
    //     "100 ml Milk",
    //     "30 gms Syrup",
    //     "70 gms Ice",
    //   ],
    // },
    {
      name: "Peanut Butter",
      prepTime: "3 mins",
      ingredients: [
        "30 gms Vanilla Frappe",
        "100 ml Milk",
        "30 gms Syrup",
        "70 gms Ice",
      ],
    },
    // {
    //   name: "Salted Caramel",
    //   prepTime: "3 mins",
    //   ingredients: [
    //     "30 gms Vanilla Frappe",
    //     "100 ml Milk",
    //     "30 gms Syrup",
    //     "70 gms Ice",
    //   ],
    // },
    {
      name: "Nutella",
      prepTime: "5 mins",
      ingredients: [
        "30 gms Vanilla Frappe",
        "100 ml Milk",
        "30 gms Syrup",
        "70 gms Ice",
      ],
    },
    {
      name: "Biscoff",
      prepTime: "5 mins",
      ingredients: [
        "30 gms Vanilla Frappe",
        "100 ml Milk",
        "30 gms Syrup",
        "70 gms Ice",
      ],
    },
    {
      name: "Chocolate",
      prepTime: "3 mins",
      ingredients: [
        "30 gms Chocolate Frappe",
        "100 ml Milk",
        "30 gms Syrup",
        "70 gms Ice",
      ],
    },
    // {
    //   name: "Belgium Dark Chocolate",
    //   prepTime: "3 mins",
    //   ingredients: [
    //     "30 gms Chocolate Frappe",
    //     "100 ml Milk",
    //     "30 gms Syrup",
    //     "70 gms Ice",
    //   ],
    // },
    {
      name: "Oreo MilkShake",
      prepTime: "3 mins",
      ingredients: [
        "5 pieces Oreo 40 gms (only chocolate)",
        "Milk 120 ml",
        "Ice 70 gms",
        "Vanilla Frappe 30 gms",
        "20 gms chocolate syrup",
      ],
    },
    {
      name: "Kit Kat MilkShake",
      prepTime: "3 mins",
      ingredients: [
        "Kit Kat 40 gms",
        "Milk 120 ml",
        "Ice 70 gms",
        "Chocolate Powder 15 gms",
        "Vanilla Frappe 25 gms",
        "10 gms chocolate syrup",
      ],
    },
    //pending rose milkshake
  ],

  "Ice Tea": [
    {
      name: "Peach Ice Tea",
      prepTime: "3 mins",
      ingredients: [
        "70 gms Ice",
        "30 gms Syrup",
        "200 ml Cool Water",
        "4-5 mint leaves",
      ],
    },
    {
      name: "Lemon Ice Tea",
      prepTime: "3 mins",
      ingredients: [
        "70 gms Ice",
        "30 gms Syrup",
        "20 ml lemon Syrup",
        "4-5 Mint Leaves",
        "200 ml Water",
      ],
    },
    {
      name: "Fizzy Peach Ice Tea",
      prepTime: "3 mins",
      ingredients: [
        "70 gms Ice",
        "30 gms Syrup",
        "200 ml Soda",
        "4-5 mint leaves",
      ],
    },
    {
      name: "Fizzy Lemon Ice Tea",
      prepTime: "3 mins",
      ingredients: [
        "70 gms Ice",
        "30 gms Syrup",
        "20 ml lemon Syrup",
        "4-5 Mint Leaves",
        "200 ml Soda",
      ],
    },
  ],

  Omelettes: [
    // omlettes pending
  ],

  Sandwiches: [
    {
      name: "Veg Sandwich",
      prepTime: "5-7 mins",
      ingredients: [
        "1 spoon Tomato",
        "1 spoon Keera",
        "1 spoon Onion",
        "1 spoon corn",
        "1 spoon Mayonnaise White",
        "pepper Half spoon",
        "Oregano 1/4 spoon",
        "Chilli Flakes 1/4 spoon",
        "Add Butter Bread 10 gms",
        "Pinch of Coriander",
        "Salt",
      ],
    },
    {
      name: "Paneer Sandwich",
      prepTime: "5-7 mins",
      ingredients: [
        "40 gms Paneer",
        "Masala 1 spoon",
        "1 spoon Mayonnaise White",
        "1 spoon Onion",
        "1 spoon Corn",
        "Add Pinch Of Coriander",
        "Salt",
        "Add Butter 10 gms Bread",
      ],
    },
    {
      name: "Chicken Sandwich",
      prepTime: "5-7 mins",
      ingredients: [
        "1 spoon Onion",
        "40 gms Chicken",
        "1 spoon Green Mayonnaise",
        "Pinch of Coriander",
        "Salt",
        "Add Butter 10 gms Bread",
      ],
    },
    // {
    //   name: "Corn Cheese",
    //   prepTime: "5-7 mins",
    //   ingredients: [
    //     "1 spoon Corn",
    //     "Cheese 20 gms",
    //     "1 spoon Mayonnaise White",
    //     "Pepper Half spoon",
    //     "Oregano 1/4 spoon",
    //     "Chilli Flakes 1/4 spoon",
    //     "Coriander pinch",
    //     "Add Butter 10 gms Bread",
    //   ],
    // },
    // {
    //   name: "Cream Onion",
    //   prepTime: "5-7 mins",
    //   ingredients: [
    //     "2 spoon Onion",
    //     "5ml Milk",
    //     "Cheese 1 spoon",
    //     "1 spoon Mayonnaise Green",
    //     "Coriander Pinch",
    //     "Optional (Cream)",
    //     "Add Butter 10 gms Bread",
    //   ],
    // },

    // pending classic paneer and cream sandwich
  ],

  Maggie: [
    // plain, veg, cheese, egg, chicken maggie pending
  ],

  Breads: [
    {
      name: "Butter & Jam",
      prepTime: "3 mins",
      ingredients: [
        "Two breads",
        "Butter",
        "Jam",
        "Apply butter on the bread and then apply spreads on them",
        "grill or serve it plain",
      ],
    },
    {
      name: "Nutella & Butter",
      prepTime: "3 mins",
      ingredients: [
        "Two breads",
        "Butter",
        "Nutella",
        "Apply butter on the bread and then apply spreads on them",
        "grill or serve it plain",
      ],
    },
    {
      name: "Peanut Butter & Jam",
      prepTime: "3 mins",
      ingredients: [
        "Two breads",
        "Butter",
        "Peanut Butter",
        "Jam",
        "Apply butter on the bread and then apply spreads on them",
        "grill or serve it plain",
      ],
    },
    {
      name: "Bread Toasts",
      prepTime: "3 mins",
      ingredients: [
        "Two breads",
        "Grill / Toast them in the toaster or on the pan with butter",
        "Don't burn them like Harsha Vardhan",
      ],
    },
    // pending bread omlette, masala bread omlette
  ],

  Burgers: [
    //burgers pending
  ],

  Coolers: [
    {
      name: "Virgin Mojito",
      prepTime: "3 mins",
      ingredients: [
        "70 gms Ice",
        "20 ml Lemon Syrup",
        "4-5 Mint Leave",
        "30 gms Syrup",
        "70 ml Soda",
        "80 ml Sprite",
      ],
    },
    {
      name: "Blue Ocean",
      prepTime: "3 mins",
      ingredients: [
        "70 gms Ice",
        "20 ml Lemon Syrup",
        "4-5 Mint Leave",
        "30 gms Syrup",
        "70 ml Soda",
        "80 ml Sprite",
      ],
    },
    {
      name: "Berry Blast",
      prepTime: "3 mins",
      ingredients: [
        "70 gms Ice",
        "20 ml Lemon Syrup",
        "4-5 Mint Leave",
        "30 gms Syrup",
        "70 ml Soda",
        "80 ml Sprite",
      ],
    },
    {
      name: "Nannari",
      prepTime: "3 mins",
      ingredients: [
        "70 gms Ice",
        "30 gms Syrup",
        "1 spoon Chia seeds",
        "Pinch Of Ginger",
        "20 ml Lemon Syrup",
        "Mint 4 Leaves",
        "180 ml Soda",
        "Optional - Cool Water",
      ],
    },
    //Lemonade Pending
  ],
};
