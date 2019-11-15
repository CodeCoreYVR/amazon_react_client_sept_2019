import React from "react";
import ProductIndexPage from "./ProductIndexPage";
import ProductShowPage from "./ProductShowPage";
import { NavBar } from "./NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/products" exact component={ProductIndexPage} />
        <Route path="/products/:id" component={ProductShowPage} />
      </div>
    </Router>
  );
}

export default App;
