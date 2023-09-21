import React, { useState } from "react";

const dummyData = [
  {
    id: 1,
    title: "Healthy Japanese Fried Rice with Asparagus",
    image: "/Assets/vegSalad.png",
  },
  {
    id: 2,
    title: "Healthy Japanese Fried Rice with Asparagus",
    image: "/Assets/beef.png",
  },
  {
    id: 3,
    title: "Healthy Japanese Fried Rice with Asparagus",
    image: "/Assets/beef.png",
  },
  {
    id: 4,
    title: "Healthy Japanese Fried Rice with Asparagus",
    image: "/Assets/beef.png",
  },
  {
    id: 5,
    title: "Healthy Japanese Fried Rice with Asparagus",
    image: "/Assets/beef.png",
  },
  {
    id: 6,
    title: "Healthy Japanese Fried Rice with Asparagus",
    image: "/Assets/beef.png",
  },
  {
    id: 7,
    title: "Healthy Japanese Fried Rice with Asparagus",
    image: "/Assets/beef.png",
  },
  {
    id: 8,
    title: "Healthy Japanese Fried Rice with Asparagus",
    image: "/Assets/beef.png",
  },
];

const Endpart = () => {
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

  return (
    <div className="recipe1">
      <div className="recipetitle1">
        <h1>Try this delicious recipe to make your day</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
          minim
        </p>
      </div>
      <div className="recipeCards1">
        {dummyData.map((data) => (
          <div className="card1" key={data.id}>
            <img src={data.image} alt="salad" />
            <button
              onDoubleClick={() => handleButtonClick(data?.id)}
              onClick={() => handleRemoveLink(data?.id)}
              className="icon-button1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={isClicked.id.includes(data?.id) ? "red" : "gray"}
                stroke=""
                strokeWidth=""
                strokeLinecap="round"
                strokeLinejoin="round"
                display="block"
                id="Heart1"
              >
                <path d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z" />
              </svg>
            </button>
            <p className="card_name1">{data.title}</p>
            <div className="timerdiv">
              <div className="timer timefork">
                <img src="/Assets/Timer.svg" alt="Timer" />
                <p>30 min</p>
              </div>
              <div className="forknife timefork">
                <img src="/Assets/ForkKnife.svg" alt="Fork" />
                <p>Snack</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Endpart;
