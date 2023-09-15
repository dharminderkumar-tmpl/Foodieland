import "../App.css";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import DirectionsRecipePage from '../Components/DirectionsRecipePage';
import IngredientsandRecipe from "../Components/IngredientsandRecipe";
import Navbar from "../Components/Navbar";
import RecipeSectionFirst from "../Components/RecipeSectionFirst";
// import DelicacyRecipePage from '../Component/DelicacyRecipePage';
import DelicacyRepeat from "../Components/DelicacyRepeat";
import Footer from "../Components/Footer";
import LikeRecipe from "../Components/LikeRecipe";
function Home() {
  const [RecipeSuggestions, setRecipeSuggestions] = useState({});
  const { recipeId } = useParams();

  useEffect(() => {
    const apiUrl = `https://cooking-blogs.onrender.com/api/recipes/${recipeId}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setRecipeSuggestions(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [recipeId]);
  return (
    <div>
      <Navbar />
      <RecipeSectionFirst data={RecipeSuggestions} />
      <IngredientsandRecipe dataFromAPI={RecipeSuggestions} />

      <DelicacyRepeat />
      <LikeRecipe />
      <Footer />
    </div>
  );
}

export default Home;
