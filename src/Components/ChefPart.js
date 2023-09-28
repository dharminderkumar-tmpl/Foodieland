import React from "react";

const ChefPart = () => {
  return (
    <>
      <div className="Chef-main">
        <div className="chef-container">
          <div className="leftChefPage">
            <h1>Everyone can be a chef in their own kitchen</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
            <button>Learn More</button>
          </div>
          {/* <div className='badge'>
          <img src={badge} alt='badge' />
      </div> */}
          <div className="rightChefPage">
            <img src={"/Assets/chef.webp"} alt="baked chicken" />
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

export default ChefPart;
