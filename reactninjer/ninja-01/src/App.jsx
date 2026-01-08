import Home from "./Home.jsx";
import Navbar from "./Navbar.jsx";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <home />
        </div>
      </div>
    </Router>
  );
}

export default App;
