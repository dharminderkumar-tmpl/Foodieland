import {React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = "https://cooking-blogs.onrender.com/api/blogs/";

const MainSectionBlogPage = () => {
  const [users, setUsers] = useState([]);
  
  const fetchBlogs = async (url) => {
    try {
      const res = await fetch(url).then(res=> res.json());
      if (res) {
        setUsers(res.blogs);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBlogs(API);
  }, []);

  const recipeData = [
    {
      id: 1,
      image: "/Assets/meatballs.png",
      title: "Chicken Meatball with Creamy Cheese",
    },
    {
      id: 2,
      image: "/Assets/tacoMeat.png",
      title: "The Creamiest Creamy Chicken",
    },
    {
      id: 3,
      image: "/Assets/potChicken.png",
      title: "The Best Easy One Pot Chicken and Rice",
    },
  ];

  return (
    <div>
    <div className="mainsectionblogpage">
      <div>
        {users?.map((item) => (
          <div className="mainsectionblogs" key={item.id}>
            <Link to={`/BlogPostPage/${item.id}`}>
            <div className="imageblog">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="textblog">
              <h2>{item.title}</h2>
              <p>{item.shortDescription}
              </p>
            </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="RecipeRight">
        <h1>Tasty Recipes</h1>
        <div className="rightRecipeDishmain">
          {recipeData.map((recipe) => (
            <div className="rightRecipeDish" key={recipe.id}>
              <img src={recipe.image} alt={recipe.title} />
              <h2>{recipe.title}</h2>
            </div>
          ))}
        </div>
      </div>
      </div>

       <div className="pagination">
        <a href="#" className="active">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">Next </a>
      </div>
    </div>
  );
};

export default MainSectionBlogPage;
