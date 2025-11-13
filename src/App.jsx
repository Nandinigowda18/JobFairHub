// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllJobs from "./pages/AllJobs";
import JobDetails from "./pages/JobDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <Router>
      {/* Global Header */}
      <Header />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/jobs" element={<AllJobs />} />
        <Route path="/job/:id" element={<JobDetails />} />
         <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
      </Routes>

      {/* Global Footer */}
      <Footer />
    </Router>
  );
}

export default App;
