import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import MoviesPage from "./MoviesPage";

// CODE ALONGGGG WE ARE MISSING setMovies 

function App() {
  // eslint-disable-next-line
  const [movies, setMovies] = useState({
    1: { id: 1, title: "A River Runs Through It" },
    2: { id: 2, title: "Se7en" },
    3: { id: 3, title: "Inception" },
  });

  // App has two Route elements:

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/movies">
          <MoviesPage movies={movies} />
        </Route>
        <Route exact path="/">
          <div>Home</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
