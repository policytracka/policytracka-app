import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import PolicyCompareGraph from "./pages/PolicyCompare/PolicyGraph";
import TopicPolicy from "./pages/TopicPolicy";
import PolicyGraph from "./pages/PolicyCompare/PolicyGraph";
import PartyPolicy from "./pages/PartyPolicy";
import Policy from "./pages/Policy";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/topic-policy" Component={TopicPolicy} />
          <Route path="/policy" Component={Policy} />
          <Route path="/" Component={Home} />
          <Route path="/partygraph" Component={PolicyGraph} />
          <Route path="/partypolicy" Component={PartyPolicy} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
