import React from "react";

const DirectionsRecipePage = () => {
  return (
    <div className="maindir">
      <div className="directionsmaindiv">
        <h1>Directions</h1>
        <div className="directions">
          <div className="radio">
            <div className="radiof">
              <input type="radio" id="first" name="" value="" />
              <label for="first"> 1. Lorem ipsum dolor sit amet</label>
            </div>
            <div className="textdir">
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </div>
            <div className="imagedir">
              <img src={"/Assets/girlcooking.png"} alt="salad" />
            </div>
            <div className="textdir">
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </div>
          </div>
          <div className="radio">
            <div className="radiof">
              <input type="radio" id="second" name="" value="" />
              <label for="second">2. Lorem ipsum dolor sit amet</label>
            </div>
            <div className="textdir">
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </div>
          </div>
          <div className="radio">
            <div className="radiof">
              <input type="radio" id="third" name="" value="" />
              <label for="third">3. Lorem ipsum dolor sit amet</label>
            </div>
            <div className="textdir">
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default DirectionsRecipePage;
