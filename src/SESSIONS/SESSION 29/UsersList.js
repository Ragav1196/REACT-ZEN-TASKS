import { useState, useEffect } from "react";
import { UserContent } from "./UserContent";

export function UsersList({ users, setUsers }) {
  function callGetUsers() {
    getUsers(setUsers);
  }

  useEffect(callGetUsers, [setUsers]);

  // TO TOGGLE HIDE EDIT FORM
  const [editForm, setEditForm] = useState(null);

  // TO EDIT EXISTING USER
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  function editFormHide(id, index) {
    if (!editForm) {
      setEditForm(id);
      setUserName(users[index].name);
      setUserAvatar(users[index].avatar);
    } else if (editForm !== id) {
      setEditForm(id);
      setUserName(users[index].name);
      setUserAvatar(users[index].avatar);
    } else {
      setEditForm(null);
    }
  }

  return (
    <section className="userContentCtnr">
      {users.map(({ name, avatar, id }, i) => (
        <UserContent
          name={name}
          avatar={avatar}
          id={id}
          key={i}
          index={i}
          editForm={editForm}
          setEditForm={setEditForm}
          editFormHide={editFormHide}
          users={users}
          setUsers={setUsers}
          userName={userName}
          setUserName={setUserName}
          userAvatar={userAvatar}
          setUserAvatar={setUserAvatar}
        />
      ))}
    </section>
  );
}

export const getUsers = (setUsers) => {
  fetch("https://616bc2b216c3fa00171717bf.mockapi.io/users")
    .then((data) => data.json())
    .then((users) => setUsers(users));
};
