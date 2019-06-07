import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage";
import Listings from "./components/Listings";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/listings" component={Listings} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
