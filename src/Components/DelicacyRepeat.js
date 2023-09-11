import React from "react";

const DelicacyRepeat = () => {
  return (
    <div className="dc">
      <div className="delicacy-container">
        <div className="heading">
          <h1>Deliciousness to your inbox</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
        
          <div className="email-container">
            <div className="border">
              <input
                type="email"
                className="email"
                placeholder="Your email address..."
              />
              <div className="submitButton">
                <button>Submit</button>
              </div>
            </div>
          </div>
          <div className="sideCard">
            <img src={"/Assets/mixedSalad.png"} alt="baked chicken" />
          
            <img src={"/Assets/flower.png"} id="flower"alt="baked chicken" />
            <img src={"/Assets/Photoplate.png"} alt="baked chicken" />
            

            </div>
        </div>
      </div>
    
  );
};

export default DelicacyRepeat;
