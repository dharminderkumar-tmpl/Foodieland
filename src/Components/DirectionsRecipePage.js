import React from "react";

const DirectionsRecipePage = ({ dataFromAPI }) => {
  // console.log(dataFromAPI);
  return (
    <div className="maindir">
      <div className="leftmainDishDirection">
        <h2>Directions</h2>
        {dataFromAPI?.directions?.map((item, index) => (
          <div className="Directiontomake textdir" key={index}>
            <span>
              {index + 1 + " . "}
              {item.name}
            </span>{" "}
            <p className="textdir">
              {item.description}
              <hr />
            </p>
            {item.image && <img src={item.image} alt="salad" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectionsRecipePage;
