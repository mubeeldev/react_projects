import Home from "./Home.jsx";
import Navbar from "./Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create.jsx"
import BlogDetails from "./blogDetails.jsx";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/Blogs/:id" element={<BlogDetails />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
