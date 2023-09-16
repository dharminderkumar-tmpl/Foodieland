import "../App.css";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import DelicacyRepeat from "../Components/DelicacyRepeat";
import Footer from "../Components/Footer";
import AritcleBlogPage from "../Components/AritcleBlogPage";
import MainSectionBlogPage from "../Components/MainSectionBlogPage";
import LoaderComp from "../Components/LoaderComp";

function Blog() {
  const [BlogSuggestions, setBlogSuggestions] = useState({});
  const [loading, setLoading] = useState(false);
  const { blogId } = useParams();

  useEffect(() => {
    const apiurl = `https://cooking-blogs.onrender.com/api/blogs/${blogId}`;
    setLoading(true);
    fetch(apiurl)
      .then((response) => response.json())
      .then((data) => {
        setBlogSuggestions(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching data:", error);
      });
  }, [blogId]);

  return (
    <div>
      <Navbar />
      <AritcleBlogPage />
      {loading ? (
        <LoaderComp />
      ) : (
        <>
          <MainSectionBlogPage data={BlogSuggestions} />
        </>
      )}
      <DelicacyRepeat />
      <Footer />
    </div>
  );
}

export default Blog;
