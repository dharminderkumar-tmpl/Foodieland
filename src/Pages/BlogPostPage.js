import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoaderComp from "../Components/LoaderComp";
import Navbar from "../Components/Navbar";
import DelicacyRepeat from "../Components/DelicacyRepeat";
import LikeRecipe from "../Components/LikeRecipe";
import Footer from "../Components/Footer";
import BlogPostPageblogs from "../Components/BlogPostPageblogs";

const BlogPostPage = () => {
  const { blogId } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const API = `https://cooking-blogs.onrender.com/api/blogs/${blogId}`;

  const fetchBlogs = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } else {
        throw new Error(`Error fetching data: ${response.status}`);
      }
    } catch (err) {
      setLoading(false);
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchBlogs(API);
  }, [API]);

  return (
    <div>
      <Navbar />
      {loading ? (
        <LoaderComp />
      ) : (
        <>
          <BlogPostPageblogs blogData={blogs} />
        </>
      )}
      <DelicacyRepeat />
      <LikeRecipe />
      <Footer />
    </div>
  );
};

export default BlogPostPage;
