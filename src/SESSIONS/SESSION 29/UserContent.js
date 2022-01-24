import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { getUsers } from "./UsersList";

export function UserContent({
  name,
  avatar,
  id,
  index,  
  editForm,
  setEditForm,
  editFormHide,
  users,
  setUsers,
  userName,
  setUserName,
  userAvatar,
  setUserAvatar,
}) {
  // TO EDIT EXISTING USER
  let editUsers = () => {
    setEditForm(null);

    const newUsers = {
      name: userName,
      avatar: userAvatar,
    };

    fetch(`https://616bc2b216c3fa00171717bf.mockapi.io/users/${editForm}`, {
      method: "PUT",
      body: JSON.stringify(newUsers),
      headers: { "Content-Type": "application/json" },
    }).then(() => getUsers(setUsers));
  };

  // TO DELETE A USER
  const deleteUser = (id) => {
    fetch(`https://616bc2b216c3fa00171717bf.mockapi.io/users/${id}`, {
      method: "DELETE",
    }).then(() => getUsers(setUsers));
  };

  return (
    <section className="userContent">
      <img className="userPicture" src={avatar} alt="User" />
      <article className="userDetails">
        <p>{name}</p>
        <Button
          onClick={() => {
            editFormHide(id, index);
          }}
          id="addButton"
          variant="contained"
          size="small"
          color="primary"
        >
          EDIT
        </Button>
        <Button
          onClick={() => deleteUser(id)}
          id="addButton"
          variant="contained"
          size="small"
          color="warning"
        >
          DELETE
        </Button>

        {editForm === id ? (
          <>
            <div className="editForm">
              <TextField
                onChange={(data) => setUserName(data.target.value)}
                value={userName}
                id="outlined-basic"
                size="small"
                label="Name"
                variant="outlined"
              />
              <TextField
                onChange={(data) => setUserAvatar(data.target.value)}
                value={userAvatar}
                id="outlined-basic"
                size="small"
                label="Picture URL"
                variant="outlined"
              />
            </div>
            <Button
              onClick={editUsers}
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
