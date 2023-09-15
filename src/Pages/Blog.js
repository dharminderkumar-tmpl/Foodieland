import '../App.css';

import Navbar from '../Components/Navbar';

import DelicacyRepeat from '../Components/DelicacyRepeat';
import Footer from '../Components/Footer';
import AritcleBlogPage from '../Components/AritcleBlogPage';
import MainSectionBlogPage from '../Components/MainSectionBlogPage';


function Blog() {
    return (
      <div>
        <Navbar/>
        
       <AritcleBlogPage/>
       <MainSectionBlogPage/>
       <DelicacyRepeat/>
       
        <Footer/>
        
      </div>
    );
  }
  
  export default Blog;
  