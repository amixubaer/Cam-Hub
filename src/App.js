import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import Navbar from "./Components/Navbar/Navbar";
import Blogs from "./Components/Blogs/Blogs";
import Reviews from "./Components/Reviews/Reviews";
import Dashboard from "./Components/Dashboard/Dashboard";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
