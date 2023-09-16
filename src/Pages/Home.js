import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import Categories from "../Components/Categories";
import ChefPart from "../Components/ChefPart";
import DelicacyRepeat from "../Components/DelicacyRepeat";
import Endpart from "../Components/Endpart";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import RecipePart from "../Components/RecipePart";
import LoaderComp from "../Components/LoaderComp";

function Home() {
  const [RecipeSuggestions, setRecipeSuggestions] = useState({});
  const [loading, setLoading] = useState(false);

  const { recipeId } = useParams();

  useEffect(() => {
    const apiUrl = `https://cooking-blogs.onrender.com/api/recipes/${recipeId}`;
    setLoading(true);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setRecipeSuggestions(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching data:", error);
      });
  }, [recipeId]);

  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      {loading ? <LoaderComp /> : <RecipePart data={RecipeSuggestions} />}
      <ChefPart />
      <Endpart />
      <DelicacyRepeat />
      <Footer />
    </div>
  );
}

export default Home;
