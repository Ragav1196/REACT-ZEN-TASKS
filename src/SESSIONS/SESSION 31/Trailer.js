import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

export function Trailer() {
  const history = useHistory();

  const { id } = useParams();

  const [Movies, setMovie] = useState({});

  useEffect(() => {
    fetch(`https://616bc2b216c3fa00171717bf.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs));
  }, [id]);

  const styles = {
    color: Movies.rating < 7.5 ? "crimson" : "green",
    fontWeight: "700",
  };

  return (
    <div>
      <iframe
        width="100%"
        height="540px"
        src={Movies.trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="movieDetails">
        <div className="MovieSpecs TrailerMovieSpecs">
          <h3 className="movieName font">{Movies.name}</h3>
          <h3 className="movieRating font" style={styles}>
            <i className="material-icons">star</i> {Movies.rating}
          </h3>
        </div>
        <div className="trailerMovieSummary">{Movies.summary}</div>
      </div>

      <Button
	  id="backBtn"
        onClick={() => history.goBack()}
        aria-label="back"
        color="info"
        variant="contained"
        size="small"
      >
        GO BACK
      </Button>
    </div>
  );
}
