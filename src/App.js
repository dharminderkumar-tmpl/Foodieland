import './App.css';
 import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Recipe from './Pages/Recipe';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import BlogPostPage from './Pages/BlogPostPage';
// import AboutUs from './Pages/AboutUs';

function App() {

  // const routerPath = [
  //   {
  //     path: "/",
  //     element: <Home/>
  //   },
  //   {
  //     path: "/Recipe", 
  //     element: <Recipe/>
  //   },
  //   {
  //     path: "/Blog",
  //     element: <Blog/>
  //   },
  //   {
  //     path: "/Contact",
  //     element: <Contact/>
  //   },
  //   {
  //     path: "/AboutUs",
  //     element: <AboutUs/>
  //   }
   
  // ]
  
    return (
      <BrowserRouter>
         <Routes>
          {/* {routerPath.map((route)=>(<Route exact path={route?.path} element={route?.element} />))} */}
           <Route path="/" element={<Home/>}/>
           <Route path="/recipe/:recipeId" element={<Recipe/>}/>
           <Route path="/blog" element={<Blog/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/blogpostpage/:blogId" element={<BlogPostPage/>}/>
           {/* <Route path="/AboutUs" element={<AboutUs/>}/> */}
          </Routes>
      </BrowserRouter>
    );
  }


export default App;
