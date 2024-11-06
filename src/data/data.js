export const letters = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);

export const urlMealsByLetter = `https://www.themealdb.com/api/json/v1/1/search.php?f=`;

export const urlDrinksByLetter = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=`;
