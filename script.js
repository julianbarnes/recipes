function searchRecipe() {
  const ingredient = document.getElementById('search').value;
  // Replace this with your API call logic
  // Placeholder logic to simulate results
  const results = [
    `Recipe 1 for ${ingredient}`,
    `Recipe 2 for ${ingredient}`,
    `Recipe 3 for ${ingredient}`
  ];
  
  const resultsElement = document.getElementById('results');
  resultsElement.innerHTML = ""; // Clear previous results

  // Add each recipe to the results element
  results.forEach(recipe => {
    const recipeElement = document.createElement('p');
    recipeElement.textContent = recipe;
    resultsElement.appendChild(recipeElement);
  });
}
