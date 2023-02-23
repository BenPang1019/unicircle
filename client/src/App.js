import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';


import AniamtedRoutes from "./Components/AnimationRoutes/AnimationRoutes";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router >
      <Navbar/>
      <AniamtedRoutes/>
      <Footer/>
    </Router>
  );
}

export default App;