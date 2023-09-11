import React from "react";

const AritcleBlogPage = () => {
  return (
    <div className="blogName">
      <h1>Blog & Article</h1>

      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
      </div>
      <div className="mainsearch">
        <div className="search-container">
          <div className="border-search-container">
            <input
              type="text"
              className="text-input"
              placeholder="Search article,news or recipe."
            />
            
              <button>Submit</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AritcleBlogPage;
