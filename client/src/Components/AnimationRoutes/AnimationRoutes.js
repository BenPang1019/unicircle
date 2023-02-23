import { BrowserRouter as Router, Route, Routes,useLocation } from "react-router-dom";


import { Home } from "../../Pages/Home/Home";
import { About } from "../../Pages/About/About";
import { Enquiry } from "../../Pages/Enquiry/Enquiry";
import { Products } from "../../Pages/Products/Products";
import { ProductDetails } from "../../Pages/ProductDetails/ProductDetails";

import {AnimatePresence} from "framer-motion";
import { Guide } from "../../Pages/Guide/Guide";
import { GuideDetails } from "../../Pages/GuideDetails/GuideDetails";

function AniamtedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/"  element={<Home/>} />
        <Route path="/about"  element={<About/>} />
        <Route path="/products"  element={<Products/>} />
        <Route path="/productDetails"  element={<ProductDetails/>} />
        <Route path="/enquiry"  element={<Enquiry/>} />
        <Route path="/guide"  element={<Guide/>} />
        <Route path="/guideDetails"  element={<GuideDetails/>} />
      </Routes>
    </AnimatePresence>
  )
}

export default AniamtedRoutes