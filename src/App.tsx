import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import TopicPolicy from "./pages/TopicPolicy";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/topic-policy" Component={TopicPolicy} />
          <Route path="/" Component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
