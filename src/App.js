import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";
import Navbar from './Components/Nav/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
    </div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about"/>
        </Routes>
    </Router>
    
  );
}

export default App;
