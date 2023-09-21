import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RecipePart = () => {
  const [recipeData, setRecipeData] = useState(null);
  const [isClicked, setIsClicked] = useState({
    id: [],
  });

  const handleButtonClick = (id) => {
    setIsClicked((prevIsClicked) => ({
      id: [...prevIsClicked.id, id],
    }));
  };
  const handleRemoveLink = (idToRemove) => {
    setIsClicked((prevIsClicked) => ({
      id: prevIsClicked.id.filter((id) => id !== idToRemove),
    }));
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
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>

          <div className="recipeCards">
            {recipeData?.recipes?.map((data) => (
              <div className="card" key={data?.id}>
                <Link to={`/recipe/${data?.id}`}>
                  <img src={data?.image} alt="img" />
                </Link>
                <button
                  onDoubleClick={() => handleButtonClick(data?.id)}
                  onClick={() => handleRemoveLink(data?.id)}
                  className="icon-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={isClicked.id.includes(data?.id) ? "red" : "gray"}
                    stroke=""
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
                  <div className="timefork">
                    <img src={"/Assets/Timer.svg"} alt="Timer" />
                    <p>30 min</p>
                  </div>
                  <div className="timefork">
                    <img src={"/Assets/ForkKnife.svg"} alt="Fork" />
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
