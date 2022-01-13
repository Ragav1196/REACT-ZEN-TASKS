import { useState } from "react";
import { ButtonForMovies } from "./ButtonForMovies";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useHistory } from "react-router-dom";

export function Movies({
  name,
  poster,
  rating,
  summary,
  id,
  deleteButton,
  editButton,
}) {
  const styles = {
    color: rating < 7.5 ? "crimson" : "green",
    fontWeight: "700",
  };

  const [summaryHide, setSummaryHide] = useState(true);
  const summaryStyles = { display: summaryHide ? "none" : "block" };

  const history = useHistory();

  return (
    <Card className="movieContainer">
      <img className="posterPic" src={poster} alt={name} />
      <div className="movieDetails">
        <div className="MovieSpecs">
          <h3 className="movieName font">{name}</h3>
          <h3 className="movieRating font" style={styles}>
            <i className="material-icons">star</i> {rating}
          </h3>
        </div>

        <Button
          id="descriptionBtn"
          onClick={() => {
            setSummaryHide(!summaryHide);
          }}
          aria-label="show"
          color="primary"
          variant="contained"
          size="small"
          startIcon={summaryHide ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        >
          {summaryHide ? "Show" : "Hide"} Description
        </Button>

        <IconButton
          id="trailerBtn"
          aria-label="trailer"
          onClick={() => {
            history.push("/movies/" + id);
          }}
        >
          <PlayArrowIcon fontSize="inherit" />
        </IconButton>

        <Typography
          id="Summary"
          variant="body2"
          color="text.secondary"
          className="movieSummary font"
          style={summaryStyles}
        >
          {summary}
        </Typography>
      </div>
      <ButtonForMovies />

      <div className="editDelBtn">
        {deleteButton}
        {editButton}
      </div>
    </Card>
  );
}
