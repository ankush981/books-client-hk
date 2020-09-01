import React from "react";
import { Switch, Route } from "react-router-dom";

import BooksList from "./components/BooksList";
import BookDetail from "./components/BookDetail";
import AuthorsList from "./components/AuthorsList";
import AuthorDetail from "./components/AuthorDetail";
import CreateAuthor from "./components/CreateAuthor";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={BooksList} exact />
      <Route path="/book/:id" component={BookDetail} />
      <Route path="/authors" component={AuthorsList} />
      <Route path="/author/:id" component={AuthorDetail} />
      <Route path="/author/create" component={CreateAuthor} />
    </Switch>
  );
};

export default Routes;
