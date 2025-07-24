import React from "react";

const ChildComponent = ({ handleLogIn }) => {
  const logIn = (e) => {
    e.preventDefault();
    handleLogIn();
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <label>Username:</label>
      <input type="text" />
      <label>Password:</label>
      <input type="password" />
      <button onClick={logIn}>Login</button>
    </div>
  );
};

export default ChildComponent;
