import React, { useState, useEffect } from "react";
const RecipeSectionFirst = ({ data }) => {
  const fat = data?.nutritionInformation?.Fat;

  return (
    <div className="MainRecipeSectionFirst">
      <h1>{data?.title}</h1>
      <div className="recipemain">
        <img src={data?.image} className="recipeImg" />
        <div className="nutrientInfo">
          <h3>Nutrition Information</h3>
          <div className="nuts">
            <div className="nutrient">
              <h4>Fat</h4> <p> {data?.nutritionInformation?.Fat}</p>
            </div>
            <div className="nutrient">
              <h4>Protein</h4> <p> {data?.nutritionInformation?.Protein}</p>
            </div>
            <div className="nutrient">
              <h4>Carbs</h4> <p> {data?.nutritionInformation?.Carbs}</p>
            </div>
            <div className="nutrient">
              <h4>Fiber</h4> <p>{data?.nutritionInformation?.Fiber}</p>
            </div>
            <div className="nutrient">
              <h4>Calories</h4> <p> {data?.nutritionInformation?.Calories}</p>
            </div>
          </div>
          <div className="recipeText">
            <p>{data?.nutritionDetails}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeSectionFirst;
