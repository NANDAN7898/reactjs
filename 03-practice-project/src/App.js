import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/users/AddUser";
import UserList from "./components/users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const onAddUserHandler = (username, age) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { username: username, age: age, id: Math.random().toString() },
      ];
    });
  };
  return (
    <React.Fragment>
      <AddUser onAddUser={onAddUserHandler} />
      <UserList users={users} />
    </React.Fragment>
  );
}

export default App;
