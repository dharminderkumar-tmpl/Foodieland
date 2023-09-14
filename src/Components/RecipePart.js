import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

const RecipePart = () => {
  const [recipeData, setRecipeData] = useState(null);
  // const { recipeId }  =  useParams()
  useEffect(() => {
    fetch("https://cooking-blogs.onrender.com/api/recipes/suggestions")
      .then((response) => response.json())
      .then((data) => setRecipeData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="recipe">
      <div className="recipetitle">
        <h1>Simple and tasty recipes</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>

        <div className="recipeCards">
          {recipeData?.recipes?.map((data) => (
            <div className="card" key={data?.id}>
              <Link to={`/recipe/${data?.id}`}>
                <img src={data?.image} alt="img" />
                <p className="card_name">{data.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RecipePart;
