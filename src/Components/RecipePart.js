import React from 'react'
const recipePart = () => {
  return (
    
      <div className="recipe">
        <div className="recipetitle">
            <h1>Simple and tasty recipes</h1>
            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
            <div className="recipeCards">
            <div className='card'>
                <img src={'/Assets/cheeseBurger.png'} alt="salad" />
                <p className='card_name'>
                Big and Juicy Wagyu Beef Cheeseburger
                </p>
                

            </div>
            <div className='card'>
                <img src={'/Assets/salmon.png'} alt="salad" />
                <p className='card_name'>
                Fresh Lime Roasted Salmon with Ginger Sauce
                </p>
                

            </div>
            <div className='card'>
                <img src={'/Assets/pancake.png'} alt="salad" />
                <p className='card_name'>
                Strawberry Oatmeal Pancake with Honey Syrup
                </p>
                

            </div>
            <div className='card'>
                <img src={'/Assets/salad.png'} alt="salad" />
                <p className='card_name'>
                Fresh and Healthy Mixed Mayonnaise Salad
                </p>
                

            </div>
            <div className='card'>
                <img src={'/Assets/meatballs.png'} alt="salad" />
                <p className='card_name'>
                Chicken Meatballs with Cream Cheese
                </p>
                

            </div>
            <div className='card'>
                <img src={'/Assets/mix.png'} alt="salad" />
                <p className='card_name'>
                Don’t forget to eat healthy food
                </p>
                

            </div>
            <div className='card'>
                <img src={'/Assets/orangePan.png'} alt="salad" />
                <p className='card_name'>
                Fruity Pancake with Orange & Blueberry
                </p>
                

            </div>
            <div className='card'>
                <img src={'/Assets/potChicken.png'} alt="salad" />
                <p className='card_name'>
                The Best Easy One Pot Chicken and Rice
                </p>
                

            </div>
            <div className='card'>
                <img src={'/Assets/baconPasta.png'} alt="salad" />
                <p className='card_name'>
                The Creamiest Creamy Chicken and Bacon Pasta
                </p>
                

            </div>
        </div>
        </div>
      </div>

  )
}

export default recipePart
