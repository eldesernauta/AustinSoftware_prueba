import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
