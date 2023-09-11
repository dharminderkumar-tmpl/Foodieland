import '../App.css';
// import DirectionsRecipePage from '../Components/DirectionsRecipePage';
import IngredientsandRecipe from '../Components/IngredientsandRecipe';
import Navbar from '../Components/Navbar';
import RecipeSectionFirst from '../Components/RecipeSectionFirst';
// import DelicacyRecipePage from '../Component/DelicacyRecipePage';
import DelicacyRepeat from '../Components/DelicacyRepeat';
import Footer from '../Components/Footer';
import LikeRecipe from '../Components/LikeRecipe';
function Home() {
    return (
      <div>
        <Navbar/>
        <RecipeSectionFirst/>
        <IngredientsandRecipe/>
      
        <DelicacyRepeat/>
        <LikeRecipe/>
        <Footer/>
        
      </div>
    );
  }
  
  export default Home;
  