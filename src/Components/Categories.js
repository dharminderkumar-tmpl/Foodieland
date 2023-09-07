import React from 'react'
const Categories = () => {
  return (
    <div className='maincategories'>
        <div className='categories'>
        <h1>Categories</h1>
        <button><b>View All Categories</b></button>
        </div>
        <div className='catImg'>
            <div className='Img1'>
            {/* background-image: linear-gradient(to top, lightgreen, white); */}
                <img src={'/Assets/breakfast.png'} alt=''/>
                <p>Breakfast</p>
            </div>
            <div className='Img2'>
                <img src={'/Assets/vegan.png'} alt=''/>
                <p>Vegan</p>
            </div>
            <div className='Img3'>
                <img src={'/Assets/meat.png'} alt=''/>
                <p>Meat</p>
            </div>
            <div className='Img4'>
                <img src={'/Assets/dessert.png'} alt=''/>
                <p>Dessert</p>
            </div>
            <div className='Img5'>
                <img src={'/Assets/lunch.png'} alt=''/>
                <p>Lunch</p>
            </div>
            <div className='Img6'>
                <img src={'/Assets/chocolate.png'} alt=''/>
                <p>Chocolate</p>
            </div>
        </div>
    </div>
  )
}

export default Categories