import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const array = [1, 2, 3, 4, 5];

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    // <div className="hero-wrapper">
    <Slider {...settings} className="slider">
      {array.map((e) => (
        <div key={e} className="hero-container">
          <div className="herolefttext">
            <div className="carpet">
              <img src={"/Assets/carpet.png"} alt="Fork" />
              <div>Hot recipes</div>
            </div>
            <div className="herotext">
              <h1>Spicy delicious chicken wings</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="timerdiv">
              <div className="timer timefork" id={"fork"}>
                <img src={"/Assets/Timer.png"} alt="Timer" />
                <div className="snack">30 min</div>
              </div>
              <div className="forknife timefork" id={"fork"}>
                <img src={"/Assets/fork.png"} alt="Fork" />
                <div className="snack">Snack</div>
              </div>
            </div>
            <div className="specificimgdetails" id="data">
              <div className="flexalldatarecipe">
                <div className="imageauthor">
                  <img src="/Assets/man.png" alt="Author" />
                  <div className="flexnamedate">
                    <h5>Jan Doe</h5>
                    <p>9 Nov 2023</p>
                  </div>
                </div>
              </div>
              <div className="recipebutton">
                <a href="#recipe">
                  <button className="blackbg">
                    <div className="viewrecipe">
                      <div className="textrecipeban">
                        <h3>View Recipe</h3>
                      </div>
                      <div className="iconban">
                        <img src={"/Assets/videoicon25.png"} alt="Play Icon" />
                      </div>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="herorightimage">
            <img src={"/Assets/baked-chicken.png"} alt="baked chicken" />
          </div>
        </div>
      ))}
    </Slider>
    // </div>
  );
};

export default Hero;
