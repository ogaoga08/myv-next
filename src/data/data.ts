export async function fetchFilteredFoods(query: string) {
  const foods = [
    {
      id: "1",
      name: "Pizza",
      category: "Italian",
      price: 12.99,
      calories: 300,
    },
    {
      id: "2",
      name: "Sushi",
      category: "Japanese",
      price: 15.99,
      calories: 250,
    },
    {
      id: "3",
      name: "Burger",
      category: "American",
      price: 8.99,
      calories: 400,
    },
    {
      id: "4",
      name: "Pasta",
      category: "Italian",
      price: 10.99,
      calories: 350,
    },
    { id: "5", name: "Salad", category: "Healthy", price: 7.99, calories: 150 },
  ];

  const filteredFoods = foods.filter(
    (food) =>
      food.name.toLowerCase().includes(query.toLowerCase()) ||
      food.category.toLowerCase().includes(query.toLowerCase())
  );

  return filteredFoods;
}
