import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Recipe from "./Pages/Recipe";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import BlogPostPage from "./Pages/BlogPostPage";
import ScrollToTop from "./Components/ScrollToTop";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:recipeId" element={<Recipe />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogpostpage/:blogId" element={<BlogPostPage />} />
      </Routes>
    </Router>
  );
}
export default App;
