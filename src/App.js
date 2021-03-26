import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import AppBar from "./component/AppBar";
import routes from "./routes.js";
import "./base.css";
import Container from "./component/Container";

const HomePage = lazy(() =>
  import("./views/HomePage.js" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import(
    "./views/MoviesPage/MoviesPage.js" /* webpackChunkName: "movies-page" */
  )
);
const NotFoundView = lazy(() =>
  import("./views/NotFoundView.js" /* webpackChunkName: "not-found-view" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage/MovieDetailsPage.js" /* webpackChunkName: "movie-details-page" */
  )
);

const App = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.moviesDetails} component={MovieDetailsPage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;
