import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
