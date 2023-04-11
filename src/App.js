import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import "./App.css";
import Hello from "./Hello";
import Noo from "./Noo";
import Last from "./Last";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutUs />} />

        <Route path="/hell" element={<Hello />} />

        <Route path="/noo" element={<Noo />} />

        <Route path="/last" element={<Last />} />
      </Routes>
    </Router>
  );
}

export default App;
