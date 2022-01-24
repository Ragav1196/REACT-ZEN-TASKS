import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { UsersList } from "./SESSIONS/SESSION 29/UsersList";
import OutsideClickHandler from "react-outside-click-handler";
import { getUsers } from "./SESSIONS/SESSION 29/UsersList";

export default function App() {
  // MAIN ARRAY
  const [users, setUsers] = useState([]);

  console.log(users)

  // TO TOGGLE HIDE ADD BUTTON
  const [addBtn, setAddBtn] = useState(true);

  // TO TOGGLE HIDE ADD FORM
  const [addForm, setAddForm] = useState(false);

  // TO ADD NEW USER
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  let addUsers = () => {
    const newUsers = {
      name,
      avatar,
    };

    fetch("https://616bc2b216c3fa00171717bf.mockapi.io/users", {
      method: "POST",
      body: JSON.stringify(newUsers),
      headers: { "content-Type": "application/json" },
    }).then(() => getUsers(setUsers));
  };

  return (
    <section className="addUser">
      <article>
        <h1>USERS LIST</h1>
        <OutsideClickHandler
          onOutsideClick={() => {
            setAddForm(false);
            setAddBtn(true);
          }}
        >
          {addBtn ? (
            <>
              <Button
                onClick={() => {
                  setAddForm(!addForm);
                  setAddBtn(false);
                }}
                id="addButton"
                variant="contained"
                size="small"
                color="success"
              >
                ADD USER
              </Button>
            </>
          ) : (
            ""
          )}
          {addForm ? (
            <>
              <div className="addForm">
                <TextField
                  onChange={(data) => setName(data.target.value)}
                  id="outlined-basic"
                  size="small"
                  label="Name"
                  variant="outlined"
                />
                <TextField
                  onChange={(data) => setAvatar(data.target.value)}
                  id="outlined"
                  size="small"
                  label="Picture URL"
                  variant="outlined"
                />
              </div>
              <Button
                onClick={() => {
                  setAddBtn(true);
                  setAddForm(false);
                  addUsers();
                }}
                id="addButton"
                variant="contained"
                size="small"
                color="success"
              >
                ADD
              </Button>
            </>
          ) : (
            ""
          )}
        </OutsideClickHandler>
      </article>
      <article>
        <UsersList users={users} setUsers={setUsers} />
      </article>
    </section>
  );
}
