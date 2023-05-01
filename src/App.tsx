import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import TopicPolicy from "./pages/topicPolicy/TopicPolicy";
import PolicyGraph from "./pages/PolicyCompare/PolicyGraph";
import Policy from "./pages/policy/Policy";
import Navbar from "./components/navbar/navbar";
import similarPolicy from './pages/similarPolicy/similarPolicy'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="flex flex-col bg-no-repeat w-full">
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
            <Route
              path="/similarkey/:Keyword"
              Component={similarPolicy}
            />
            {/* <Route path="/Compare/:PolicyId/:PartyId" Component={PolicyParty} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
