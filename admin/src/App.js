import './App.css';
import { BrowserRouter as Router, Route, Routes,useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'

import {AdminLogin} from "./Pages/Admin/AdminLogin";
import {Admin} from "./Pages/Admin/Admin";
import {AdminProduct} from "./Pages/Admin/AdminProduct";
import { AddProduct } from './Pages/Admin/AddProduct';
import { UpdateProduct } from "./Pages/Admin/UpdateProduct";
import { ViewProduct } from "./Pages/Admin/ViewProduct";
import { AdminNews } from './Pages/Admin/AdminNews';
import { AddGuide } from './Pages/Admin/AddGuide';
import { UpdateGuide } from './Pages/Admin/UpdateGuide';
import { ViewGuide } from './Pages/Admin/ViewGuide';

function App() {
  return (
    <Router >
     <Routes>
        <Route path="/"  element={<AdminLogin/>} />
        <Route path="/adminMainPage"  element={<Admin/>} />

        <Route path="/adminProduct"  element={<AdminProduct/>} />
        <Route path="/addProduct"  element={<AddProduct/>} />
        <Route path="/updateProduct"  element={<UpdateProduct/>} />
        <Route path="/viewProduct"  element={<ViewProduct/>} />

        <Route path="/adminGuide"  element={<AdminNews/>} />
        <Route path="/addGuide"  element={<AddGuide/>} />
        <Route path="/updateGuide"  element={<UpdateGuide/>} />
        <Route path="/viewGuide"  element={<ViewGuide/>} />
     </Routes>
    </Router>
  );
}

export default App;

