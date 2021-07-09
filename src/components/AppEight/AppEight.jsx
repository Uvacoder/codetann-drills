import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";

export default function AppEight() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/details/:id" component={Detail} />
    </Router>
  );
}
