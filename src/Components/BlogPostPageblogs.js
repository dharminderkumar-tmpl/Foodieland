import "../App.css";

import React from "react";

const BlogPostPageblogs = ({ blogData }) => {
  return (
    <div>
      <div className="mainBannerPost">
        <h1>{blogData?.title}</h1>
        <div className="postpageauthor">
          <div className="imageauthor">
            <img src={blogData?.Author?.image} />
            <h3>
              {blogData?.Author?.firstName}
              {blogData?.Author?.lastName}
            </h3>
          </div>
          <p>{blogData?.createdAt}</p>
        </div>
        <p>{blogData?.shortDescription}</p>
        <img src={blogData?.image} alt="Blog Banner" />
      </div>
      <div className="secondbanner">
        <div className="Qanda">
          {blogData?.content?.map((items) => (
            <div className="blogans">
              <h2>{items.title}</h2>
              <p>{items.description}</p>
              <img src={items.image} alt={items.title} />
            </div>
          ))}
        </div>
        <div className="socialmedia">
          <h3>SHARE THIS ON:</h3>
          <div className="social-social">
            <a href="https://www.facebook.com" target="_blank">
              <img src={"/Assets/fb.png"} alt="Facebook" />
            </a>
            <a href="https://www.twitter.com/kakudharmu" target="_blank">
              <img src={"/Assets/twitter.png"} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/_kaku_sharma" target="_blank">
              <img src={"/Assets/instagram.png"} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPageblogs;
