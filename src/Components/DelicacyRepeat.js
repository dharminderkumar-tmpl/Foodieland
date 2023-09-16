import React from "react";
import EmailValidation from "./EmailValidation";

const DelicacyRepeat = () => {
  return (
    <div className="dc">
      <div className="delicacy-container">
        <div className="heading">
          <h1>Deliciousness to your inbox</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
        </div>
        <div className="email-container">
          <div className="sideCard">
            <EmailValidation placeholder="Your email address..." />
            <img
              src={"/Assets/mixedSalad.png"}
              id="salad"
              alt="baked chicken"
            />
            <img src={"/Assets/flower.png"} id="flower" alt="baked chicken" />
            <img
              src={"/Assets/Photoplate.png"}
              id="photoplate"
              alt="baked chicken"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DelicacyRepeat;
