import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import { Items, PaginatedItems } from "./Pagination";

const API = "https://cooking-blogs.onrender.com/api/blogs/?pageNo=1";

const MainSectionBlogPage = () => {
  console.log(API);
  const [users, setUsers] = useState([]);
  const [totalBlogs, setTotalBlogs] = useState();

  const fetchBlogs = async (url) => {
    try {
      const res = await fetch(url).then((res) => res.json());
      if (res) {
        setUsers(res.blogs);
        setTotalBlogs(res.totalBlogs);
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
      image: "/Assets/meatballs.webp",
      title: "Chicken Meatball with Creamy Cheese",
      author: "Andeas Smith",
    },
    {
      id: 2,
      image: "/Assets/tacoMeat.png",
      title: "The Creamiest Creamy Chicken",
      author: "Andeas Smith",
    },
    {
      id: 3,
      image: "/Assets/potChicken.png",
      title: "The Best Easy One Pot Chicken and Rice",
      author: "Andeas Smith",
    },
  ];

  return (
    <div>
      <div className="mainsectionblogpage">
        <div className="insideblognamepage">
          {users?.map((item) => (
            <div className="mainsectionblogs" key={item?.id}>
              <Link to={`/BlogPostPage/${item?.id}`}>
                <div className="imageblog">
                  <img src={item?.image} alt={item?.title} />
                </div>
                <div className="textblog">
                  <h2>{item?.title}</h2>
                  <p>{item?.shortDescription}</p>
                  <div className="createdate">
                    <div className="imageauthor">
                      <img src={item?.Author?.image} alt="img" />
                      <h5>
                        {item?.Author?.firstName + " "}
                        {item?.Author?.lastName}
                      </h5>
                    </div>
                    <div className="vl"></div>
                    <div className="published">
                      <p>
                        {" "}
                        {moment(item?.Author?.createdAt).format("MM MMMM YYYY")}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="RecipeRight1">
          <h1>Tasty Recipes</h1>
          <div className="rightRecipeDishmain">
            {recipeData.map((recipe) => (
              <div className="rightRecipeDish" key={recipe.id}>
                <img src={recipe.image} alt={recipe.title} />

                <div className="titleauthorright">
                  <h2>{recipe.title}</h2>
                  <p> By {recipe.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="container">
        <PaginatedItems totalBlogs={totalBlogs} setUsers={setUsers} />
      </div>
    </div>
  );
};

export default MainSectionBlogPage;
