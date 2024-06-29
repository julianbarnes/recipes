function searchRecipe() {
    //Retrieve html element (input type, id)
  const ingredient = document.getElementById('search').value;
  // Retrieve values from API (package, parsing)
  const results = [
    `Recipe 1 for ${ingredient}`,
    `Recipe 2 for ${ingredient}`,
    `Recipe 3 for ${ingredient}`
  ];
  //Display results (improve UI, different package, id change, optimize)
  const resultsElement = document.getElementById('results');
  resultsElement.innerHTML = ""; // Clear previous results
  results.forEach(recipe => {
    const recipeElement = document.createElement('p');
    recipeElement.textContent = recipe;
    resultsElement.appendChild(recipeElement);
  });
}
