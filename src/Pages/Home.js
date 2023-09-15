import "../App.css";
import Categories from "../Components/Categories";
import ChefPart from "../Components/ChefPart";
import DelicacyRepeat from "../Components/DelicacyRepeat";
import Endpart from "../Components/Endpart";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import RecipePart from "../Components/RecipePart";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <RecipePart />
      <ChefPart />
      <Endpart />
      <DelicacyRepeat />
      <Footer />
    </div>
  );
}

export default Home;
