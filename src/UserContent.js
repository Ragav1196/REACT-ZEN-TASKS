import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function UserContent({
  name, avatar, id, editForm, setEditForm, editFormHide,
}) {
  return (
    <section className="userContent">
      <img className="userPicture" src={avatar} alt="User" />
      <article className="userDetails">
        <p>{name}</p>
        <Button
          onClick={() => {
            editFormHide(id);
          }}
          id="addButton"
          variant="contained"
          size="small"
          color="primary"
        >
          EDIT
        </Button>
        <Button id="addButton" variant="contained" size="small" color="warning">
          DELETE
        </Button>

        {editForm === id ? (
          <>
            <div className="editForm">
              <TextField
                id="outlined-basic"
                size="small"
                label="Name"
                variant="outlined" />
              <TextField
                id="outlined-basic"
                size="small"
                label="Picture URL"
                variant="outlined" />
            </div>
            <Button
              onClick={() => { }}
              id="addButton"
              variant="contained"
              size="small"
              color="success"
            >
              SAVE
            </Button>
          </>
        ) : (
          ""
        )}
      </article>
    </section>
  );
}
