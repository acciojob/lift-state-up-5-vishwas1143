import React, { useState } from "react";

import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogIn = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome! You are logged in.</h2>
      ) : (
        <ChildComponent handleLogIn={handleLogIn} />
      )}
    </div>
  );
};

export default ParentComponent;
