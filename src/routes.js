import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import BookDetail from "./components/BookDetail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/book/:id" component={BookDetail} />
    </Switch>
  );
};

export default Routes;
