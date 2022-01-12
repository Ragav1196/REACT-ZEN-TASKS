import { Movies } from "./Movies";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

export function MoviesList() {
  const history = useHistory();

  const [movies, SetMovies] = useState([]);

  const getMovies = () => {
    fetch("https://616bc2b216c3fa00171717bf.mockapi.io/movies", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => SetMovies(mvs));
  };

  useEffect(getMovies, []);

  const deleteMovie = (id) => {
    fetch(`https://616bc2b216c3fa00171717bf.mockapi.io/movies/${id}`, {
      method: "DELETE",
    }).then(() => getMovies());
  };

  return (
    <div className="wholeContent">
      {movies.map(({ name, poster, rating, summary, id }, index) => (
        <Movies
          key={id}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary}
          id={id}
          deleteButton={
            <Button
              onClick={() => {
                deleteMovie(id);
              }}
              aria-label="delete"
              color="error"
              variant="contained"
              size="small"
            >
              Delete
            </Button>
          }
          editButton={
            <Button
              onClick={() => history.push("/movies/edit/" + id)}
              aria-label="edit"
			  id="editBtn"
              variant="contained"
              size="small"
            >
              Edit
            </Button>
          }
        />
      ))}
    </div>
  );
}
