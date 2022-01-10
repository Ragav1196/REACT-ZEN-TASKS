import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export function User({
  name,
  userType,
  picture,
  id,
  getUsers,
  setHideAddUsers,
  setHideAddButton,
  setEditForm,
  editSetName,
  editSetUsers,
  editSetPicture,
  setHideEditForm,
}) {

  const deleteUsers = (id) => {
    fetch(`https://616bc2b216c3fa00171717bf.mockapi.io/Session-28-task-users/${id}`, {
      method: "DELETE",
    }).then(getUsers);
  };

  return (
    <section
      className="users"
      onClick={() => {
        setHideAddUsers(false);
        setHideAddButton(true);
      }}
    >
      <div className="imageContainer">
        <img src={picture} alt="Users name"></img>
      </div>
      <div className="usersDetails">
        <h3>{name}</h3>
        <p>{userType}</p>
        <div>
          <IconButton
            onClick={() => deleteUsers(id)}
            aria-label="delete"
            color="error"
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              setEditForm(id);
              editSetName(name);
              editSetUsers(userType);
              editSetPicture(picture);
              setHideEditForm(true);
            }}
            aria-label="delete"
            color="primary"
          >
            <a href="#editForm">
              <EditIcon />
            </a>
          </IconButton>
        </div>
      </div>
    </section>
  );
}
