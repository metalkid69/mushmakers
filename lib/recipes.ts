export interface Recipe {
    id: string;
    title: string;
    image: string;
    description: string;
    ingredients: string[];
    method: string[];
}

export const RECIPES: Recipe[] = [
    {
        id: "chili-cheese-mushroom",
        title: "Chili Cheese Mushroom",
        image: "/images/recipe_chili_cheese_1769693621426.png",
        description: "A cheesy, spicy delight perfect for appetizers. Melty cheese meets fresh button mushrooms.",
        ingredients: [
            "Button Mushroom- 200-250 gm",
            "Butter- 1.5 tbsp",
            "Garlic- 1tbsp, finely chopped",
            "Basil leaves- 6-8",
            "Chili Oil- 1 tbsp",
            "Cheese- 0.5 cup, grated",
            "Salt & Pepper to taste"
        ],
        method: [
            "Wash mushrooms thoroughly and pat dry.",
            "Heat butter, sauté whole mushrooms until soft.",
            "Add garlic and sauté.",
            "Add basil and chili oil, mix well.",
            "Add cheese, cover and cook until melted.",
            "Serve hot."
        ]
    },
    {
        id: "garlic-sauteed-mushroom",
        title: "Garlic Sauteed Button Mushrooms",
        image: "/images/recipe_garlic_sauteed_1769693699815.png",
        description: "Simple, classic, and absolutely delicious side dish highlighting the natural mushroom flavor.",
        ingredients: [
            "Button mushrooms- 200 gm",
            "Olive oil- 1tbsp",
            "Garlic (chopped)- 4 cloves",
            "Black pepper- 0.5 tbsp",
            "Lemon juice- 1tbsp",
            "Fresh parsley / coriander"
        ],
        method: [
            "Clean and slice mushrooms.",
            "Heat olive oil, sauté garlic till golden.",
            "Add mushrooms, cook on high heat 5-6 mins.",
            "Add seasoning and lemon juice.",
            "Garnish and serve."
        ]
    },
    {
        id: "mushroom-stir-fry",
        title: "Mushroom & Vegetable Stir Fry",
        image: "/images/recipe_stir_fry_1769693793935.png",
        description: "A healthy, crunchy, and savory mix of fresh veggies and mushrooms.",
        ingredients: [
            "Button mushrooms- 200 gm",
            "Capsicum- 1/2 cup",
            "Broccoli / beans- 1/2 cup",
            "Soy sauce- 1tbsp",
            "Olive oil / sesame oil- 1 tbsp",
            "Black pepper- 1/2 tbsp"
        ],
        method: [
            "Heat oil, sauté onion (optional).",
            "Add vegetables, stir fry high heat.",
            "Add mushrooms, cook 4-5 mins.",
            "Add soy sauce and pepper.",
            "Toss well and serve."
        ]
    },
    {
        id: "mushroom-soup",
        title: "Creamy Mushroom Soup",
        image: "/images/recipe_soup_1769693885089.png",
        description: "Warm, comforting, and rich mushroom soup perfect for any season.",
        ingredients: [
            "Button mushrooms- 200 gm",
            "Onion- 1 small",
            "Garlic- 3 cloves",
            "Vegetable stock / water- 2 cups",
            "Milk (optional)- 1/4 cup",
            "Salt & Pepper"
        ],
        method: [
            "Sauté onion and garlic.",
            "Add chopped mushrooms, cook till soft.",
            "Add stock and boil 8-10 mins.",
            "Blend smoothly.",
            "Add milk and simmer 2 mins."
        ]
    },
    {
        id: "mushroom-masala",
        title: "Mushroom Masala",
        image: "/images/recipe_masala_1769693968959.png",
        description: "A spicy Indian curry that pairs perfectly with roti or rice.",
        ingredients: [
            "Button mushrooms- 250 gm",
            "Onion- 1 large, Tomato- 2 medium",
            "Ginger-garlic paste- 1tbsp",
            "Turmeric, Coriander powder, Garam masala"
        ],
        method: [
            "Make onion-tomato paste.",
            "Heat oil, cook paste and spices.",
            "Add mushrooms, cook 7-8 mins.",
            "Finish with garam masala."
        ]
    }
];
