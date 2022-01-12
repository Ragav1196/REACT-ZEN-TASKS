import { AddMovies } from "./AddMovies";
import { MoviesList } from "./MoviesList";
import { Switch, Route, Link } from "react-router-dom";
import { Trailer } from "./Trailer";
import { EditMovies } from "./EditMovies";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function CreatingNavBar() {
  const history = useHistory();

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar id="nav">
            <div className="nav">
              <Button color="inherit" onClick={() => history.push("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => history.push("/movies")}>
                Movies
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/add-movies")}
              >
                Add Movies
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <Switch>
        <Route exact path="/">
          <div className="homeHeading">
            <h1>WELCOME TO HOME PAGE</h1>
          </div>
        </Route>
        <Route path="/movies/edit/:id">
          <EditMovies />
        </Route>
        <Route path="/movies/:id">
          <Trailer />
        </Route>
        <Route path="/movies">
          <MoviesList />
        </Route>
        <Route path="/add-movies">
          <AddMovies />
        </Route>
        <Route path="**">
          <p style={{ textAlign: "center", fontSize: "24px" }}>
            PAGE NOT FOUND
          </p>
        </Route>
      </Switch>
    </div>
  );
}
