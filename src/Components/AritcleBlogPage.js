import React, { useState } from "react";

function AritcleBlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      setError("Please enter a search query.");
    } else {
      console.log("Search query:", searchQuery);
    }
  };

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
              placeholder="Search article, news, or recipe."
              value={searchQuery}
              onChange={handleChange}
            />

            <button onClick={handleSubmit}>Submit</button>
            {/* {error && <p className="error">{error}</p>} */}
          </div>
        </div>
        {error && (
          <p className="error" id="errormsg">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
export default AritcleBlogPage;
