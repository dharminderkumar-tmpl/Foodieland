import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RecipePart = () => {
  const [recipeData, setRecipeData] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    fetch("https://cooking-blogs.onrender.com/api/recipes/suggestions")
      .then((response) => response.json())
      .then((data) => setRecipeData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="recipe">
      <a id="recipe">
        <div className="recipetitle">
          <h1>Simple and tasty recipes</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>

          <div className="recipeCards">
            {recipeData?.recipes?.map((data) => (
              <div className="card" key={data?.id}>
                <Link to={`/recipe/${data?.id}`}>
                  <img src={data?.image} alt="img" />
                </Link>
                <button
                  onClick={handleButtonClick}
                  className={`icon-button ${isClicked ? "clicked" : ""}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    display="block"
                    id="Heart"
                  >
                    <path d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z" />
                  </svg>
                </button>
                <h3>{data.title}</h3>

                <div className="timerdiv " id="timeron">
                  <div className="timer timefork">
                    <img src={"/Assets/timer.png"} alt="Timer" />
                    <p>30 min</p>
                  </div>
                  <div className="forknife timefork">
                    <img src={"/Assets/fork.png"} alt="Fork" />
                    <p>Snack</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default RecipePart;
