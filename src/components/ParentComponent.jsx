import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [IsloggedIn, setIsloggedIn] = useState(false);

  const handleLogIn = () => {
    setIsloggedIn(true);
  };

  return (
    <div>
      {!IsloggedIn ? (
        <ChildComponent handleLogIn={handleLogIn} />
      ) : (
        <p>You are logged in</p>
      )}
    </div>
  );
};

export default ParentComponent;
