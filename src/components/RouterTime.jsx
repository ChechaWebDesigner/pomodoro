import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NavTime from "./NavTime";
import Timer from "./Timer";

const RouterTime = () => {
  return (
    <Router>
      <NavTime />
      <Routes>
        <Route path="/" element={<Timer item="pomodoro" />} />
        <Route path="/short-break" element={<Timer item="short-break" />} />
        <Route path="/long-break" element={<Timer item="long-break" />} />
        <Route path="/long-break" element={<h2>Error 404</h2>} />
      </Routes>
    </Router>
  );
};

export default RouterTime;
