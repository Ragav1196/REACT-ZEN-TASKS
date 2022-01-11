import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { UsersList } from "./UsersList";

export default function App() {
  // TO TOGGLE HIDE ADD BUTTON
  const [addBtn, setAddBtn] = useState(true);

  // TO TOGGLE HIDE ADD FORM
  const [addForm, setAddForm] = useState(false);

  return (
    <section className="addUser">
      <article>
        <h1>USERS LIST</h1>
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
            <div>
              <TextField
                id="outlined-basic"
                size="small"
                label="Name"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                size="small"
                label="Picture URL"
                variant="outlined"
              />
            </div>
            <Button
              onClick={() => {
                setAddBtn(true);
                setAddForm(false);
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
      </article>
      <article>
        <UsersList />
      </article>
    </section>
  );
}


