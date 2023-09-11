import '../App.css';

import Navbar from '../Components/Navbar';

import DelicacyRepeat from '../Components/DelicacyRepeat';
import Footer from '../Components/Footer';
import AritcleBlogPage from '../Components/AritcleBlogPage';

function Blog() {
    return (
      <div>
        <Navbar/>
        
       <AritcleBlogPage/>
        <DelicacyRepeat/>
       
        <Footer/>
        
      </div>
    );
  }
  
  export default Blog;
  