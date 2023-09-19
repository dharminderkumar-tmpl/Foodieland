import React from "react";

const DirectionsRecipePage = ({ dataFromAPI }) => {
  // console.log(dataFromAPI);
  return (
    <div className="maindir">
      <div className="leftmainDishDirection">
        <h2>Directions</h2>
        {dataFromAPI?.directions?.map((item, index) => (
          <div className="Directiontomake textdir" id="directions" key={index}>
            <span>
              {index + 1 + " . "}
              {item.name}
            </span>{" "}
            <p className="textdir">{item.description}</p>
            {item.image && <img src={item.image} alt="salad" />}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectionsRecipePage;
