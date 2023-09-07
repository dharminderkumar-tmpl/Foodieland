import '../App.css';
import Categories from '../Components/Categories';
import Endpart from '../Components/Endpart';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import RecipePart from '../Components/RecipePart';

function Home() {
    return (
      <div>
        <Navbar/>
        
        <Hero/>
        <Categories/>
        <RecipePart/>
        <Endpart/>
        <Footer/>
      </div>
    );
  }
  
  export default Home;
  