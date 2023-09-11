import '../App.css';
// import Categories from '../Components/Categories';
// import ChefPart from '../Components/ChefPart';
import DelicacyRepeat from '../Components/DelicacyRepeat';
// import Endpart from '../Components/Endpart';
import Footer from '../Components/Footer';

import Navbar from '../Components/Navbar';
import ContactMe from '../Components/ContactMe';
// import RecipePart from '../Components/RecipePart';

function Contact() {
    return (
      <div>
        <Navbar/>
        <ContactMe/>
        {/* <Hero/> */}
        {/* <Categories/> */}
        {/* <RecipePart/> */}
        {/* <ChefPart/> */}
        {/* <Endpart/> */}
        <DelicacyRepeat/>
        <Footer/>
      </div>
    );
  }
  
  export default Contact;
  