import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomeView from "../views/homeView/HomeView";
import Header from "../Components/header/Header";
import Loader from "../Components/loader/Loader";
import "./App.css";
import shared from "../Shared/sharedData";
const MoviesView = lazy(() =>
  import("../views/moviesView/MoviesView")
); /* webpackChunkName: "MoviesView"  */
const MovieDeteilsView = lazy(() =>
  import("../views/movieDeteils/MovieDeteilsView.js")
); /* webpackChunkName: "MovieDeteilsView"  */
const NotFoundView = lazy(() =>
  import("../views/notFoundView/NotFoundView")
); /* webpackChunkName: "NotFoundView"  */

const App = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={shared.home}>
            <HomeView />
          </Route>

          <Route path={shared.movieDetails}>
            <MovieDeteilsView />
          </Route>

          <Route exact path={shared.movies}>
            <MoviesView />
          </Route>

          <Route>
            <NotFoundView />
            <Redirect to={shared.home} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
