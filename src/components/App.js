import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar } from "./NavBar";
import ProductIndexPage from "./ProductIndexPage";
import ProductShowPage from "./ProductShowPage";
import NewProductPage from "./NewProductPage";
import { Session } from "../requests";

class App extends React.Component {
  state = {
    currentUser: null
  };
  componentDidMount() {
    Session.create({
      email: "hano@codecore.ca",
      password: "supersecret"
    }).then(user => {
      this.setState({ currentUser: user });
    });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/products" exact component={ProductIndexPage} />
            <Route path="/products/new" component={NewProductPage} />
            <Route path="/products/:id" component={ProductShowPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
