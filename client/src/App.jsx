import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/FeedBack";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/FeedBack">FeedBack</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FeedBack" element={<FeedBack />} />
      </Routes>
    </div>
  );
}

export default App;
