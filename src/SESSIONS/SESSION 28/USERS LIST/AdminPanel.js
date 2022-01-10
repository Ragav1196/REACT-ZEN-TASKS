import { useEffect, useState } from "react";
import { Content } from "./Total content";

export function AdminPanel() {
  return <UsersList />;
}

// users list read
function UsersList() {
  const [Users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("https://616bc2b216c3fa00171717bf.mockapi.io/Session-28-task-users", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((Users) => setUsers(Users));
  };
  useEffect(getUsers, []);

  return <Content getUsers={getUsers} Users={Users} />;
}


