import React from "react";

const DirectionsRecipePage = ({ dataFromAPI }) => {
  return (
    <div className="maindir">
      <div className="leftmainDishDirection">
        <h2>Directions</h2>
        {dataFromAPI?.directions?.map((items, index) => (
          <div className="Directiontomake textdir" key={index}>
            <h2>{items.title}</h2>
            <p className="textdir">{items.description}</p>
          </div>
        ))}
        <img src={dataFromAPI?.image} alt="salad" />
      </div>
    </div>
  );
};

export default DirectionsRecipePage;
