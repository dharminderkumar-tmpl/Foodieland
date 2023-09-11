import React from "react";

const MainSectionBlogPage = () => {
  return (
    <>
      <div className="mainsectionblogpage">
        <div>
          <div className="mainsectionblogs">
            <div className="imageblog">
              <img src={"/Assets/meatballs.png"} alt="baked chicken" />
            </div>
            <div className="textblog">
              <h2>Crochet Projects for Noodle Lovers</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
              </p>
            </div>
          </div>
          <div className="mainsectionblogs">
            <div className="imageblog">
              <img src={"/Assets/salmon.png"} alt="baked chicken" />
            </div>
            <div className="textblog">
              <h2>Crochet Projects for Noodle Lovers</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
              </p>
            </div>
          </div>
          <div className="mainsectionblogs">
            <div className="imageblog">
              <img src={"/Assets/meatballs.png"} alt="baked chicken" />
            </div>
            <div className="textblog">
              <h2>Crochet Projects for Noodle Lovers</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
              </p>
            </div>
          </div>
          <div className="mainsectionblogs">
            <div className="imageblog">
              <img src={"/Assets/orangePan.png"} alt="baked chicken" />
            </div>
            <div className="textblog">
              <h2>Crochet Projects for Noodle Lovers</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
              </p>
            </div>
          </div>
          <div className="mainsectionblogs">
            <div className="imageblog">
              <img src={"/Assets/pancake.png"} alt="baked chicken" />
            </div>
            <div className="textblog">
              <h2>Crochet Projects for Noodle Lovers</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
              </p>
            </div>
          </div>
          <div className="mainsectionblogs">
            <div className="imageblog">
              <img src={"/Assets/potChicken.png"} alt="baked chicken" />
            </div>
            <div className="textblog">
              <h2>Crochet Projects for Noodle Lovers</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
              </p>
            </div>
          </div>
        </div>
        <div className="RecipeRight">
          <h1>Tasty Recipes</h1>
          <div className="rightRecipeDishmain">
            <div className="rightRecipeDish">
              <img src={"/Assets/meatballs.png"} alt="salad" />
              <h2>Chicken Meatball with Creamy Cheese..</h2>
            </div>
            <div className="rightRecipeDish">
              <img src={"/Assets/tacoMeat.png"} alt="salad" />
              <h2>The Creamiest Creamy Chicken an..</h2>
            </div>
            <div className="rightRecipeDish">
              <img src={"/Assets/potChicken.png"} alt="salad" />
              <h2>The Best Easy One Pot Chicken and Rice..</h2>
            </div>
          </div>{" "}
        </div>
      </div>

      <div class="pagination">
        <a href="#" class="active">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">Next </a>
      </div>
    </>
  );
};

export default MainSectionBlogPage;
