import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import TopicPolicy from "./pages/TopicPolicy";
import PolicyGraph from "./pages/PolicyCompare/PolicyGraph";
import Policy from "./pages/Policy";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/topic-policy/:TopicPolicyId" Component={TopicPolicy} />

          <Route
            path="/topic-policy/:TopicPolicyId/:PolicyId"
            Component={PolicyGraph}
          />
           <Route
            path="/policy/:PolicyId"
            Component={Policy}
          />
          {/* <Route path="/Compare/:PolicyId/:PartyId" Component={PolicyParty} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
