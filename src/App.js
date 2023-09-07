import './App.css';
 import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
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
           <Route path="/" element={<Home/>}></Route>
          {/* <Route path="/" element={<About/>}/>
          <Route path="/pp" element={<PrivacyPolicy/>}/>
          <Route path="/Tandc" element={<Tandc/>}/> */} */
         </Routes>
      </BrowserRouter>
    );
  }


export default App;
