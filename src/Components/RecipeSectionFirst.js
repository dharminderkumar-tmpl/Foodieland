import React from "react";
const RecipeSectionFirst = ({ data }) => {
  return (
    <div className="MainRecipeSectionFirst">
      <h1>{data?.title}</h1>
      <div className="sharingicons">
        <div className="smallericons">
          <div className="icon">
            <div className="iconinside">
              <img src="/Assets/sharing.png" />
            </div>
            <h3>Share</h3>
          </div>
          <div className="icon">
            <div className="iconinside">
              <img src="/Assets/printing.png" />
            </div>
            <h3>Print</h3>
          </div>
        </div>
      </div>
      <div className="mainflexdiv">
        <div className="flexalldatarecipe">
          <div className="imageauthor">
            <img src="/Assets/man.png" />
            <div className="flexnamedate">
              <h5>Jan Doe</h5>
              <p>9 Nov 2023</p>
            </div>
          </div>
        </div>
        <div className="flexalldatarecipe">
          <div className="imageauthor">
            <img src="/Assets/Timer.png" />
            <div className="flexnamedate">
              <h5>PREP TIME</h5>
              <p>15 MIN</p>
            </div>
          </div>
        </div>
        <div className="flexalldatarecipe">
          <div className="imageauthor">
            <img src="/Assets/fork.png" />
            <h5>Chicken</h5>
          </div>
        </div>
      </div>
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
      <div className="recipeundertext">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default RecipeSectionFirst;
