import '../App.css';
import DelicacyRepeat from '../Components/DelicacyRepeat';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

import { useParams } from 'react-router-dom';

import LikeRecipe from '../Components/LikeRecipe';
import BlogPostPageblogs from '../Components/BlogPostPageblogs';
import React, { useEffect, useState } from "react";


const BlogPostPage = () => {
  const [blogs, setBlogs] = useState([]); 
  const { blogId }  =  useParams()
  
  const API = `https://cooking-blogs.onrender.com/api/blogs/${blogId}`; 

  const fetchBlogs = async (url) => {
    try {
      const res = await fetch(url).then((res) => res.json());
      if (res) {
        setBlogs(res);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBlogs(API);
  }, []);

  return (
    <div>
      <Navbar />
     {/* <div></div> */}
      <BlogPostPageblogs blogData={blogs} />
      <DelicacyRepeat />
      <LikeRecipe />
      <Footer />
    </div>
  );
};

export default BlogPostPage;
