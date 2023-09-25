import React, { useState } from "react";
import { Link } from "react-router-dom";

function AritcleBlogPage() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = () => {
    fetch(`https://cooking-blogs.onrender.com/api/search?searchquery=${search}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResult(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
      <div className="search-results">
        <ul>
          {searchResult?.map((result, index) => (
            <li key={index} className="search-result-item">
              <Link
                to={`/blogpostpage/${result?.id}`}
                className="search-result-link"
              >
                <span>{result?.title}</span>
                <img
                  src={result?.image}
                  alt={result?.title}
                  className="search-result-image"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AritcleBlogPage;
