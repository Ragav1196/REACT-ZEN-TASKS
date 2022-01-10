import { useState } from "react";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import TextField from "@mui/material/TextField";
import { EditForm } from "./EditForm";
import { User } from "./Users list rendering";
import IconButton from "@mui/material/IconButton";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export function Content({ Users, getUsers }) {
  // TO HIDE ADD FORM
  const [hideAddUsers, setHideAddUsers] = useState(false);

  // TO HIDE ADD USERS BUTTON
  const [hideAddButton, setHideAddButton] = useState(true);

  const [name, setName] = useState("");
  const [userType, setUsers] = useState("");
  const [picture, setPicture] = useState("");

  let addUsers = () => {
    setHideAddUsers(false);
    setHideAddButton(!hideAddButton);

    const newUsers = {
      name,
      userType,
      picture,
    };

    fetch("https://616bc2b216c3fa00171717bf.mockapi.io/Session-28-task-users", {
      method: "POST",
      body: JSON.stringify(newUsers),
      headers: { "content-Type": "application/json" },
    })
      .then(setName(""))
      .then(setPicture(""))
      .then(setUsers(""))
      .then(getUsers);
  };

  const [editform, setEditForm] = useState(null);

  const [editName, editSetName] = useState("");
  const [editUserType, editSetUsers] = useState("");
  const [editPicture, editSetPicture] = useState("");


  const [hideEditForm, setHideEditForm] = useState(true);

  return (
    <article className="usersLtCtnr">
      <section className="menuBarContainer">
        <div className="title">
          <h1>USERS LIST</h1>
          <div className="addUsers">
            {hideAddButton ? (
              <div>
                <Button
                  onClick={() => {
                    setHideAddUsers(!hideAddUsers);
                    setHideAddButton(!hideAddButton);
                  }}
                  variant="outlined"
                  color="success"
                  startIcon={<AddShoppingCartIcon />}
                >
                  ADD USERS
                </Button>
              </div>
            ) : (
              ""
            )}
            {hideAddUsers ? (
              <div className="addUsers">
                <TextField
                  onChange={(data) => setName(data.target.value)}
                  value={name}
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
                <TextField
                  onChange={(data) => setUsers(data.target.value)}
                  value={userType}
                  id="outlined-basic"
                  label="Users"
                  variant="outlined"
                />
                <TextField
                  onChange={(data) => setPicture(data.target.value)}
                  value={picture}
                  id="outlined-basic"
                  label="Users Picture URL"
                  variant="outlined"
                />

                <IconButton
                  id="addFormHideBtn"
                  onClick={() => {
                    setHideAddUsers(false);
                    setHideAddButton(true);
                  }}
                  aria-label="delete"
                  color="primary"
                >
                  <VisibilityOffIcon />
                </IconButton>

                <Button
                  onClick={addUsers}
                  variant="outlined"
                  color="success"
                  aria-required
                  startIcon={<AddShoppingCartIcon />}
                >
                  ADD
                </Button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>

      {/* Users */}
      <section className="usersContainer">
        {/* looping over the Users list */}
        {Users.map(({ name, userType, picture, id }, i) => (
          <User
            key={i}
            name={name}
            userType={userType}
            picture={picture}
            id={id}
            getUsers={getUsers}
            setHideAddUsers={setHideAddUsers}
            setHideAddButton={setHideAddButton}
            setEditForm={setEditForm}
            editSetName={editSetName}
            editSetUsers={editSetUsers}
            editSetPicture={editSetPicture}
            setHideEditForm={setHideEditForm}
          />
        ))}
      </section>
      {editform ? (
        <EditForm
          editform={editform}
          editName={editName}
          editUserType={editUserType}
          editPicture={editPicture}
          Users={Users}
          editSetName={editSetName}
          editSetUsers={editSetUsers}
          editSetPicture={editSetPicture}
          getUsers={getUsers}
          hideEditForm={hideEditForm}
          setHideEditForm={setHideEditForm}
        />
      ) : (
        ""
      )}
    </article>
  );
}
