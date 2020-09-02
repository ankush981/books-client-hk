import React from "react";
import { Switch, Route } from "react-router-dom";

import BooksList from "./components/BooksList";
import BookDetail from "./components/BookDetail";
import CreateBook from "./components/CreateBook";
import EditBook from "./components/EditBook";
import AuthorsList from "./components/AuthorsList";
import AuthorDetail from "./components/AuthorDetail";
import CreateAuthor from "./components/CreateAuthor";
import EditAuthor from "./components/EditAuthor";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={BooksList} exact />
      <Route path="/book/create" component={CreateBook} exact />
      <Route path="/book/:id" component={BookDetail} exact />
      <Route path="/book/:id/edit" component={EditBook} exact />
      <Route path="/authors" component={AuthorsList} exact />
      <Route path="/author/create" component={CreateAuthor} exact />
      <Route path="/author/:id" component={AuthorDetail} exact />
      <Route path="/author/:id/edit" component={EditAuthor} exact />
    </Switch>
  );
};

export default Routes;
