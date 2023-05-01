import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import TopicPolicy from "./pages/topicPolicy/TopicPolicy";
import PolicyGraph from "./pages/policyCompare/PolicyGraph";
import Policy from "./pages/policy/Policy";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="bg-no-repeat min-h-screen w-full">
          {/* router path */}
          <Routes>
            <Route path="/" Component={Home} />
            <Route
              path="/topic-policy/:TopicPolicyId"
              Component={TopicPolicy}
            />
            <Route
              path="/topic-policy/:TopicPolicyId/:PolicyId"
              Component={PolicyGraph}
            />
            <Route path="/policy/:PolicyId" Component={Policy} />
            <Route
              path="/comnpare-barchart/:PolicyId"
              Component={PolicyGraph}
            />
            {/* <Route path="/Compare/:PolicyId/:PartyId" Component={PolicyParty} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
