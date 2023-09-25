import React from "react";

const DirectionsRecipePage = ({ dataFromAPI }) => {
  // console.log(dataFromAPI);
  return (
    <div className="maindir">
      <div className="leftmainDishDirection">
        <h2>Directions</h2>
        <ul className="direction-list">
          {dataFromAPI?.directions?.map((item, index) => (
            <li className="Directiontomake textdir" id="directions" key={index}>
              <span>
                {index + 1 + " . "}
                {item.name}
              </span>{" "}
              <p className="textdir">{item.description}</p>
              {item.image && <img src={item.image} alt="salad" />}
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DirectionsRecipePage;
