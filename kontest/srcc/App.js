import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TotalData from "./Components/TotalData";
import AtCoder from "./Components/AtCoder";
import CodeChef from "./Components/CodeChef";
import CodeForces from "./Components/CodeForces";
import LeetCode from "./Components/LeetCode";
import HackerEarth from "./Components/HackerEarth";
import Others from "./Components/Others";
import ErrorPage from "./Components/ErrorPage";
import { BrowserRouter as Router, Route, Routes ,Navigate } from "react-router-dom";
import UpComing from "./Components/UpComing";
import Live from "./Components/Live";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TotalData/>} />
        {/* <Route path="/atcoder" element={<AtCoder/>} />
        <Route path="/upcoming" element={<UpComing/>} />
        <Route path="/live" element={<Live/>} />
        <Route path="/codechef" element={<CodeChef/>} />
        <Route path="/codeforces" element={<CodeForces/>} />
        <Route path="/leetcode" element={<LeetCode/>} />
        <Route path="/hackerearth" element={<HackerEarth/>} />
        <Route path="/others" element={<Others/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Navigate to="/"/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
