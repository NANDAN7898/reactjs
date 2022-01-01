import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = (props) => {
  const inputUsername = useRef();
  const inputAge = useRef();
  // const [username, setUsername] = useState("");
  // const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const username = inputUsername.current.value;
    const age = inputAge.current.value;
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter valid Username and Age (not-empty value)",
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter valid age (> 0 and < 100)",
      });
      return;
    }

    props.onAddUser(username, age);
    // setUsername("");
    // setAge("");
    inputUsername.current.value = "";
    inputAge.current.value = "";
  };

  // const usernameChangeHandler = (event) => {
  //   setUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setAge(event.target.value);
  // };

  const onModalCloseHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onModalClose={onModalCloseHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={inputUsername}
            // value={username}
            // onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={inputAge}
            // value={age}
            // onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUsers;
