import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";
import IconButton from "@mui/material/IconButton";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export function EditForm({
  editName,
  editUserType,
  editPicture,
  editform,
  editSetName,
  editSetUsers,
  editSetPicture,
  getUsers,
  hideEditForm,
  setHideEditForm,
}) {
  let editUsers = () => {
    setHideEditForm(false);

    const newUsers = {
      name: editName,
      userType: editUserType,
      picture: editPicture,
    };

    fetch(
      `https://616bc2b216c3fa00171717bf.mockapi.io/Session-28-task-users/${editform}`,
      {
        method: "PUT",
        body: JSON.stringify(newUsers),
        headers: { "Content-Type": "application/json" },
      }
    ).then(getUsers);
  };

  return (
    <section className="editFormContainer">
      {hideEditForm ? (
        <div id="editForm" className="editUsers">
          <TextField
            onChange={(data) => editSetName(data.target.value)}
            value={editName}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            onChange={(data) => editSetUsers(data.target.value)}
            value={editUserType}
            id="outlined-basic"
            label="Users"
            variant="outlined"
          />
          <TextField
            onChange={(data) => editSetPicture(data.target.value)}
            value={editPicture}
            id="outlined-basic"
            label="Users Picture URL"
            variant="outlined"
          />

          <IconButton
            id="editFormHideBtn"
            onClick={() => setHideEditForm(false)}
            aria-label="delete"
            color="primary"
          >
            <VisibilityOffIcon />
          </IconButton>

          <Button
            onClick={editUsers}
            variant="outlined"
            color="success"
            aria-required
            startIcon={<SaveIcon />}
          >
            SAVE
          </Button>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
